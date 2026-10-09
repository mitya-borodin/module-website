# Обложка услуги: щит и возможности автоматизации

Текущая итерация: **9 октября 2026 года, карусель из четырёх кадров**.
После замечания о высоте обложки автор вернул компактную компоновку «текст слева, щит справа»,
затем поручил добавить карусель со щитом, комнатой с отметками и другими возможностями.
[Владелец позиционирования](../../module-market-intelligence/internet-promotion/spec/homepage-audience-routing-brief.md#что-объясняет-главная).

## Состав и поведение карусели

Владелец — [service-overview.astro](../src/components/service-overview.astro).
Четыре кадра; первый обновлён по поручению автора об оборудовании Wiren Board:

| Кадр | Изображение | Переход |
| --- | --- | --- |
| Собранный щит под задачи объекта | [Щит с Wiren Board](../src/assets/site/service-cabinet-wiren-board-v2.png) | `/software/` |
| Свет, шторы и температура — автоматически | [Комната](../src/assets/site/automation-home-concept-v1.png) | `/software/` и три точных раздела |
| Тепло по потребности каждой зоны | [Отопление](../src/assets/docs/heating/heating-concept-v1.png) | `/ru/docs/automations/heating/` |
| Протечка обнаружена — команда перекрыть воду | [Защита от протечек](../src/assets/docs/leaks/leaks-concept-v1.png) | `/ru/docs/automations/leaks/` |

Щит всегда первый после загрузки. Стрелки и четыре номера переключают кадры вручную,
автоматической смены нет. Поддержаны клавиши влево/вправо и Home/End, видимый фокус,
статус текущего кадра для экранного диктора. Скрытые кадры исключаются из Tab-навигации.
Без JavaScript остаётся первый кадр со ссылкой; неработающие переключатели скрыты.

Ширина — до 480px; одинаковая область изображений 12:11 и резерв под подписи сохраняют
высоту при смене кадров. Изображения помещаются целиком. На ширине до 850px карусель
идёт после текста. Комната переиспользует геометрию `home-automation-scene.astro`,
а компактный вариант общего компонента выводит три короткие подписи под сценой.
На странице ПО стандартный вариант остаётся прежним.

## Оборудование Wiren Board в первом кадре

**Поручение автора, 9 октября 2026 года:** часть оборудования в щите показать как устройства
Wiren Board. Обновлён только первый кадр, геометрия и поведение карусели сохранены.

- Текущий файл: [service-cabinet-wiren-board-v2.png](../src/assets/site/service-cabinet-wiren-board-v2.png).
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
