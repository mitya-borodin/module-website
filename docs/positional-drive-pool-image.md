# Бассейн: связь покрытия с бортами

Статус: редакционная правка иллюстрации по замечанию автора, 8 октября 2026 года.
Владелец серии — [изображения позиционного привода](positional-drive-images.md),
проверки страницы — [функциональное описание](positional-drive-functional-description.md).
Режим: редактирование встроенным ImageGen, без CLI/API fallback.

На приложенном автором скриншоте раннего сдвижного настила связь покрытия с краем бассейна
не читалась. К моменту замечания страница уже использовала рулонную версию 2. В версии 3
уточнена именно она: непрерывные направляющие по бортам, закреплённые стойки вала и связь
развёрнутого полотна с направляющими и валом. Это концептуальная иллюстрация механики,
не монтажная схема и не доказательство защитных свойств покрытия.

## Файлы

- Вход: [pool-cover-v2.png](../src/assets/docs/positional-drive/sections/pool-cover-v2.png),
  осмотрен перед редактированием и сохранён.
- Результат на странице: [pool-cover-v3.png](../src/assets/docs/positional-drive/sections/pool-cover-v3.png).
- Исходный результат ImageGen: `/Users/borodin/.codex/generated_images/01a11a0c-97d8-7373-9c79-afd65841a762/exec-05642743-fe5b-45f2-ba06-a26475e6b505.png`.

## Полный промпт

```text
Use case: precise-object-edit.
Edit the supplied Module pool-cover illustration, preserving the two matched courtyard cutaways, camera, pool dimensions, plants, limestone, warm off-white background and calm matte architectural style.
Make the mechanical connection between the pool cover, pool edge and drive clearly readable without labels. Keep the current ROLL-UP SLATTED COVER, not a sliding wooden terrace.
In BOTH views show the SAME fixed roller axis at the far short end of the pool. Anchor each roller end in a compact graphite bearing bracket on a short solid post whose base plate visibly touches and is bolted to the stone coping. Nothing floats. The front/right bracket must be especially easy to see at webpage scale.
Add two slim graphite guide channels recessed into the two opposite coping edges, parallel to the cover travel, running continuously from the roller end to the opposite end of the pool. Their bases visibly contact the stone. Guide channels are clear continuous structural details, not disconnected black strokes. Exactly the same guides, posts and pool geometry appear in both panels.
LEFT OPEN STATE: all the water remains exposed. The slatted cover is wound into a substantial coherent cylinder around the mounted axle. Only a short leading edge rests at the guide entrances immediately beside the roller; do not stretch a sheet over the open water.
RIGHT CLOSED STATE: the same flexible cover fills the exact rectangle between the two guide channels. Its two side edges are visibly seated within the channels, and the far end runs continuously into and around the mounted roller with a small residual winding. Show a rounded natural transition of linked narrow slats from horizontal sheet onto the roller, without any unexplained gap. Slat joints run parallel to the roller axis. The near leading edge terminates cleanly at the opposite pool coping. Distinguish cover, guide, and stone with subtle contact shadows and material contrast.
Keep the existing clean composition and wide approximately 2:1 format. No changes to landscaping or architecture. No arrows, labels, text, circles, icons, UI, cables, people, furniture on the cover, or safety certification claims. The mechanism is an accessible conceptual illustration, with unmistakable contact and continuity.
```

## Визуальная приёмка

В обеих сценах видны направляющие, прилегающие к каменным бортам, и стойки вала с опорными
пластинами и крепежом. В закрытом состоянии полотно связано с направляющими и доходит до
вала без оторванного края. Камера, чаша, окружение и матовая архитектурная подача сохранены.
Размер рулона в сравнении состояний показан условно; иллюстрация не описывает расчёт намотки.
Текст публичного сценария и ограничения оборудования сохранены; обновлены импорт и alt.
