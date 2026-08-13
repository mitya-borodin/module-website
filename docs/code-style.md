# Code Style И Организация Файлов

Этот документ применяется к новому и содержательно изменяемому коду `module-website`. Текущий
проект пока не содержит ESLint или Prettier, поэтому перечисленные здесь правила оформления
являются обязательными manual-review checks, если напротив правила не названа действующая команда.

## Именование

- Новые файлы и папки именуй в `kebab-case`.
- Переменные и функции именуй в `camelCase`; типы, интерфейсы и компоненты — в `PascalCase`.
- Устоявшиеся технические термины не дроби искусственно. Имена Astro, Starlight, TypeScript, API,
  CSS properties и внешних contracts сохраняй в принятом написании.
- CSS-классы именуй по назначению в `kebab-case`. Для варианта существующего блока используй
  принятый в проекте modifier `--`, например `.button--secondary`; не смешивай рядом несколько
  схем именования без причины.

## Форматирование TypeScript И Astro Frontmatter

- Сохраняй текущую базовую форму проекта: отступ в `2` пробела, одинарные кавычки в TypeScript и
  JavaScript, точки с запятой и trailing comma в многострочных массивах/объектах.
- HTML/Astro attributes оформляй двойными кавычками. Длинные наборы attributes и длинный текст
  переноси по смыслу, сохраняя читаемую структуру шаблона.
- Разделяй пустой строкой разные смысловые шаги: получение входных значений, guards, вычисление
  результата, mutation, внешний effect и `return`. Не вставляй пустые строки внутрь одной атомарной
  операции.
- Связанные declarations держи рядом, но не нарушай порядок зависимостей: значение объявляется до
  первого использования.
- Тела `if`, `else`, `for`, `for...of`, `for...in`, `while` и `do...while` всегда заключай в
  фигурные скобки, включая однострочные `return`, `throw`, `continue` и `break`.
- Самостоятельные top-level arrow functions оформляй с block body и явным `return`, даже если тело
  состоит из одного выражения. Короткие callbacks внутри `map`, `filter` и других вызовов могут
  оставаться expression-bodied, если это улучшает читаемость.
- Не используй regex по умолчанию. Для JSON, URL, путей и других структурированных данных сначала
  выбирай parser, structured API, exact comparison, `startsWith`, `endsWith` или `includes`. Для
  необходимого нетривиального regex фиксируй точные границы и добавляй positive, boundary и negative
  tests.

## Комментарии И Типы

- Авторскую поясняющую прозу в TypeScript/JavaScript пиши по-русски в multiline JSDoc `/** ... */`.
  Не дублируй очевидную сигнатуру. Tooling directives оставляй в синтаксисе инструмента.
- В Astro/HTML используй `<!-- ... -->`, в CSS — `/* ... */`; комментарий объясняет неочевидное
  решение или boundary, а не пересказывает declaration.
- Для exported/public функции с объектным параметром используй именованный `type`, а не большой
  inline object type. Тип размещай рядом с владельцем сигнатуры.
- Комментарии у типов являются частью контракта. Если type, runtime и документация расходятся, не
  исправляй смысл только в документации: синхронизируй владельцев в одной задаче либо зафиксируй
  открытый вопрос.
- В `type`/`interface` разделяй смысловые группы полей пустыми строками: identity/display, data/state,
  configuration/validation и callbacks/actions.

## Astro Pages, Components И Helpers

- Astro page владеет page composition, метаданными и локальными presentation data. Не помещай в
  frontmatter бизнес-логику, скрытые network/filesystem effects или нетривиальный parsing/mapping.
- Локальные массивы и простые значения для отображения могут оставаться в page frontmatter, пока
  они не стали отдельным публичным contract или повторно используемым источником данных.
- Выделяй самостоятельный component/helper, когда у части появилась отдельная ответственность,
  повторное использование, интерактивное состояние, самостоятельный тест или заметно
  нетривиальная логика. Не дроби страницу механически только из-за количества строк.
- Один executable support-файл содержит один основной unit. Имя файла соответствует primary export;
  независимую вторую роль выноси в отдельный файл.
- Код, используемый одним владельцем, держи рядом с ним. Переноси в тематическую область
  `src/shared/` только после появления минимум двух независимых consumers или явного общего
  контракта.
- Impure/system dependencies — текущее время, timers, random, browser storage, network, environment
  — передавай через явный параметр или узкий adapter, если логика должна тестироваться. Не прячь
  внешнее состояние внутри pure helper-а.
- Не редактируй `dist/` и `.astro/`: это generated output. Source owner остаётся в `src/`,
  `public/` или root config.

## CSS И Адаптивность

- Общие design tokens и глобальные primitives принадлежат `src/styles/global.css`; Starlight-specific
  оформление — `src/styles/docs.css`; стили, используемые только одной Astro page, могут оставаться
  в её scoped `<style>`.
- Перед добавлением raw color, spacing, typography или breakpoint проверь существующие CSS custom
  properties. Если значение является повторяемой частью визуального языка, сначала добавь или
  переиспользуй осмысленный token.
- Не создавай дублирующий token или параллельный styling approach ради одного локального случая.
  Локальное уникальное значение допустимо, когда оно действительно принадлежит одной композиции.
- Новые и изменяемые CSS blocks оформляй с одной declaration на строку. Группируй связанные
  selectors и избегай роста specificity; `!important` допустим только с зафиксированной причиной,
  когда контролировать исходный cascade иначе невозможно.
- Строй базовый интерфейс от ширины `320px`; дополнительные media queries добавляй по фактической
  точке разрушения layout. Между ключевыми viewport layout должен оставаться fluid, для чего
  предпочитай `min()`, `max()`, `clamp()`, Grid и Flexbox вместо набора случайных breakpoints.
- Интерактивные состояния должны сохранять keyboard navigation и видимый `:focus-visible`.
  Учитывай `prefers-reduced-motion`; цвет не должен быть единственным носителем состояния.
- Не утверждай visual correctness по одной сборке. Viewport/state verification определяется в
  [`testing.md`](testing.md).

## Package Scripts И Tooling

- Канонический package manager — Yarn Classic версии из `packageManager`; документация и итоговое
  evidence используют `yarn <script>`. Прямой запуск binary допустим только для локальной
  диагностики или внутри package script.
- Scripts в `package.json` группируй по назначению: app lifecycle, tests, quality checks, generated
  artifacts, hooks, dependency maintenance и project-specific helpers. Aggregate script размещай
  после scripts, которые он вызывает.
- Не описывай правило как automated gate без действующего детерминированного script-а. Добавление
  formatter, linter или test runner является отдельным tooling change с собственными checks.
- Если formatter появится, он выполняется последней content mutation. После него запускаются только
  non-mutating checks; новый edit начинает финальный цикл заново.
