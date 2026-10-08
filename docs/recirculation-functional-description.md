# Рециркуляция горячей воды: функциональное описание

Статус: раздел реализован и проверен локально 8 октября 2026 года; публикации нет.
Владелец редакционного решения и evidence страницы; текущий runtime-контракт остаётся в backend.

- [Публичная страница](../src/content/docs/ru/docs/automations/recirculation/index.mdx).
- [Шесть иллюстраций и точные промпты](recirculation-images.md).
- [Редакционное правило](../../module-market-intelligence/internet-promotion/spec/user-documentation-rules.md).
- [Общий визуальный стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md).

## Проблема и решение

Автор попросил описать автоматизацию рециркуляции ГВС в том же стиле, что свет, отопление и
другие возможности. Сначала показана польза: меньше ожидать горячую воду и сливать остывшую.
Затем объясняются запуск, цикл, пауза, исключение отдельного датчика по времени, протечка,
ручной запрос и границы результата. Настройка остаётся отдельным уровнем.

Не обещаны мгновенная вода при любом расстоянии, измеренная готовность по температуре,
проценты экономии, круглосуточное удержание температуры, увеличение давления или нагрев самим насосом.
Нужен пригодный контур рециркуляции и источник нагретой воды. Картинки концептуальные,
не монтажные схемы. Невидимую команду/таймер объясняют подписи, а не фиктивная графика приборов.

Scope: MDX, assets, navigation, внутренние владельцы и research-проекции. Production logic,
оборудование, GUI, dependencies и release boundaries не меняются. Работа последовательная:
source review, содержание/изображения, интеграция, одна финальная проверка; делегирования нет.

## Evidence текущего поведения

Проверено 2026-10-08, `module-automation@4dde8afb`, `RECIRCULATION v0`. В рабочем дереве backend
есть чужие изменения трека thermostat/work-plan; их не читали сверх маршрута и не меняли.
Страница опирается на текущий конкретный source, а не на showcase, исторический dump или live outcome.

| Смысл | Источник |
| --- | --- |
| Карта поведения, известные границы и прежнее тестовое evidence | [Owner](../../module-automation/src/domain/macros/docs/owners/recirculation.md) |
| Один насос, switcher edge, список motion с ежедневным disabled-интервалом | [Settings](../../module-automation/src/domain/macros/recirculation/0.1-recirculation-settings.ts) |
| Leak aggregate, motion filtering/freshness, reconciliation | [Collection](../../module-automation/src/domain/macros/recirculation/1-recirculation-collect-data.ts) |
| Switcher отмечает activity и запускает вложенный execute | [Action](../../module-automation/src/domain/macros/recirculation/3-recirculation-action-base-computation.ts) |
| Запуск только при recent motion и отсутствии block; остановка по leak | [Sensor](../../module-automation/src/domain/macros/recirculation/4-recirculation-sensor-base-computation.ts) |
| Ограниченный цикл, timed stop и hot-water block | [Timer](../../module-automation/src/domain/macros/recirculation/5-recirculation-time-base-computation.ts) |
| Virtual target и физическая команда | [Hardware](../../module-automation/src/domain/macros/recirculation/0.6-recirculation-hardware-output.ts), [send](../../module-automation/src/domain/macros/recirculation/0.7-recirculation-message-output.ts) |

Факты, отражённые в тексте:

1. Motion или выбранный switcher edge могут начать цикл. Switcher имитирует актуальную activity,
   не является прямым ON/OFF насоса. Public state пуст; отдельный GUI ручного выключения не выдуман.
2. `runMin` отсчитывается от первого старта; повторные движения/кнопки не продлевают deadline.
   Таймер 55–65 секунд проверяет окончание; остановка не обещана точно в указанную секунду.
3. После timed stop задаётся `hotWaterMin`. Эта пауза запрещает повторный запуск, включая кнопку.
   Истечение паузы не генерирует самостоятельный start. Состояние готовности по температуре отсутствует.
4. Индивидуальный daily interval исключает motion binding из полного сбора. Это не расписание
   насоса: другие источники, recent activity и уже начатый цикл сохраняют значение. Есть overnight range.
5. Leak: any(on) запрещает start и вызывает target OFF. Leak stop не создаёт hot-water block.
   После clear может быть автоматический restart по ещё актуальной activity; manual reset не требуется.
6. Noise агрегируется, но `isNoise/isSilence` не выбирают pump target. Самостоятельный запуск по шуму
   и остановка по тишине на странице не заявлены.
7. Feedback насоса сравнивается с desired target; внешний ручной relay change может быть отменён
   при следующем accepted observation. `isItRecycled` — target, не измерение потока/температуры и не ack.
8. Автоматизация рециркуляции не перекрывает воду и не управляет нагревом бака. Защита от протечек
   и отопление даны как отдельные связанные задачи, а не функции этого алгоритма.

Важное расхождение старого owner-текста с текущим source: settings теперь допускает
`ControlType.VALUE | ControlType.SOUND_LEVEL` для noises. Старую формулировку о конфликте declared
noise type не переносили в новый документ. Отсутствие noise decision подтверждается конкретным
sensor source независимо от разрешённого типа.

## Инженерные ограничения, не исправленные этой задачей

Нет гарантии terminal outcome без проверки связи/оборудования; constructor не отправляет
немедленную физическую синхронизацию. Reconciliation выполняется до leak business stage и может
сначала повторить прежний target в том же цикле. Поэтому не обещана сертифицированная защита
или атомарная немедленная остановка без промежуточных команд.

Границы switcher matching нескольких controls одного device, отсутствия readiness, lifecycle и
сохранения состояния остаются у backend owner. Новые backend-тесты или исправления не выполнялись:
scope — описание функциональности. Приёмка полного пути, отказов, обслуживания и перезапуска
прямо оставлена обязательной для конкретного готового решения.

## Реализация и проверки

Маршрут `/ru/docs/automations/recirculation/`, шесть статических изображений, пункт меню рядом
с отоплением, вход из обзора возможностей, ссылки на отопление и защиту от воды. Анимации
сохраняют отдельный backlog; этот срез их не создаёт.

Проверки 2026-10-08:

- `yarn build` (с `astro check`) — успешно; 16 файлов, 0 errors/warnings/hints.
  Новый маршрут собран, шесть изображений оптимизированы. Существующие сообщения о docs/404
  и sitemap без `site` не исправлялись в этом content-scope.
- 65 локальных ссылок/якорей собранных страницы и обзора, 165 относительных ссылок внутренних
  документов — корректны. У шести изображений есть alt/srcset и существующие output-файлы.
  `noindex,nofollow` сохранён, пользовательский текст использует «автоматизация».
- Browser: 1280×850, промежуточные 770×984, mobile 320×800. Проверены верх, длинный текст,
  якорные переходы, цикл и протечка, открытое мобильное меню. Все шесть изображений загрузились;
  горизонтального overflow нет.
- Screenshots: `recirculation-preview.jpg` и `recirculation-mobile-320.jpg` в
  `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/`.
- Whitespace, `git diff --check` и лимит обязательных entrypoints 20 KiB проверены.
  Website baseline был чистым (`384f727`); final scope ограничен описанием, изображениями и навигацией.

Production logic не изменялась. Аппаратные проверки, backend tests, commit, push и deployment
не выполнялись. Известные ограничения команд, matching и восстановления остаются открытыми
у runtime owner и не исправлялись в рамках этой задачи документации.
