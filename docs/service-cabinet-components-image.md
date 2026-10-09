# Щит: состав оборудования и подписи назначения

Дата: **9 октября 2026 года**. Статус: реализованная итерация по поручению автора.
Владелец компоновки карусели — [service-overview-concept-image.md](service-overview-concept-image.md).
Владелец сообщения — [brief главной](../../module-market-intelligence/internet-promotion/spec/homepage-audience-routing-brief.md#что-объясняет-главная).

## Текущий исходник

[service-cabinet-wiren-board-v4.png](../src/assets/site/service-cabinet-wiren-board-v4.png), 1254×1254.
Создан встроенным ImageGen, последовательно редактируя одобренный щит. Вариант v3 добавил
диммер вместо второго одинакового реле; вариант v4 добавил SSR, аналоговый модуль и новый
порядок защитных аппаратов. Дверца, корпус, мягкий свет и квадратная композиция сохранены.

Верхний ряд слева направо по прямому указанию автора:
**вводной автомат 2P → УЗИП → реле напряжения → УЗО → УЗДП**.
Ниже — групповые автоматы, контроллер с боковым SSR-модулем, затем реле, диммер,
аналоговые выходы и блок питания; внизу клеммы. Это порядок размещения в иллюстрации,
не схема последовательного электрического соединения защитных аппаратов.

## Подписи и подтверждённые границы

Подписи — отдельный HTML/SVG-слой в `service-overview.astro`; тонкие линии ведут к устройствам.
Он привязан к квадратному исходнику независимо от пропорций контейнера. Подписи на дверце
не закрывают лицевые панели. Доступный alt описывает назначение и порядок оборудования.

| Подпись | Что показано | Граница применения |
| --- | --- | --- |
| Ritmod / Контроллер | ПО работает на Wiren Board 8 и исполняет автоматизации | Показан выбранный пример размещения ПО |
| SSR / Приводы 24 В | WBIO-DO-SSR-8 непосредственно справа от контроллера | Низковольтная нагрузка; напряжение до 30 В, ток до 400 мА на канал; конкретный привод и ревизию подбирают по параметрам |
| Реле / Свет, насосы | WB-MR6C v.3 | Коммутация подходящих нагрузок; не обещание подключения любого насоса напрямую |
| Диммер / Яркость, цвет | WB-LED | Яркость и цвет совместимых светодиодных лент |
| 0–10 В / Клапаны и заслонки | WB-MAO4 | Управляющий сигнал для устройств с соответствующим входом, не питание силовой нагрузки |

Источники производителя проверены **09.10.2026**:

- [WBIO-DO-SSR-8: назначение, параметры и боковое подключение](https://wiki.wirenboard.com/wiki/WBIO-DO-SSR-8_Discrete_Outputs_Dry_Contact).
- [WB-MAO4: выходы 0–10 В, управление клапанами и заслонками](https://wirenboard.com/ru/contents/product/WB-MAO4/).
- [WB-LED: управление светодиодными лентами](https://wirenboard.com/ru/product/WB-LED/).
- Ранее проверенные референсы контроллера и реле — у [владельца прежнего исходника](service-overview-concept-image.md#оборудование-wiren-board-в-первом-кадре).

Изображения производителя использованы только как референсы внешнего вида:
[SSR](https://wirenboard.com/ru/product/WBIO-DO-SSR-8/),
[аналоговые выходы](https://wirenboard.com/ru/contents/product/WB-MAO4/),
[диммер](https://wirenboard.com/ru/product/WB-LED/).
Это концепт комплектации, не фотография поставки и не монтажное руководство. Маркировка,
провода и номиналы на растре не подтверждают электрическую схему. Новая иллюстрация не
добавляет runtime-функции и не подтверждает испытания оборудования на объекте.

## Проверка

`yarn build` завершён 09.10.2026 в 10:37 МСК: `astro check` — 0 errors/warnings/hints.
Просмотрены исходник, затем первый кадр на 1280×800, 900×800 и 320×740. Все пять подписей
помещаются, на 320px и 900px геометрическая проверка не выявила пересечений. Изображение
целиком, горизонтального переполнения нет; высота карусели 594px и ≈401px на desktop/mobile.
Подписи назначений согласованы с источниками выше; это визуальная проверка, не проверка монтажа.

[Desktop](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/ritmod-cabinet-components-desktop.png),
[mobile](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/ritmod-cabinet-components-mobile.png).

## Финальный промпт v4

```text
Use case: precise-object-edit.
Input 1 is the approved cabinet illustration to edit. Input 2 is the official WBIO-DO-SSR-8 reference for the new solid-state relay module. Input 3 is the official WB-MAO4 reference for the new analog output module.
Preserve the cabinet exterior, open attached door on LEFT, hinges, bonding wire, warm cream background, perspective, square framing and restrained product-render style. Reorganize ONLY the devices and wiring INSIDE to fit FOUR orderly rows, with real DIN mounting and cable ducts. Keep every device front visible, enough space to attach wires, no floating parts.
TOP ROW exact left-to-right order of FIVE distinct protection device groups, beginning at the upper LEFT of the cabinet INTERIOR (not on the door):
1. ONE TWO-POLE incoming circuit breaker, exactly two mechanically linked toggle poles. Small label "2P".
2. ONE surge protective device (SPD), two slim removable surge cartridges with green status windows. Small label "УЗИП".
3. ONE voltage monitoring relay with a small dark digital voltage display. Small label "U< U>".
4. ONE two-pole residual current device with linked lever and a TEST button. Small label "УЗО".
5. ONE arc-fault detection device AFDD with switching lever and test/indicator. Small label "УЗДП".
Do not put ordinary group breakers before these five groups.
SECOND ROW: a short group of individual branch circuit breakers on the left, then the existing broad Wiren Board 8 controller, immediately followed on its RIGHT by the NEW narrow WBIO-DO-SSR-8, attached directly to the controller side connector with no gap or other device between. Match reference 2: white face, green terminals, green wb round mark, "Solid State Relay" and model "WBIO-DO-SSR-8".
THIRD ROW: one existing WB-MR6C v.3 relay module, one existing WB-LED LED dimmer, and one NEW WB-MAO4 analog output module, from left to right. Match reference 3: white face, green terminals, green wb logo, "Analog Output", "WB-MAO4", and small "0-10V". A compact enclosed DIN 24V power supply may be at the left end of this row; leave clear gaps between independent devices. The three labeled Wiren Board modules must be visually distinct and not merged.
BOTTOM ROW: tidy terminal blocks, blue neutral terminals, protective earth green-yellow terminals and other terminals; show short credible wires disappearing into cable ducts. Preserve a realistic wired assembly and physical contact with DIN rails.
Controller label remains "Wiren Board 8", relay label "WB-MR6C v.3", dimmer label "WB-LED". No extra controller, no duplicate models, no replacing these with generic dark boxes.
This is a conceptual marketing illustration, not a wiring schematic. No arrows, overlay captions, numbered callouts, UI cards, room, people, tools or external text. Do not put Ritmod on hardware. Leave the door interior blank for website annotations. Entire cabinet fully visible in the same square frame with margins. Opaque background.
```

## Промежуточная правка v3: диммер

Сохранённый промежуточный исходник:
[service-cabinet-wiren-board-v3.png](../src/assets/site/service-cabinet-wiren-board-v3.png).
Он не используется на сайте; нужен для происхождения следующей итерации.

```text
Use case: precise-object-edit.
Input image 1 is the edit target: an approved square warm illustration of a complete open automation cabinet. Input image 2 is the official WB-LED product reference, use it for ONE replacement device only.
Make exactly one localized change: replace the RIGHTMOST of the two slim Wiren Board relay modules on the MIDDLE row, immediately to the right of the remaining WB-MR6C v.3 relay, with one WB-LED LED dimmer matching reference image 2. Preserve the controller in the center reading "Wiren Board 8", and preserve the left slim relay reading "WB-MR6C v.3".
The replacement dimmer is a narrow light-gray DIN device with green terminal blocks at top and bottom, a white label with a green wb circle, and legible "CV LED Dimmer" and "WB-LED". It must be mounted to the same real rail with credible short wires routed from its actual terminals into the existing cable ducts. Keep its width fitting in the existing rightmost-module space; do not rearrange the cabinet.
Invariants: preserve the ENTIRE surrounding illustration exactly: square composition, camera, complete cabinet uncropped, open door, hinges, protective bonding wire, enclosure, controller, remaining relay, breakers, lower terminals, wall-free cream backdrop, lighting and shadows, all other devices. The original cabinet is approved; do not redesign it.
No callouts, arrows, interface panels or overlay text. Do not add the word Ritmod to the hardware. The explanatory text will be rendered separately by the website. Opaque background.
```
