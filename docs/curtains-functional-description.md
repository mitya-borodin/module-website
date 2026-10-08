# Шторы: описание результата

Статус: новая пользовательская страница, 8 октября 2026 года.
Основание — поручение автора сделать аналогичный раздел для штор, включая кино днём и ночью.
Страница: [curtains/index.mdx](../src/content/docs/ru/docs/automations/curtains/index.mdx),
адрес `/ru/docs/automations/curtains/`.
Редакционный owner — [результат перед настройками](../../module-market-intelligence/internet-promotion/spec/user-documentation-rules.md).
Требования к совместному кино — [отдельный brief](../../module-market-intelligence/internet-promotion/spec/curtains-cinema-scenario-brief.md).

## Scope и полномочия

Добавлены шесть основных разделов, восемь изображений (обложка и семь сцен), вход и меню,
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

[Восемь исходников и точные промпты](curtains-images.md), встроенный image_gen, утверждённый
архитектурный стиль. Для кино есть два изображения: дневное затемнение и ночное сохранение
закрытых штор после TV OFF. Проверены одинаковое положение штор ночью, свет за окном, анатомия,
вставка лампы в оба состояния и полное закрытие вечернего окна.
Статические картинки не закрывают отдельную задачу анимаций, начинающуюся со света.

## Проверки

Проверено 2026-10-08 на локальной сборке:

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

