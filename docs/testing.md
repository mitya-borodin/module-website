# Тестирование И Проверки

Проверки выбираются по изменённому публичному поведению и фактическому риску. Неактивная ветка
матрицы не запускается «на всякий случай», но пропущенное необходимое evidence называется явно.

## Текущие Возможности

В проекте сейчас объявлены:

- `yarn check` — статическая проверка Astro/TypeScript;
- `yarn build` — `astro check` и production static build;
- `yarn dev` и `yarn preview` — локальные interactive commands, не финальные автоматические gates.

ESLint, Prettier, unit-test runner, Storybook и browser-test harness пока не настроены. Нельзя
сообщать об их успешном прохождении или считать форматирование, unit behavior и visual state
автоматически проверенными.

## Verification Matrix

| Изменённая поверхность | Минимальное evidence | Условное evidence |
| --- | --- | --- |
| Только project instructions/internal Markdown | Проверка ссылок, лимита `20 KiB`, whitespace и scope audit | Не требуется production build, если runtime source не менялся |
| Astro/TypeScript или `astro.config.mjs` | `yarn check` и `yarn build` | Targeted behavioral test, если появилась исполняемая логика |
| CSS, layout или responsive behavior | `yarn check` и `yarn build` | Visual verification конкретных viewport/state |
| Публичный текст или MDX | `yarn check` и `yarn build` | Проверка ссылок, headings, claims и rendered page |
| Интерактивная client logic, form или data flow | Static/build checks и tests публичного поведения | Browser/e2e evidence для поведения, не доказуемого unit test |
| Dependency, script или build contract | `yarn build` и проверка изменённой команды | CI/server-side evidence, если менялся CI contract |

Для каждого завершённого изменения дополнительно выполняй проверку trailing whitespace,
`git diff --check`, повторный `git status --short -uall` и scope audit. Если весь baseline ещё
неотслеживаемый и обычный `git diff` не видит новый файл, проверяй его содержимое напрямую и не
выдавай пустой diff за доказательство.

## Unit Tests

- Изменение нетривиальной исполняемой логики должно проектироваться так, чтобы публичное поведение
  можно было проверить targeted unit tests. Отсутствие test runner не отменяет эту границу:
  согласуй добавление минимальной test infrastructure либо явно оставь проверку как незакрытый риск.
- Не добавляй test framework только ради изменения статического текста или CSS без отдельной
  пользы.
- Unit tests проверяют публичный результат unit-а, а не приватные детали реализации. Внешние
  зависимости подменяются через explicit parameters, interfaces или narrow adapters.
- Файлы тестов именуются в `kebab-case` и заканчиваются на `.spec.ts` либо `.spec.tsx`, если такой
  формат действительно появляется в стеке проекта.
- Верхний `describe` называется по unit under test. Вложенный `describe` группирует публичный метод,
  операцию или поведение, когда это улучшает чтение.
- Название `it`/`test` описывает ожидаемое поведение в настоящем времени. В новых названиях не
  используй `should`; условие формулируй через `when`.
- Над каждым `it`/`test` добавляй короткий русский JSDoc, объясняющий проверяемую границу и важность
  сценария. Для table-driven family достаточно одного общего JSDoc над блоком.
- Внутри теста визуально разделяй Arrange, Act и Assert. Scenario-specific ответы, ошибки и spies
  должны быть видны в Arrange конкретного теста, а не спрятаны в общем fixture.
- Для parsing, validation и branching покрывай success, boundary и controlled error/malformed
  cases. Для времени, timers, random, storage и network используй детерминированные dependencies, а
  не реальные ожидания и глобальное состояние.

## Visual И Browser Verification

- Успешная сборка доказывает возможность собрать страницу, но не композицию, отсутствие overflow,
  читаемость, focus order или соответствие intended state.
- Для visual change зафиксируй минимум mobile viewport от `320px` и релевантный desktop viewport.
  Добавь промежуточный viewport, если именно там меняется layout или возможен overflow.
- Называй проверяемое состояние: default, navigation open, focus, long content, error/success или
  другое состояние, затронутое задачей. Скриншот одного default state не доказывает все варианты.
- Routine browser verification по умолчанию выполняет разработчик. Codex использует Browser/Chrome
  по явной просьбе либо когда behavior нельзя разумно проверить статически, build-ом или unit test.
- Если browser verification не выполнена, не называй visual результат полностью проверенным; укажи
  точный manual check, который остаётся.

## Definition Of Done

- Изменение имеет checks, соответствующие активной строке verification matrix.
- Публичные ссылки, metadata и claims согласованы с владельцами и не повышают статус функции без
  evidence.
- TypeScript/Astro contracts, comments, runtime и документация не расходятся.
- Generated output не редактировался вручную и не попал в scope.
- Неуспешные, прерванные, пропущенные и неприменимые проверки перечислены отдельно.
- Финальный scope audit классифицирует production behavior, build/config/dependencies, tests,
  tooling и docs. Итог явно сообщает: `Production logic: не изменялась` либо называет согласованную
  изменённую boundary.
