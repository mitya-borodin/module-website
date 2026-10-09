type TouchPoint = { x: number; y: number };
type ScrollAxis = 'x' | 'y';

/**
 * WebKit fallback для сайта с обычной прокруткой документа. Перехватывает только
 * доступные странице жесты; не подменяет историю и не сбрасывает позицию чтения.
 */
export function installMobileGestureGuards(browser: Window & typeof globalThis): () => void {
  const { document, navigator } = browser;
  const isIos = ['iPhone', 'iPad', 'iPod'].some((device) => navigator.userAgent.includes(device))
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (!isIos) {
    return () => {};
  }

  const root = document.scrollingElement ?? document.documentElement;
  const edgeWidth = 24;
  const tolerance = 1;
  let previous: TouchPoint | undefined;
  let elements: HTMLElement[] = [];

  const cancel = (event: Event) => {
    if (event.cancelable) {
      event.preventDefault();
    }
  };

  const reset = () => {
    previous = undefined;
    elements = [];
  };

  const canConsumeScroll = (axis: ScrollAxis, distance: number): boolean => {
    for (const element of elements) {
      const style = browser.getComputedStyle(element);
      const isRoot = element === root;
      const overflow = axis === 'y' ? style.overflowY : style.overflowX;
      const bodyOverflow = browser.getComputedStyle(document.body)[axis === 'y' ? 'overflowY' : 'overflowX'];
      const rootLocked = isRoot && [overflow, bodyOverflow].some((value) => value === 'hidden' || value === 'clip');
      const scrollable = !rootLocked && (isRoot || ['auto', 'scroll', 'overlay'].includes(overflow));

      if (!scrollable) {
        continue;
      }

      const position = axis === 'y' ? element.scrollTop : element.scrollLeft;
      const extent = axis === 'y'
        ? element.scrollHeight - element.clientHeight
        : element.scrollWidth - element.clientWidth;
      const canMove = distance > 0 ? position > tolerance : position < extent - tolerance;

      if (canMove) {
        return true;
      }

      const behavior = axis === 'y' ? style.overscrollBehaviorY : style.overscrollBehaviorX;

      if (behavior === 'contain' || behavior === 'none') {
        return false;
      }
    }

    return false;
  };

  const handleStart = (event: TouchEvent) => {
    if (event.touches.length !== 1) {
      reset();
      cancel(event);
      return;
    }

    const touch = event.touches[0];
    previous = { x: touch.clientX, y: touch.clientY };
    elements = event.composedPath().filter((target): target is HTMLElement => {
      return target instanceof browser.HTMLElement && target !== document.body && target !== root;
    });
    elements.push(root as HTMLElement);

    const atEdge = touch.clientX <= edgeWidth || touch.clientX >= browser.innerWidth - edgeWidth;
    const interactive = event.composedPath().some((target) => {
      return target instanceof browser.HTMLElement
        && target.matches('a, button, input, textarea, select, summary, [role="button"], [contenteditable]');
    });

    const horizontalArea = elements.some((element) => {
      const { overflowX } = browser.getComputedStyle(element);

      return element.scrollWidth > element.clientWidth
        && ['auto', 'scroll', 'overlay'].includes(overflowX);
    });

    if (atEdge && !interactive && !horizontalArea) {
      cancel(event);
    }
  };

  const handleMove = (event: TouchEvent) => {
    if (event.touches.length > 1) {
      reset();
      cancel(event);
      return;
    }

    if (!previous || event.touches.length !== 1) {
      return;
    }

    const touch = event.touches[0];
    const dx = touch.clientX - previous.x;
    const dy = touch.clientY - previous.y;

    if (Math.max(Math.abs(dx), Math.abs(dy)) < 2) {
      return;
    }

    previous = { x: touch.clientX, y: touch.clientY };
    const axis = Math.abs(dy) >= Math.abs(dx) ? 'y' : 'x';

    if (!canConsumeScroll(axis, axis === 'y' ? dy : dx)) {
      cancel(event);
    }
  };

  document.addEventListener('touchstart', handleStart, { passive: false });
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('touchend', reset, { passive: true });
  document.addEventListener('touchcancel', reset, { passive: true });
  document.addEventListener('gesturestart', cancel, { passive: false });
  document.addEventListener('gesturechange', cancel, { passive: false });

  return () => {
    document.removeEventListener('touchstart', handleStart);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', reset);
    document.removeEventListener('touchcancel', reset);
    document.removeEventListener('gesturestart', cancel);
    document.removeEventListener('gesturechange', cancel);
  };
}
