# Иллюстрация раздела «Освещение»

Статус: первый визуальный вариант по запросу автора, 8 октября 2026 года.
Это концептуальная иллюстрация результатов автоматизации, а не снимок интерфейса или
квалифицированного объекта. Анимации отдельных сценариев остаются самостоятельной задачей.

После одобрения автором эта иллюстрация стала основным эталоном
[общего стиля изображений всех автоматизаций](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).
Ниже сохранены происхождение и точный промпт этой обложки; общие правила принадлежат стандарту.

## Файл и размещение

- [Исходный PNG](../src/assets/docs/lighting/lighting-concept-v1.png) сохранён в репозитории.
- [Страница освещения](../src/content/docs/ru/docs/automations/lighting/index.mdx) выводит его
  под заголовком, перед вводным текстом.
- Использован встроенный ImageGen через навык imagegen. Изображение сгенерировано заново,
  без референсных фотографий. Исходник не редактировался; Astro создаёт адаптивные WebP-версии.
- Три сцены передают пользу: свет у входа, подсветка при готовке, мягкий свет для чтения вечером.
  Графика не утверждает совместимость конкретной модели оборудования.
- Размещение и итоговые проверки принадлежат [владельцу страницы](lighting-functional-description.md).

## Промпт генерации

```text
Use case: stylized-concept.
Asset type: wide editorial illustration under the Russian heading "Освещение" in Module user documentation. Create a new polished conceptual image about useful lighting automation in everyday life. No text in the image.
Composition: landscape, approximately 2:1 aspect ratio, a single coherent minimal axonometric cutaway of a home, with three legible adjacent zones across a continuous floor slab. Generous quiet margins, all important subjects within the central 85 percent, readable at small mobile size. The interior, people and pools of light are the focus, not a product or a bulb icon.
Left: a person entering a hallway carrying a bag, a ceiling light above them casts a defined gentle amber pool on the floor, a very small unobtrusive motion sensor on the wall. Center: a person cooking at a simple kitchen counter with a range hood; the worktop is illuminated by a bright neutral warm under-cabinet strip. Right: a seated person quietly reading in a lounge, lit by a softer warm lamp; a tall window hints at evening twilight. A small empty recess between zones remains unlit to show independent lighting. Show architectural light sources and plausible light falloff, light rays should not look like surveillance beams. Lighting visibly serves each activity.
Style: refined architectural editorial illustration, simplified sculptural forms, soft matte surfaces, fine charcoal outlines with subtle volume and clean soft shadows, restrained detail, sophisticated and welcoming rather than cute or futuristic. Faces can be minimal, natural anatomy.
Palette: warm off-white and limestone background matching #f0eee6, graphite #171814 accents, muted orange / terracotta inspired by #c72c08, soft amber light, tiny cool twilight accent at the right window. No bright blue tech glow.
Visual message: light welcomes you, supports activity, and changes mood through the day. No cables, circuits, phone UI, dashboard, settings, labels, lettering, numbers, logos, watermarks, arrows or infographic badges. Do not show any app screenshot or specific branded equipment. Keep the image calm, uncluttered and suitable as a documentation heading image.
```
