# Docker, CI и подключение ritmod.ru

Статус на 9 октября 2026 года: конфигурация подготовлена локально. Публикация образа,
запуск GitHub Actions и production deployment этой задачей не выполнялись.
Владелец сборки и доставки сайта — этот документ; TLS и ingress принадлежат
[`module-cloud`](../../module-cloud/docs/project/architecture/deployment-topology.md).

## Контракт доставки

- [`Dockerfile`](../Dockerfile): Node 24 + Yarn 1.22.22, frozen lockfile, `yarn build`,
  затем только `dist/` и [`nginx.conf`](../nginx.conf) в Nginx на порту `3000`.
- [`docker-compose.yml`](../docker-compose.yml): отдельный `module_website`, image
  `ghcr.io/mitya-borodin/module-website:${GITHUB_SHA}`, внешняя сеть `module_cloud_network`.
  Порты host не публикуются; общим `80/443` владеет ingress облака.
- Astro формирует canonical для `https://ritmod.ru`. `www` перенаправляет на корневой домен.
  Существующие `noindex,nofollow` сохранены; Nginx также отдаёт `X-Robots-Tag`.
  Переименование текстов Module и открытие индексации — отдельная задача.
- Раздача статическая: существующие страницы и файлы доступны, неизвестные URL дают `404`
  с Astro `404.html`. SPA fallback и backend/API proxy отсутствуют.
- Относительные directory redirects сохраняют внешний HTTPS, путь и query string.

## GitHub Actions

[`main.yml`](../.github/workflows/main.yml) повторяет принятую цепочку webapp:
проверка → Docker build → GHCR → SSH/Compose. Используется self-hosted runner с Node,
Docker/Buildx, shell и curl; pull request из чужого fork на нём не выполняется.

1. Push в `master` и PR в `master`: frozen install, `yarn build`.
2. Сборка `linux/amd64` соответствует проверенной архитектуре сервера. Образ загружается
   в локальный Docker runner и проходит [`test-container.sh`](../scripts/test-container.sh).
3. Только push в `master`: публикация проверенного SHA-tag и `latest`.
4. Deploy получает именно этот SHA; remote checkout должен быть чистым. Compose обновляет
   только website и ждёт healthy до 120 секунд. Общий stack не останавливается,
   глобальная очистка Docker не выполняется. Автоматического rollback нет.

Нужны repository secrets:

| Secret | Назначение |
| --- | --- |
| `SSH_HOST` | Адрес существующего Docker host |
| `SSH_USER` | Пользователь SSH с правами на Docker и checkout |
| `SSH_PRIVATE_KEY` | Полный приватный deploy-ключ без passphrase; public key установлен у SSH-пользователя |
| `HOST_FINGERPRINT` | Строка или строки `known_hosts` для SSH host, включая host, тип и публичный ключ; не `SHA256:…` |
| `PROJECT_FOLDER` | Отдельный чистый checkout `module-website` на сервере |

Secrets добавляются в репозитории website: **Settings → Secrets and variables → Actions →
Secrets → New repository secret**. Раздел Variables текущим workflow не используется.
`GITHUB_SHA` задаётся workflow автоматически, отдельно сохранять его не нужно.

Особенность `D3rHase/ssh-command-action@v0.3.1` подтверждена по
[entrypoint.sh](https://raw.githubusercontent.com/D3rHase/ssh-command-action/v0.3.1/entrypoint.sh)
9 октября 2026 года: значение `HOST_FINGERPRINT` записывается прямо в `known_hosts`.
Его README предлагает SHA256 fingerprint, что расходится с реализацией данной версии.
Для уже проверенного SSH host взять строки можно через
`ssh-keygen -F <SSH_HOST>` без строк-комментариев; hashed host entries также подходят.
Приватный ключ целиком, с BEGIN/END-строками и переводами строк, вводится только в GitHub secret.

Та же версия action передаёт COMMAND через shell word splitting: перенос строки не разделяет
remote-команды. Поэтому каждая команда в workflow заканчивается `;`; это проверено локальной
эмуляцией способа передачи без SSH, реальных ключей или GitHub mutations.

`GITHUB_TOKEN` предоставляет Actions; build job имеет `packages: write`, deploy —
`packages: read`. Для GHCR создаётся временный Docker config и удаляется после deploy.
Доступ host к Git origin необходимо настроить при первичной подготовке checkout.

## Первый запуск

1. Подготовить отдельный checkout website на том же сервере и указанные secrets.
2. Опубликовать website image штатным CI; он должен запуститься в уже существующей
   `module_cloud_network` и стать healthy.
3. Применить изменения ingress из `module-cloud`: отдельный service config и общий
   сертификат для `module-cloud.ru`, `ritmod.ru`, `www.ritmod.ru`. Предварительно проверить
   публичные A/AAAA обоих новых имён и доступность HTTP-01 на `80`.
4. В checkout облака после получения подготовленных файлов пересобрать и пересоздать
   **только** ingress: `docker compose up -d --build --no-deps module_cloud_nginx`.
   Сохранить действующее окружение облачного проекта, включая его `GITHUB_SHA`.
5. Проверить сертификат/SAN, `https://ritmod.ru/`, `/software/`, `/ru/docs/`, вложенную
   страницу и asset; неизвестный URL и `/api/health/alive` должны дать `404`, `www` — `301`.
   Отдельно проверить старые маршруты `module-cloud.ru`.

Ingress допускает временное отсутствие `module_website`: тогда website возвращает `502`,
но конфигурация облака продолжает загружаться. Docker DNS перечитывается с TTL 5 секунд.
Сертификат общий: доступность HTTP-01 всех трёх имён нужна при выпуске/обновлении.
Существующий certbot loop ingress повторяется раз в десять дней; после неудачного первого
выпуска нужно устранить причину и повторить запуск ingress, не ждать этого интервала.

## Локальные проверки

```sh
yarn build
docker build --platform linux/amd64 -t module-website:check .
sh scripts/test-container.sh module-website:check
GITHUB_SHA=check docker compose config --quiet
```

Smoke проверяет страницы, вложенный маршрут, asset MIME, directory redirect с query,
canonical, noindex, реальные 404, отсутствие API и `nginx -t`.
Результаты 09.10.2026:

- `yarn build`: 22 проверенных файла, 0 errors/warnings; 14 страниц, 22 HTML в search index.
- Docker image `linux/amd64` собран; контейнерный HTTP smoke и `nginx -t` прошли.
- `actionlint` проверил workflow без замечаний; обе Compose-модели валидны.
  Website без `GITHUB_SHA` ожидаемо отклоняется. Cloud проверялся с пустым временным env,
  без чтения действующего `.env`.
- Полный ingress проверен в изолированной Docker-сети с временным сертификатом для трёх
  имён и заглушками cloud upstream. Cloud `/`, `/api` и `/graphql` отвечают; website
  стартует после ingress, отдаёт static/404/redirect и восстанавливается после замены IP
  без reload ingress. Временные контейнеры/сеть удалены.
- Image cloud ingress собран. `le.sh` с подменёнными openssl/certbot/cp проверен для
  расширения SAN, уже подходящего сертификата и ошибки выпуска; запись сертификата
  при ошибке не происходит. Настоящий ACME-запрос не выполнялся.
- Первая HTTP-проверка обнаружила отсутствие canonical в коммерческом layout;
  добавлена ссылка из `Astro.site`, повторные build и HTTP checks прошли.
- Изменены build/config/metadata boundaries; cloud backend/API и пользовательские
  визуальные изменения сохранены. Проверка UI не требовалась: визуальный код не менялся.
- GitHub CI ещё не запускался; наличие secrets/runner и успешный live rollout не подтверждены.

Локальные integration проверки подтверждают конфиги и HTTP-поведение тестовых контейнеров;
они не подтверждают публичный DNS, production TLS или доступность сайта на реальном домене.

При подготовке 09.10.2026 проверены исходники webapp Dockerfile/nginx/workflow и cloud
Compose/ingress; read-only SSH подтвердил `x86_64`, Compose `v5.1.1`, существующие
cloud/webapp containers и сеть. Secrets и конфигурация работающего сервера не читались.
Семантика сверена с [Compose networking](https://docs.docker.com/compose/how-tos/networking/),
[`compose up --wait`](https://docs.docker.com/reference/cli/docker/compose/up/),
[`proxy_pass` с переменной](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass)
и [Certbot domains](https://eff-certbot.readthedocs.io/en/stable/using.html#changing-a-certificate-s-domains).
