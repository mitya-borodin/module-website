# Учёт ресурсов: иллюстрации

Статус: шесть статических изображений, 8 октября 2026 года. Режим — встроенный ImageGen,
без CLI/API fallback. [Описание и проверки](resource-metering-functional-description.md).
Стиль — [общий стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).
Входной [референс освещения](../src/assets/docs/lighting/lighting-concept-v1.png) предварительно осмотрен;
использован только как визуальный эталон. Все результаты осмотрены. Это не монтажные схемы.

## Общий промпт

Для первоначальной генерации общий текст соединён со сценой без других дополнений.

```text
Use case: stylized-concept. Asset: Module user documentation illustration. Use the supplied lighting illustration ONLY as the visual style reference, not as the scene to reproduce. Create a new subject. Wide landscape approximately 2:1. Refined axonometric architectural cutaway, slightly elevated camera, coherent base slab, generous warm off-white margins. Matte limestone and plaster, natural wood, graphite fittings, muted terracotta accents, realistic soft daylight and contact shadows. Calm and uncluttered, readable at phone size. Every pipe joins a real fitting, meter bodies are fixed to pipes or walls, conduits enter enclosures, no objects suspended in air. No text, labels, numerals, logos, UI, charts, arrows, floating symbols or glowing technology. Meter displays may be small dark blank windows, no invented readings. No exposed live terminals, open flames, detached wires or safety certification implications.
```

## resource-metering-concept-v1

[Файл на странице](../src/assets/docs/resource-metering/resource-metering-concept-v1.png).

Первоначальная сцена:

```text
One coherent small home in THREE adjoining cutaway areas: LEFT a bathroom/laundry with a washbasin and narrow visible stream of water, beside an accessible utility niche containing two compact brass water meters firmly fitted inline on parallel hot/cold pipes; CENTER a calm kitchen with electric kettle and oven, adjacent closed household electrical meter cabinet with a small blank display; RIGHT a tidy utility corner with a wall-mounted closed boiler, compact gas meter physically mounted and plumbed beside it, and a radiator in the adjoining living area. Convey different everyday resources being measured where they enter the home. No people, no wiring diagrams, keep meters legible but realistically sized. The scene is resource accounting, no automatic shutoff or cost dashboard.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-fe9c9ea2-c4a0-4e4c-8284-7ecdfdae053b.png`.

## water-v2

[Файл на странице](../src/assets/docs/resource-metering/sections/water-v2.png).

Первоначальная сцена:

```text
One domestic washbasin and laundry cutaway. A water tap pours a modest continuous stream into the basin. An open-front built-in plumbing niche beside the basin clearly shows TWO separately mounted compact brass water meters on TWO continuous parallel pipe runs: one small blue identifier and one muted red identifier, with real pipe unions and wall clamps. The two lines remain physically separate and lead into the building, no disconnected ends. A washing machine sits in the same domestic space, one folded towel and small plant. Focus on accounting for hot and cold water independently. Do not show leaks or shutoff actions. No people. The pipe installation must be visibly supported.
```

Вход исправления: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-43697256-47ee-452e-9f13-456531f8a47e.png`. Исходная генерация сохранена в каталоге ImageGen.

Полный промпт исправления:

```text
Use case: precise-object-edit. Correct ONLY the plumbing niche in this Module bathroom illustration. Preserve the two brass water meters, bathroom, furniture, camera, materials and wide composition. Remove the confusing narrow rightmost riser compartment and all its loose blue/red branch stubs. Replace that narrow compartment with a solid limestone side wall. Keep exactly TWO continuous horizontal pipe runs through the main niche, blue above and muted red below. Each run passes cleanly through its own water meter, using joined brass unions; its left and right ends disappear directly into the solid side walls through round collars at the SAME level. Wall clamps visibly support both pipe runs. No exposed free pipe ends, gaps, extra branches, bypass, or detached fittings. No text, numerals, labels or arrows. All other details unchanged.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-5f324219-0635-437c-b5ed-54d14015e872.png`.

## electricity-v1

[Файл на странице](../src/assets/docs/resource-metering/sections/electricity-v1.png).

Первоначальная сцена:

```text
One elegant domestic kitchen cutaway with a modest electric oven built into wooden cabinetry and an electric kettle sitting on the counter plugged into an ordinary wall socket. Adjacent small utility niche contains a CLOSED wall-mounted household electricity meter cabinet with a small blank dark reading window; two tidy conduits enter its top and bottom and disappear into the wall, no exposed wires or live parts. Both appliances and meter share one believable room. Convey whole-home electrical energy use without individual per-appliance readouts. No gas stove, no people, no flashing electrical effects.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-9a7d6886-06a5-41a5-8945-cd14de6bd1c3.png`.

## gas-v1

[Файл на странице](../src/assets/docs/resource-metering/sections/gas-v1.png).

Первоначальная сцена:

```text
A compact tidy home utility room cutaway, daylight, warm limestone wall and floor. One wall-mounted CLOSED gas boiler with a flue visibly exiting the wall above it. On the adjacent wall, a small conventional domestic diaphragm gas meter securely mounted to a bracket: two metal pipe runs enter its two top fittings, supported by wall clamps. The outlet runs visibly to the boiler gas inlet with a modest yellow identifying sleeve. Separate orderly heating pipes also connect to the boiler below and pass into the floor. Every line connected and supported, no loose pipes. One small shelf and plant at the other side. Show GAS CONSUMPTION measurement during normal boiler use, not gas leak detection. No flame, gas cloud, warning symbol, detector, shutoff event or person.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-c990dd87-7426-4c6e-a1b7-73b1c6b7cebf.png`.

## heat-v2

[Файл на странице](../src/assets/docs/resource-metering/sections/heat-v2.png).

Первоначальная сцена:

```text
One warm living room cutaway with a radiator under a window and a small armchair. Adjacent service niche reveals a credible compact HEAT METER installation on a closed-loop pair of heating pipes: a small inline flow sensor body in the RETURN pipe with a physically connected compact calculator above, plus two modest temperature probe bosses one on supply and one on return, connected to the calculator by short tidy sensor leads. Both continuous pipes are secured to the wall with clamps and visibly feed the radiator's two connections. The calculator has a small dark blank face, no numbers or words. No gas burner, electric meter, water faucet, water spilling or implausible open-ended pipes. Convey thermal energy delivered into the home, not just litres of water. Keep the installation simple and physically coherent, visually subordinate to the comfortable home.
```

Вход исправления: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-cb3af8cf-854b-4ca6-82ef-bb13999d6dad.png`. Исходная генерация сохранена в каталоге ImageGen.

Полный промпт исправления:

```text
Use case: precise-object-edit. Correct ONLY the heat-meter piping niche in this Module living-room illustration. Preserve living room, radiator, its two pipe connections, camera, palette, architectural style, scale and wide framing. The visible red pipe must NOT change into blue through a single bend. Replace the niche pipework with TWO physically SEPARATE continuous horizontal pipes on the wall, muted red SUPPLY above and blue RETURN below, both passing from the left side of the niche into its right partition toward the radiator at the corresponding heights. Ends disappear into masonry, no loose ends. Each pipe is held by metal wall clips. Fit one small brass temperature probe boss into each pipe; place the compact blank-face heat calculator on the wall between the two pipes. Two tidy short black leads connect the calculator to the TWO probes, one in each distinct pipe. Fit a small dark inline flow sensor with brass unions in the lower blue RETURN pipe, in series rather than on a dead-end branch, connected to the calculator with one short lead. Maintain visible physical contact and continuous pipe paths. No connection joining red supply directly to blue return, no bypass, no floating fittings. Simplify neatly, no text, arrows, numbers, labels or diagrams. Keep all other details unchanged.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-ac5bcc90-7e6e-4651-ad30-bc9e0fa266ce.png`.

## consumption-rate-v1

[Файл на странице](../src/assets/docs/resource-metering/sections/consumption-rate-v1.png).

Первоначальная сцена:

```text
Three matching adjacent compact views of the SAME domestic sink corner on identical base slabs, same faucet, basin, small plant and inline water meter in a narrow open-front utility niche. LEFT faucet runs a thin gentle stream. CENTER same faucet runs a clearly stronger wider stream, without splashing outside the basin. RIGHT same faucet is closed and completely dry. Same camera, plumbing, meter, light and furnishings in all three views. This shows slow consumption, faster consumption and no ongoing consumption, without pretending a digital reading. Each meter fitted securely inline with visible pipe unions and wall clips, no loose objects. No people, arrows, labels or effects, no automatic faucet or shutoff controller. Leave causal details to the caption.
```

Результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-721316c9-8430-4d6c-99dd-10f65183e5a4.png`.

## Визуальная приёмка

Единая матовая архитектурная подача, спокойная палитра, отсутствие UI и вымышленных числовых
показаний. Приборы закреплены, соединения не висят в воздухе. У воды после правки — две непрерывные
отдельные линии без свободных ответвлений. У тепла после правки — раздельные подача и обратка,
измерительные элементы связаны с вычислителем. В сравнении скорости меняется струя, а оборудование
и окружение сохраняются; закрытый кран не изображён как автоматическое действие счётчика.
Изображения газа показывают обычное потребление, а не обнаружение аварии.

Подробные единицы, причинные связи, задержка распознавания остановки и предел точности объяснены
текстом страницы. Картинки не подтверждают совместимость модели прибора или испытание на объекте.
