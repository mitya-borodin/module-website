# Кондиционирование через термостаты

Статус: функциональная страница сайта, 8 октября 2026 года.
Основание — поручение автора сделать аналогичный раздел и объяснить, что одна автоматизация
термостата может выбирать кондиционирование или обогрев по температуре за окном.
Детали отопления отложены автором до отдельного раздела «Отопление»; страница и ссылка на него
в этом проходе не создаются.

Публичный владелец: [страница](../src/content/docs/ru/docs/automations/air-conditioning/index.mdx).
Это проекция проверенных возможностей, не источник runtime-контракта или доказательство
аппаратной готовности. Порядок подачи — [ценность перед настройкой](../../module-market-intelligence/internet-promotion/spec/user-documentation-rules.md).
[Исходники шести иллюстраций и промпты](air-conditioning-images.md).

## Область и полномочия

Авторизованы страница, изображения, навигация сайта и фиксация решений в research.
Один writer; последовательный source review → содержание и assets → интеграция → build/browser.
ROI gate: агентная декомпозиция не нужна для одной страницы с общими владельцами; субагенты не
создавались. Не меняются backend, GUI, оборудование, зависимости, индексирование и deployment.
При проверке 320 px устранён разрыв длинного заголовка: в существующем мобильном media query
`docs.css` размер заголовков справочника ограничен `min(2.125rem, 9vw)`. На более широких
экранах и вводном hero прежнее оформление сохраняется.
Чужие/предшествующие изменения сохранены. Базовый website HEAD: `78d2583`; curtains-правки уже
были в рабочей копии при начале этой задачи.

## Источники и предел доказательности

8 октября 2026 года выполнен ограниченный source review `module-automation@80c78132`:
[owner THERMOSTAT](../../module-automation/src/domain/macros/docs/owners/thermostat.md) и
[выходы/ошибки](../../module-automation/src/domain/macros/docs/owners/thermostat-output-and-failure.md).
`THERMOSTAT v5` implemented в registry; новый runtime/test run в этой задаче не выполнялся.
Effective deployment, broker delivery, физические кондиционеры и GUI не проверялись.

| Утверждение страницы | Проверенное основание |
| --- | --- |
| Температура комнаты определяет потребность в охлаждении; состояние сохраняется между двумя границами | [sensor computation](../../module-automation/src/domain/macros/thermostat/4-thermostat-sensor-base-computation.ts): COOLING on при error > right, off при error < left, inclusive band сохраняет latch; [существующий cooling test](../../module-automation/src/domain/macros/thermostat/tests/hysteresis/cooling/hysteresis-regulation-cooling-mode.spec.ts) прочитан, не запущен |
| Один instance выбирает HEATING/COOLING, active, setpoint по наружной температуре и дате | [settings](../../module-automation/src/domain/macros/thermostat/0.1-thermostat-settings.ts), [getMultiSettingsValues](../../module-automation/src/domain/macros/thermostat/0.5-thermostat-state-access.ts): temperature=outdoor.average, timezone-adjusted date |
| Выбор по погоде использует сглаженное значение | [constructor](../../module-automation/src/domain/macros/thermostat/0.4-thermostat-constructor.ts): MovingAverageWindow 24 h, compute throttle 10 min; [collectOutdoor](../../module-automation/src/domain/macros/thermostat/1-thermostat-collect-data.ts) |
| Возможны дневной/ночной режим и выбранный период отключения | date conditions + rule isActive/setpoint в settings/getters; detection сна/присутствия в эти claims не включён |
| Временная ручная пауза и работа | force.isThermostatOn overlay в [hardware output](../../module-automation/src/domain/macros/thermostat/0.6-thermostat-hardware-output.ts), force guard sensor stage; inactive rule имеет приоритет; expiry возобновляет расчёт при следующем вызове |
| Одна зона требует своего регулирования, команды зависят от подключения | Один aggregate temperature/setpoint; списки heating/cooling SWITCH и [message output](../../module-automation/src/domain/macros/thermostat/0.7-thermostat-message-output.ts) |

На первом уровне описан binary-запрос охлаждения. PID-управление реальным кондиционером,
протоколы конкретных моделей, compressor anti-short-cycle, изменение fan speed/жалюзи,
автоостановка по окну, сон/присутствие и обещания экономии не квалифицированы.
Положение жалюзи в иллюстрации — условный бытовой признак работы, не отдельная функция Module.
Ручная иллюстрация не доказывает готовность конкретного GUI; публичный текст требует совместимого управления.

## Существенные ограничения

- Смена selected type сбрасывает прежний virtual flag, но не отправляет explicit off прежнему
  physical role. Этот существующий дефект не исправлен в docs-only задаче. Публичная страница
  прямо требует согласованной схемы переключения и проверки прекращения предыдущего направления;
  она не обещает безопасную автоматическую смену двух независимых реле одним выбором режима.
- Missing indoor temperature может стать sentinel -1; outdoor без usable value сохраняет
  прежнее/default значение. Нет общего подтверждения fail-safe stop. На странице указана отдельная
  проверка потери датчиков/связи и необходимость обеспечить нужное поведение в составе решения.
- Совместимость модели, реальное выполнение команды и работоспособность после отказа не следуют
  из вычисленного thermostat request. Они остаются аппаратной приёмкой.
- Подробности отопления, heat generator, гидравлика и coolant/PID не раскрываются по границе автора.
  Будущий раздел должен повторно обратиться к своему актуальному owner.
- Изменения соседнего backend, обнаруженные в рабочем дереве, не затрагивались. Источником
  проверки служили только перечисленные thermostat-файлы.

## Проверки

Проверено 8 октября 2026 года:

- `yarn build` завершён успешно, в том числе повторно после исправления мобильного заголовка.
  Включённый `astro check`: 16 файлов, 0 ошибок, 0 предупреждений, 0 замечаний.
  Прежнее предупреждение sitemap о незаданном `site` сохранено, release boundary не менялась.
- Проверены 193 внутренних ссылки/якоря шести страниц документации и 145 относительных файловых
  Markdown-ссылок владельцев/проекций. Битых целей нет. Noindex/nofollow сохранён на шести страницах.
- Все шесть изображений имеют alt, размеры, responsive srcset и существующие выходные файлы;
  пять изображений разделов загружаются лениво. Изображения скопированы в assets проекта.
- Desktop 1440×900: проверены вход с главной документации, sidebar, обложка, сравнение сезонных
  режимов и все пять ссылок оглавления. Все шесть изображений загружены; переполнения нет.
- Mobile 320×800: проверены вход и переход, обложка, длинный заголовок, сезонное сравнение и подпись.
  После изменения CSS главный заголовок помещается в одну строку; ширина документа 320 px.
  Временный viewport сброшен. Дополнительно проверен итоговый вид шириной 671 px без переполнения.
- Скриншот: `/Users/borodin/.codex/visualizations/2026/10/08/01a11a0c-97d8-7373-9c79-afd65841a762/air-conditioning-preview.jpg`.
- `git diff --check`, whitespace новых документов, ссылки и лимит 20 KiB обязательных entrypoints
  проверены. В scope — контент, навигация, изображения и размер мобильного заголовка; production logic
  термостата не изменялась. Backend-тесты, оборудование, GUI, публикация и deployment не запускались.

Остаются аппаратная приёмка, обеспечение отключения прежнего physical role при смене направления
и поведение при потере входов/связи. Эти ограничения отражены в тексте; сборка сайта их не закрывает.

