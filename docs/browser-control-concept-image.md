# Иллюстрация управления системой из браузера

Дата: 8 октября 2026 года. Решение автора: пока использовать иллюстрацию, после готовности
дашборда показать реальный GUI. Изображение создано встроенным ImageGen в принятом стиле Module.

Исходник: [browser-control-concept-v1.png](../src/assets/site/browser-control-concept-v1.png).
Референс: [обзорная сцена главной](../src/assets/site/automation-home-concept-v1.png).
Размещение: `/software/#management`, первая из трёх позиций будущих экранов; явная пометка
«Иллюстрация» и подпись «Здесь появится реальный экран обзора дома».
Это сцена использования компьютера и телефона. На экранах условные цветовые блоки;
композиция не является скриншотом или спецификацией будущего интерфейса.

## Места для реального GUI

По следующему поручению автора от 8 октября для реальных экранов выделены три места.
Контент и исходники заданы в `guiPreviewSlots` внутри [software.astro](../src/pages/software.astro).

| Место | Что показать после готовности | Текущая иллюстрация |
| --- | --- | --- |
| `/software/#gui-overview`, `data-gui-slot="overview"` | Обзор состояний систем и показаний устройств | [Управление из браузера](../src/assets/site/browser-control-concept-v1.png) |
| `/software/#gui-room`, `data-gui-slot="room"` | Показания и реально доступные действия выбранной комнаты | [Комната со светом, радиатором и шторами](../src/assets/site/automation-home-concept-v1.png) |
| `/software/#gui-resources`, `data-gui-slot="resources"` | Показания совместимых счётчиков и расчётная скорость расхода | [Учёт ресурсов](../src/assets/docs/resource-metering/resource-metering-concept-v1.png) |

Это план демонстрации GUI, а не свидетельство готовности конкретного дашборда или экранов.
Новые иллюстрации для трёх позиций не генерировались: переиспользованы принятые исходники.
У каждой позиции есть рамка, название, пометка «Иллюстрация» и подпись будущего реального экрана.
Перед блоком прямо сказано, что реальные экраны появятся после готовности дашборда.

Основная позиция занимает полную строку, две дополнительные — по половине; на узком экране
все три выстраиваются последовательно. Область изображения — 16:10, `object-fit: contain`,
чтобы иллюстрация или будущий скриншот не обрезались.

При замене: снять реальный проверенный экран без персональных данных и секретов, заменить
`image` и `alt` соответствующей позиции, сверить текст с наблюдаемыми действиями. После замены
убрать пометку и обещание будущего кадра **только у заменённой позиции**; общую заметку
снять, когда заменены все три. Сохранить якоря и повторить адаптивную проверку. Не добавлять
вместо показаний выдуманные графики истории или действия, отсутствующие в действующем GUI.

## Финальный промпт

```text
Use case: stylized-concept.
Asset type: conceptual illustration for the Module website section about seeing readings and controlling engineering systems from a browser. This is NOT a screenshot and NOT a design proposal for the actual product interface.
Visual reference: match the supplied Module homepage illustration's warm architectural editorial style, matte materials, natural anatomy, soft contact shadows and palette.
Scene: compact home workspace in a cutaway room. An adult in ordinary muted terracotta clothing sits naturally at an oak desk looking at an open laptop, one hand resting naturally near its trackpad. A smartphone stands in a small real stand on the desk beside the laptop. The laptop and phone are unmistakably real physical objects, mounted on and contacting the desk. In the same room are a normal wall radiator below a window, a small warm desk lamp and a partly drawn linen curtain. These connect the act of using a browser with the surrounding home systems. Sparse calm furnishing, one plant and a simple chair, no clutter.
Screens: extremely simple abstract neutral blocks, one warm light-coloured area and one restrained green area, no readable text, numbers, product branding, dashboards, charts or precise interface components. Make them visibly illustrative and generic. Do not fabricate any actual Module UI. The person and devices are the focus, with enough screen visible to recognise interaction, no floating icons or lines.
Composition: wide landscape approximately 2:1, one coherent floor and walls, axonometric view slightly above and behind the person's side so laptop and phone are both visible. Large readable forms, warm off-white margins, all important objects within central 85%, stable physical connections, comfortable negative space.
Palette and material: #f0eee6 inspired warm off-white background, matte limestone plaster, natural oak, graphite, muted terracotta, calm beige linen. Soft daylight and a believable desk lamp. Exactly the same refined non-photographic architectural illustration family as the reference.
Avoid: text, labels, numerals, arrows, logos, watermarks, floating technology symbols, neon, cables attached to air, implausible limbs, extra fingers, futuristic equipment. Do not draw a browser screenshot into the illustration.

```

## Проверка

Просмотрен результат: естественная поза человека, компьютер и телефон стоят на столе,
окружающее оборудование прикреплено к конструкциям, нет читаемых значений или выдуманных
экранов Module. После выделения трёх мест выполнены `yarn build` (0 errors, warnings, hints),
проверка 84 внутренних ссылок главной и ПО, наличие alt и размеров изображений. Три позиции
проверены в браузере при 1280×900 и 320×740: изображения загружаются, подписи присутствуют,
горизонтального переполнения нет. Адаптивный вывод и сборка проверены с коммерческой страницей;
[владелец реализации](commercial-pages-visual-refresh.md).
