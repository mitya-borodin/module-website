# Иллюстрации и места для будущих экранов Ritmod

Текущая редакция: **9 октября 2026 года**. По решению автора реальные экраны добавляются
по готовности; сейчас каждый из пяти аспектов представлен одной иллюстрацией. Это не
скриншоты и не спецификация будущего GUI. Роль блока после каталога возможностей — у
[владельца позиционирования](../../module-market-intelligence/internet-promotion/spec/homepage-audience-routing-brief.md#как-объяснять-по).

## Места для реального GUI

Размещение — `/software/#management`. Контент хранится в `guiPreviewSlots` внутри
[software.astro](../src/pages/software.astro). Каждый элемент содержит свой список `slides`.

| Аспект и якорь | Что показать после готовности | Текущая иллюстрация |
| --- | --- | --- |
| Дашборд, `#gui-overview` | Состояния света, штор, отопления и охлаждения; температура в помещениях, показания счётчиков и текущий расход ресурсов — общий обзор без перехода между разделами | [Человек за ноутбуком и телефоном](../src/assets/site/gui-dashboard-interior-v1.png) |
| Ручное управление сценариями, `#gui-room` | Выбор режима под занятие, управление светом и шторами, изменение заданной температуры из браузера на телефоне или компьютере | [Выбор освещения для занятия](../src/assets/site/gui-manual-interior-v1.png) |
| Разметка устройств, `#gui-devices` | Понятные имена устройств и каналов, помещение и назначение; поиск оборудования, выбор для автоматизации и обслуживание | [Щит и помещение](../src/assets/site/gui-devices-interior-v2.png) |
| Создание автоматизаций, `#gui-automations` | Результат на примере света по движению и темноте, затем выбор готовой логики, устройств и условий для каждой комнаты | [Обсуждение результата](../src/assets/site/gui-create-interior-v1.png) |
| Уведомления и интерактив, `#gui-notifications` | Назначение сообщения о событии и обратной связи через ответ или выбор действия; реальные примеры только после проверки | [Условное сообщение на телефоне](../src/assets/site/gui-notifications-interior-v1.png) |

Все пять кадров обновлены в согласованном интерьерном стиле коммерческих страниц.
[Новые исходники, референсы и точные промпты](commercial-interior-images.md). Внутри каждого
кадра есть короткая подпись действия или связи систем; она не является текстом реального GUI. У каждого места есть название,
пометка «Иллюстрация» и описание назначения аспекта. По уточнению автора от 9 октября сайт уже
опубликован: общая заметка «пока здесь иллюстрации» и подписи «здесь покажем» удалены из публичной
страницы. План замены остаётся только здесь. Не считать названия аспектов свидетельством
готовности конкретного интерфейса.

Дашборд занимает полную строку, остальные четыре аспекта — две колонки; на телефоне все идут
последовательно. Кадры целиком помещаются в область 3:2. При добавлении нескольких `slides`
используется горизонтальная прокрутка с привязкой к кадру и ссылками выбора экрана;
автопрокрутки нет. При одном кадре счётчик и переключатели не выводятся. Текущая проверка
выполнена для согласованного состояния с одним кадром на аспект; будущую серию проверять отдельно.

При замене: снять реальный проверенный экран без персональных данных и секретов, заменить
`slides[].image` и `alt`, сверить текст с наблюдаемыми действиями. Пометку «Иллюстрация» убрать
только у кадра, заменённого реальным экраном. Служебные планы замены на страницу не возвращать.
Сохранить якоря и повторить адаптивную проверку. Если серия включает и концепт, и реальный GUI,
пометки задавать каждому кадру отдельно. Не добавлять выдуманные показания и неподтверждённые действия.

## Создание автоматизаций и сообщения: смысл описания

Уточнение автора 09.10.2026: в двух карточках раскрывается назначение, без текста о будущих
материалах. Создание объясняется от результата — свет по движению и темноте с паузой выключения —
к выбору готовой логики, устройств и условий для комнаты. Уведомления — информация о событии;
интерактив — возможность ответа или выбора дальнейшего действия. Подписи «здесь покажем» и
«здесь появятся» отсутствуют в исходнике и не должны возвращаться.

Граница уведомлений перепроверена по исходникам 09.10.2026:
[backend showcase](../../module-automation/src/domain/macros/showcase.ts) содержит
`NOTIFICATION.implemented: false`; [реестр классов](../../module-automation/src/domain/macros/macros-by-type.ts)
связывает этот тип с `LightingMacros`, а
[задача страницы уведомлений](../../module-automation-webapp/docs/tasks/notifications/notifications-page.md)
остаётся `draft`. Поэтому публичный текст описывает назначение этой темы, не заявляет работающую
доставку через конкретные каналы, готовую страницу уведомлений или конкретную команду оборудованию
из сообщения. Иллюстрация сохраняет свой статус. До показа реального GUI и конкретных сценариев
нужна проверка реализации; чтение исходников не является runtime-тестом.

## Смысл разметки и щит: уточнение 9 октября

По просьбе автора описание объясняет назначение разметки через имена «Датчик движения в прихожей»
и «Основной свет в кухне». Она помогает найти оборудование, выбрать его для автоматизации и
понять назначение при обслуживании. В иллюстрации щит приведён к компоновке с главной;
подпись состоит из конкретного примера и пояснения «Задаём имя, помещение и назначение».
[Исходник, референсы и промпт](commercial-interior-images.md#разметка-устройств).

Граница реализации перепроверена 09.10.2026 по
[контракту страницы устройств](../../module-automation-webapp/docs/pages/devices/runtime-contract.md),
[форме разметки](../../module-automation-webapp/src/pages/Devices/components/device-markup-content/device-markup-content.tsx)
и [полям каналов](../../module-automation-webapp/src/pages/Devices/store/helpers/create-control-markup-draft.ts).
Подтверждены имена, описания и теги устройств/каналов. Помещение в этом объяснении задаётся именем
или тегом; отдельная модель помещений и автоматическое определение назначения не заявляются.
Это чтение исходников, не новая проверка рабочего GUI.

Проверка сайта 09.10.2026: `yarn build` завершён успешно. В браузере проверены 1280×720,
320×740 и 390×844: изображение загружено, подпись внутри кадра, горизонтального переполнения нет.
[Мобильный вид карточки](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/device-markup-mobile.png).
Поменялись иллюстрация, текст и его отображение; продуктовая логика не менялась. Публикация не выполнялась.

## Предыдущие исходные изображения, 8–9 октября

[Сцена с браузером](../src/assets/site/browser-control-concept-v1.png) создана 8 октября
встроенным ImageGen по [стилистическому референсу главной](../src/assets/site/automation-home-concept-v1.png).
На столе стоят ноутбук и телефон с условными цветными блоками; это иллюстрация использования.
[Обложка услуги и её промпт](service-overview-concept-image.md) имеют отдельного владельца.

[Уведомления](../src/assets/site/notifications-concept-v1.png) созданы 9 октября встроенным
ImageGen как новая сцена без входного изображения. На телефоне условное сообщение и два
нейтральных элемента ответа. Нет читаемого текста, показаний Module или аварийного обещания.

## Финальный промпт сцены с браузером, 8 октября

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

## Финальный промпт уведомлений, 9 октября

```text
Use case: stylized-concept.
Asset type: one conceptual illustration for a future "Notifications and interaction" software screen slot on the Module automation website.
A calm, premium warm architectural 3D illustration: a realistic adult homeowner seated in an oak and limestone living room is looking at and touching a smartphone. Show the phone clearly in the foreground with a simple abstract notification card and two short neutral button-shaped areas, a small speech-bubble symbol, NO legible text, NO logos, NO invented real app interface. The person's hands and fingers must be anatomically natural, holding the phone realistically. In the background an uncluttered room contains a warmly lit floor lamp, curtains and a radiator, softly out of focus. A small simple abstract message bubble is permitted above the phone to express receiving a message and responding; no alarm, no emergency, no red warning, no claims of remote control.
Wide 16:9 composition, warm opaque off-white backdrop, matte materials, muted beige, oak, graphite and subtle terracotta, soft amber illumination from a real lamp. Consistent with an elegant miniature architectural illustration rather than a photograph or cartoon. Composition breathes, full phone and hands in frame, no floating or impossible equipment. This represents the topic of notifications and responses, not an actual screenshot. No captions, no text, no watermarks.
```

## Проверка

Просмотрены исходники и размещение: устройства опираются на поверхности, позы естественные,
условные экраны не выдаются за Ritmod GUI. В браузере при ширине 1280px и 320px у всех пяти
аспектов по одному кадру, пометки присутствуют, переключатели отсутствуют, горизонтального
переполнения страницы нет. Сборка и переходы — у
[владельца реализации](commercial-pages-visual-refresh.md).
