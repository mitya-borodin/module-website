# Интерьерные иллюстрации коммерческих страниц Ritmod

Решение автора от **9 октября 2026 года**: остальные изображения главной и страницы ПО
привести к стилю кадров 2–4 карусели. **Документация сохраняет свой прежний стиль.**
Владелец визуального правила — [общий стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md#различие-коммерческих-обложек-решение-9-октября).
Этот файл владеет исходниками и промптами новой серии, а не продуктовым поведением.

## Состав и границы

Главная уже использует согласованный щит и три интерьерные сцены. На странице ПО обновлены
обложка, все десять карточек каталога и пять мест для будущего GUI. Для отопления и штор
переиспользованы одобренные кадры карусели. Освещение получило отдельную ночную версию
сцены прихода; происхождение остальных изображений описано ниже.

Камера находится внутри помещения или у оборудования на уровне человека. Тёплые материалы,
матовый камень, дерево и мягкий свет сохраняют семейство иллюстраций. Кадр 3:2 заполняет свою
область без белой подложки и обрезки. На каталоге короткая подпись действия и точки отмечают
оборудование; на обзорной сцене — четыре ссылки с отдельным HTML/SVG-слоем. По последнему
уточнению автора подписи находятся внутри всех изображений, включая пять GUI-иллюстраций:
обзор света/климата/штор, режим кино и свет, имя и помещение устройства, движение и включение света,
сообщение и действие пользователя. Текст остаётся чётким и редактируемым HTML-слоем.

В GUI-блоках остаётся по одной иллюстрации и явная пометка. План замены реальным
проверенным экраном хранится только во внутренней документации. Условные нечитаемые экраны не являются макетами или доказательством
существования интерфейса. Публичные описания функций, адреса переходов, логика автоматизаций
и файлы `src/content/docs/`, `src/assets/docs/` не входят в область изменения.

## Исходники

Все новые PNG сохранены в `src/assets/site/`; Astro создаёт адаптивные WebP.

| Назначение | Исходник |
| --- | --- |
| Обзор дома | [software-home-interior-v1.png](../src/assets/site/software-home-interior-v1.png) |
| Освещение | [commercial-lighting-night-v1.png](../src/assets/site/commercial-lighting-night-v1.png) |
| Кондиционирование | [commercial-cooling-v1.png](../src/assets/site/commercial-cooling-v1.png) |
| Защита воды | [commercial-water-protection-v1.png](../src/assets/site/commercial-water-protection-v1.png) |
| Защита газа | [commercial-gas-protection-v1.png](../src/assets/site/commercial-gas-protection-v1.png) |
| Рециркуляция | [commercial-recirculation-v1.png](../src/assets/site/commercial-recirculation-v1.png) |
| Параллельная загрузка бойлера | [commercial-boiler-loading-v1.png](../src/assets/site/commercial-boiler-loading-v1.png) |
| Приводы | [commercial-drives-v1.png](../src/assets/site/commercial-drives-v1.png) |
| Учёт ресурсов | [commercial-metering-v1.png](../src/assets/site/commercial-metering-v1.png) |
| Дашборд | [gui-dashboard-interior-v1.png](../src/assets/site/gui-dashboard-interior-v1.png) |
| Ручное управление | [gui-manual-interior-v1.png](../src/assets/site/gui-manual-interior-v1.png) |
| Разметка устройств | [gui-devices-interior-v2.png](../src/assets/site/gui-devices-interior-v2.png) |
| Создание автоматизаций | [gui-create-interior-v2.png](../src/assets/site/gui-create-interior-v2.png) |
| Уведомления | [gui-notifications-interior-v1.png](../src/assets/site/gui-notifications-interior-v1.png) |

Одобренные кадры `service-arrival-scene-v1.png`, `service-climate-scene-v1.png` и
`service-evening-scene-v1.png` и их промпты — у [владельца карусели](service-scenes-concept-images.md).

## Метод и осмотр

Встроенный **ImageGen**. В каждом первом проходе использованы два стилевых референса:
[встреча дома](../src/assets/site/service-arrival-scene-v1.png) и
[климат](../src/assets/site/service-climate-scene-v1.png).
Каждый финальный промпт состоит из общего префикса ниже и строки `Scene: ` с соответствующим
содержанием. Для трёх кадров выполнена точечная правка с предыдущим результатом как edit target:
отделён датчик воды от шланга, убраны невозможные связи газовых и водяных труб, убран экран
с обратной стороны крышки ноутбука. В кадре учёта остались три независимых вида ресурсов;
он не претендует на полную монтажную схему всех поддерживаемых счётчиков.

Все финальные изображения просмотрены в исходном размере. Результаты сборки и адаптивной
проверки — у [владельца реализации](commercial-pages-visual-refresh.md).

## Общий префикс промптов

```text
Use case: stylized-concept.
Asset type: marketing illustration for Ritmod home automation website.
The supplied images are STYLE REFERENCES ONLY. Match their warm refined architectural render, natural eye-level perspective from inside a real space, tactile beige plaster, light oak, limestone, cream linen, understated muted terracotta and olive accents. Rich lifelike materials with the same gentle 3D editorial quality. Create a new scene in this visual family.
Full-bleed horizontal 3:2 image, 1536x1024. Fill the frame with the scene, no white border, no isolated miniature, no dollhouse, no floor slab, no overhead floor plan, no infographic collage. Everything must be physically supported, mounted, and connected; human anatomy and hands must be natural.
No rendered lettering, logos, captions, arrows, graphical overlays, numeric readings or watermarks. Website overlays will be added separately. Product abilities must be represented by concrete household equipment and human use. Avoid excessive clutter. 
```

## Обзор дома

Результат ImageGen: `exec-ddb0f51a-e647-4e5a-8241-be56c51bb570.png`.

```text
Scene: A wide interior establishing view from one side of a coherent spacious modern home, showing several connected domestic zones at once, so the image clearly communicates a whole-home system. LEFT: large sunny window with linen curtains on a visible real rail, a beige living-room sofa and a softly glowing floor lamp, low radiator below the window, a small wall temperature sensor. CENTER: dining table and an open kitchen with oak cabinets and a sink; ceiling pendant lights on. RIGHT: a door open into a small tidy utility alcove containing a water supply manifold, an inline motorized water valve and washing machine, all realistically installed against a wall. A split air conditioner on solid upper wall by kitchen, with actual mounting clearances. Calm warm daylight and inviting inhabited quality, no people necessary. Camera at standing human eye level, wide architectural interior lens without fisheye, continuous believable floor/walls. No cutaway or separated rooms. Four automation areas should be visually distinct and easy to annotate: curtains, light, climate, water.
```

## Освещение ночью

Уточнение автора **09.10.2026**: в карточке «Свет там, где он нужен» яркий день за окном
противоречил показанному включению света по движению. Для этой карточки создан
[ночной вариант](../src/assets/site/commercial-lighting-night-v1.png) одобренной
[сцены прихода](../src/assets/site/service-arrival-scene-v1.png), 1536×1024.

Встроенный **ImageGen**, режим edit / lighting-weather.
Результат: `exec-06863b27-3c1a-42df-9bcb-92e2cfe9bfb6.png`.
За окном и открытой дверью ночь; солнечные пятна убраны, потолочный светильник и торшер
освещают человека и интерьер. Композиция и положение датчика/лампы сохранены.
В [каталоге](../src/data/automation-catalog.ts) заменены импорт изображения и alt-текст.
Подпись «Движение → свет» и две HTML/SVG-отметки остаются поверх изображения.
Дневная сцена главной объясняет также шторы с учётом солнца и использует прежний исходник.

Проверено **09.10.2026**: исходник осмотрен; `yarn build` — успешно, `astro check` —
0 errors/warnings/hints. На 390×844 и 1280×700 загружается ночной WebP, изображение целиком 3:2,
подпись внутри картинки, отметки у датчика и светильника; горизонтального переполнения нет.
[Мобильная карточка](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/lighting-night-mobile.png).
Изменена иллюстрация и альтернативное описание, логика автоматизаций и публикация не затронуты.

Финальный промпт:

```text
Use case: lighting-weather.
Asset type: marketing illustration for the lighting automation card on the Ritmod website.
Input image 1 is the EDIT TARGET: the approved arrival-home interior.
Primary request: change only the time of day and lighting to NIGHT. The woman is arriving home after dark, and the warm entrance light has switched on for her.
Keep the exact camera, 3:2 landscape framing, interior architecture, furniture positions, open door angle, woman identity, face, clothing, pose, hands, plants, window and curtain positions. Preserve the round wall sensor at approximately x478/y337 and entrance ceiling light at x294/y46 in the 1536x1024 composition, so existing website overlays still align.
Outside BOTH the large window and the open entrance door it must be unmistakably night: deep dark navy sky, dim tree silhouettes, a few distant subtle city lights. No daylight, no sunset, no sunlit foliage. Remove all hard sunlight patches and window-shaped solar shadows from the interior wall, sofa, floor and curtains.
Inside, keep the existing entrance ceiling light and existing floor lamp switched on with inviting warm amber practical light. Make their lighting believable, illuminating the arriving woman, threshold, sensor, sofa and room with soft falloff. Preserve a clear readable interior, tactile cream linen, oak and beige plaster; richer nighttime contrast, not a globally underexposed image. Night should be immediately obvious from the windows and doorway.
Retain the approved refined realistic architectural-render style and all object geometry. Full image 1536x1024, edge-to-edge, opaque.
No added objects or people, no text, no labels, no icons, no drawn circles, no arrows, no glowing technology effects, no borders, no watermark. Existing automation labels will remain a separate website overlay.
```

## Кондиционирование

Результат ImageGen: `exec-b84de52d-bc0c-48bd-a22e-cf0e48fb8518.png`.

```text
Scene: Comfort on a hot sunny day. Interior eye-level medium-wide view of a cozy room with a small home-office corner. A person sits comfortably reading on a cream sofa at lower LEFT. At upper RIGHT, one off-white wall-mounted split air conditioner is clearly visible on a solid plaster wall, a small round room sensor below and left of it. Bright green trees and blue sky through a large window on the LEFT. Pale linen blinds soften sunshine. Oak table with glass of water, a few plants. Emphasize cool comfortable shade inside versus bright hot daylight outside, with warm neutral materials matching the reference, not cold blue color grading. AC and sensor physically mounted; no literal airflow graphic.
```

## Защита воды

Результат ImageGen: `exec-046766ca-7776-46b8-87cd-81258413c3d6.png`.

```text
Scene: Water-leak detection and shutoff in a beautiful practical laundry room, eye-level low-medium camera inside the space. RIGHT: a white front-loading washing machine beside an oak cabinet and cream stone sink. On the floor close to the machine hose there is a SMALL realistic shallow puddle touching a compact white round leak sensor, no dramatic flood. LEFT wall: a visible domestic water inlet pipe with a compact motorized brass ball valve in line, above a tidy low plumbing access niche. Pipes run continuously to the valve and wall, no floating or disconnected components. A very tiny status LED on sensor may be amber. No people, no damaged appliances, no spraying water. Calm warm materials, clearly legible sensor, puddle, and valve at web-card scale.
```

Финальная точечная правка:

```text
Use case: precise-object-edit. Edit this laundry room illustration only in one small area: the corrugated gray washing machine drain hose currently appears joined to the small round floor leak sensor. This is wrong. REMOVE that visible gray corrugated hose entirely from between the machine and the sensor. Keep the white circular sensor as a standalone wireless puck on the wet floor, with empty visible floor separating it from the machine. Preserve the small puddle touching the sensor and everything else exactly: valve, pipes, machine, cabinetry, sunlight, framing and warm render style. No new text or graphics.
```

## Защита газа

Результат ImageGen: `exec-25267045-26e6-45c7-a395-eed9c4d2fdea.png`.

```text
Scene: Gas safety equipment in a tidy warm domestic kitchen, viewed from inside at eye level. An unlit gas cooktop is in the LEFT half on a limestone countertop, oak lower cupboards. On the RIGHT solid wall near the ceiling a compact white natural-gas detector is physically mounted with a small amber indicator. Lower on that same wall, a neatly installed accessible gas pipe has an inline shutoff solenoid valve with compact black actuator and brass body, pipe visibly continuing both sides into fixed wall runs. Keep equipment clearly recognizable but no microscopic wiring diagrams. No visible gas, smoke, flame, fire or evacuation drama. Calm daylight and the same premium warm beige and oak style as references. No people.
```

## Рециркуляция

Результат ImageGen: `exec-eba007dd-2568-48df-972b-605554100de5.png`.

```text
Scene: Hot water when getting ready. Eye-level interior of a refined beige bathroom with an oak vanity, limestone basin and chrome faucet in CENTER-RIGHT, a thin stream of water running into basin. On LEFT, an open shallow plumbing service cupboard integrated into the wall reveals a compact hot-water circulation pump physically inserted into continuous insulated pipes, tidy red and blue rings around pipe insulation. A small unobtrusive motion sensor mounted on wall by the bathroom entrance. No people required, no steam clouds, no exposed heater coils. The room feels lived-in and warm; pump is accessible and believable, not an engineering exploded diagram. Compose bathroom fixture and actual pump in one continuous space, not split panels.
```

## Параллельная загрузка бойлера

Результат ImageGen: `exec-9c118eb6-713e-4af2-9987-e42f09bb1585.png`.

```text
Scene: A tidy domestic mechanical room, eye-level three-quarter view. LEFT: wall-mounted heat source with connected supply and return pipes. CENTER: a tall cylindrical indirect hot-water storage tank, with a small tank-temperature probe housing and a direct circulation pump group without mixing valve, connected to the heat source by plausible continuous pipes. RIGHT: a compact ventilation air-handling unit attached on the wall with two large silver air ducts and a water heating coil branch supplied through a second independent pump circuit. Make tank and ventilation visually distinguishable. Neat pipe runs held by wall clamps, pumps inserted into lines, service access, muted red/blue bands, beige plaster and light stone floor. A premium but plausible installed equipment room. No technical diagram, no transparent tank, no orange glowing coils, no arrows, no people.
```

## Приводы

Результат ImageGen: `exec-e82fcefd-90d8-47d8-8021-1d25949310a8.png`.

```text
Scene: A sheltered modern garden terrace at a house, viewed from inside the open garage towards the driveway and green garden at human eye level. The partially raised sectional garage door overhead has a clearly mounted ceiling motor and a metal rail physically joining it to the door through a short linkage. Through the opening, a modern sliding driveway gate is half open with a compact motor fixed on a concrete base next to the gate and visible rack attachment. Calm beige stone, dark bronze metal, oak slats, late afternoon greenery. No cars blocking mechanism, no people, no unsafe movement. Clear realistic geometry of motor supports, track, gate and garage-door linkages, with no floating connections. Full-frame architectural scene, not isometric.
```

## Учёт ресурсов

Результат ImageGen: `exec-3a668755-e8b2-405b-aaf3-19f07a14b363.png`.

```text
Scene: Close eye-level interior view of a clean residential utility alcove with resource metering equipment, installed against a warm beige wall. LEFT: a closed electrical metering panel with a small meter window, no exposed live connections. CENTER: two compact water meters physically inline with continuous copper pipes, hot and cold subtly marked by red and blue ring collars, neatly held by real wall clamps. RIGHT: a domestic gas meter physically connected to its yellow-coded inlet and outlet pipes, separate from the water runs. An understated small heat-meter sensor/display on the heating pipe pair below. A limestone countertop edge and an oak cupboard frame anchor it in a real interior. Equipment readable at card size, no digital graphs or invented numbers; blank tiny dark displays. No plant in front of meters, no people, no infographic.
```

Финальная точечная правка:

```text
Use case: precise-object-edit. Correct only the lower pipework in this utility illustration. There is an impossible cross-connection between the copper water meter lines and the yellow gas pipe at the bottom. Remove the entire lower horizontal heat-meter assembly and both horizontal cross-connecting pipes. Under the two round water meters, run TWO SEPARATE straight copper pipes vertically down into the countertop through separate small collars. Keep the yellow gas pipe separate on the right, its own straight continuous vertical path into the countertop. No water pipe may touch any gas pipe. Keep the electrical cabinet, two water meters, gas meter, independent upper lines and wall fixings, warm materials, lighting, camera, all other composition unchanged. Three resource groups only: electricity, water, gas. No text or graphics.
```

## Дашборд

Результат ImageGen: `exec-399025c2-db28-44ad-9d61-c6eab3e303ef.png`.

```text
Scene: A person seated at an oak table in a warmly lit living room, viewed over the shoulder with an open laptop in the central foreground and a smartphone resting next to it. The actual home fills the background: cream sofa, soft lamp, linen curtains and a wall thermostat. Devices suggest a coherent overview of the home. Screens show only softly defocused neutral blocks, subtle abstract status cards, absolutely no legible words, numbers or invented product brand. No giant floating interfaces or futuristic holograms. Natural hands, calm daytime atmosphere. The shot should feel like everyday use, not a staged electronics advertisement, and be recognizable in the 3:2 website slot.
```

## Ручное управление

Результат ImageGen: `exec-3f34b279-addb-4d16-9687-2a539b4e1856.png`.

```text
Scene: Everyday manual control of a room for watching a movie. Medium interior view from beside a cream sofa: an adult comfortably seated at LEFT holds a smartphone and naturally taps the screen with one finger; all hands and fingers anatomically correct. A television physically standing or wall-mounted at RIGHT displays a dim abstract movie scene with no recognizable film or text. Linen curtains partly drawn; soft restrained violet and amber mood light along the sofa wall and a low warm lamp show the selected room mood. The phone screen has softly defocused neutral controls, no readable words or numbers, not a real product screenshot. Keep the scene warm and premium, no holograms, no floating controls.
```

## Разметка устройств

Текущий исходник — [gui-devices-interior-v2.png](../src/assets/site/gui-devices-interior-v2.png),
1536×1024, встроенный ImageGen, edit от 09.10.2026.
Результат: `exec-261370b8-0c8d-4ee5-af9e-1b9d76846d8d.png`.
Edit target — прежняя интерьерная сцена; референс —
[щит главной v4](../src/assets/site/service-cabinet-wiren-board-v4.png).
Сохранены человек, датчик, планшет, интерьер и кадр 3:2. В щит перенесены четыре ряда:
защита в согласованном порядке, групповые автоматы и контроллер с SSR, питание/реле/диммер/0–10 В,
затем клеммы. [Владелец компоновки щита](service-cabinet-components-image.md).
Мелкие маркировки — часть иллюстрации, не монтажная схема.

Поверх кадра HTML-подпись: «Датчик движения в прихожей» и «Задаём имя, помещение и назначение».
[Публичный смысл и evidence разметки](browser-control-concept-image.md#смысл-разметки-и-щит-уточнение-9-октября).

Финальный промпт v2:

```text
Use case: precise-object-edit.
Asset: landscape 3:2 illustration for the Ritmod website section explaining device naming and room assignment.
Input 1 is the EDIT TARGET: the warm hallway scene with a technician holding a tablet, pointing to a round wall sensor, and an open cabinet on the left.
Input 2 is the APPROVED CABINET REFERENCE from the homepage. Transfer this exact internal equipment layout into the wall cabinet of input 1, adapting scale, perspective, shadows and warm lighting naturally.
Change ONLY the cabinet interior, door details and enclosure as needed to fit the referenced four-row layout. Preserve the technician's face, anatomy, hands, pose, tablet, wall sensor, room, window, furnishings, plants, camera, warm palette and full 3:2 composition.
Cabinet rows must clearly match input 2:
TOP: five distinct protection groups left to right: two-pole incoming breaker, SPD with two green windows, voltage monitoring relay with dark digital display, RCD with test button, AFDD with indicator.
SECOND: branch breakers on left, broad white Wiren Board 8 controller in center, narrow white WBIO-DO-SSR-8 directly beside it on the right, recognizable green terminals.
THIRD: compact 24 V power supply, WB-MR6C relay, WB-LED dimmer, WB-MAO4 analog output module left to right. White enclosures with green terminals and green wb marks as in reference.
BOTTOM: orderly blue, grey and yellow-green terminal blocks.
Everything must be physically mounted to DIN rails/backplate and attached to the wall, with realistic cable ducts, no floating equipment, no loose wires. Keep the door hinged open left and a subtle bonding wire. Keep the entire cabinet inside the scene, with the technician not covering key equipment.
Preserve a refined warm architectural interior render, not an electrical schematic. No arrows, infographic panels, holograms, captions or UI text in the raster; the site adds editable Russian captions. Tablet remains neutral and indistinct. Hardware markings may follow the reference, no Ritmod branding on hardware. Opaque background.
```

Предыдущий исходник v1 сохранён. Его первоначальный промпт:

Результат ImageGen: `exec-bb2af189-99eb-458c-ba13-a8bfcb0ade26.png`.

```text
Scene: An installer mapping devices to a room in a real finished home. Eye-level view: a neat open automation cabinet physically mounted on the solid LEFT wall of an oak-and-beige hallway, with believable DIN-rail modules, cable ducts and closed terminal faces. An adult technician standing centrally holds a tablet in one hand and points with the other hand toward a small wall sensor beside a doorway into a softly lit living room on RIGHT. Do not touch electrical terminals. Tablet has indistinct neutral shapes only, no readable UI or text. Show the connection in meaning between installed equipment, room and device using natural composition, no arrows or overlay text. Correct human anatomy, natural professional everyday clothes, warm daylight.
```

## Создание автоматизаций

Текущий исходник: [gui-create-interior-v2.png](../src/assets/site/gui-create-interior-v2.png).
Уточнение автора **09.10.2026**: сцену перевести в вечер, чтобы она соответствовала
описанию включения света, когда темно. За окнами сумерки; прямой солнечный свет и пятна
убраны. Подвесной светильник освещает людей и стол, дополнительная лампа — правую часть комнаты.
Люди, композиция, датчик и обычная задняя поверхность крышки ноутбука сохранены.

Метод — встроенный **ImageGen**, edit / lighting-weather; исходный
[дневной кадр](../src/assets/site/gui-create-interior-v1.png) использован как edit target.
Результат: `exec-e1806015-ff76-484d-b3ea-47589749d79f.png`, 1536×1024.
В [software.astro](../src/pages/software.astro) заменены импорт и alt-текст этого аспекта;
подпись «Движение → включение света» сохраняется отдельным HTML-слоем.

Проверено **09.10.2026**: исходник осмотрен; `yarn build` успешен, `astro check` —
0 errors/warnings/hints. На 390×844 и 1280×700 загружается вечерняя версия WebP,
картинка сохраняет 3:2, подпись читается, горизонтального переполнения нет.
[Мобильная карточка](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/gui-create-evening-mobile.png).
Изменена только иллюстрация и alt-текст; логика автоматизаций и публикация не затронуты.

Финальный промпт:

```text
Use case: lighting-weather.
Asset type: Ritmod website illustration for creating a lighting automation.
Input image 1 is the EDIT TARGET. Change ONLY the time of day and lighting to LATE EVENING, after sunset, when the room needs artificial light.
Outside every visible window: dark blue twilight sky and dim silhouettes of trees, unmistakably dusk with no sunlit foliage or bright daytime sky. Remove all direct sunlight and leafy sun shadows from the walls, curtains, table and people.
The existing large pendant above the table is switched on and is the main warm light source, clearly lighting the work surface and faces. The existing small lamp at the right also provides a soft warm glow. Make the atmosphere cozy and readable, with warm practical interior light contrasting with the cool dark exterior; do not globally darken or tint the whole image.
Preserve exactly the camera, wide 3:2 composition, room geometry, both people's identities, faces, poses, clothes, hands, the laptop orientation, all furniture, plants and the wall sensor. The laptop lid faces the camera: its BACK must remain plain matte grey, with no screen, logo or text on it. Keep the existing refined realistic architectural rendering, cream linen, warm oak and beige plaster.
Output 1536x1024, opaque, edge-to-edge. No added people or objects, no rendered text, UI, captions, arrows, circles, watermarks or borders. Website automation labels will be added separately.
```

### Предыдущий дневной вариант

Результат ImageGen: `exec-5aab50d5-3227-4062-be9d-9029be5f792c.png`.

```text
Scene: A home owner and a specialist seated at an oak dining table in a real warm modern interior. Both adults discuss how the room should work while looking at an open laptop; one points naturally to the screen, the other looks at it. In the background, a real lit pendant, curtains mounted on a rail, and a small wall sensor illustrate the home behavior being planned. No miniature room model or floor plan on table. Laptop screen softly out of focus with a few simple connected neutral blocks, no readable text, no invented detailed product GUI. Keep faces and hands natural, bodies uncluttered, warm cream/wood palette, realistic eye-level camera from side of table.
```

Финальная точечная правка:

```text
Use case: precise-object-edit. Fix one mistake on this laptop. The camera sees the BACK of the open laptop lid, while the two people look at the front screen hidden from us. Remove the entire pale rectangular interface/picture currently printed on the BACK of the laptop lid. Make that entire back surface plain unmarked matte warm gray metal, with consistent lighting and perspective. No logo, no sticker, no screen on the back. Preserve the people, their faces, hands, body poses, all furniture, light, room, image framing and every other detail exactly.
```

## Уведомления

Результат ImageGen: `exec-baef5021-28aa-473e-ac40-3c990491ac94.png`.

```text
Scene: An adult at home reading and responding to a message on a smartphone. Eye-level intimate medium view: a person seated comfortably beside an oak side table, phone held in both natural hands, thumb poised over one abstract response area on screen. Background is a warm softly lit living room with linen curtain and plant, visual continuity with reference images. Screen visible at a slant with one softly blurred notification card and two subtle generic action shapes, no legible text, numbers, app brand or real UI screenshot. Face calm and attentive, not alarmed. No floating notification bubble, giant interface or hologram. Warm editorial architectural rendering, careful hands and realistic light.
```

