# Сцены карусели: встреча дома, закат и климат

Дата создания и визуальной проверки: **9 октября 2026 года**.
Владелец композиции и поведения — [карусель услуги](service-overview-concept-image.md).
Смысл и критерии — [brief главной](../../module-market-intelligence/internet-promotion/spec/homepage-audience-routing-brief.md#что-объясняет-главная).

## Исходники

| Кадр | Файл | Содержание |
| --- | --- | --- |
| 2 | [service-arrival-scene-v1.png](../src/assets/site/service-arrival-scene-v1.png) | Приход домой, свет по движению и шторы с учётом солнца |
| 3 | [service-evening-scene-v1.png](../src/assets/site/service-evening-scene-v1.png) | Закат за открытыми шторами, локальная розово-фиолетовая подсветка |
| 4 | [service-climate-scene-v1.png](../src/assets/site/service-climate-scene-v1.png) | Радиатор под окном, кондиционер и датчик температуры на стене |

Метод: встроенный **ImageGen**, по одной новой сцене 1536×1024 для каждого кадра.
Для кадров 3–4 существующая [комната](../src/assets/site/automation-home-concept-v1.png) передана
только как референс материалов и света. По следующему поручению автора второй кадр создан
заново в их стиле: его референсы — кадры 3 и 4. Все три сцены показывают интерьер изнутри,
заполняют прямоугольный кадр и отличаются от планировки страницы ПО. Одинаковые тёплые
материалы сохраняют связь с [общим стилем](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).

Исходные результаты ImageGen:
- встреча дома — `exec-f1d2960b-0c46-4b98-8d0f-73809c2302d2.png`;
- вечер — `exec-816c609e-b0be-4505-9d62-80951728e050.png`;
- климат — `exec-77ed40f8-fb08-402d-970e-9386a6941371.png`.

Исходники скопированы в `src/assets/site`; WebP и размеры для страницы создаёт Astro.
Контуры, линии и подписи наложены в `service-overview.astro`, поэтому остаются читаемыми
и не требуют повторной генерации. На мобильном экране меню сокращается до названия и значка.

## Визуальные границы

- Во втором кадре датчик закреплён на стене, светильник — на потолке; ноги и ступни человека
  стоят естественно. Отметки не перекрывают лицо и остаются связанными с оборудованием.
- Карниз и шторы физически связаны; цветной свет локализован у дивана и отличается от заката.
- Радиатор закреплён под окном и связан трубами с полом; кондиционер стоит на сплошной стене.
- Нет вымышленных экранов интерфейса, чисел температуры или утверждения об одновременной
  работе отопления и кондиционера. Это концепты возможностей, не фотографии клиентских объектов.
- Просмотрены исходники и размещение при 1280×800 и 320×740; результаты и снимки принадлежат
  [проверке реализации](commercial-pages-visual-refresh.md#сцены-и-отметки-автоматизаций-9-октября).

## Промпт сцены встречи дома

```text
Use case: stylized-concept.
Asset type: the second 3:2 carousel image on the Ritmod home automation website.
Input images: image 1 (sunset living room) and image 2 (climate living room) are STYLE AND CAMERA REFERENCES ONLY. Create a new matching scene, not a collage.
Primary request: replace the earlier isometric dollhouse arrival-home scene with a full-frame interior view matching these two references. Same refined warm architectural rendering, believable tactile linen, beige plaster, light oak, cream upholstery, understated premium furnishings and realistic soft lighting.
Scene: a welcoming connected entrance and living room during a sunny afternoon. View from inside the room at human eye height. On the left third, an adult woman with a shoulder bag has just stepped inside through a partially open dark entrance door. Her posture and two feet must be natural and anatomically correct, with both shoes grounded on the floor, no crossed or twisted legs. A compact circular ceiling light above the entrance is lit warmly, and a small round motion sensor is visibly fixed to the wall next to the door. Keep the sensor clearly visible, not hidden behind the woman.
On the right half, a large window overlooks leafy trees and clear sky. Cream linen curtains are partly drawn to shade the sunlit room, with the physical curtain rail attached to the ceiling. A compact beige sofa, oak side table and leafy potted plant complete the room, with an unobstructed path from the entrance.
Composition: one coherent inhabited interior, horizontal 3:2, 1536x1024, objects fill the image right to its edges. Door and arrival to left, window and curtains to right. Leave calm upper-wall areas for two small website labels. No inset frames, no exterior cutaway, no isometric plan, no floating slab, no white background margins. Keep the room spacious and readable at thumbnail size.
Constraints: furniture, ceiling light, curtain rail and sensor all physically mounted or supported. Match the reference render quality, materials and quiet palette. No dramatic purple light or sunset in this scene. No text, logos, arrows, UI panels or graphical annotations baked into the image; these will be applied separately in code.
```

## Промпт вечерней сцены

```text
Use case: stylized-concept.
Asset type: 3:2 landscape carousel scene for the Ritmod home automation engineering website, intended to display at 480 by 320 pixels.
The input is a STYLE REFERENCE ONLY: match its refined warm architectural 3D illustration, matte stone, oak, calm textiles, natural lighting, clean convincing geometry. Make a NEW scene.
Primary request: an inviting modern living room at a beautiful sunset, showing motorized curtains staying open for the view and tasteful colored ambient lighting. It must clearly feel like enjoying the evening at home.
Camera: inside the room at seated eye level, gently looking towards a large window on the RIGHT and a sofa on the LEFT. A complete interior view filling the entire 3:2 canvas, NOT an isometric house, NOT a dollhouse, NOT a floor plan, NOT a floating miniature, no white border or surrounding studio background.
Composition: panoramic window occupies right half, believable warm coral and amber sunset above distant trees, sun low near horizon. Linen curtains pulled back on both sides, mounted on a visible slim ceiling curtain track. Left foreground: comfortable pale sofa and small round oak table with a book and cup. A warm floor lamp and a discreet concealed RGB light source cast soft violet and muted rose light on the LEFT wall and behind the sofa, with natural falloff. Colored light is localized, elegant and clearly visible at small web size, not a nightclub. A small wall switch or sensor is acceptable. No people necessary, no television, no clutter.
Mood: sunset remains the focal moment; artificial violet/rose light and natural amber light remain distinguishable. Equipment physically attached, curtains on a real track, furniture resting on floor. Premium restrained architectural illustration rather than a photo.
Keep enough quiet space around the curtain track and light source to add thin spatial annotations in code later. No text, UI panels, symbols, arrows, charts, brands, watermarks or baked-in screen graphics. Full-bleed opaque rectangular image, 1536x1024 composition.
```

## Промпт сцены климата

```text
Use case: stylized-concept.
Asset type: 3:2 landscape carousel scene for the Ritmod home automation engineering website, intended to display at 480 by 320 pixels.
Input image is a STYLE REFERENCE ONLY: match its refined warm architectural 3D illustration, matte materials, oak, limestone, cream textiles, soft believable volume. Create a NEW scene.
Primary request: a calm welcoming living room that makes heating and cooling equipment easy to recognize, illustrating comfortable temperature throughout the year.
Camera inside the room at seated eye level, gently towards the corner; fill the complete rectangular 3:2 canvas with the interior. NOT a floor plan, NOT an isometric cutaway or dollhouse, NOT an exposed floor slab, no surrounding blank backdrop or white borders.
Composition: RIGHT third has a broad window with soft daylight and green trees. A realistic elegant low white panel radiator is visibly mounted to the wall BELOW the window, with two plausible small pipes entering the floor. On the solid upper LEFT wall, a separate compact off-white wall-mounted split air conditioner, placed with visible clearance from ceiling and no overlap with the window, physically attached to the wall. Center-left a comfortable pale sofa, oak coffee table with a book, wool rug and one green plant. One small unobtrusive wall temperature sensor at normal human height, visibly attached, not a floating screen. Both HVAC devices are large enough to identify at small web size and remain unobscured by furniture.
Soft neutral-warm daylight, calm comfortable atmosphere, restrained terracotta cushion, realistic perspective, continuous floor and walls. Do not show heating and cooling active together: no blue airflow, no heat-glow, no steam or orange coils. Equipment is shown as available capabilities. Keep surfaces around equipment uncluttered for precise subtle UI annotations added later in code.
No people required. No text, numbers, UI panels, icons, arrows, network lines, technical diagrams, logos or watermark. Full-bleed opaque image with no border, 1536x1024 composition.
```
