# Обзорная планировка для страницы ПО

Статус: реализовано по уточнению автора от **8 октября 2026 года**.
Первый экран `/software/` показывает дом целиком и охват автоматизаций. Конкретный пример света
остаётся ниже в объяснении принципа работы и в своей карточке каталога. По следующему
уточнению автора поверх планировки добавлены обозначения автоматизаций, чтобы изображение
не воспринималось как предложение архитектурного проектирования. После положительной оценки
пространственного слоя главной автор поручил перенести его на обзор ПО; этот вариант реализован.
Владелец решения — [brief главной и ПО](../../module-market-intelligence/internet-promotion/spec/homepage-audience-routing-brief.md#как-объяснять-по).

## Размещение после итерации 9 октября

По согласованному решению автора планировка сохранена и увеличена до 1080px под заголовком
и CTA на тёмном первом экране. Растр остаётся тёплым и непрозрачным. Шапка ПО также тёмная,
с отметкой «ПО». `sizes` компонента соответствует широкому выводу; на узком экране подписи
по-прежнему переходят под изображение. Главная услуги теперь использует другой компонент —
[карусель со щитом первым кадром](service-overview-concept-image.md).

## Исходник и стиль

- Метод: встроенный ImageGen, новая иллюстрация по стилистическому референсу.
- Референс: [обзорная сцена главной](../src/assets/site/automation-home-concept-v1.png), только стиль.
- Файл: [software-house-concept-v1.png](../src/assets/site/software-house-concept-v1.png).
- Формат: 1536×1024, непрозрачный тёплый фон; Astro создаёт адаптивные WebP.
- Общий стандарт: [архитектурные иллюстрации Module](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).
- На одной плите показаны связанные помещения, правдоподобные дверные проёмы, светильники,
  шторы, радиатор, кондиционер, кухня, санузел и техническая зона. Иллюстрация концептуальная,
  не монтажная схема и не фотография выполненного проекта.

## Условные обозначения автоматизации

[software-automation-scene.astro](../src/components/software-automation-scene.astro) владеет
геометрией графического слоя и четырьмя подписями результата:

- Свет там, где он нужен: акценты у светильников гостиной и прихожей.
- Шторы учитывают солнце: локальные контуры и направление движения у ткани.
- Температура поддерживается: радиатор и кондиционер спальни.
- Защита от протечек: водоснабжение в техническом помещении; подпись объясняет команду
  перекрытия по сигналу, не выдаёт иллюстрацию за подтверждение физического закрытия крана.

Полупрозрачные подписи разнесены по краям планировки; люди, мебель и оборудование читаются.
Каждая подпись ведёт к соответствующему функциональному описанию. Центральная метка и красная
сеть пунктира заменены локальными тонкими выносками. Ссылка на принцип работы Module находится
под сценой. Исходный PNG сохранён, а контуры и световые акценты реализованы SVG.

Общий [automation-scene.astro](../src/components/automation-scene.astro) и
[automation-scene.css](../src/styles/automation-scene.css) сохраняют поддержку прежней сцены главной. Они владеют
материалом подписей, типографикой, областями нажатия от 52 px, фокусом и адаптивностью.
При ширине самой сцены до 540 px подписи переходят в список под изображением; локальные
выноски скрываются. Вступительные эффекты длятся 4,5 секунды, затем останавливаются;
`prefers-reduced-motion` отключает движение. Клиентский JavaScript не добавлен.

Световые поля и контуры условны: это объяснение функций, не трассировка проводов, схема монтажа,
точная диаграмма покрытия датчика или показания работающего объекта. Подлинный GUI по-прежнему
имеет отдельные места в разделе управления. Геометрия каждой сцены хранится у своего владельца;
оформление и адаптивность общие.

## Финальный промпт

```text
Use case: stylized-concept.
Asset type: hero illustration for the Module home-automation software website.
Primary request: show an entire coherent house floor plan, communicating that automation serves different rooms and engineering systems throughout a home, instead of showing one isolated lighting example.
Input image: style reference only. Match the approved reference's warm architectural illustration, matte materials, refined soft shadows and restrained everyday atmosphere. Do NOT copy its two-room layout.
Composition: a single complete one-storey home, roof removed, viewed from an elevated axonometric angle, showing the WHOLE footprint on ONE continuous connected foundation. Broad landscape 3:2. Six readable zones: an entrance and circulation hallway, a spacious living/dining room and adjoining kitchen, one bedroom, a bathroom, and a modest utility room. All rooms genuinely connected by clear doorways and a sensible hallway; no disconnected dioramas, no duplicated before/after panels. Lower the near walls and selected partitions so contents remain visible. All house edges fit inside the image with a narrow warm off-white margin. Simple coherent rectangular footprint, realistic structural connections.
Visible systems: soft warm fixtures in the entrance and living area, window curtains partly open on real tracks, a radiator correctly mounted below a window, one unobtrusive wall air-conditioning unit, kitchen sink and bathroom fixtures, a grounded water-heating cylinder and compact wall-mounted heating and water-service equipment in the utility room with short clearly connected pipes. No exaggerated exposed plumbing, no technical diagram. Recognizable everyday rooms are primary; equipment is secondary. A single person comfortably seated reading in the living room establishes scale, with anatomically natural limbs and physical contact with furniture. Calm interior, no theatrical alarm or leak.
Style: refined architectural editorial miniature, matte limestone and plaster, oak floors and furniture, quiet neutral textiles, graphite window frames, muted terracotta accents, warm opaque background inspired by #f0eee6 and #faf9f4. Soft plausible daylight through exterior windows, warm lighting accents, natural contact shadows. Simple large objects readable on mobile, minimal decor.
Constraints: a COMPLETE home floor plan, not one room, not a collage, no large exterior scenery or roof hiding interiors. No text, labels, numbers, logos, watermarks, badges, UI, floating icons, arrows, glowing networks or cutaway floor heating diagrams. This is a conceptual home, not a construction diagram.
```

## Размещение и проверка

[software.astro](../src/pages/software.astro) подключает готовую сцену. Каталог автоматизаций,
блоки GUI и функциональные описания сохранены. `yarn build` завершён успешно: встроенный Astro
check — 0 errors, warnings, hints; осталось прежнее сообщение sitemap без `site`.

Проверены 1280×900 и 320×740 визуально, промежуточные 1024×900 и 850×900 — на переход размещения
подписей, пересечение и переполнение. Планировка целая, четыре подписи читаются, пересечений
и горизонтального переполнения нет. Клавиатурный фокус — 2 px. Переход из подписи защиты от
протечек открыл `/ru/docs/automations/leaks/` с названием «Защита от протечек воды».
На главной проверена сохранность композиции при 1280×900 и адаптивного расположения при 320×740.
В собранных главной и ПО проверено 84 внутренних ссылки с якорями, отсутствующих целей и
дублирующихся ID нет. Изменения ограничены представлением сайта и его документацией.

Кадры результата:
[desktop](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/software-spatial-desktop.jpg),
[mobile](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/software-spatial-mobile.jpg).
Общие проверки — у [владельца реализации](commercial-pages-visual-refresh.md#проверка-согласованной-визуальной-итерации-9-октября).
