# Иллюстрации разделов об освещении

Статус: подготовлены по прямому запросу автора 8 октября 2026 года, после положительной оценки
[обложки раздела](lighting-concept-image.md). Сгенерированы встроенным ImageGen с обложкой в качестве
визуального исходника. Это отдельные изображения для девяти основных разделов, не анимации.

## Область и процесс

Публичные тексты и границы поведения взяты из [описания света](../src/content/docs/ru/docs/automations/lighting/index.mdx).
Изменение охватывает изображения, их подписи, текстовые альтернативы и отображение в module-website.
Backend, публикация и реальные устройства не входят в задачу. Один writer сохраняет исходники и
собирает страницу; дополнительные агенты не использованы, поскольку общий стиль и одна страница
требуют единого редактирования. Проверки: визуальная оценка → сборка → desktop/mobile preview.
В первой сцене выполнено одно уточнение направления шага: человек входит в комнату.

Обложка остаётся без изменений. Общий [компонент иллюстрации](../src/components/docs-scenario-image.astro)
создаёт адаптивные WebP-версии и откладывает загрузку до приближения изображения к области просмотра.
Подпись поясняет причинную связь; текст страницы сохраняет условия применения и ограничения.
Утверждение о самостоятельном обратном отсчёте после кнопки не добавлено: ручной старт показан
с выключением в выбранное время. Сцена разговора показывает удержание уже включённого света.

## Изображения

| Раздел | Сохранённый исходник |
| --- | --- |
| Свет встречает вас и гаснет после ухода | [arrival-v2.png](../src/assets/docs/lighting/sections/arrival-v2.png) |
| Днём лишний свет не включается | [daylight-v1.png](../src/assets/docs/lighting/sections/daylight-v1.png) |
| Вы включаете кнопкой, свет выключается сам | [manual-start-v1.png](../src/assets/docs/lighting/sections/manual-start-v1.png) |
| Свет учитывает то, чем вы заняты | [activities-v2.png](../src/assets/docs/lighting/sections/activities-v2.png) |
| Ручное действие сохраняет смысл | [manual-choice-v1.png](../src/assets/docs/lighting/sections/manual-choice-v1.png) |
| На улице свет появляется с наступлением темноты | [outdoor-v1.png](../src/assets/docs/lighting/sections/outdoor-v1.png) |
| Для разных зон — своё поведение | [zones-v1.png](../src/assets/docs/lighting/sections/zones-v1.png) |
| Яркость и оттенок под ситуацию | [light-profiles-v1.png](../src/assets/docs/lighting/sections/light-profiles-v1.png) |
| Какой результат нужен вам | [choose-result-v1.png](../src/assets/docs/lighting/sections/choose-result-v1.png) |

## Общий промпт и визуальный исходник

Для новых изображений всех автоматизаций действует [общий визуальный стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md),
принятый автором 8 октября. Промпты ниже сохраняют историю конкретных изображений освещения.

В каждую генерацию переданы общий промпт, название соответствующего раздела и описание сцены ниже.
Визуальный исходник — [одобренная обложка](../src/assets/docs/lighting/lighting-concept-v1.png).

```text
Use case: stylized-concept. Recompose the supplied illustration into a new companion illustration for one section of Module lighting documentation. Treat the supplied image as the visual source to transform: preserve its refined axonometric architectural illustration style, matte limestone surfaces, soft charcoal detailing, believable human figures, warm off-white #f0eee6 background, muted terracotta clothes and natural amber pools of light. Replace the scene according to the section below; do not reproduce the original three-room panorama unchanged. Landscape approximately 2:1. Calm uncluttered composition with generous margins, architectural rooms and people large enough to understand on mobile. No lettering, labels, numerals, brand marks, logos, UI, settings, wires as diagrams, technology badges, arrows, floating lightbulb symbols or watermarks. Light must visibly come from plausible fixtures. The image illustrates an everyday outcome, not a wiring diagram. Consistent scale and viewpoint between panels. Do not imply perfect presence sensing, noise switching lights on, or any countdown timer after pressing a button.
```

## Свет встречает вас и гаснет после ухода

```text
Section title for context only (do not render text): Свет встречает вас и гаснет после ухода
Scene: Two equally sized side-by-side isometric views of exactly the same small hallway at the same evening ambient light. Left: a person stepping INSIDE from the open entrance door carrying grocery bags, visibly walking inward, ceiling fixture ON with a warm pool along their path; subtle wall motion sensor. Right: later, same hallway completely empty, door closed and ceiling fixture visibly OFF, room softly visible in residual light. No ghost figures, no motion trails, no clocks, no change of daylight. Show occupation and absence, not a person pressing a switch. The time delay is explained in the page caption outside the image.
```

Уточнение первой генерации (редактирование её результата):

```text
Change only the orientation and pose of the person in the LEFT panel. They must unmistakably be ENTERING the room from the open door, not exiting: place the open door BEHIND their back, turn their torso and head toward the center/right of the interior so their face is visible in a natural three-quarter view, with the leading foot stepping toward the bench and cupboard away from the door. Keep grocery bags. Preserve every other part of this two-panel illustration exactly, including the empty unlit right panel, architecture, scale, colors, lamps and lighting, background and aspect ratio. Do not add labels or arrows.
```

Исправление от 8 октября 2026 года по замечанию автора о положении ступней: текущая версия
[arrival-v2.png](../src/assets/docs/lighting/sections/arrival-v2.png) заменяет v1 на странице.
Исправлен шаг: передняя стопа опирается на коврик, задняя естественно следует за ней;
сохранены композиция и смысл двух состояний света. Предыдущий исходник оставлен для истории.
Проверка: `yarn build` прошёл; Astro check — 0 errors / 0 warnings / 0 hints.
В preview при 1440×900 и 320×800 загружена версия v2, исправленный шаг виден,
изображение помещается в контент.
Режим: встроенный ImageGen, редактирование `arrival-v1.png`. Исходный результат:
`/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-a13f65fc-1cee-4816-be6f-5f035c851a9d.png`.

Точный промпт исправления:

```text
Use case: precise-object-edit.
Asset type: an existing two-panel architectural illustration for Module lighting documentation.
Input image: edit target, the original illustration without markup.
Primary request: correct ONLY the woman's lower legs, ankles and white sneakers in the LEFT hallway. Her current front foot is unnaturally twisted and presents the sole toward the viewer. Give her a small, anatomically believable walking step INTO the room toward the bench/cupboard on the right, consistent with her torso and head. Both knees, ankles and sneaker toes must point in the same natural direction of travel, diagonally toward the interior/right, away from the open doorway behind her. Show the shoes in a natural three-quarter side view. The leading sneaker is planted on the rug, sole flat on the floor; the trailing foot is a short step behind, its toes contacting the floor and heel only slightly raised. Feet are separated naturally, no crossed ankles, no twisted joints, no reversed shoes, no floating feet, no exposed sole facing the viewer. Adjust the trouser hems and small contact shadows only as needed for this corrected stance.
Invariants: preserve her head, face, upper body, coat, hands, grocery bags, position and scale. Preserve the entire architecture, furniture, decorations, rugs, sensor, lighting, perspective, off-white background, two equal panels and wide 2:1 framing. The RIGHT panel must remain the same empty unlit hallway. Keep the exact refined matte architectural illustration style and color palette. No text, no circles, no arrows, no annotations. Make this a tightly localized anatomical correction, not a new composition.
```

## Днём лишний свет не включается

```text
Section title for context only (do not render text): Днём лишний свет не включается
Scene: Two equally sized views of the SAME simple room and same person passing through it. Left: large window admits ample bright natural daylight, clear daylight patches on the floor, ceiling pendant is visibly OFF with no glow. Right: overcast late dusk through the same window, natural light much lower, same person passing, ceiling pendant ON casting warm light. Show that the presence of a person is the same in both panels and only daylight availability changes. Minimal furniture, no desk screens.
```

## Вы включаете кнопкой, свет выключается сам

```text
Section title for context only (do not render text): Вы включаете кнопкой, свет выключается сам
Scene: Two equally sized matching cutaways of a tidy small pantry/storage room with simple wooden shelves, baskets and a visible ordinary wall pushbutton. Left: an adult presses the wall pushbutton by the entrance, room lit by a warm ceiling fixture. Right: the same room later empty and ceiling light OFF, no one pressing any button. A small realistic analog wall clock can appear in BOTH rooms with different hand positions but no numerals or markings. This illustrates switching off at a chosen time of day, NOT a countdown: no digital timer, no hourglass, no duration labels. Keep the hand and button anatomically clear, avoid extra fingers.
```

## Свет учитывает то, чем вы заняты

```text
Section title for context only (do not render text): Свет учитывает то, чем вы заняты
Scene: One coherent wide cutaway of TWO adjacent activity zones, both already comfortably illuminated. Left: two adults seated at a small table quietly conversing face to face, one gently gesturing; overhead warm light stays ON, no one arriving or using a switch. Right: an adult walking at an easy pace on a clearly recognizable electric treadmill, illuminated exercise area and running treadmill. People and equipment should be simple and readable. The idea is sustained lighting during conversation or equipment use. Do not show sound turning an OFF light ON. No soundwave overlays, measuring graphs or watt numbers.
```

Дополнение от 8 октября 2026 года: в текущую иллюстрацию добавлен просмотр телевизора.
Версия [activities-v2.png](../src/assets/docs/lighting/sections/activities-v2.png) показывает
три соседние зоны: разговор, тренировку и спокойный просмотр с мягкой тёплой подсветкой
на фоне сумерек. Измерение потребления и условия включения поясняет текст страницы;
сцена не изображает управление шторами. Версия v1 сохранена как исходник редактирования.
Проверка: `yarn build` прошёл; Astro check — 0 errors / 0 warnings / 0 hints.
В preview при 1440×900 и 320×800 проверены три сцены, подпись и переход из оглавления;
изображение и подпись помещаются в контент. `git diff --check` пройден.
Режим: встроенный ImageGen. Исходный результат:
`/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-eed98043-2e34-4a58-a1b6-593569f781eb.png`.

Точный промпт дополнения:

```text
Use case: precise-object-edit.
Asset type: wide section illustration for Module lighting documentation.
Input image: the existing two-zone activities illustration is the edit target and exact visual style reference.
Primary request: add the television-viewing scenario as a third clear activity zone, while keeping the existing conversation and electric treadmill scenarios. Recompose the two-zone illustration into THREE neighboring axonometric room cutaways on one coherent floor slab, left to right: conversation, exercise, television. Keep the landscape 2:1 framing and generous off-white margins, with all three zones readable at page width.
Left: retain the two seated adults having a quiet conversation across a small table under an already-ON warm pendant light. No one touches a switch. The light remains on during their activity.
Center: retain an adult walking on an electric treadmill with a clearly recognizable belt, console and handrails, under normal comfortable warm task light. Natural anatomy, correctly aligned legs and feet resting on the belt in a believable walking step.
Right: add a cozy small television-viewing lounge. One adult sits relaxed and nearly motionless on a low sofa, physically facing and looking at a wall-mounted television that is visibly ON with an abstract unbranded film landscape. Show both the screen and the viewer clearly in the cutaway. The room is more subdued than the other two zones. A real concealed warm LED strip behind the television or underneath its media console casts a soft amber glow onto the wall and floor, clearly distinct from the cooler glow of the screen. A small window shows late sunset transitioning to blue twilight, expressing that the viewing light is appropriate to the solar phase and available daylight. No curtain movement, no closed blinds, no curtain scenario. The television is the active appliance; do not show a person pressing a lighting switch, no motion sensor activating the light.
Lighting narrative: comfortable bright light for conversation and exercise, quieter lower-level warm accent lighting for watching television after sunset. The TV backlight must visibly be artificial room lighting, not only illumination from the television screen.
Preserve the refined matte limestone architectural style, charcoal details, restrained terracotta clothes, cream surfaces, warm amber light, muted natural plants and accurate perspective of the input. Keep furniture uncluttered and the figures large enough to understand. The rooms can be compressed/rearranged to fit the new three-zone composition. No new activities, no letters, labels, UI, numbers, watt meters, icons, arrows, electrical diagrams, logos or watermarks.
```

## Ручное действие сохраняет смысл

```text
Section title for context only (do not render text): Ручное действие сохраняет смысл
Scene: Two equal cozy living-room vignettes. Left: seated person watching an abstract unbranded film on a TV, MAIN CEILING LIGHT OFF, dim reflected TV light only, one person casually shifts position; visible wall button nearby. A small motion sensor must not glow. Right: same room as a separate situation, a seated adult calmly reading a book under a deliberately ON warm floor lamp, relaxed still posture; ordinary wall button visible. Show two legitimate human choices: darkness for a movie and sustained warm light for quiet reading. Do not show automatic turning back on during the movie. No magic gestures, remotes with labels, lock symbols or text.
```

## На улице свет появляется с наступлением темноты

```text
Section title for context only (do not render text): На улице свет появляется с наступлением темноты
Scene: Two matching compact axonometric exterior views of the SAME understated modern house entrance, three steps, short path and a planted bed. Left view under daylight: wall lights and low path fixtures visibly OFF. Right view at dusk: sky muted twilight, wall and path fixtures ON with gentle warm light illuminating steps and walking surfaces. BOTH views have NO people, establishing that this scene responds to darkness without requiring movement. Keep the house footprint small, attractive, unbranded, no city panorama or garden clutter.
```

## Для разных зон — своё поведение

```text
Section title for context only (do not render text): Для разных зон — своё поведение
Scene: A single continuous axonometric cutaway floor slab with THREE neighboring zones separated by low architectural walls. Left: empty short hallway, ceiling light OFF and dim. Center: person doing a practical task at a workbench, bright neutral warm task illumination ON. Right: a person resting in a comfortable armchair under a softer warm lamp. Clear visible differences between independent lighting zones; no before/after panels and no group synchronization. Same restrained architecture and furniture vocabulary as the reference, no wires, controllers or connecting arrows.
```

## Яркость и оттенок под ситуацию

```text
Section title for context only (do not render text): Яркость и оттенок под ситуацию
Scene: Triptych of THREE equal compact axonometric views of the SAME lounge with a desk, chair, large window and concealed adjustable light strip. Left: daytime through window, person working, brighter neutral white task light. Center: sunset through window, person reading, softer distinctly warmer amber light. Right: nighttime through window, person relaxing, restrained desaturated plum/rose accent light along one shelf and low warm ambient light. Show brightness, white-light temperature and controllable color as THREE distinct moods, with same underlying furniture and fixture layout. Colors sophisticated and subtle, not neon RGB gamer aesthetics. No gradient bars, clock icons, sun icons or captions.
```

## Какой результат нужен вам

```text
Section title for context only (do not render text): Какой результат нужен вам
Scene: A warm architectural editorial scene of a homeowner and a practical installer/adviser seated or standing around a table, collaboratively considering a small physical cutaway house model. One person points at the model's hallway, the other looks thoughtfully. The table model has only three readable zones: entry, kitchen counter, cozy chair, with tiny plausible warm illuminated fixtures. Keep people and miniature clearly scaled; the miniature is visibly a tabletop physical model, not a full-size room. No paperwork full of settings, laptops, phone UI or engineering diagrams. Convey choosing desired everyday outcomes together before setup. Same matte architectural material treatment and quiet terracotta accents as reference.
```

## Два новых сценария — 9 октября 2026 года

Встроенный ImageGen, две отдельные генерации с `transparent_background: true`. Результаты сразу
содержат прозрачность, без программного изменения сцен. Существующий DocsScenarioImage создаёт
WebP/srcset и применяет скругление 16 px; внешний фон задаёт тема документации.

| Сценарий | Референс | Новый исходник |
| --- | --- | --- |
| Комната без окон | [arrival-v2.png](../src/assets/docs/lighting/sections/transparent/arrival-v2.png) | [windowless-room-v1.png](../src/assets/docs/lighting/sections/transparent/windowless-room-v1.png) |
| Тёплый вечер и световой будильник | [light-profiles-v1.png](../src/assets/docs/lighting/sections/transparent/light-profiles-v1.png) | [bedroom-dawn-v1.png](../src/assets/docs/lighting/sections/transparent/bedroom-dawn-v1.png) |

Визуальная проверка: две одинаковые гардеробные без окон, пустая тёмная и освещённая при входе;
три одинаковые спальни с вечерней, начальной утренней и более яркой нейтральной подсветкой.
Детальная роль датчиков и расписание остаются в тексте, а не зашифрованы в маленьких обозначениях.
Внутренние поверхности непрозрачны; фон между сценами прозрачный.

### Финальный промпт комнаты без окон

```text
Create a new companion illustration for Russian lighting automation documentation, using the reference only for the refined axonometric cutaway architectural style, matte limestone walls, warm natural wood, believable people and soft realistic fixture light. Landscape 2:1. Exactly two equally sized side-by-side cutaway views of the SAME compact WINDOWLESS walk-in wardrobe/pantry, no windows anywhere, muted beige shelving with folded linens and baskets, clearly visible doorway in side wall, same camera and geometry. Left: empty dark room with door closed and ceiling fixture OFF, enough subtle ambient fill to understand shapes but obviously dark. Right: same room with door half open and a woman in muted terracotta casual clothes taking her FIRST step inward over the threshold, ceiling light already ON casting warm usable light. Her body and foot clearly enter the room, not exit. Tiny realistic reed contact on upper door frame, small vibration sensor on door, tiny flush presence sensor on inside jamb, unobtrusive, no graphical beams or diagrams. The image communicates light is ready at the threshold of a room with no natural daylight. Keep all solid architecture and interiors opaque, only the exterior empty canvas fully transparent alpha, no white/gray backdrop, no floor plane outside the separate architectural bases. Leave generous clear margin around both scenes and gap between them. No text, numbers, labels, logos, arrows, UI or badges.
```

### Финальный промпт спальни

```text
Create a new companion illustration for Russian lighting automation documentation, using the reference only for the refined axonometric cutaway architectural style, matte limestone walls, warm natural wood, believable human figure, clean sculptural architecture and realistic soft lighting. Landscape 2:1, exactly THREE equally sized side-by-side views of the SAME bedroom with the same bed, pale linen bedding, upholstered headboard, wall art and minimal wooden bedside table, same camera and scale. Warm-to-neutral tunable-white indirect LED strip concealed behind the headboard and along a horizontal wall cove is the ONLY active artificial light source; no hanging lamps, no colored RGB decorative light. Left scene EVENING: woman sits in bed reading in dim very warm amber light about 1800 Kelvin, calm low illumination. Middle scene START OF ARTIFICIAL DAWN: woman sleeping under bedding, low warm LED strip just lit, still dark outdoors behind a small curtained window. Right scene END OF ARTIFICIAL DAWN: woman sitting up waking, the same LED strip now brighter neutral white approximately 4000 Kelvin, bedroom comfortably brighter, window still predawn muted blue so the LED lighting clearly causes the brightness. Distinguish evening amber, early dawn low warm, later dawn brighter neutral white; don't make final scene harsh blue. Keep solid architecture and all room interiors opaque. Empty exterior canvas fully TRANSPARENT alpha, no colored background and no exterior floor plane. Generous margins and gaps between rooms. No lettering, numbers, clocks, labels, arrows, logos, settings or UI. Consistent architecture and viewpoint, warm understated materials matching the reference.
```
