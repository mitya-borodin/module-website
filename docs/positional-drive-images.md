# Позиционный привод: иллюстрации

Статус: девять статических изображений для функционального описания, 8 октября 2026 года.
Режим: встроенный ImageGen, без CLI/API fallback. Страница и evidence — у
[владельца описания](positional-drive-functional-description.md).
Стиль — [общий визуальный стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).
Референс всех первых вариантов — [обложка освещения](../src/assets/docs/lighting/lighting-concept-v1.png),
предварительно осмотрена. Это референс стиля, не цель редактирования.

## Сохранённые изображения

| Изображение | Путь |
| --- | --- |
| position-drive-concept-v1 | [Исходник](../src/assets/docs/positional-drive/position-drive-concept-v1.png) |
| water-valve-v1 | [Исходник](../src/assets/docs/positional-drive/sections/water-valve-v1.png) |
| irrigation-v1 | [Исходник](../src/assets/docs/positional-drive/sections/irrigation-v1.png) |
| gates-garage-v1 | [Исходник](../src/assets/docs/positional-drive/sections/gates-garage-v1.png) |
| pool-cover-v3 | [Исходник](../src/assets/docs/positional-drive/sections/pool-cover-v3.png) |
| windows-vents-v3 | [Исходник](../src/assets/docs/positional-drive/sections/windows-vents-v3.png) |
| shutters-blinds-v1 | [Исходник](../src/assets/docs/positional-drive/sections/shutters-blinds-v1.png) |
| gazebo-screens-v1 | [Исходник](../src/assets/docs/positional-drive/sections/gazebo-screens-v1.png) |
| manual-control-v2 | [Исходник](../src/assets/docs/positional-drive/sections/manual-control-v2.png) |

## Общая часть промпта

К этой части без изменений добавлялась сцена из соответствующего пункта ниже.
Для исправлений указан самостоятельный полный промпт и входной файл.

```text
Use case: stylized-concept. Asset: Module documentation illustration. Use the supplied lighting cover ONLY as a style reference, create the different subject below. Wide landscape approximately 2:1. Refined axonometric architectural cutaway, slightly elevated viewpoint, coherent base slab, generous warm off-white margins. Matte limestone and plaster, natural wood, subtle graphite mechanisms, muted terracotta detail, realistic soft daylight, gentle contact shadows, simplified sculptural forms. Calm uncluttered composition clearly readable on mobile. No text, labels, numerals, logos, UI, glowing technology, floating symbols, arrows, schematic wiring, or fictional interface. Any people must have natural anatomy. No claim of certified safety or specific manufacturer compatibility.
```

## position-drive-concept-v1

Сцена первого варианта:

```text
Create one architectural property diorama with THREE adjoining clear areas: left a small utility room cutaway with visible plumbing and a compact motorized water valve; center a driveway with a modern sliding gate partly open and a clear path; right a small glass greenhouse with one roof vent visibly raised on a linear actuator. Show the variety of physical opening/closing mechanisms in a coherent residential scene. No people, no cables diagram, no oversized motors. All mechanical connections plausible; keep only these three uses.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-aa728582-e9fd-4ff2-9c30-8f54a6af8ab4.png`.
## water-valve-v1

Сцена первого варианта:

```text
One close architectural cutaway of a tidy residential utility/laundry corner: compact motorized ball valve on the incoming water pipe prominently visible near the wall, small leak sensor on the floor beside a modest puddle under a washing machine. Focus on water shutoff at a valve, without dramatic flooding. Keep all pipes connected, electrical housing dry, no exposed wires. The valve is a simple solid dark actuator on brass body, not a floating icon. No person.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-140cf288-d5fc-4fef-8d3b-3871223a1aef.png`.
## irrigation-v1

Сцена первого варианта:

```text
Two matched views of the same small domestic raised garden bed and accessible motorized irrigation valve beside it. Left irrigation in progress: modest sprinkler jets watering plants. Right irrigation stopped: same plants and sunlight, sprinkler off, no water jets. Show identical fixed plumbing and compact actuator in both views, no leaking pipe or isolated plumbing parts. Natural green and terracotta plants, no people. This only illustrates commanded water start/stop, not weather detection.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-bd8b6e3d-28b9-43c9-b4ac-201fcc864a8b.png`.
## gates-garage-v1

Сцена первого варианта:

```text
Two adjoining architectural areas on a shared property base: a modern sliding entrance gate retracted to one side of a clear driveway, and a small garage cutaway with sectional overhead door raised and panels following credible tracks beneath ceiling. Small discreet drive mechanisms. Show two different kinds of access opening, not a car driving through moving gate. No people or vehicles in motion, clear travel zones, no exposed electrical circuits. Daylight, limestone walls, dark graphite door panels, restrained landscaping.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-586cad1b-0353-4f43-8666-3a305dc92706.png`.
## pool-cover-v2

Сцена первого варианта:

```text
Two matched views of the same small rectangular residential pool with a rigid horizontal sliding deck cover. Left the single solid timber-topped cover is fully retracted onto the side parking area so all pool water is exposed; right exactly the same cover has slid horizontally to fully cover the pool, with no water visible. Same architecture and camera. Make rail direction and matching cover dimensions physically credible; enough clear parking area alongside pool. No people, children, swimmers, furniture on cover, no safety certification implication. Calm courtyard, limestone surround, no text/arrows.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-44ed68d0-3d2d-4823-9f18-efef7cc44c85.png`.

Вход редактирования — этот первый вариант. Полный промпт исправления:

```text
Use case: precise-object-edit. Correct the pool-cover mechanism in this image while preserving the two matched courtyard views, warm architectural cutaway style, camera, pool geometry, stone and planting. Replace the implausible sliding wooden deck in BOTH views with a believable ROLL-UP SLATTED POOL COVER. LEFT: water fully exposed, cover completely rolled as a clearly visible substantial cylinder of narrow gray-beige slats on a fixed roller at the far short end. RIGHT: same pool, roller location, camera and courtyard, the narrow slatted flexible cover is unrolled across the entire water surface; the roller has only a small residual roll. The covered area must match the exact water rectangle; do not enlarge the pool or put a patio deck over it. Show no people, no person standing on the cover, no safety claim. Keep comparisons clear at phone size. No text, arrows, icons, labels, UI or logos. Wide 2:1.
```

Финальный результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-c91fbbc0-0f2b-45bc-bbc2-6cbb50c2430c.png`.
## windows-vents-v2

Сцена первого варианта:

```text
Two adjacent architectural cutaways on a coherent light base: left a quiet home room with a top-hung outward-opening window ajar using a small visible chain actuator between frame and sash; right a compact garden greenhouse with a hinged roof vent raised by a linear actuator anchored plausibly to frame. Show open air passages through actual opening geometry, no airflow arrows or particles. Fixed glass remains in frames, devices small and mechanically credible. Plants in greenhouse, no people, daylight, warm neutral home interior.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-5b412b7d-e2e3-411a-88ab-4994b1c108f8.png`.

Вход редактирования — этот первый вариант. Полный промпт исправления:

```text
Use case: precise-object-edit. Correct ONLY the visible window and greenhouse actuator geometry. Replace any loose chain or unsupported actuator with ONE small rigid telescopic linear actuator per opening, securely joining a fixed FRAME member to the moving SASH frame, never mounted to the glass. The window has a top hinge and a clear outward-open bottom gap. The greenhouse roof vent is a small proper hinged opening, with its actuator base on a fixed structural crossbar and tip on the moving vent frame. Keep the two cutaways, furniture, plants, camera, palette, architectural style, daylight and composition unchanged. No new objects, text, arrows or labels.
```

Финальный результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-04a57fe2-8f38-420d-9417-48597d30e33f.png`.
## shutters-blinds-v1

Сцена первого варианта:

```text
Two adjoining compact architectural cutaways at matching scale. Left exterior of a home window with a motorized roller shutter lowered halfway, clearly showing horizontal metal slats and concealed top housing. Right interior of a room with venetian blinds partially raised, stacked narrow slats at the bottom and visible upper slatted portion; enough clear window below to show lifting result. Show vertical movement position only, do not imply simultaneous independent slat rotation. Warm stone home, graphite shutter and soft wood blind. No people, no motion arrows, no wires.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-a01eb73b-679a-4f58-aa33-f6b2c0a6e92b.png`.
## gazebo-screens-v1

Сцена первого варианта:

```text
Two matched views of the same elegant wooden garden gazebo. Left an open side of the gazebo with a rolled-up motorized insect screen in a discreet horizontal top housing. Right the same side is fully lowered with a fine translucent gray mesh screen held in side guides, visible garden still behind the mesh. Same structure, furniture, camera and daylight; one small table and chairs, no people, no insects magnified. Mesh must be visibly airy and translucent, not glass or opaque fabric. No text or icons. Show a comfortable screened seating area, no sealing or guaranteed insect-proof claim.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-638ab75e-2b45-4b1e-9717-0525b9bc81c8.png`.
## manual-control-v2

Сцена первого варианта:

```text
One calm living room cutaway with a high outward-opening window partly open on a discreet chain actuator. An adult stands safely on the floor away from the moving sash and presses an ordinary accessible wall control. The point is accessible manual control of a hard-to-reach opening. Person relaxed, natural hands and feet, body and gaze aligned with button. No phone UI, no stool or ladder, no exposed wiring. Window sash and actuator mechanically plausible, minimal furniture and plant. No automation or sensor effects shown.
```

Результат первой генерации: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-30cb2d60-1550-4386-865a-3646801ec68a.png`.

Вход редактирования — этот первый вариант. Полный промпт исправления:

```text
Use case: precise-object-edit. Correct ONLY the high window actuator. Replace the hanging loose chain with a small tidy rigid telescopic linear actuator: its motor body is secured to the fixed lower WINDOW FRAME and its extended rod connects to the lower frame of the outward-open top-hung sash. No loose chains, loops, dangling cords or attachment to glass. The actuator should be modest and mechanically credible. Keep the adult, her natural pose, hands, feet, wall button, room, furniture, window size, camera, light, matte architectural style and all other details unchanged. No labels or diagrams.
```

Финальный результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-52d80741-7cd7-455b-b8f6-f83bef123f60.png`.

## windows-vents-v3: крепления к неподвижной раме

Исправление по замечанию автора от 8 октября 2026 года: у версии 2 не читалась неподвижная опора,
приводы выглядели закреплёнными в воздухе. Вход — [windows-vents-v2.png](../src/assets/docs/positional-drive/sections/windows-vents-v2.png),
сохранён как предыдущая версия. Режим — редактирование встроенным ImageGen.

Полный промпт:

```text
Use case: precise-object-edit.
Edit the supplied Module architectural illustration. The ONLY defect to fix is the mounting of BOTH linear actuators: they currently float or connect two parts of the moving sash. Redesign their mounting so the stationary and moving endpoints are unmistakably visible.

LEFT HOME WINDOW: remove the current central cylinder completely. Install one compact silver linear actuator beside the RIGHT SIDE of the opening. Its motor/body heel must sit inside a dark metal clevis bracket with two visible bolts fixed directly to the thick stationary RIGHT VERTICAL WINDOW JAMB. Its extended rigid rod runs diagonally from that fixed jamb through the open gap to a second visible clevis bracket screwed to the LOWER FREE RAIL of the tilted moving sash. Show a short rigid mounting plate physically touching the stationary jamb. Keep both ends clearly visible with no gap, neither end attached to glass. The fixed frame and moving sash must remain visually distinct. No actuator spanning merely between the upper and lower rails of the SAME moving sash.

RIGHT GREENHOUSE: remove the existing dangling cylinder completely. Add a plausible substantial dark metal FIXED CROSSBAR between the two stationary roof-frame rails under the vent opening. The crossbar is bolted at BOTH ends to the greenhouse structural frame and does not move with the vent. Put the cylinder heel on a visible pivot bracket bolted to this crossbar. Extend the rigid rod upward to a second visible pivot bracket on the raised vent's LOWER FREE METAL EDGE, away from its upper hinge. The cylinder thus forms an obvious mechanical bridge between stationary structure below and moving vent above. No attachment to glass, no unanchored lower end, no part suspended in empty air. Make the fixed crossbar and both brackets thick enough to read at webpage scale. Do not put the entire actuator on the raised vent itself.

Preserve the two adjacent scenes, window and vent being open, existing warm matte limestone architectural style, rooms, desk, greenhouse plants, camera angle, dimensions, lighting, all other objects and wide 2:1 composition. Mounting connections may be slightly enlarged for legibility. No loose chains, floating parts, text, red circles, arrows, labels, UI, or wiring diagram. This should look like a believable installed opening mechanism.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-a9e037d1-c3e9-4d9b-bfbf-cc0dfdcac791.png`.

Визуальная проверка: у окна корпус опирается через болтовую пластину на боковую неподвижную раму,
шток соединён шарниром с нижней планкой открытой створки. В теплице добавлена неподвижная
поперечина между элементами каркаса; привод соединяет её с поднятой форточкой. Обе пары креплений
видимы, свободно висящих концов нет. Композиция, материалы и окружение сохранены.

## pool-cover-v3: связь покрытия с бортами

По замечанию автора от 8 октября уточнены направляющие, крепления вала и связь полотна
с механизмом. [Вход, результат, полный промпт и приёмка](positional-drive-pool-image.md)
вынесены в отдельный лист истории этой иллюстрации. Страница использует версию 3;
[версия 2](../src/assets/docs/positional-drive/sections/pool-cover-v2.png) сохранена.

## Визуальная приёмка

Все финальные изображения осмотрены: единая матовая архитектурная подача, различимые механизмы,
соответствие сценам, отсутствие подписей/UI/брендов и естественная поза человека в ручном управлении.
В поливе и беседке сохранены оба состояния одного места. Сетка полупрозрачна; жалюзи показаны
поднятыми без обещания отдельного поворота ламелей. У ворот свободная зона движения.

Первый бассейн имел неправдоподобное изменение размера сдвижной крышки. В версиях 2 и 3 использовано
рулонное покрытие с валом; чаша одинакова в двух состояниях. Версия 3 уточняет связь с бортами. Первичная правка окон заменила
свободные цепи на линейные механизмы, но автор выявил неясное крепление. Это исправлено в версии 3
с видимыми неподвижными опорами и шарнирами. Предыдущие варианты сохранены; страница использует актуальную версию. Картинки концептуальные, не монтажные схемы и не evidence аппаратного запуска.

Сборка, responsive-размеры, lazy loading и browser review фиксируются у владельца описания.
