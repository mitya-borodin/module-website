# Структурированные данные страниц

Статус: реализовано и проверено локально 15 октября 2026 года; эта редакция не опубликована.
Владелец реализации JSON-LD; [требования](../../module-market-intelligence/internet-promotion/spec/public-web-contract.md#structured-data)
и [исследование форматов](../../module-market-intelligence/internet-promotion/spec/structured-data-and-social-previews-2026-10.md)
принадлежат research. Социальные теги — у [владельца превью](social-link-previews.md).

## Состав

[page-metadata.astro](../src/components/page-metadata.astro) выдаёт один JSON-LD `@graph` в
исходном HTML и подготавливает ту же обложку, которую использует OG/Twitter. Узлы связаны
стабильными `@id`, построенными от canonical URL. Title/description берутся из данных страницы.

| Страница | Сущности |
| --- | --- |
| Все 14 содержательных страниц | Organization Ritmod, WebSite, WebPage либо CollectionPage, ImageObject |
| Главная | Service как mainEntity страницы; provider ссылается на Ritmod |
| ПО | SoftwareApplication как mainEntity; publisher Ritmod |
| Обзор документации | CollectionPage |
| Десять автоматизаций и инструкция прихожей | TechArticle как mainEntity; publisher Ritmod |
| Все внутренние страницы | BreadcrumbList по существующим URL: главная → текущая; для материалов документации — главная → документация → материал |

Цепочки отражают структуру разделов и существующие навигационные назначения, без вымышленных
страниц `/automations/` или `/solutions/`. На 404 и страницах редиректов JSON-LD не добавляется.
Organization содержит только публичное имя проекта и адрес сайта, без юридических реквизитов.
Нет выдуманных offers/цен, рейтингов, авторов, дат, аккаунтов sameAs и признака бесплатности ПО.
TechArticle описывает опубликованный материал, а не факт испытания автоматизации.

SoftwareApplication без offers/rating — семантическое описание продукта, не заявление о выполнении
всех требований Google к расширенному результату приложения. Noindex сохранён.

## Безопасность и сопровождение

[serialize-json-ld.ts](../src/utils/serialize-json-ld.ts) сериализует объект через JSON.stringify
и экранирует `<`, чтобы текст не закрыл script. [Тесты](../src/utils/serialize-json-ld.spec.ts)
проверяют точное восстановление значений и попытку выхода из script, включая другой регистр.

```sh
node --test src/utils/serialize-json-ld.spec.ts
yarn build
```

Новая страница должна передавать точные title/description, подходящий kind, иллюстрацию и alt.
При появлении подтверждённых цен/дат/авторов их добавляют у source owner, не вычисляют из даты сборки.
Изменение JSON-LD не должно порождать второй canonical или повторные OG/Twitter поля.

## Проверки 15 октября

- Два теста сериализации — PASS.
- `yarn build` — PASS; Astro check: 38 файлов, 0 errors/warnings/hints.
- Одноразовый разбор итогового HTML всех 14 содержательных страниц: один JSON-LD, валидный JSON,
  ожидаемые типы, уникальные @id и разрешимые внутриграфовые ссылки; canonical/og:url совпадают.
- Одиночные непустые OG/Twitter поля, ru_RU, прежний noindex; изображения существуют в dist
  и имеют JPEG-заголовок, совпадают в JSON-LD/OG/Twitter. Прихожая использует отдельную обложку.
- BreadcrumbList: последовательные позиции, существующие целевые страницы, последняя — текущая.
  404 и восемь redirect-страниц не получили JSON-LD.
- `git diff --check` — PASS; ранее существовавшие правки README/индекса/deployment/прихожей сохранены.

Google Rich Results Test, Яндекс validator, проверка реальных карточек в сервисах и deployment
не выполнялись. Проверка JSON и ссылок не объявляется внешней сертификацией Schema.org.
Визуальный интерфейс страниц не менялся; browser layout regression не требуется для head-only
изменений. Итоговый вид новой карточки проверяется после отдельной публикации.

Production logic автоматизаций: не изменялась. Изменена публичная metadata boundary сайта.
