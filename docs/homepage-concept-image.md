# Обзорная иллюстрация главной Module

Статус после итерации **9 октября 2026 года**: предыдущая редакция.
По поручению автора во втором кадре [карусели услуги](service-overview-concept-image.md)
используется новая [сцена встречи дома](service-scenes-concept-images.md) в ракурсе
и стиле кадров 3–4. Изометрический исходник и его компонент сохранены как история решения.
Ниже описаны происхождение исходника и решения 8 октября.


Дата: 8 октября 2026 года. Создана встроенным ImageGen для реализации
[визуального ревью](../../module-market-intelligence/internet-promotion/spec/homepage-software-visual-review-2026-10.md).
Стиль — [общий стандарт иллюстраций](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).

Результат: `src/assets/site/automation-home-concept-v1.png`, 1536×1024.
Референс: `src/assets/docs/lighting/lighting-concept-v1.png`.
Иллюстрация объясняет свет, климат и солнцезащиту; не является фотографией выполненного проекта.
Исходник сохранён в проекте, производные WebP и размеры создаёт Astro. Подписи, значки и условные связи — отдельный слой HTML/SVG.

## Обозначения автоматизаций

**Редакция от 8 октября 2026 года — пространственный слой.** Автор отметил,
что первая подача с круглыми значками, центральной меткой Module и красным пунктиром решает
задачу объяснения, но выглядит грубо. По его запросу изучены более современные референсы;
[наблюдения, источники и границы](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md#пространственный-слой-обзорной-обложки-пробное-направление)
принадлежат общему визуальному стандарту. Автор положительно оценил направление («уже интереснее»)
и поручил опираться на мировых лидеров отрасли автоматизации. Следующим поручением такой же
приём применён к обзорной планировке ПО.

Исходный PNG сохранён. [home-automation-scene.astro](../src/components/home-automation-scene.astro)
содержит отдельный графический слой прежней главной:

- Полупрозрачные светлые подписи с небольшими значками и локальными тонкими выносками.
  Они объясняют результат и условие: свет по движению, тепло по запросу, шторы по солнцу.
- Мягкое поле света, условные следы активности у датчика, контуры радиатора и шторы.
  Это пояснение функции, не схема монтажа или точное измерение области действия датчика.
- Центральная плашка и сеть красного пунктира удалены с главной. Ссылка на принцип работы
  Module находится под сценой. Подписи ведут к освещению, отоплению и шторам.
- Короткое вступительное движение длится 4,5 секунды и останавливается. При
  `prefers-reduced-motion: reduce` анимации и переходы отключены. Значение понятно статически.
- При ширине самой сцены до 540 px подписи переходят под изображение. Области нажатия не
  меньше 52 px по высоте; доступны клавиатура и видимый фокус. Люди и оборудование не скрываются
  под подписями. Новых библиотек и клиентского JavaScript нет.

Общими с планировкой ПО стали [automation-scene.astro](../src/components/automation-scene.astro) и
[automation-scene.css](../src/styles/automation-scene.css): оформление подписей, фокус,
адаптивность и короткие эффекты. Геометрия этого интерьера сохранена в компоненте главной,
геометрия дома — в [компоненте ПО](../src/components/software-automation-scene.astro).
Это иллюстрация функций, не скриншот существующего GUI, не поток реальных показаний.

## Финальный промпт

```text
Use case: stylized-concept.
Asset type: main homepage illustration for Module, an engineering automation service.
Primary request: create a NEW architectural illustration in the exact visual family of the provided Module lighting reference. The reference is for materials, camera, restrained realism, natural people and colour palette only. Do not simply repeat its three-room panorama.
Scene: one compact cutaway apartment corner with an entrance nook on the left and a comfortable living room to the right, on one coherent floor slab. Three clearly visible everyday results share the same space: an adult in a muted terracotta coat has just entered the entrance and the small ceiling light above them is warmly lit; the living area has a clearly recognizable installed radiator with sensible pipe connections, and a seated adult reading comfortably; a large side window has a ceiling-mounted motorised fabric curtain drawn halfway against bright afternoon sunlight, leaving the other half of the view open. The curtain track is attached to the ceiling, the fabric hangs naturally, light and shadow are physically plausible. A small unobtrusive movement sensor is attached to the entrance wall. No electrical control panel is needed in this scene.
Composition: compact landscape approximately 3:2, axonometric view slightly from above, open front and sides, complete floor base and visible contact shadows. Large simple forms, clear hierarchy, only two adults, modest restrained furniture and no busy decoration. Keep all three functions readable at a modest website size. The whole scene remains comfortably within the frame with warm off-white margins. Use one coherent interior rather than three miniature disconnected rooms.
Style: refined architectural editorial illustration, matte limestone and plaster, natural oak and quiet linen textiles, graphite window frames, a little muted terracotta. Warm off-white backdrop inspired by #f0eee6 and #faf9f4. Match the provided reference's level of detail, soft volume and gentle shadows.
Constraints: correct anatomy and natural feet in contact with the floor, plausible human pose, all equipment firmly mounted, pipes attached, nothing floating. No heat-wave effects or technology glow. No implication of a real completed installation: this is an editorial concept illustration.
No text, captions, numbers, arrows, logos, UI, settings screens, diagrams, floating icons, watermark or neon. Explanations will be added as HTML around the image.

```

## Проверка изображения

Просмотрен результат генерации: два человека с естественными позами, единый пол и контактные
тени, светильники, радиатор с подключениями, прикреплённая к потолку штора. В растре нет подписей
или интерфейса. На мобильной странице изображение выводится целиком; проверка размещения —
в записи реализации коммерческих страниц.

После обновления слоя выполнен `yarn build`: встроенный Astro check — 0 errors, warnings, hints;
статическая сборка успешна. Осталось прежнее сообщение sitemap без `site`, конфигурация не менялась.
Проверены 1280×900, 1024×900, 850×900 и 320×740: сцена помещается целиком, подписи не пересекаются,
на узком контейнере расположены под изображением; горизонтального переполнения нет.
Клавиатурный переход показывает фокус 2 px, Enter на подписи штор открывает
`/ru/docs/automations/curtains/`. В собранных главной и ПО проверено 84 внутренних ссылки,
включая якоря; отсутствующих целей и дублирующихся ID нет.

Кадры текущей редакции:
[desktop](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/home-spatial-desktop.jpg),
[mobile](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/home-spatial-mobile.jpg).

После переноса приёма на ПО отдельно перепроверены композиция главной при 1280×900 и переход
подписей под сцену при 320×740; внешний вид и координаты главной сохранены.
