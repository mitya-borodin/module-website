# Обложка услуги: щит и возможности автоматизации

Текущая итерация: **9 октября 2026 года, карусель из четырёх кадров**.
После замечания о высоте обложки автор вернул компактную компоновку «текст слева, щит справа»,
затем поручил добавить карусель со щитом, комнатой с отметками и другими возможностями.
[Владелец позиционирования](../../module-market-intelligence/internet-promotion/spec/homepage-audience-routing-brief.md#что-объясняет-главная).

## Состав и поведение карусели

Владелец — [service-overview.astro](../src/components/service-overview.astro).
Четыре кадра. После одобрения щита автор поручил уточнить компоновку второй сцены,
заменить третью и четвёртую видами интерьера и явно показать работу автоматизаций:

| Кадр | Изображение | Переход |
| --- | --- | --- |
| Собранный щит под задачи объекта | [Щит с Wiren Board и подписями](../src/assets/site/service-cabinet-wiren-board-v4.png) | `/software/` |
| Дом встречает вас и подстраивается под день | [Встреча дома](../src/assets/site/service-arrival-scene-v1.png) | Два пункта: освещение и шторы; общий переход `/software/` |
| Открытый вид на закат и свет для настроения | [Вечерняя сцена](../src/assets/site/service-evening-scene-v1.png) | Два пункта: шторы на закате и цветной свет |
| Комфортная температура круглый год | [Климат](../src/assets/site/service-climate-scene-v1.png) | Два пункта: отопление и кондиционер |

Щит всегда первый после загрузки. Стрелки и четыре номера переключают кадры вручную,
автоматической смены нет. Поддержаны клавиши влево/вправо и Home/End, видимый фокус,
статус текущего кадра для экранного диктора. Неактивные кадры исключаются из Tab-навигации
и дерева доступности через `inert` и `aria-hidden`.
Без JavaScript остаётся первый кадр со ссылкой; неработающие переключатели скрыты.

Ширина — до 480px; от 851px она дополнительно ограничивается высотой окна, чтобы подписи
и переключатели помещались в первый экран. У щита область 12:11; в сюжетных кадрах 2–4
изображение 3:2 занимает верх по всей ширине, а два кликабельных пункта снизу получают высоту
по содержимому. Изображения помещаются целиком, без наложения на меню. На всех размерах
карточки получают общую высоту по самому высокому кадру; заголовки также выровнены.
До 850px карусель идёт после текста; до 540px два пункта под сценой располагаются друг под другом.
По следующему поручению автора второй кадр тоже показывает интерьер изнутри в стиле
третьего и четвёртого. Новая сцена встречи дома заменила изометрическую комнату;
её отметки и два пункта меню принадлежат карусели. Планировка страницы ПО не менялась.

Тонкие контуры оборудования, точки и короткие подписи на сценах показывают причинную связь:
движение → свет; солнце → шторы; на закате шторы остаются открытыми; цвет и яркость меняются
по времени; температура вызывает запрос на охлаждение или обогрев. Отметки — отдельный
HTML/SVG-слой, а не часть растра. Это объяснение возможностей, не живые показания и не GUI.
Охлаждение и обогрев показаны как доступные варианты, без одновременных потоков холода и тепла.
Новые исходники, ракурс и точные промпты — у [владельца сцен](service-scenes-concept-images.md).
Проверки и снимки — у [владельца реализации](commercial-pages-visual-refresh.md#сцены-и-отметки-автоматизаций-9-октября).

## Переключатели в первом экране

Уточнение автора **09.10.2026**: на ноутбуке 1280×700 стрелки обрезались нижней границей окна.
В [service-overview.astro](../src/components/service-overview.astro) при ширине от 851px карусель
имеет предел `clamp(340px, calc(100vh - 270px), 480px)`. Изображение сохраняет пропорции;
положение отметок относительно изображения и высота viewport карусели не меняются при выборе кадра.

В [index.astro](../src/pages/index.astro) вертикальные поля настольной обложки учитывают высоту
окна. До 650px по высоте дополнительно уменьшены отступы текста и размер заголовка. Кнопки
остаются прежнего размера, ссылки и изображения сохранены. До 850px по ширине действуют
прежние стили телефона/планшета; логика свайпов, стрелок и клавиатуры не менялась.

Проверено **09.10.2026**, до следующего исправления карточек: `yarn build` — успешно,
`astro check`: 0 errors/warnings/hints. На 1280×700 нижняя граница переключателей находилась
на 653px; на 1280×600 — на 572px. Актуальные размеры после правки — в разделе ниже.
Все четыре кадра проверены на обоих размерах: переключатели и CTA помещаются, подписи внутри
изображений, высота при смене кадра стабильна. Также проверены 1024×600, 1101×600, 1101×700,
1366×768, 1440×650, 1920×1080. На 850×1024 и 320×740 сохранён вертикальный порядок.
Горизонтального переполнения нет. [Первый экран 1280×700](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/carousel-controls-laptop.png).
Изменена только компоновка обложки; production logic автоматизаций и публикация не менялись.

## Одинаковые размеры карточек

Итоговое уточнение автора **9 октября 2026 года**: карточку щита сделать такого же размера,
как кадры 2–4, исключить скачок при переключении; фон щита должен заполнять всю карточку
без видимых полос подложки. Промежуточная высота viewport по активному слайду заменена.

В [service-overview.astro](../src/components/service-overview.astro) измеряются естественные
высоты четырёх областей media и заголовков. Их максимумы задают общие CSS-переменные;
переключение не меняет размеры. Пересчёт выполняется при изменении ширины, размеров меню
и после загрузки шрифтов. Ширина media явно ограничена `100%`, чтобы заданная высота вместе
с `aspect-ratio` не расширяла карточку.

Щит вписан целиком; изображение и квадратный слой подписей имеют общие размеры и центр.
По уточнению автора центрируется видимый корпус с дверцей: их границы в исходнике примерно
`x=57…1195`, `y=120…1187` при размере 1254×1254. Изображение и указатели вместе смещены
на 2.1% своей высоты вверх, компенсируя неравные поля PNG. При замене исходника этот оптический
сдвиг нужно проверить заново. Светлый фон `#fdfdfa`, выбранный по краям исходника, продолжается
на всю карточку. Исходное изображение и оборудование не растягиваются и не обрезаются.
Зазор между ссылкой и переключателями равен 8px у каждого кадра.

Проверено 9 октября: `yarn build` успешен, Astro — 0 errors/warnings/hints.
Для всех четырёх кадров на 320×740, 390×844, 768×1024, 1280×700 и 1280×600
совпадают высота media, общая высота карусели и положение переключателей относительно её верха.
Обрезки и горизонтального overflow нет. На 390px media имеет высоту около 399px,
на 1280×700 — около 394px. Браузер не зарегистрировал ошибок при проверке.
Production logic автоматизаций не менялась; изменены только компоновка и фон карусели сайта.

## Мобильная высота по текущему кадру

Промежуточный вариант от 9 октября убирал резерв пустоты под ссылкой, но сдвигал контролы.
По следующему замечанию автора заменён [одинаковыми размерами карточек](#одинаковые-размеры-карточек).

## Круглые переключатели на телефоне

Замечание автора **09.10.2026**: фон номера кадра выглядел овальным. Причина — размеры
номерной кнопки 36×44px при `border-radius: 50%`. В [service-overview.astro](../src/components/service-overview.astro)
всем переключателям заданы 44×44px и запрет flex-сжатия. До 360px по ширине промежутки
убраны, чтобы шесть кнопок помещались без уменьшения области нажатия.

Проверено **09.10.2026**: `yarn build` — успешно, `astro check`: 0 errors/warnings/hints.
В браузере на 320×740, 375×812, 390×844 и 1280×700 все шесть кнопок имеют фактические размеры
44×44px, находятся в пределах экрана; горизонтального переполнения нет. Переключение 1 → 2 → 1
сохранилось, фон при наведении круглый. [Мобильный вид](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/carousel-round-selectors-mobile.png).
Изменены только размеры и промежутки контролов; JS и production logic автоматизаций не менялись.
Публикация не выполнялась.

## Читаемые подписи под сценами

Замечание автора **09.10.2026**: в вечернем кадре текст двух узких карточек не помещался.
Причина — общая фиксированная пропорция области и остаточная высота строки меню: при переносах
содержимое выходило из карточек, а увеличение минимальной строки без снятия общей пропорции
приводило к наложению картинки на меню.

В [service-overview.astro](../src/components/service-overview.astro) сюжетные кадры получили
естественную высоту: полная картинка 3:2, затем меню. До 540px пункты идут в одну колонку,
заголовок 16px, пояснение 13px, отступы по 12px. Пояснения больше не скрываются на узком экране.
На широких экранах сохраняются две колонки с компактными отступами. Изображения, тексты,
адреса ссылок и JS карусели не менялись.

Проверено **09.10.2026**: `yarn build` — успешно, `astro check`: 0 errors/warnings/hints.
Кадры 2–4 проверены на 320×740, 375×812, 390×844, 414×896, 768×1024, 1024×600,
1280×700 и 1280×600. Текст внутри карточек, меню внутри общей рамки, картинка и меню
не перекрываются, пропорции картинки 3:2, горизонтального переполнения нет. Переключатели
сохраняют положение при смене сцены; их нижняя граница на 1280×700 — 653px,
на 1024×600 и 1280×600 — 585px. Проверка в браузере при мобильных размерах,
без физического iPhone. [Мобильный вид](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/carousel-readable-cards-mobile.png).
Реализовано локально, публикация не выполнялась.

## Текущий состав щита и подписи

По следующим указаниям автора показаны контроллер с Ritmod, SSR, реле, диммер и аналоговые
выходы; пять подписей объясняют, чем они управляют. Защитные аппараты размещены в заданном
порядке. Актуальный исходник v4, состав, источники и промпты принадлежат
[владельцу изображения оборудования](service-cabinet-components-image.md).

## Контраст линий к оборудованию

Замечание автора **09.10.2026**: тонкие бежевые линии от подписей терялись на фоне щита.
В SVG-слое [service-overview.astro](../src/components/service-overview.astro) толщина линии
увеличена с 1.2 до 2px, цвет изменён на тёмно-терракотовый `#b33312`. Под ним проходит
светлый контур 4.5px для читаемости на тёмных деталях; оба слоя используют один маршрут.
Кольца у устройств получили тот же контрастный цвет и непрозрачную светлую заливку.
`non-scaling-stroke` сохраняет толщину при уменьшении изображения. Подписи, точки назначения,
исходный растр и прочие сцены не менялись.

Проверено **09.10.2026**: `yarn build` — успешно, `astro check`: 0 errors/warnings/hints.
В браузере осмотрен первый кадр на 320×740, 390×844 и 1280×700: пять связей видны
поверх корпуса и проводов; толщина 2px сохраняется, переполнения нет.
[Мобильный вид](/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/cabinet-contrast-mobile.png).
Изменена только визуальная подача главной, без изменения логики автоматизаций и публикации.

## Оборудование Wiren Board в первом кадре

Ниже — происхождение предыдущего варианта v2 с двумя одинаковыми релейными модулями.

**Поручение автора, 9 октября 2026 года:** часть оборудования в щите показать как устройства
Wiren Board. Обновлён только первый кадр, геометрия и поведение карусели сохранены.

- Предыдущий файл: [service-cabinet-wiren-board-v2.png](../src/assets/site/service-cabinet-wiren-board-v2.png).
- В среднем ряду изображены контроллер Wiren Board 8 и два релейных модуля WB-MR6C v.3;
  автоматы, клеммы, кабельные каналы, корпус и дверца сохраняют прежнюю композицию.
- Метод: встроенный ImageGen, edit прежнего щита с официальными изображениями устройств
  как визуальными референсами; дополнительная точечная правка подписи первого реле.
- Проверено по официальным страницам **09.10.2026**:
  [Wiren Board 8](https://wirenboard.com/ru/product/wiren-board-8/),
  [WB-MR6C v.3](https://wiki.wirenboard.com/wiki/WB-MR6C_v.3_Modbus_Relay_Modules).
  Референсы нужны для корпусов, зелёных клеммников и маркировок; состав готовой поставки
  или совместимость конкретной конфигурации этим изображением не подтверждаются.
- Предыдущий исходник `service-cabinet-only-v1.png` сохранён. Это иллюстрация, не монтажная
  схема: микромаркировки и соединения не используются как электротехническое руководство.

### Промпт вставки оборудования

```text
Use case: precise-object-edit.
Asset type: square warm product illustration for the first slide of the Ritmod engineering service website.
Input images: Image 1 is the edit target, the open electrical automation cabinet. Image 2 is an official visual reference for the Wiren Board 8 controller only; ignore its blue and green graphic background. Image 3 is an official visual reference for the WB-MR6C v.3 relay module only.
Primary request: replace PART of the generic automation equipment inside this cabinet with clearly recognizable actual Wiren Board equipment. Keep all other cabinet features and the established warm, restrained 3D illustration style.
Changes inside cabinet only: arrange ONE Wiren Board 8 controller and TWO WB-MR6C v.3 relay modules on the middle DIN rail, alongside a small group of existing circuit breakers. The controller is wider than the individual relay modules. Match the references: off-white/light-gray rectangular DIN enclosures, white printed front labels, dark openings around GREEN screw terminal blocks above and below. The controller face must legibly read "Wiren Board 8"; two slim relay-module faces must read "WB-MR6C v.3" and have the small green wb mark. These are real housed devices, NOT dark PLC substitutes, NOT exposed circuit boards. Preserve characteristic proportions and the arrangement of front faces and terminal blocks. Mount them plausibly on the same physical rail with unobstructed faces; run neat short cables from actual terminal blocks into the existing cable ducts. Small electrical label detail may remain understated.
Invariants: preserve the cabinet's exterior dimensions, camera angle, open door on the left with attached hinges and bonding wire, top row circuit protection, bottom terminal blocks, cable ducts, equipment attachment to rails, cream studio background, warm soft lighting, shadow and the complete uncropped cabinet. Keep the image square. The cabinet remains the whole main subject with no room, people or decorative objects.
Style: warm refined architectural/product 3D illustration with matte materials, physically plausible mounting and wiring, same perspective and softness as Image 1. Brand equipment should look integrated into the assembly, not pasted on.
Avoid: extra logos outside device labels; slogans, callouts, arrows, watermark, blue/green background circles, external title text, fake GUI, floating components, disconnected cables, oversized devices, duplicate controller, changes to the door or background.
Opaque background.
```

### Финальная точечная правка

```text
Use case: precise-object-edit.
Image 1 is the edit target: the newly edited complete cabinet with a Wiren Board 8 and two narrow relay modules on the middle row. Image 2 is the official relay product reference.
Make ONE tiny correction only: the left one of the two narrow relay modules, immediately to the right of the wide Wiren Board 8 controller, has incorrect model lettering "Wiren Board 3". Replace that incorrect lettering with exactly "WB-MR6C v.3", matching the same model text already on the rightmost relay module and the official reference. Preserve the green circular wb mark above it. Both relay modules must read "WB-MR6C v.3". The controller must continue to read "Wiren Board 8".
Keep the entire image otherwise exactly as-is: geometry, lighting, door, hardware positions and sizes, all wiring, whole cabinet framing, square aspect ratio, cream opaque background. Do not add devices, change labels on the controller, crop, or alter any other equipment. The only change is the incorrect model lettering on the first relay module.
```

## Предыдущий исходник первого кадра и размещение

- Файл: [service-cabinet-only-v1.png](../src/assets/site/service-cabinet-only-v1.png).
- Метод: встроенный ImageGen, edit с [предыдущей сценой](../src/assets/site/service-cabinet-room-v1.png)
  как референсом щита и материалов. Квадратный кадр, тёплый непрозрачный фон.
- На изображении только открытый щит: защитные устройства, контроллер, реле, клеммы,
  кабельные каналы и аккуратные соединения. Дверца закреплена петлями, видна связь с корпусом.
- [service-overview.astro](../src/components/service-overview.astro) выводится справа от общего
  блока заголовка, пояснений и CTA. Ширина изображения ограничена 480px; сцена целая, без обрезки.
  При ширине страницы до 850px текст и изображение идут последовательно.
- Подпись короткая, ссылка «ПО Ritmod управляет оборудованием» ведёт на `/software/`.
- Прежний исходник с комнатой сохранён для истории и пока используется в GUI-аспекте
  «Разметка устройств» на странице ПО. Эта итерация меняет только обложку главной.

Это концептуальное изображение, не фото изготовленной поставки и не проверенная электрическая
схема. Геометрическая правдоподобность иллюстрации не подтверждает её монтажную корректность.

## Промпт предыдущего щита без маркировки

```text
Use case: precise-object-edit.
Asset type: compact product hero illustration for the Ritmod engineering and control-cabinet assembly service.
Input image: the previous cabinet-and-room illustration, used as the style and cabinet reference.
Primary request: show ONLY the electrical automation cabinet, with no room whatsoever. Recompose the cabinet as a large isolated object on a warm opaque off-white studio background. Remove the entire living room, architecture, floor slab, furniture, person, plants and documents.
Subject: one realistic neatly assembled matte white metal automation cabinet, front door open toward the left with visible hinges and a subtle protective bonding connection. The interior is the main subject, presented almost front-on with a very slight three-quarter angle: orderly DIN rail rows, modular circuit protection, a small automation controller, relay modules, terminal blocks and cable ducts. Show credible short neatly terminated wires routed through ducts, no loose ends. All components are fixed to real rails or the backplate; door visibly attached to the enclosure. No branded equipment or readable labels.
Style: preserve the reference's refined warm architectural 3D illustration, matte materials, soft volume and restrained graphite detailing; more descriptive product rendering, not a photograph, not a wiring schematic. Soft daylight and contact shadow beneath the cabinet on a seamless warm off-white surface, no wall or surrounding room. Subtle warm and cool wire colours only where physically appropriate.
Composition: square 1:1, complete cabinet and open door fit in frame with 8–10% breathing room. Cabinet occupies most of the canvas and its internals are clearly readable at a 480px web display. Keep perspective mild and the equipment recognisable. No additional objects, text, captions, logos, UI, icons, diagrams or technology glow. Opaque background.
```

## Свайпы: 9 октября 2026 года

По запросу автора карусель переведена с показа/скрытия кадров на нативную горизонтальную
прокрутку с `scroll-snap-type: x mandatory`. Кадр следует за пальцем и фиксируется на границе;
`scroll-snap-stop: always` задаёт остановки на отдельных кадрах. Swiper и новые зависимости
не потребовались. Основание — [CSS Scroll Snap, W3C](https://www.w3.org/TR/css-scroll-snap-1/),
проверено 9 октября 2026 года.

Событие `scroll` синхронизирует номер, статус и доступность кадра. Кнопки и клавиатура используют
ту же позицию, сохраняют прежний переход с последнего кадра на первый. У нативной протяжки
есть границы первого и последнего кадров. При изменении ширины сохраняется выбранный кадр.
Автопрокрутки и дополнительной анимации нет. Без JavaScript остаётся прежний первый кадр.

`overscroll-behavior-x: contain` ограничивает горизонтальную цепочку прокрутки;
`touch-action: pan-x pan-y` сохраняет вертикальное чтение. Совместимость с защитой браузерных
жестов принадлежит [mobile-browser-gestures.md](mobile-browser-gestures.md). На ПО у `.gui-slides`
добавлены те же правила оси и остановки; сейчас там по одному изображению, поэтому новая серия
появится только после добавления следующих кадров.

Проверка локальной сборки:

- `yarn build`: успешно, `astro check` — 0 errors, 0 warnings, 0 hints.
- Адресные тесты защиты мобильных жестов: 8/8, включая внутреннюю горизонтальную прокрутку.
- В браузере на ширине 390px выполнена нативная горизонтальная прокрутка 1→2→1 и 2→3.
  После остановки смещение совпадает с шириной кадра, активные номера и статус синхронизированы.
- Вертикальная прокрутка поверх изображения изменяет позицию страницы, сохраняя кадр и URL.
- При переходе 390→320px выбранный третий кадр сохранён (ширина 269px, смещение 538px),
  горизонтального переполнения страницы нет. Проверены ArrowRight, End и кнопка перехода 4→1.
- В консоли ошибок не получено. Это проверка нативной прокрутки настольного браузера при
  мобильных размерах; физический iOS/Android touch остаётся отдельной проверкой.

Изменения реализованы локально, без публикации и изменения изображений.

## Проверка исходника щита до карусели

Исходник осмотрен: дверь связана с корпусом, аппараты закреплены на рейках, видны кабельные
каналы и соединения. Подтверждены только визуальные свойства концепта. Сборка и размещение
проверены на 1440×900, 1280×800, 900×800 и 320×740; подробности и кадры — у
[владельца реализации](commercial-pages-visual-refresh.md#компактная-обложка-только-со-щитом-уточнение-9-октября).

## Предыдущая редакция: щит и помещение

- Файл: [service-cabinet-room-v1.png](../src/assets/site/service-cabinet-room-v1.png).
- Метод: встроенный ImageGen, edit с референсом [прежней сцены главной](../src/assets/site/automation-home-concept-v1.png).
- В предыдущей редакции [service-overview.astro](../src/components/service-overview.astro) выводил её первым
  изображением главной, на всю ширину до 1080px. Сцена целая, без обрезки; Astro создаёт WebP.
- На одной плите показаны техническая ниша со щитом и жилая комната. Щит закреплён на стене,
  видны открытая дверца, ряды модулей и кабельные каналы. Документы лежат на столе.
- Подписи «Проект / Щит / Программа» связывают сцену с предложением. Ссылка «ПО Module
  управляет оборудованием» открывает `/software/`.
- Тот же исходник временно используется в аспекте «Разметка устройств» на странице ПО;
  отдельная лишняя иллюстрация для него не создаётся.

Это концептуальная иллюстрация, не фотография поставки и не схема щита. По ней нельзя
проверять электрический проект или утверждать, что показана готовая установка клиента.
Предыдущая обложка сохранена у [исторического владельца](homepage-concept-image.md).

## Промпт предыдущей редакции

```text
Use case: precise-object-edit.
Asset type: wide hero illustration for Module's engineering design and electrical control panel assembly service, 16:9 landscape.
Edit the attached warm architectural illustration into a NEW wide composition that clearly explains the supplied automation equipment AND the room it serves. Preserve the established premium, calm, realistic miniature architectural style, cream background, matte limestone, oak, warm amber practical lighting, graphite metal and muted terracotta.
Composition: a cohesive cutaway on a single continuous architectural floor slab. LEFT third: a tidy small utility/service alcove with a clearly wall-mounted open electrical automation cabinet. Cabinet is the focal object: realistic white/graphite metal rectangular enclosure, open hinged door, four orderly DIN rail rows of modular protective switches, automation controller and relay modules, visible cable ducts, neatly terminated wiring and terminal blocks. The cabinet is anchored to a solid wall and has realistic scale relative to the room. A slim small bench below/beside it holds two neatly laid out project drawings and a closed document binder, showing the engineering deliverable without readable text.
RIGHT two thirds: retain the reference's living room identity and warm lighting, sofa, a person reading, motorized curtains at a window and radiator beneath it. Show clearly that the utility alcove and living room belong to the same object. Calm inhabited space, not a hardware catalog pasted over a room.
The entire architectural scene and cabinet fit comfortably inside the frame with breathing space. No floating objects, no disconnected surfaces, no impossible cables. No decorative network lines, no digital UI panels, no text, no logos, no watermarks. No instruction schematic or wiring diagram. This is a conceptual marketing illustration, not a photo of a completed installation. Make the cabinet large enough to be recognizable at web hero size. Keep the warm light background opaque.
```

## Проверка предыдущей редакции

Исходник осмотрен: щит закреплён, поверхности и опоры связаны, человек и предметы не висят
в воздухе. Проверены размещение и загрузка на главной при 1280, 1024 и 390px. Ссылка из
подписи открыла страницу ПО. Сборка и общая проверка принадлежат
[владельцу коммерческих страниц](commercial-pages-visual-refresh.md).
