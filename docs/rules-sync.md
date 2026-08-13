# Синхронизация Правил `module-website`

Этот документ фиксирует происхождение правил проекта и границу будущих синхронизаций. Он не требует
регулярного автоматического копирования.

## Проверенные Источники

При первом формировании правил 13 августа 2026 года проверены действующие корневые и применимые
вложенные `AGENTS.md` в:

- `module-automation`;
- `module-automation-webapp`;
- `module-automation-support`;
- `module-cloud`;
- `module-cloud-webapp`;
- `module-engineering-standards`;
- `module-market-intelligence`.

Канонической базой общих инвариантов использованы owners из
`module-engineering-standards/standards/core/` и профиль
`standards/profiles/frontend-webapp/profile.md`. Архивные копии правил из `local-archive/` не
использовались как действующий источник.

## Принятые Группы Правил

- минимальный маршрут `AGENTS.md -> docs/AI_INDEX.md -> один владелец`;
- защита существующего dirty worktree и точный scope изменений;
- read-only как явная граница полномочий;
- отдельные разрешения для Git publication, CI, deployment, Figma и других внешних mutations;
- защита секретов и чувствительного вывода;
- приоритет текущего checkout и owners над памятью и историей;
- разделение фактов, выводов, неизвестного, решений и target behavior;
- узкий research-pass до implementation и запрет молча менять соседние репозитории;
- evidence-first диагностика CI и требование зелёного server-side подтверждения;
- команды проекта, проверки по риску, audit фактического diff и честный финальный отчёт;
- компактная owner-based документация без all-in-one entrypoints;
- frontend-правило: сборка не является доказательством визуальной корректности;
- code-style правила: `kebab-case`, `camelCase`, semantic spacing, braces, top-level arrow block
  body, structured API прежде regex и русские JSDoc-комментарии;
- owner-local placement, один основной executable unit на support-файл и перенос в `src/shared/`
  только после реального reuse;
- testing-правила: публичное поведение, deterministic dependencies, behavior-focused names,
  Arrange/Act/Assert и checks по фактическому риску;
- frontend-правила: design tokens, responsive layout от mobile boundary, accessibility и явное
  viewport/state evidence;
- coordination-правила: сначала source inventory, parallelism только после materiality/ROI gate,
  делегирование не расширяет полномочия и confirmed defect не теряется молча;
- research-правило: внешние изменяемые факты требуют источника и даты проверки;
- product-boundary: публичный сайт не создаёт новый runtime contract и не повышает статус
  неподтверждённой функции.

## Осознанно Не Перенесено

Не относятся к текущему предмету и не включены в правила сайта:

- Domain Driven Hexagon, ports/use-case/repository boundaries и migration contracts;
- macro runtime, MQTT parser, timers и Backend Driven UI;
- Installer Validation, QEMU, Docker acceptance и host cleanup campaigns;
- GraphQL schema/codegen/resolver contracts;
- React stores, router, обязательный Storybook, Tailwind и конкретная React component anatomy;
- TOTP/auth harness и правила конкретных CI runners;
- Figma-specific design-mode, lint и snapshot procedures;
- обязательные task templates, question gates и handoff rituals больших зрелых репозиториев, пока
  в `module-website` нет соответствующей инфраструктуры и реальной потребности.

Если такая область появится в проекте, сначала проверь её фактическую применимость и добавь
локального владельца. Не импортируй весь набор правил исходного репозитория ради одной технологии.

## Процедура Будущей Синхронизации

1. Получи явную задачу на аудит или перенос правил.
2. Прочитай актуальный `AGENTS.md` источника и только owners, необходимые для найденного различия.
3. Сопоставь смысл с текущим стеком, owners и рисками `module-website`.
4. Классифицируй каждое различие как `принять`, `адаптировать`, `не применимо` или `нужно
   согласовать`.
5. Меняй только `module-website`; source-репозитории остаются read-only без отдельного полномочия.
6. Проверь ссылки, размер обязательных entrypoints, `git diff --check` и фактический scope.
