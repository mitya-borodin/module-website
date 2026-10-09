# Мобильные жесты браузера

Дата реализации и локальных проверок: **9 октября 2026 года**. Владелец требования —
[публичный web-контракт](../../module-market-intelligence/internet-promotion/spec/public-web-contract.md#мобильные-жесты-решение-9-октября-2026).

## Решение и границы

По прямому запросу автора мобильный сайт подавляет доступные странице жесты обновления при
протяжке вниз, перехода по истории при боковой протяжке и изменения масштаба при повторных
тапах или сведении пальцев. Политика общая для главной, ПО и документации. Обычная прокрутка,
ссылки, кнопки, меню, карусели и кнопки истории браузера сохраняются.

Это best effort на уровне страницы, не гарантия отключения системных жестов Safari. Браузер
может игнорировать ограничения viewport или забирать жест до отменяемого события. Масштабирование
на компьютере клавиатурой/колесом и настройки доступности операционной системы не перехватываются.

## Адаптация из module-automation-webapp

По поручению автора запрошен существующий чат **«Актуализируй статус деплоя»**
(`01a11fbe-bed3-7d62-ae01-735a7eb5e473`); получена консультация без изменения webapp.
Проверены источники:

- [global.css](../../module-automation-webapp/src/styles/global.css),
  [index.html](../../module-automation-webapp/index.html): viewport, overscroll и touch-action.
- [use-prevent-ios-browser-gestures.ts](../../module-automation-webapp/src/router/components/ServiceLayout/hooks/use-prevent-ios-browser-gestures.ts):
  обработка WebKit и пограничных касаний.
- [владелец физических проверок webapp](../../module-automation-webapp/docs/tasks/backend-driven-ui/macros-editor-physical-phone-interaction-hardening.md).

Ключевое отличие: сайт прокручивает документ, приложение — внутренние области. Поэтому сюда
не перенесены блокировка корневой прокрутки и сброс `scrollTop`/`scrollLeft`. Результаты проверок
на телефоне из webapp не считаются проверкой сайта.

## Владельцы реализации

- [mobile-viewport.ts](../src/data/mobile-viewport.ts): общая настройка масштаба viewport.
- [mobile-gestures.css](../src/styles/mobile-gestures.css): для coarse pointer задаёт
  `overscroll-behavior: none`, `touch-action: pan-x pan-y`; поля ввода получают минимум 16px.
- [install-mobile-gesture-guards.ts](../src/scripts/install-mobile-gesture-guards.ts): fallback
  только для iOS/iPadOS. Учитывает document.scrollingElement, вложенные области, направление
  движения и возможность продолжить прокрутку. Мультитач и WebKit gesture-события отменяются,
  если событие отменяемое. Возвращается функция снятия обработчиков.
- [mobile-gesture-policy.astro](../src/components/mobile-gesture-policy.astro): подключение CSS
  и один запуск обработчика. Используется в [site-layout.astro](../src/layouts/site-layout.astro)
  и [docs-head.astro](../src/components/docs-head.astro). В Starlight меняется существующий viewport,
  второй meta-тег не добавляется.

У краёв шириной 24px ранняя отмена касания не применяется к ссылкам, кнопкам, полям, summary,
contenteditable и горизонтально прокручиваемым областям. Это сохраняет их работу, но защита
от перехода по истории в таких точках не гарантируется. Обработчик не отменяет обычный touchend,
не создаёт синтетические клики и не меняет popstate/history.

## Совместимость со свайпами каруселей

Главная использует настоящую горизонтальную scroll-область, поэтому проверка доступного
смещения в fallback разрешает её протяжку. У области задано ограничение overscroll только
по X; вертикальное движение продолжает прокручивать документ. Реализация свайпов, доступность
и адресные проверки — у [владельца карусели](service-overview-concept-image.md#свайпы-9-октября-2026).
GUI-галереи ПО используют тот же нативный принцип; по текущему решению в каждой один кадр.

## Выполненные проверки

- `node --test src/scripts/install-mobile-gesture-guards.spec.mjs`: **8/8**. Встроенный runner
  Node 24, без новых зависимостей. Проверены корневая и вложенная прокрутка, обе границы и смена
  направления, горизонтальные области, касания у краёв, интерактивные элементы, мультитач,
  cancelable, cleanup, desktop-mode iPad и отсутствие JS-перехвата на Android/desktop.
- `yarn build`: успешно; `astro check` — 0 errors, 0 warnings, 0 hints.
- Все 14 HTML-страниц без meta-redirect: один viewport, один собранный inline-скрипт защиты,
  CSS присутствует; Open Graph прежнего изменения сохранён.
- В локальном preview при viewport 390×844 открыты главная, ПО и документация. Меню открывается,
  ссылка ПО ведёт на `/software/`, карусель переключается на второй кадр; документация открывается.
  Ширина документа 375px при окне 390px, горизонтального переполнения нет. Ошибок консоли не получено.

**Статус: реализовано и проверено локально; этим проходом не опубликовано.** Responsive-проверка
в настольном браузере подтверждает layout и клики, но не эмулирует физические жесты iOS.

## Оставшаяся физическая проверка

На iPhone Safari и Chrome, затем на Android Chrome проверить главную, ПО и длинную статью:
прокрутку из середины, движение от обоих краёв страницы и обратно, pull-to-refresh, оба боковых
жеста, двойной/тройной тап, pinch, меню, ссылки у краёв и фокус поля поиска. Проверить карусель,
горизонтальную область при её наличии, обычные кнопки Back/Forward и восстановление позиции чтения.
Фиксировать устройство, ОС и браузер. Планшет требует отдельной проверки.

## Первичные внешние источники

Проверены 9 октября 2026 года:

- [Pointer Events: touch-action](https://www.w3.org/TR/pointerevents/#the-touch-action-css-property):
  допустимые нативные жесты задаются через CSS.
- [WebKit: New Interaction Behaviors in iOS 10](https://webkit.org/blog/7367/new-interaction-behaviors-in-ios-10/):
  Safari может игнорировать minimum-scale, maximum-scale и user-scalable; viewport сам по себе не гарантия.
- [WebKit issue 275947](https://bugs.webkit.org/show_bug.cgi?id=275947):
  зарегистрирован случай, когда overscroll-behavior не отключает pull-to-refresh.
- [WebKit issue 240183](https://bugs.webkit.org/show_bug.cgi?id=240183): ограничения edge-history gestures.
