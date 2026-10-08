# Шторы: описание результата

Статус: новая пользовательская страница, 8 октября 2026 года.
Основание — поручение автора сделать аналогичный раздел для штор, включая кино днём и ночью.
Страница: [curtains/index.mdx](../src/content/docs/ru/docs/automations/curtains/index.mdx),
адрес `/ru/docs/automations/curtains/`.
Редакционный owner — [результат перед настройками](../../module-market-intelligence/internet-promotion/spec/user-documentation-rules.md).
Требования к совместному кино — [отдельный brief](../../module-market-intelligence/internet-promotion/spec/curtains-cinema-scenario-brief.md).

## Scope и полномочия

Добавлены восемь основных разделов, десять изображений (обложка и девять сцен), вход и меню,
а также адресная ссылка из описания света для телевизора.
Существующие страницы света, воды и газа сохранены. Release metadata, dependencies и deployment
не входят в scope. Backend, рабочее оборудование, GUI управления и persisted data не менялись.

Один writer; последовательность: source review → редакционный текст и изображения → сборка →
проверка навигации/размещения. ROI: общие формулировки и страница не оправдывают параллельных агентов.
Website baseline `78d2583`, рабочее дерево перед записью чистое; research сохраняет изменения
предыдущего прохода. Полномочия — прямой запрос на сайт, knowledge capture на research;
Git publication, runtime и аппаратные изменения запрещены в этой задаче.

## Источники текущего поведения

Source review 8 октября 2026 года, `module-automation@80c78132`, `CURTAIN v3` и downstream
`POSITION_DRIVER v0`. Источник текущего контракта — [Curtain Current Behavior](../../module-automation/src/domain/macros/docs/owners/curtain.md).
Это чтение source и выбранных existing tests; новый backend test run и аппаратная приёмка не выполнялись.
Уточняющие source annotations актуальнее исторических schema-примеров owner-а.

| Публичное утверждение | Evidence и предел |
| --- | --- |
| Закрытие от яркого света и сочетания жары/солнца | [Collection](../../module-automation/src/domain/macros/curtain/1-curtain-collect-data.ts), [sensor stage](../../module-automation/src/domain/macros/curtain/4-curtain-sensor-base-computation.ts): ordered branches night → sunny → sunny/hot → cool/open → lux/open; не пропорциональное регулирование |
| Открытие по lux только днём при недавнем движении | Те же файлы: open requires computed.isMotion; noise сам по себе не даёт этого условия |
| Закрытие ночью | [SunCalc](../../module-automation/src/infrastructure/sun-calc.ts): night после sunset / до sunrise; [sensor stage](../../module-automation/src/domain/macros/curtain/4-curtain-sensor-base-computation.ts), с automatic blocks |
| Закрытие после отсутствия движения и шума | [Priority](../../module-automation/src/domain/macros/curtain/2-curtain-priority-computation.ts): silence, driver not running, blocks; не доказательство ухода/сна |
| Кнопка toggle/stop и ограничение обратного направления | [Action stage](../../module-automation/src/domain/macros/curtain/3-curtain-action-base-computation.ts): stopped/running driver, direction, blockMin/blockType; stop ставит временный all block, не вечное ручное удержание |
| Окно и проветривание | [Blocks](../../module-automation/src/domain/macros/curtain/1.1-curtain-blocks.ts) и [setTarget](../../module-automation/src/domain/macros/curtain/0.5-curtain-state-access.ts): full-window блокирует automatic close при условии позиции, manual не вызывает тот же guard; airing clamp относится и к manual |
| Время суток с интервалом срабатывания | [Time stage](../../module-automation/src/domain/macros/curtain/5-curtain-time-base-computation.ts): ±15 минут вокруг точки, possible repeated hit; точность до минуты не обещана |
| Команда и фактическое движение различаются | [Virtual output](../../module-automation/src/domain/macros/curtain/0.6-curtain-hardware-output.ts), [driver owner](../../module-automation/src/domain/macros/docs/owners/positional-drive.md): position может быть timed estimate |
| После запуска требуется готовность данных и привода | [State access](../../module-automation/src/domain/macros/curtain/0.5-curtain-state-access.ts): warm-up и 11 driver roles |

Прочитаны предметные фрагменты tests `curtain-sensor-base-computation.spec.ts`,
`curtain-action-base-computation.spec.ts`, `curtain-priority-computation.spec.ts`, а также collection
для окна/освещённости. Исторические счётчики test executions владельца не выданы за новый прогон.

## Открытие для инсоляции без присутствия

Поручение автора от 8 октября 2026 года: описать принудительное открытие на выбранное число часов
для инсоляции, даже когда дома никого нет. Добавлены восьмой основной раздел и десятая иллюстрация.
Это применение существующего time action с временным запретом закрытия, без нового runtime-режима.

Адресное source review при `module-automation@80c78132`:

- [actions settings](../../module-automation/src/domain/macros/curtain/0.1-curtain-settings.ts):
  OPEN и положительный blockMin задают открытие и deadline противоположному автоматическому действию.
  Часы — пользовательское описание длительности; внутреннее поле хранит минуты, GUI не описывается.
- [timeBasedComputing](../../module-automation/src/domain/macros/curtain/5-curtain-time-base-computation.ts):
  отдельный периодический путь не требует computed.isMotion/isNoise. Перед открытием проверяются
  warm-up и isBlocked; затем ставится blockClose и вызывается setTarget(OPEN_POSITION, true).
- [Priority](../../module-automation/src/domain/macros/curtain/2-curtain-priority-computation.ts)
  не закрывает по тишине при CLOSE block; [sensor stage](../../module-automation/src/domain/macros/curtain/4-curtain-sensor-base-computation.ts)
  учитывает тот же guard при night/lux/heat. После expiry поведение зависит от актуальных условий.
- Важно для обещания «N часов»: schedule hit действует в окне ±15 минут и может повторяться,
  каждый раз обновляя deadline. Это не ровно N часов от первого движения или достижения OPEN.
  Эта существующая особенность не исправляется текстом и явно указана в публичном разделе.
- «Принудительное» означает отдельную команду открытия по времени, а не обход всех ограничений,
  force public state или команду реальному оборудованию в этой задаче.

Инсоляция описана как допуск прямого солнечного света с зависимостью от ориентации, внешнего затенения
и погоды. Санитарные нормы, оздоровительный эффект и гарантированное число солнечных часов не обещаются.
Аппаратная приёмка: открытие пустой комнаты, удержание при ярком свете и тишине, запрет открытия,
ручное действие, границы периода и реальное окончание удержания с учётом повторного schedule hit.
Новых backend-тестов или проверки оборудования нет; описанная кино-связка остаётся в разработке.

## Сохранить вид на закат

Уточнение автора от 8 октября 2026 года: низкое вечернее солнце может ярко осветить датчик,
и солнцезащита закроет штору в момент, когда человек хочет посмотреть закат. Это наблюдение автора,
не измеренная частота случаев. По поручению добавлен седьмой раздел и девятая статическая иллюстрация.
Упоминание автором ограничений «обычной Aqara» не проверено по моделям/экосистеме и не превращено
в публичное сравнительное утверждение.

Повторное адресное чтение при `module-automation@80c78132`:

- [settings.blocks](../../module-automation/src/domain/macros/curtain/0.1-curtain-settings.ts)
  содержит запрет CLOSE с границами number | SunPhases; source прямо приводит случай прямого
  вечернего света на датчик. Начало/конец могут быть солнечными фазами, без ручной сезонной смены часа.
- [isBlocked](../../module-automation/src/domain/macros/curtain/1.1-curtain-blocks.ts) проверяет
  диапазон и направление; [sensor stage](../../module-automation/src/domain/macros/curtain/4-curtain-sensor-base-computation.ts)
  применяет его после выбора night/lux/heat target. Это блокировка автоматического закрытия
  в целом, не изолированное отключение lux-ветки.
- [Priority](../../module-automation/src/domain/macros/curtain/2-curtain-priority-computation.ts)
  и [time stage](../../module-automation/src/domain/macros/curtain/5-curtain-time-base-computation.ts)
  также вызывают guard. [Manual action](../../module-automation/src/domain/macros/curtain/3-curtain-action-base-computation.ts)
  этот time-range guard не вызывает; проветривание сохраняет свою отдельную геометрию/ограничение.
- [SunCalc.isMomentInRange](../../module-automation/src/infrastructure/sun-calc.ts) рассчитывает
  границы в timezone установки, `SunPhases` включает вечерний GOLDEN_HOUR/SUNSET/DUSK.
  В текущем коде обе границы включительны, хотя annotation toMin называет конец исключительным;
  точность на границе публичным текстом не обещается. Это существующее расхождение source/prose
  отмечено здесь без runtime-исправления.
- [Existing blocks tests](../../module-automation/src/domain/macros/curtain/tests/curtain-blocks.spec.ts)
  прочитаны: direction guards при stubbed range=true; новый test run не выполнялся.

Публичные границы: уже закрытая штора сама не открывается, уже начатое движение не отменяется,
ручное управление остаётся, конец интервала не равен безусловной команде закрытия. Ночное закрытие
возможно при следующем расчёте и отсутствии остальных ограничений. Сценарий опирается на существующий
runtime и не помечен «В разработке»; готовность автоматической кино-связки этим не меняется.
На объекте проверить яркое солнце до/во время/после диапазона, пересечение с ночным закрытием,
ручную команду, уже закрытое/движущееся полотно и корректность солнечных фаз.


## Граница кино

В [settings](../../module-automation/src/domain/macros/curtain/0.1-curtain-settings.ts), state, trigger
и вычислениях CURTAIN отсутствуют TV/power/cinema input и кино-lifecycle.
[Production integration MultiSettings](../../module-automation/src/domain/macros/docs/runtime/shared-modules-and-type-registry.md#production-integration)
не включает CURTAIN. Switcher/button выполняет toggle/stop и не является готовой командой
«закрыть при TV ON». Наличие power inputs у LIGHTING не доказывает сквозное управление шторами.

8 октября автор подтвердил будущую связь с телевизором или другим прибором через числовое
значение мощности. Публичный текст сначала описывает результат и дневной/ночной варианты,
а в конце всего сценария кино стоит явная пометка «В разработке». Текущий ручной способ остаётся
в разделе ручного управления. Три варианта окончания (день, ночь, переход через закат) и уважение
ручного выбора сохраняются как требования. Решение автора и границы реализации — в brief;
эта редакционная правка не подтверждает готовность runtime.

## Ограничения и незакрытые вопросы

На публичной странице сохранены зависимости от привода, ткани, размещения датчика, движения для
дневного открытия, временных блокировок и состояния окна. Открытая створка не объявлена
универсальным anti-collision: manual путь отличается. Для расписания указан фактический ±15-минутный интервал.

Current owner также содержит не исправленные этим проходом gaps: silence priority может перехватить
action; scheduler может повторять hit и не принимает midnight 0; collision OPEN/CLOSE отличается от
прежних prose; readiness/restore и delayed output не квалифицированы как физический результат.
Недоступный датчик и ошибки управления не скрываются за обещанием гарантированной готовности.
Эти source-level проблемы остаются у backend owner; текущая задача не разрешает runtime fixes.

## Иллюстрации

[Десять исходников и точные промпты](curtains-images.md), встроенный image_gen, утверждённый
архитектурный стиль. Для кино есть два изображения: дневное затемнение и ночное сохранение
закрытых штор после TV OFF. Проверены одинаковое положение штор ночью, свет за окном, анатомия,
вставка лампы в оба состояния и полное закрытие вечернего окна.
Статические картинки не закрывают отдельную задачу анимаций, начинающуюся со света.

## Проверки

После добавления сценария инсоляции, 8 октября 2026 года:

- `yarn build` завершён успешно; включённый `astro check`: 16 файлов, 0 ошибок,
  0 предупреждений и 0 замечаний. Прежнее предупреждение sitemap не менялось.
- Проверены 46 HTML-ссылок/якорей страницы штор, 150 относительных файловых Markdown-ссылок,
  десять изображений (девять lazy), alt, responsive srcset и выходные файлы. Новый исходник 1774×887.
  Noindex/nofollow сохранён; лимиты обязательных entrypoints и whitespace пройдены.
- В браузере 1440×900 проверены новый пункт оглавления, заголовок, изображение и подпись;
  ширина документа 1425 px. При 320×800 текст и изображение помещаются, ширина документа 305 px.
  Временный viewport сброшен; для финального скриншота открыт отдельный предпросмотр.
- Скриншот: `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/curtains-insolation-preview.jpg`.
- Изменены контент/изображение сайта и связанные документы. Runtime-тесты и аппаратная
  проверка не выполнялись; пределы расписания подтверждены чтением source и описаны явно.

После добавления сценария заката, 8 октября 2026 года:

- `yarn build` завершён успешно; включённый `astro check`: 16 файлов, 0 ошибок,
  0 предупреждений и 0 замечаний. Прежний sitemap warning не менялся.
- Проверены 43 HTML-ссылки/якоря страницы штор, 142 относительные файловые Markdown-ссылки,
  девять изображений (восемь lazy), alt, responsive srcset и выходные файлы. Новый исходник 1774×887.
  Noindex/nofollow сохранён; лимиты обязательных entrypoints и whitespace пройдены.
- В браузере 1440×900 проверены новый пункт оглавления, заголовок, изображение и подпись;
  ширина документа 1425 px. При 320×800 текст и изображение помещаются, ширина документа 305 px.
  Временный viewport сброшен, новый сценарий оставлен открытым.
- Скриншот: `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/curtains-sunset-preview.jpg`.
- Изменены только контент/изображение сайта и связанные документы; production logic, оборудование,
  runtime-тесты и deployment не затрагивались. Source review не заменяет аппаратную проверку.


Проверки первоначальной страницы (до добавления заката), 2026-10-08:

После уточнения автора о числовом значении мощности повторно прошёл `yarn build`; проверены
106 относительных файловых ссылок затронутых документов, лимиты entrypoint и whitespace.
В браузере после reload проверены новый текст и пометка в конце сценария при ширине 671 px,
горизонтального переполнения нет. Скриншот: `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/curtains-power-status.jpg`.
Этот текстовый проход не менял стили, изображения и production logic.

- `yarn build` завершился успешно; `astro check`: 16 файлов, 0 ошибок, 0 предупреждений,
  0 замечаний. Предупреждение sitemap о незаданном `site` существовало до изменения.
- Проверены 159 внутренних ссылок и якорей пяти публичных страниц, 150 относительных
  Markdown-ссылок затронутых владельцев и проекций; битых целей нет.
- Все восемь изображений включены в сборку с alt, размерами и responsive srcset;
  семь секционных изображений загружаются лениво. Пути выходных изображений существуют.
- В браузере проверены корневые переходы, девять якорей раздела и обе ссылки между
  шторами и освещением. На desktop 1440×900 просмотрены дневное и ночное кино,
  загружены все восемь изображений; горизонтального переполнения нет.
- На viewport 320×800 проверены корневая навигация, дневное и ночное кино: текст и
  изображения помещаются, ширина документа не превышает viewport. После проверки
  временный viewport сброшен, раздел оставлен открытым.
- Скриншот результата: `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/curtains-preview.jpg`.
- `git diff --check` в website и research прошёл. Noindex/nofollow пяти страниц сохранены;
  проверенные entrypoint-файлы не превышают 20 KiB.

Ревью CURTAIN выполнено при HEAD backend `80c78132`; в этой задаче изменения в backend
не вносились. Параллельные изменения других задач не затрагивались. Runtime-тесты и проверки
оборудования в этой задаче не запускались. Браузерная проверка иллюстраций не подтверждает готовность
автоматической кино-связки: её критерии остаются в отдельном brief.

