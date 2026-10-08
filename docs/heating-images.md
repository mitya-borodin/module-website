# Отопление: иллюстрации

Статус: 11 статических иллюстраций, 8 октября 2026 года. Встроенный ImageGen; CLI/API не использованы.
[Описание, источники и проверки](heating-functional-description.md).
[Общий стиль](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).
Референс освещения предварительно осмотрен, использован только как визуальный эталон.
Все результаты осмотрены. Картинки показывают назначение устройств, не заменяют проект и монтажную схему.

## Общий промпт

Для секций общий текст соединён со сценой через один пробел без дополнительных фрагментов. У hero полный отдельный промпт.

```text
Use case: stylized-concept. New illustration for Module heating documentation. Use attached lighting image ONLY as visual style reference, invent the requested new scene. Wide 2:1 architectural axonometric cutaway on warm offwhite background, matte limestone and beige plaster, natural oak, graphite fittings, muted terracotta accents, realistic soft daylight and contact shadows. Calm premium miniature architectural visualization, uncluttered and legible on a phone, generous margins. Physical construction coherent: every object fixed or resting on a support, pipes continuous and joined to actual fittings, cables routed into equipment, no floating ends. No text, numerals, labels, UI, logos, arrows, diagrams, symbols, glowing effects, or watermark. Not an installation schematic.
```

## heating-concept-v1.png

[Файл на странице](../src/assets/docs/heating/heating-concept-v1.png).

Полный промпт hero:

```text
Create a new Module website heating section hero, use attached image ONLY as the established illustration style reference, do not copy its rooms. Wide 2:1 architectural axonometric cutaway miniature home on warm offwhite background #f0eee6, matte beige plaster, limestone, natural oak, graphite accents, soft warm daylight, realistic contact shadows, quiet premium editorial architectural visualization, readable at small size. One coherent house section in winter: left living room with a real wall-mounted panel hot-water radiator below window, snow visible outside, relaxed adult reading in chair; middle bathroom with firmly wall-mounted dark ladder towel radiator holding a folded towel, floor tiles; right small utility room with one plain wall-mounted heat source, closed casing, neat heating manifold and inline circulation pump, all pipes continuous, secured to wall and routed through floor, no open pipe ends. Along foreground, only a modest cutaway of floor construction exposes an orderly serpentine hydronic underfloor heating loop beneath the living room finished floor; the two ends physically route toward utility room, never floating. Clear tangible benefit: comfortable home with different heat emitters working as one system. No people in utility room. Correct proportions and anatomy. No text, no labels, no diagrams, no arrows, no glowing pipes, no icons, no logos, no UI, no watermark. Entire cutaway visible with generous offwhite margin.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-bc6a8360-8b6d-451a-b3e2-6e61717eecbd.png`.

## sections/temperature-zones-v2.png

[Файл на странице](../src/assets/docs/heating/sections/temperature-zones-v2.png).

Сцена после общего промпта:

```text
A single spacious living room cutaway with a chair, low sofa, oak floor, winter view through window and a radiator. Show FOUR small round unbranded temperature sensor pucks firmly mounted on side walls: TWO at adult waist/chest height on different walls and TWO at low seating height directly below, with clear visual separation between the two horizontal levels. No numbers or measurement lines. A narrow foreground construction cutaway exposes a real hydronic floor loop and TWO tiny temperature probes embedded within the floor screed; probe wires disappear into wall conduit, no loose electrical parts. Leave one uninterrupted patch of finished floor so the probes are understood as underneath it. No people. The image conveys several sensor locations within one room, with separate measurements of high air, low air and floor. Do not turn sensors into wall displays, do not represent all readings as one unified temperature.
```

Первоначальный результат / вход исправления: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-99f8e21b-15ce-4bff-bb80-d29ecae90923.png`. Осмотрен перед правкой.

Полный промпт исправления:

```text
Precise object edit of this heating illustration. Preserve room, camera, colors, materials and 2:1 composition. Make these exact corrections only: remove the radiator from the right wall leaving uninterrupted beige plaster behind the TWO existing right-wall sensor pucks; put a realistic panel radiator underneath the rear window instead, partially behind the sofa, with pipes disappearing neatly into the wall. Replace the TWO large round pucks exposed inside the foreground floor construction by two very small slim metal temperature probes inside thin protective conduits embedded in the screed; probes should be subtle, scaled like pencil tips, not floor-mounted disc gadgets. Retain both upper and lower wall temperature sensors on each side wall; all must be away from direct heat emitters. No text or labels.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-c0b424fd-2345-44c5-9cf5-e21467670cde.png`.

## sections/water-emitters-v1.png

[Файл на странице](../src/assets/docs/heating/sections/water-emitters-v1.png).

Сцена после общего промпта:

```text
THREE adjacent equally clear domestic cutaway vignettes with consistent camera and floor base: LEFT a living room corner with one real panel WATER radiator mounted under a window, its two heating pipe connections visibly enter the wall at floor level, armchair nearby. CENTER a minimal room with a modest construction cutaway in foreground revealing a serpentine WATER underfloor heating pipe in screed underneath a continuous tiled floor, two pipe ends disappear through wall sleeves. RIGHT a bathroom with a graphite ladder WATER towel radiator securely mounted by four visible wall brackets, two short pipe connections into wall at bottom, folded light towel on a middle rung. No power cords in any vignette, no electrical outlets near towel rail. Focus on these THREE distinct ways hydronic heating delivers everyday comfort. No people. No heating glows or technical diagrams.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-c7a36504-e2f9-41f4-a5e5-9d9c32ca9ab8.png`.

## sections/thermoelectric-servos-v2.png

[Файл на странице](../src/assets/docs/heating/sections/thermoelectric-servos-v2.png).

Сцена после общего промпта:

```text
A realistic open-front recessed heating manifold cabinet in the foreground of a small home service alcove; an adjoining cozy room with a radiator and tiled floor remains visible for context. Focus is FOUR small white cylindrical thermoelectric valve actuator heads, each visibly threaded onto its own brass valve on the LOWER of two parallel firmly wall-bracketed manifold bars. Both horizontal manifold bars are capped at their ends and have real pipe connections, paired heating pipes route neatly down through floor sleeves. Thin insulated actuator leads follow a tidy cable tray into a CLOSED control enclosure attached to the cabinet wall; no exposed electrical terminals. Devices are all realistic modest sizes and attached to actual valves, no detached white objects. No open mechanical cross-section of actuators and no pretend valve positions or status color coding. Show physical role of opening individual heating branches, explanatory operation remains in caption. No people.
```

Первоначальный результат / вход исправления: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-ff45f86e-3e21-414b-a048-1563f35aaf85.png`. Осмотрен перед правкой.

Полный промпт исправления:

```text
Precise plumbing correction only. Preserve whole composition and style of this illustration. Inside the manifold cabinet the FOUR red pipes incorrectly connect upper supply directly into lower return manifold. Correct them: each of the four red supply pipes must go DOWN BEHIND the lower brass manifold, remaining completely separate, then continue to its OWN separate floor penetration beside its corresponding white return pipe. There must be EIGHT visible separate pipes leaving cabinet base: four red supply and four white return, in four pairs. No direct connection between upper and lower manifolds. Keep all four white actuator caps fixed to lower return valves, both manifold bars fixed to metal wall supports, all leads inside cable tray. No text, labels or arrows. Preserve everything outside cabinet.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-d72f352c-1a8f-4261-a193-aa37af0d4248.png`.

## sections/circulation-v1.png

[Файл на странице](../src/assets/docs/heating/sections/circulation-v1.png).

Сцена после общего промпта:

```text
A house cutaway in cold winter. LEFT compact service alcove focusing on one realistic dark graphite domestic circulation pump installed INLINE on one vertical heating pipe, secured by unions above and below and nearby wall pipe clamps; a separate parallel return pipe runs beside it, both pipe ends disappear into floor and upper wall. Pump electrical lead enters a closed small wall control box. RIGHT a quiet room with radiator, warm wood chair and large window looking onto snow and bare trees. Keep same house coherent, showing circulation serving the room even while nobody is home. Pump is recognisable at foreground but not oversized, attached to actual pipe, no water leaks or icy indoor pipes. Show calm preventive winter circulation concept, without claiming visible motion of the water. No arrows, frost effects, flames, people or icons.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-0d1dead2-9164-4aef-9ded-6fe64f23269c.png`.

## sections/mixing-v1.png

[Файл на странице](../src/assets/docs/heating/sections/mixing-v1.png).

Сцена после общего промпта:

```text
A tidy utility alcove joined to a living room with a wall radiator and a tiled area with a small cutaway of underfloor heating. Foreground focus: compact motorized THREE-WAY brass mixing valve securely mounted in a real heating pipe assembly. Its graphite actuator is fixed directly onto the valve spindle, all THREE ports connect to supported pipework: a hotter supply entering from upper wall, a separate cooler return branch from floor, mixed outlet continues to an inline pump and on through wall toward the floor heating group. Adjacent second independent pair of pipes simply runs toward radiator circuit. All connections coherent and supported, no unattached tubes, no cross-section of hot water, no schematic colored arrows. No need for intricate spaghetti plumbing; keep a few large clear continuous pipe runs. A small strapped temperature sensor is visibly attached to the mixed outlet with its cable entering closed wall box. Convey adapting water temperature for a floor heating group, no people.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-3f0fd926-9647-4df0-9244-ee64c35fb092.png`.

## sections/heat-sources-v1.png

[Файл на странице](../src/assets/docs/heating/sections/heat-sources-v1.png).

Сцена после общего промпта:

```text
THREE clearly separated architectural utility vignettes, all on their own small aligned slabs, showing ALTERNATIVE heat sources, not a cascade installation. LEFT a plain compact wall-mounted GAS boiler with closed cream casing, flue visibly exits rear wall and neatly secured pipes enter floor; CENTER a smaller wall-mounted ELECTRIC hydronic boiler in separate alcove, no flue, two heating pipes and closed electrical conduit secured to wall; RIGHT an outdoor air-to-water HEAT PUMP unit, large circular fan behind safety grille, standing on two concrete mounting blocks beside a short house exterior wall with two insulated pipes entering through proper wall sleeves, a small winter garden. Different heat sources equally prominent, no interconnecting pipes across the three scenes, no automatic switching, no standby status, no flames, no warning icons, no people. Convey the choice of compatible heat generator.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-34d31f74-7b7a-4a3a-93d5-2135539315ae.png`.

## sections/electric-emitters-v1.png

[Файл на странице](../src/assets/docs/heating/sections/electric-emitters-v1.png).

Сцена после общего промпта:

```text
THREE adjoining home cutaway areas showing ELECTRIC heating without water pipes: LEFT reading corner with a slim electric panel radiator mounted on wall below window, one discreet electrical connection into wall, no exposed heating coils; CENTER a tiled foyer with a small foreground cutaway exposing a thin regular electric heating cable mat embedded UNDER the tiled finish, its paired cold lead routed into wall conduit to one small plain wall thermostat, no plumbing or manifold; RIGHT dry bathroom area with a dark ladder ELECTRIC towel rail firmly mounted with four wall standoffs, neatly folded towel on rungs, ONE discreet enclosed electrical connection at the bottom into the wall, absolutely no inlet/outlet water pipes. No sockets next to shower or exposed wiring, no visible live contacts. Calm warm home in daylight, no people. Construction cutaway is conceptual and modest, floor mostly finished.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-48979dc8-59e2-43c4-8103-6ffcfc1374d3.png`.

## sections/air-heating-v1.png

[Файл на странице](../src/assets/docs/heating/sections/air-heating-v1.png).

Сцена после общего промпта:

```text
THREE distinct equally sized architectural cutaway vignettes, to show hydronic heat delivered by air-moving equipment. LEFT calm office room with a low wall-mounted cabinet FAN COIL with long top air outlet grille, two small water pipes visibly entering its side from wall and one enclosed electrical connection, unobstructed airflow and small desk. CENTER a clean workshop with a compact rectangular WATER unit heater (calorifier), round fan protected by metal grille behind louver front, securely hanging high on wall from two substantial brackets, TWO insulated water pipes and enclosed power conduit attached, clear floor beneath. RIGHT a minimal garage with a portable WATER-powered fan heater on stable small wheeled chassis, circular fan behind protective grille; exactly TWO flexible water hoses connect rear fittings to wall couplings, resting naturally on floor with no floating ends, plus tidy power lead. Devices powered by hot water, absolutely no flames, gas cylinders, fuel tanks or glowing electric elements. Show fans through grilles with subtle natural rotational blur as these units operate, no blue airflow arrows. No people. Equipment big enough to recognize on phone.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-a837210b-3de7-4fd2-be95-f9214065762b.png`.

## sections/daily-comfort-v1.png

[Файл на странице](../src/assets/docs/heating/sections/daily-comfort-v1.png).

Сцена после общего промпта:

```text
Two matched side-by-side cutaways of the SAME cozy bedroom with oak floor, a securely mounted radiator under window, a discreet round room sensor away from radiator, and small floor-construction cutaway at front. LEFT gentle winter morning daylight, adult sits on edge of bed with slippers naturally on floor, curtains open. RIGHT same room at night, adult sleeping with natural anatomy under duvet, curtains drawn, bedside lamp dim. Furniture, heating equipment and sensor unchanged. Show day and sleep temperature routines through everyday mood, no thermostats with numbers and no false hot/cold glows. Not a before/after emergency. No extra equipment appearing in one side only.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-18a40050-3527-4680-8a31-c9ea63199fd2.png`.

## sections/whole-property-v1.png

[Файл на странице](../src/assets/docs/heating/sections/whole-property-v1.png).

Сцена после общего промпта:

```text
One coherent property shown in THREE connected architectural areas: LEFT a paved entrance path in winter with a narrow cleared damp central walking strip and modest snow banks along edges; a small cutaway at the very front exposes a hydronic snow-melting pipe loop beneath paving, pipes run into building through sleeves. CENTER an indoor compact swimming pool in a warm limestone room, calm blue water contained by a continuous flush pool coping with clearly supported surrounding floor; a small adjacent service alcove has a modest heat exchanger on brackets with two independent properly connected pipe circuits entering wall/floor, no confusing pool cover or disconnected deck. RIGHT a clean garage with parked car and securely wall-bracketed water fan heater, two fixed pipes feeding heater, ordinary closed electrical control enclosure in service area. All three areas on a coherent slab, convey several independent heating zones under one building controller; the controller may be a small CLOSED wall cabinet, no screens or logos. Pool water warmer setting, garage modest temperature, path snow-melting: explain temperature differences by setting and context, NEVER with text, numbers or visual heat waves. No people.
```

Итоговый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-def0742b-b806-479d-8924-1cd1e106cbc9.png`.

## Визуальная приёмка

Сохранены архитектурные разрезы, тёплая палитра, матовые материалы и физические опоры.
Для датчиков исправлены размещение рядом с радиатором и чрезмерно крупные напольные элементы.
Для приводов исправлен рисунок подачи: трубы проходят за обратным коллектором к отдельным выходам.
Различаются водяные и электрические приборы; у водяных воздушных приборов видны трубные подключения и вентиляторы.
Источники тепла показаны отдельными вариантами оборудования; картинка не обещает работающий каскад.
У бассейна настил и край чаши имеют связное основание. Концептуальные разрезы не задают схему подключения.
