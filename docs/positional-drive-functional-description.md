# Позиционный привод: описание результата

Статус: публичная страница реализована и проверена локально; 8 октября 2026 года.
Поручение автора: объяснить позиционный привод как общую основу физических механизмов,
ручного управления и других автоматизаций. Дополнение автора: рольставни, жалюзи и моторизованные
москитные сетки в беседках. Авторские примеры являются желаемым охватом применения, а не аппаратной приёмкой.

Страница: [positional-drive/index.mdx](../src/content/docs/ru/docs/automations/positional-drive/index.mdx),
адрес `/ru/docs/automations/positional-drive/`.
Редакционный owner — [результат перед настройкой](../../module-market-intelligence/internet-promotion/spec/user-documentation-rules.md).
Стиль — [общий визуальный стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).

## Scope и порядок

Один writer, последовательная работа: source review → функциональный текст и изображения →
навигация → сборка и visual review → knowledge capture. ROI: общая редакция и assets не оправдывают
координацию агентов; явного разрешения на делегирование нет.
Frozen acceptance: результат до настройки, только подтверждённые способы движения, отдельные границы
готовых связей и вариантов применения, сохранение ограничений оборудования, девять статических
иллюстраций в принятом стиле, доступная навигация, build и проверка 320px/desktop.
Convergence: один полный проход проверок; исправления и повтор только затронутых проверок при findings.

Разрешены новая MDX-страница, её assets и два внутренних документа, вход документации,
пункт sidebar, адресные ссылки из штор/воды и соответствующие research-проекции.
Website baseline перед проверками — `bb751ae`.
Существующие незакоммиченные изменения штор (закат и инсоляция) сохраняются.
Backend только read-only. Настройки оборудования, migrations, GUI, runtime, dependencies,
release metadata, индексация, Git publication и deployment не входят в задачу.

## Источники поведения

Адресное чтение 8 октября 2026 года при `module-automation@5a58535c`, `POSITION_DRIVER v0`.
Канон текущего поведения — [Positional Drive Current Behavior](../../module-automation/src/domain/macros/docs/owners/positional-drive.md).
Прочитаны текущие source и предметные existing tests; новый backend test run и аппаратная проверка
не выполнялись. Исторические 54 tests и dump владельца не считаются текущим прогоном или live inventory.

| Публичное утверждение | Проверенный источник и предел |
| --- | --- |
| Общие запросы открытия, закрытия, остановки и позиции | [Settings](../../module-automation/src/domain/macros/positional-drive/0.1-positional-driver-settings.ts), [applyRequest](../../module-automation/src/domain/macros/positional-drive/4.0-positional-driver-apply-request.ts): все три входа request обязательны для readiness; normalized 0 OPEN / 100 CLOSE |
| Числовой/аналоговый выход, прямой или обратный диапазон | [Conversion](../../module-automation/src/domain/macros/positional-drive/0.6-positional-driver-convert-data.ts), [physical output](../../module-automation/src/domain/macros/positional-drive/0.8-positional-driver-message-output.ts): преобразование диапазона; не автоматическая поддержка любого напряжения или протокола |
| Ограничения switch/enum | Тот же output: switch только endpoints, enum OPEN/CLOSE закомментированы, enum STOP применяется; движение application идёт через position |
| Четыре релейные схемы | Тот же output: mechanical return, open+close, direction+power, open+close+power. Ветви физического движения выбираются toOpen/toClose; произвольное промежуточное релейное позиционирование не заявлено |
| Пружинный/механический возврат | Снятие питания open используется для CLOSE и force STOP; это не гарантирует остановку с удержанием промежуточного положения |
| Ручная команда приходит извне | [Action stage](../../module-automation/src/domain/macros/positional-drive/3-positional-driver-action-base-computation.ts) пуст; [public state](../../module-automation/src/domain/macros/positional-drive/0.2-positional-driver-state.ts) пуст. Встроенного button handler или public target UI не заявляем |
| Уже существующие ведущие контракты | [LEAKS output](../../module-automation/src/domain/macros/leaks/0.6-leaks-hardware-output.ts), [CURTAIN output](../../module-automation/src/domain/macros/curtain/0.6-curtain-hardware-output.ts) формируют execute/state/position. Это source-backed совместимость контрактов, не испытание broker→controller→motor |
| Обратная связь и расчётное положение | [Collection](../../module-automation/src/domain/macros/positional-drive/1.0-positional-driver-collect-data.ts), [movement](../../module-automation/src/domain/macros/positional-drive/1.3-positional-driver-is-running.ts), [corner cases](../../module-automation/src/domain/macros/positional-drive/1.2-positional-driver-corner-cases.ts): feedback и временная модель различаются |
| Восстановление может повторно передать прежнее состояние | [Force current](../../module-automation/src/domain/macros/positional-drive/6-positional-driver-force-apply-current.ts), [state access](../../module-automation/src/domain/macros/positional-drive/0.5-positional-driver-state-access.ts): не обещаем неподвижность при restart |

Прочитан [existing output spec](../../module-automation/src/domain/macros/positional-drive/tests/positional-driver-hardware-output.spec.ts):
switch/position/analog OPEN, numeric intermediate, enum STOP, механический возврат и релейные последовательности.
Intermediate test вручную задаёт request UNSPECIFIED; это не доказывает приём этого значения collector-ом.
Прочитанный owner фиксирует, что collector его не принимает. Публичный текст не рекомендует этот payload.

## Применение и статус

- Вода и шторы: есть существующие ведущие контракты. Ручные действия и сценарные ограничения
  остаются у соответствующих автоматизаций.
- Полив: пример применения открытия/закрытия клапана. Длительность, дождь, влажность, насос и
  очередность зон не представлены как встроенная логика POSITION_DRIVER.
- Ворота, гараж, бассейн: варианты после проверки интерфейса, допуска движения и штатных защит.
  Импульсный step-by-step input не объявлен совместимым с направленным управлением.
- Оконный привод и форточка теплицы: управление створкой; климат, дождь и ветер требуют внешних
  правил. Дополнение ассистента — совместимая воздушная заслонка с той же оговоркой.
- Рольставни и жалюзи: перемещение полотна. Независимый угол ламелей не выводится из одной позиции.
- Москитные сетки беседки: движение полотен; группа с общей командой не означает синхронный ход.
- Manual: только через связанное управление. Приоритеты конфликтующих команд и срок удержания
  ручного выбора POSITION_DRIVER сам не предоставляет.

Это функциональные возможности и области применения; не каталог испытанных комплектов, не новая
логика перечисленных сценариев. Не заявлены safety certification, anti-pinch/obstacle detection,
управление покрытием бассейна без наблюдения, гарантированный расход или измеренный воздухообмен.

## Известные пределы и следующий инженерный шаг

Source owner содержит gaps readiness физических выходов, stale/missing feedback, усреднения,
расчётных endpoint flags, lifecycle/deferred outputs и ошибок отправки. Они остаются у backend owner;
не исправлялись этой редакционной задачей и не скрываются обещанием подтверждённого движения.
Отсутствие enum OPEN/CLOSE, встроенного manual handler и произвольного phase intermediate отражено
в публичных условиях выбора. Перезапуск требует отдельной проверки движения и сохранённого состояния.

До карточки готового решения: выбрать конкретный механизм и контроллер, подтвердить команды,
обратную связь, остановку/удержание, направление и крайние положения, защитные ограничения,
потерю питания/связи и restart. Для жалюзи отдельно проверить ось ламелей; для нескольких полотен
независимость/совместный ход. Результаты на объекте не заменяются иллюстрациями или source review.

## Иллюстрации

[Девять исходников и точные промпты](positional-drive-images.md): обложка и восемь сцен.
Встроенный ImageGen, утверждённый архитектурный стиль. Это статические иллюстрации; отдельная
[задача анимаций](../../module-market-intelligence/internet-promotion/spec/scenario-animations-brief.md) не закрывается.

## Исправление креплений приводов

8 октября 2026 года автор указал на визуальный дефект windows-vents-v2: механизмы выглядят
закреплёнными в воздухе. Версия 3 показывает опору оконного привода на боковой раме и опору
тепличного привода на поперечине каркаса; штоки связаны шарнирами с подвижными створками.
Промпт и исходники — в [истории изображений](positional-drive-images.md#windows-vents-v3-крепления-к-неподвижной-раме).
Изменены только изображение, его импорт и документы; публичное поведение и runtime не менялись.

Проверка этой правки 8 октября: `yarn build` успешен, `astro check` — 0 ошибок,
0 предупреждений и 0 замечаний. Проверены 42 относительные файловые ссылки трёх затронутых
документов. В браузере новая версия загружена и осмотрена при ширине 1280 px
(ширина документа 1265 px). Повторная мобильная проверка не подтверждена: override
не изменил фактическую ширину; временный viewport сброшен. Доказательство отображения:
`/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/drive-mounting-preview.jpg`.

## Связь покрытия бассейна с бортами

8 октября 2026 года автор отметил непонятную связь настила с бортами на скриншоте ранней
иллюстрации. На странице уже использовалось рулонное покрытие; его версия 3 добавляет
читаемые направляющие и крепления стоек вала. [Промпт и визуальная приёмка](positional-drive-pool-image.md).
Обновлены изображение, импорт и alt; функциональный текст и production logic не менялись.
Проверки правки: `yarn build` успешен; `astro check` — 0 ошибок, предупреждений и замечаний.
В браузере при 320×800 и 1280×900 загружена версия 3, сцены и подпись видны без обрезания;
ширина документа 305 и 1265 px соответственно. Временный viewport сброшен.
Скриншоты: `pool-cover-mobile.jpg` и `pool-cover-preview.jpg` в
`/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/`.

## Проверки первоначальной страницы

- `yarn build` завершён успешно. Включённый `astro check`: 16 файлов, 0 ошибок,
  0 предупреждений, 0 замечаний. Прежнее предупреждение sitemap о `site` сохранено.
- 149 внутренних HTML-ссылок/якорей входа, новой страницы, штор и воды проверены;
  девять изображений (восемь lazy), alt, размеры и responsive srcset имеют выходные файлы.
  Все финальные PNG 1774×887. Noindex/nofollow сохранён.
- 162 относительные файловые Markdown-ссылки затронутых владельцев/проекций, whitespace,
  терминология и лимит обязательных entrypoints 20 KiB проверены.
- В браузере 1440×900 проверен переход со входа, обложка, оглавление, бассейн, окна,
  сетки и ручное управление; все девять изображений загружены. Документ 1425 px.
- При 320×800 проверены сценарий сетки и таблица способов управления. После первого прохода
  таблица сокращена с трёх до двух колонок: содержание сохранено, горизонтальный scroll больше
  не нужен (clientWidth = scrollWidth = 273 px). Документ 305 px. После изменения build и
  затронутые проверки повторены успешно. Временный viewport сброшен.
- Скриншот результата: `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/positional-drive-preview.jpg`.
- `git diff --check` и фактический scope audit выполнены для website/research; ранее существовавшие
  изменения штор сохранены. Профильные backend source paths чисты при HEAD `5a58535c`.
  Изменены контент, assets, навигация и документация. Production logic, GUI и оборудование не менялись;
  runtime-тесты, аппаратная приёмка и deployment не выполнялись.
