import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { installMobileGestureGuards } from './install-mobile-gesture-guards.ts';

class TestElement {
  scrollTop = 0;
  scrollLeft = 0;
  scrollHeight = 0;
  scrollWidth = 0;
  clientHeight = 0;
  clientWidth = 0;
  interactive = false;
  style = { overflowY: 'visible', overflowX: 'visible', overscrollBehaviorY: 'auto', overscrollBehaviorX: 'auto' };

  matches() {
    return this.interactive;
  }
}

const createEnvironment = (navigator = { userAgent: 'iPhone', platform: 'iPhone', maxTouchPoints: 5 }) => {
  const root = new TestElement();
  Object.assign(root, { scrollHeight: 2000, clientHeight: 600, clientWidth: 390, scrollWidth: 390 });
  const body = new TestElement();
  const document = new EventTarget();
  Object.assign(document, { documentElement: root, scrollingElement: root, body });
  const browser = { document, navigator, HTMLElement: TestElement, innerWidth: 390, getComputedStyle: (element) => element.style };
  const surface = new TestElement();

  const emit = (type, points = [], path = [surface, body, root], cancelable = true) => {
    const event = new Event(type, { cancelable });
    Object.defineProperties(event, {
      touches: { value: points.map(([clientX, clientY]) => ({ clientX, clientY })) },
      composedPath: { value: () => path },
    });
    document.dispatchEvent(event);
    return event.defaultPrevented;
  };

  return { root, body, browser, surface, emit };
};

describe('installMobileGestureGuards', () => {
  /** Защита не должна блокировать документ, если в отличие от приложения прокручивается сам сайт. */
  it('preserves root scrolling and the restored reading position', () => {
    const e = createEnvironment();
    e.root.scrollTop = 500;
    installMobileGestureGuards(e.browser);
    assert.equal(e.root.scrollTop, 500);
    e.emit('touchstart', [[100, 200]]);
    assert.equal(e.emit('touchmove', [[100, 150]]), false);
    assert.equal(e.emit('touchmove', [[100, 210]]), false);
  });

  /** У верхней и нижней границ отменяется выход за край, но разрешается движение обратно в страницу. */
  it('blocks boundary pulls and permits scrolling away from both boundaries', () => {
    const e = createEnvironment();
    installMobileGestureGuards(e.browser);
    e.emit('touchstart', [[100, 200]]);
    assert.equal(e.emit('touchmove', [[100, 240]]), true);
    assert.equal(e.emit('touchmove', [[100, 180]]), false);
    e.root.scrollTop = 1400;
    assert.equal(e.emit('touchmove', [[100, 140]]), true);
    assert.equal(e.emit('touchmove', [[100, 200]]), false);
  });

  /** Меню и другие внутренние области остаются прокручиваемыми, в том числе при заблокированном фоне. */
  it('preserves nested scrolling and respects contained boundaries and locked roots', () => {
    const e = createEnvironment();
    const menu = new TestElement();
    Object.assign(menu, { scrollHeight: 900, clientHeight: 300 });
    Object.assign(menu.style, { overflowY: 'auto', overscrollBehaviorY: 'contain' });
    installMobileGestureGuards(e.browser);
    e.emit('touchstart', [[100, 200]], [e.surface, menu, e.body, e.root]);
    assert.equal(e.emit('touchmove', [[100, 150]]), false);
    menu.scrollTop = 600;
    assert.equal(e.emit('touchmove', [[100, 100]]), true);
    menu.style.overscrollBehaviorY = 'auto';
    assert.equal(e.emit('touchmove', [[100, 50]]), false);
    e.body.style.overflowY = 'hidden';
    assert.equal(e.emit('touchmove', [[100, 10]]), true);
    menu.scrollTop = 200;
    assert.equal(e.emit('touchmove', [[100, 50]]), false);
  });

  /** Горизонтальный контент должен прокручиваться, а пустой свайп не должен передаваться истории браузера. */
  it('preserves horizontal content while cancelling outward swipes', () => {
    const e = createEnvironment();
    const carousel = new TestElement();
    Object.assign(carousel, { scrollWidth: 900, clientWidth: 300 });
    carousel.style.overflowX = 'auto';
    installMobileGestureGuards(e.browser);
    assert.equal(e.emit('touchstart', [[10, 200]], [e.surface, carousel, e.body, e.root]), false);
    e.emit('touchstart', [[200, 200]], [e.surface, carousel, e.body, e.root]);
    assert.equal(e.emit('touchmove', [[150, 200]]), false);
    carousel.scrollLeft = 600;
    assert.equal(e.emit('touchmove', [[100, 200]]), true);
    assert.equal(e.emit('touchmove', [[160, 200]]), false);
    e.emit('touchstart', [[200, 200]]);
    assert.equal(e.emit('touchmove', [[150, 200]]), true);
    assert.equal(e.emit('touchmove', [[230, 200]]), true);
  });

  /** Краевой fallback работает с обеих сторон и не отменяет одиночное касание ссылки или поля. */
  it('guards both history edges without cancelling interactive taps', () => {
    const e = createEnvironment();
    installMobileGestureGuards(e.browser);
    assert.equal(e.emit('touchstart', [[10, 200]]), true);
    assert.equal(e.emit('touchstart', [[380, 200]]), true);
    assert.equal(e.emit('touchstart', [[100, 200]]), false);
    e.surface.interactive = true;
    assert.equal(e.emit('touchstart', [[10, 200]]), false);
    assert.equal(e.emit('touchstart', [[380, 200]]), false);
    assert.equal(e.emit('touchend'), false);
  });

  /** Pinch и WebKit gesture-события отменяются, не оставляя незавершённую однопальцевую последовательность. */
  it('cancels page zoom gestures and resets multi-touch state', () => {
    const e = createEnvironment();
    installMobileGestureGuards(e.browser);
    assert.equal(e.emit('touchstart', [[100, 100], [200, 100]]), true);
    assert.equal(e.emit('touchmove', [[90, 100], [210, 100]]), true);
    assert.equal(e.emit('gesturestart'), true);
    assert.equal(e.emit('gesturechange'), true);
    assert.equal(e.emit('touchmove', [[100, 150]]), false);
  });

  /** После touchcancel/очистки не остаётся перехватчиков и незавершённого состояния. */
  it('ignores non-cancelable events and removes all listeners on cleanup', () => {
    const e = createEnvironment();
    const cleanup = installMobileGestureGuards(e.browser);
    assert.equal(e.emit('touchstart', [[10, 200]], undefined, false), false);
    e.emit('touchcancel');
    assert.equal(e.emit('touchmove', [[10, 250]]), false);
    cleanup();
    assert.equal(e.emit('touchstart', [[10, 200]]), false);
    assert.equal(e.emit('gesturestart'), false);
  });

  /** Android и desktop используют CSS, а iPad с настольным User-Agent получает WebKit fallback. */
  it('limits the fallback to iOS including desktop-mode iPads', () => {
    for (const navigator of [
      { userAgent: 'Android', platform: 'Linux', maxTouchPoints: 5 },
      { userAgent: 'Macintosh', platform: 'MacIntel', maxTouchPoints: 0 },
    ]) {
      const e = createEnvironment(navigator);
      installMobileGestureGuards(e.browser);
      assert.equal(e.emit('touchstart', [[10, 200]]), false);
      assert.equal(e.emit('gesturestart'), false);
    }
    const e = createEnvironment({ userAgent: 'Macintosh', platform: 'MacIntel', maxTouchPoints: 5 });
    installMobileGestureGuards(e.browser);
    assert.equal(e.emit('touchstart', [[10, 200]]), true);
  });
});
