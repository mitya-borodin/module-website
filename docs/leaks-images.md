# Иллюстрации защиты от протечек воды

Статус: подготовлены 8 октября 2026 года для [описания защиты от протечек](../src/content/docs/ru/docs/automations/leaks/index.mdx).
Шесть статических изображений: обложка и пять разделов. Это не анимации и не фотографии испытанного объекта.

## Стиль и происхождение

Использован встроенный ImageGen и [принятый общий стиль](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).
Визуальный референс каждой первой генерации — [обложка освещения](../src/assets/docs/lighting/lighting-concept-v1.png).
Изображения показывают бытовой результат; совместимость конкретных датчиков и кранов ими не подтверждается.
Текстовые альтернативы и подписи находятся на странице; вывод использует штатные Astro Image и DocsScenarioImage.

| Сцена | Сохранённый исходник |
| --- | --- |
| Защита от протечек | [leaks-concept-v1.png](../src/assets/docs/leaks/leaks-concept-v1.png) |
| Вода замечена там, где может начаться протечка | [detection-v1.png](../src/assets/docs/leaks/sections/detection-v1.png) |
| Сигнал протечки — повод перекрыть подачу | [shutoff-v1.png](../src/assets/docs/leaks/sections/shutoff-v1.png) |
| После протечки важно устранить причину | [recovery-v1.png](../src/assets/docs/leaks/sections/recovery-v1.png) |
| Важно знать, что кран действительно закрылся | [verification-v1.png](../src/assets/docs/leaks/sections/verification-v1.png) |
| Какую защиту выбрать для дома | [choose-protection-v1.png](../src/assets/docs/leaks/sections/choose-protection-v1.png) |

## Общий промпт

Каждая первая генерация получала общий текст, название сцены с пометкой не выводить его в изображении и описание сцены ниже.

```text
Use case: stylized-concept. Transform the supplied Module illustration into a new companion architectural illustration about WATER LEAK PROTECTION, keeping its exact refined matte limestone architectural cutaway style, axonometric viewpoint, natural wood, subdued graphite details, terracotta clothing, warm off-white #f0eee6 background and calm soft illumination. Do not reproduce the lighting scenarios. Wide landscape approximately 2:1, coherent perspective and believable scale, generous margins, readable at mobile size. Simple plausible plumbing and small floor-mounted water detectors, no elaborate engineering drawing. A leak detector sits ON the floor where water can physically reach it, not on a wall. Motorized shutoff valves have realistic compact actuator housings fitted to a brass pipe valve, not a floating box. A puddle is localized and shallow, no giant flood or magical dry boundary. Keep power sockets away from the wet area. Natural human anatomy and grounded feet. NO lettering, labels, numbers, logos, UI, dashboards, arrows, symbols, red alarm beams, shield icons, watermarks or notification screens. This is a conceptual everyday outcome, not proof of a tested installation. Do not imply a phone alert, automatic leak repair, or manual acknowledgement required before automatic water restoration.
```

## Защита от протечек

Сохранённый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-7f15b893-31c9-4650-97b6-4480c843b155.png`.

```text
Section title for context only, do not render: Защита от протечек
Scene: One coherent axonometric cutaway of a home's utility/bathroom beside a dry domestic hallway. Utility room has a washing machine and small basin. A tiny shallow pool from a leaking connection beside the washing machine reaches a discreet white floor leak detector. An open nearby plumbing service niche exposes a clear brass water supply pipe with a motorized shutoff valve. The leak is contained to a modest visible wet patch, remaining home appears calm. A resident in muted terracotta stands on the dry hallway side noticing the situation, with correct anatomy and feet. Warm-neutral domestic daylight, not dramatic disaster. Make floor detector, plumbing valve and protected everyday home visually recognizable without overlays.
```

## Вода замечена там, где может начаться протечка

Сохранённый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-55a9e94f-041b-42b4-9f28-90306520648a.png`.

```text
Section title for context only, do not render: Вода замечена там, где может начаться протечка
Scene: Three compact equally readable neighboring wet-service zones on a continuous slab: left kitchen sink with the lower cupboard door open, center washing machine, right bath with visible small vanity. Each zone has one discreet round or low rectangular white water-leak detector resting flat on the floor at the likely leak point. Only the washing-machine zone has a small shallow puddle touching its detector; the other two floors are dry. No people necessary. Show multiple observation locations, NOT three independently operated shutoff systems. Ordinary warm-neutral ambient daylight, no theatrical lighting.
```

Уточнение после визуальной проверки; вход редактирования: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-1aaed99f-d317-4027-9213-11bbbe154fb5.png`.

```text
Use case: precise-object-edit. Edit only the plumbing fixtures in this three-zone illustration. REMOVE ALL the dark cuboid motorized actuator boxes and their brass valve bodies: the two under the kitchen sink, the one beside the washer, and the one beside the bath. Replace those short pipe portions with simple continuous ordinary supply pipe and unobtrusive fittings, preserving plausible pipe connections. Do not add any valve, actuator, service cabinet or controller elsewhere. This image is specifically about the locations of WATER DETECTORS, not separately controlled valves in each room. Keep exactly the three white floor detectors in their current positions, the small puddle under the washing machine, the kitchen, washer, bath, all furnishings, lighting, perspective, 2:1 frame, background, materials and scale unchanged. No text, no overlays, no arrows.
```

## Сигнал протечки — повод перекрыть подачу

Сохранённый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-f5114e01-0cfd-43da-8d3e-b6f55406b584.png`.

```text
Section title for context only, do not render: Сигнал протечки — повод перекрыть подачу
Scene: Two side-by-side matching axonometric cutaways of the SAME simple laundry niche with basin, washer, low floor leak detector and an open accessible pipe cupboard with a compact motorized brass shutoff valve. Left: a small leaking hose connection feeds a narrow visible trickle into a small puddle which reaches the detector. Right: same place, same puddle still present, the hose connection no longer produces a stream, a regular basin tap which is open has no water emerging. The motorized valve remains clearly visible, with a small physical orientation indicator turned 90 degrees from its left-panel orientation, no labels. No person touches the valve. Preserve architecture, scale, lighting and furniture in both states. Do NOT dry the floor or repair the hose automatically. Show the water supply stopping while leaked water remains.
```

Уточнение после визуальной проверки; вход редактирования: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-57f0387e-e970-4d12-a93d-28eabbbfcd79.png`.

```text
Use case: precise-object-edit. In BOTH panels remove ONLY the orange external hand lever protruding from the motorized brass shutoff valve in the open cupboard. Keep each brass valve body, its compact gray electric actuator and all connected pipes. There must be no exposed manual lever or colored position marking on either motorized valve. Preserve absolutely everything else, including the same person in the same pose, architecture, clothes, perspective, 2:1 composition, background, and puddle on both floors. Crucially the LEFT panel still has flowing water from the basin faucet and the leaking washer connection, while the RIGHT panel has NO water stream from either place, with residual water still on the floor. No labels, no symbols. We explain the valve action through stopped water flow, avoiding ambiguous orientation of a manual lever.
```

## После протечки важно устранить причину

Сохранённый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-17df9f95-8f25-432b-9af6-1b2149e2a444.png`.

```text
Section title for context only, do not render: После протечки важно устранить причину
Scene: Two matching axonometric views of the SAME small laundry room after a contained leak. Left: a practical adult technician in neutral clothes kneels naturally beside a washing-machine hose connection inspecting and repairing it, hand holding a simple wrench correctly; an absorbent cloth lies beside the floor detector and a modest residual damp patch. Right: the repaired connection is intact and dry, cloth put away, the floor detector still in position; a resident observes a SMALL stream from the basin faucet to verify that water has returned. Both rooms have the same open plumbing niche and motorized valve. No reset buttons, phones, alarm acknowledgement UI, clocks, arrows or invisible force field. This illustrates cause repair and deliberate checking, NOT a person authorizing automatic opening.
```

## Важно знать, что кран действительно закрылся

Сохранённый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-dc444199-1549-496e-8d51-1ecf5753252e.png`.

```text
Section title for context only, do not render: Важно знать, что кран действительно закрылся
Scene: A single wide axonometric domestic service corner. A practical installer and homeowner calmly inspect an open plumbing cupboard containing an understandable brass water pipe and compact motorized shutoff valve. One person points at the valve body or its mechanical position indicator without turning it; the other looks at a nearby small basin faucet whose handle is visibly open but no water comes out. A low floor water detector is present in the dry room. No clipboard, screen, numeric gauge, lamp status badge or diagram. Focus on observing the actual valve and absence of water flow, not just an abstract command. Natural anatomically correct hands and feet. Keep composition spacious.
```

## Какую защиту выбрать для дома

Сохранённый результат: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-a2162f2e-e877-4baf-9d19-d32854cbfbb6.png`.

```text
Section title for context only, do not render: Какую защиту выбрать для дома
Scene: Homeowner and installer collaboratively discuss a small physical architectural house model on a table, in the same warm architectural editorial style. Model has three clearly recognizable compact zones: kitchen sink, washing machine, bath; tiny floor water detectors and ONE clearly visible small brass water inlet shutoff assembly near the edge of the model. One person points at the kitchen zone; the other considers the inlet location. The model is visibly a tabletop scale model, correctly proportioned to adults. No laptops, phone screens, technical diagrams, floating symbols, labels or paperwork filled with settings. Communicate choosing which places to watch and which water supply to shut off.
```
