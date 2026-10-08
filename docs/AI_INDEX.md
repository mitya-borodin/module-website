# AI-Индекс Документации

Начни с [`../AGENTS.md`](../AGENTS.md). Выбери один маршрут, соответствующий текущему вопросу; не
читай весь проект или соседние репозитории заранее.

| Вопрос | Владелец | Когда читать |
| --- | --- | --- |
| Назначение и текущая стадия сайта | [`../README.md`](../README.md) | Для общего обзора, границ прототипа и штатных команд |
| Главная страница и публичные формулировки | [`../src/pages/index.astro`](../src/pages/index.astro) | При изменении секций, навигации, CTA или продуктового текста |
| Возможности ПО Module | [`../src/pages/software.astro`](../src/pages/software.astro) | При изменении `/software/`, каталога макросов и границ совместимости |
| Общая оболочка коммерческих страниц | [`../src/layouts/site-layout.astro`](../src/layouts/site-layout.astro) | Для metadata, навигации, footer и мобильного меню |
| Глобальные стили и design tokens | [`../src/styles/global.css`](../src/styles/global.css) | При изменении визуального языка, доступности или адаптивности главной |
| Публичная документация | [`../src/content/docs/ru/docs/index.mdx`](../src/content/docs/ru/docs/index.mdx) | При изменении `/ru/docs/` и его содержательных обещаний |
| Правило создания пользовательской документации | [Контентная стратегия](../../module-market-intelligence/internet-promotion/spec/content-strategy.md#постоянное-правило-пользовательской-документации) | Перед созданием, изменением или ревью инструкций: ценность и поведение → выбор результата → настройка |
| Функциональное описание освещения | [`lighting-functional-description.md`](lighting-functional-description.md) | Текущая редакция, источники поведения, удаление прежних инструкций и проверки |
| Шторы | [curtains-functional-description.md](curtains-functional-description.md) | Солнцезащита, приватность, кино днём и ночью, ручное управление, окно и границы готовности |
| Кондиционирование | [air-conditioning-functional-description.md](air-conditioning-functional-description.md) | Поддержание температуры через термостаты, выбор охлаждения/обогрева по погоде, ручное управление и границы оборудования |
| Защита от протечек воды | [leaks-functional-description.md](leaks-functional-description.md) | Результат, источники поведения, границы восстановления, иллюстрации и проверки |
| Защита от утечки газа | [gas-leaks-functional-description.md](gas-leaks-functional-description.md) | Обнаружение, команда перекрытия, границы газовой безопасности, иллюстрации и проверки |
| Позиционный привод | [positional-drive-functional-description.md](positional-drive-functional-description.md) | Краны, полив, ворота, бассейн, окна, рольставни, жалюзи и сетки; способы движения и границы ручного управления |
| Учёт ресурсов | [resource-metering-functional-description.md](resource-metering-functional-description.md) | Холодная/горячая вода, электричество, газ и тепло; накопление, расчётная скорость и пределы импульсного учёта |
| Изображения всех автоматизаций | [Общий визуальный стандарт](../../module-market-intelligence/internet-promotion/spec/automation-illustration-style.md) | Принятый стиль, эталоны, палитра сайта, общий промпт и визуальная приёмка |
| История инструкций освещения | [`lighting-documentation-pilot.md`](lighting-documentation-pilot.md) и [архив](archive/2026-10-08-documentation/README.md) | Только для прежнего evidence и будущего восстановления уровня настройки |
| Инструкции со скриншотами | [`illustrated-documentation-workflow.md`](illustrated-documentation-workflow.md) | Раскадровка, безопасная съёмка двух размеров, вставка и проверка; образец настройки сохранён в архиве |
| Стили документации | [`../src/styles/docs.css`](../src/styles/docs.css) | При изменении внешнего вида Starlight |
| Astro, Starlight, маршруты и release metadata | [`../astro.config.mjs`](../astro.config.mjs) | При изменении сборки, локалей, sidebar, favicon или indexing boundary |
| Команды, зависимости и toolchain | [`../package.json`](../package.json) | Перед запуском checks или изменением dependencies/scripts |
| Code style, структура Astro/TypeScript и CSS | [`code-style.md`](code-style.md) | При создании или изменении code, styles, components, helpers и public signatures |
| Тесты, проверки и visual evidence | [`testing.md`](testing.md) | При планировании проверки изменения и перед завершением implementation task |
| Происхождение и обновление общих правил | [`rules-sync.md`](rules-sync.md) | Только при аудите или синхронизации правил из других `module-*` |

## Правила Маршрутизации

- Открывай только одного владельца и непосредственно связанные source/test файлы.
- Текущий рабочий контекст не ведётся, пока у проекта нет активного многошагового трека, который
  действительно требует handoff.
- Исторические, generated и внешние материалы не являются текущим контрактом без подтверждения
  владельца.
- Новые самостоятельные темы выноси в отдельный небольшой owner-документ и добавляй сюда прямую
  ссылку. Не превращай этот индекс в all-in-one specification.
- Размер этого файла и других обязательных Markdown entrypoints не должен превышать `20 KiB`.
