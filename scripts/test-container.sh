#!/bin/sh
set -eu

# Проверяет фактическую HTTP-раздачу image; удаляет только свой временный контейнер.
image=${1:?Usage: sh scripts/test-container.sh IMAGE}
container_id=
test_dir=$(mktemp -d)
cleanup() {
  if [ -n "$container_id" ]; then
    docker rm -f "$container_id" >/dev/null 2>&1 || true
  fi
  rm -rf "$test_dir"
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

container_id=$(docker run --detach --publish 127.0.0.1::3000 "$image")
port=$(docker inspect --format '{{(index (index .NetworkSettings.Ports "3000/tcp") 0).HostPort}}' "$container_id")
origin="http://127.0.0.1:$port"
attempt=0
until curl --fail --silent "$origin/" >/dev/null; do
  attempt=$((attempt + 1))
  if [ "$attempt" -ge 30 ]; then
    docker logs "$container_id"
    exit 1
  fi
  sleep 1
done

expect_status() {
  path=$1
  expected=$2
  status=$(curl --silent --show-error --dump-header "$test_dir/headers" \
    --output "$test_dir/body" --write-out '%{http_code}' "$origin$path")
  if [ "$status" != "$expected" ]; then
    printf 'FAIL %s: expected %s, got %s\n' "$path" "$expected" "$status" >&2
    exit 1
  fi
  printf 'PASS %s %s\n' "$status" "$path"
}

expect_status / 200
grep -Fq 'noindex' "$test_dir/headers"
grep -Fq 'https://ritmod.ru/' "$test_dir/body"
for path in /software/ /ru/docs/ /ru/docs/automations/lighting/ /favicon.svg; do
  expect_status "$path" 200
done
grep -Fiq 'image/svg+xml' "$test_dir/headers"
expect_status '/software?from=container-test' 301
grep -Fiq 'Location: /software/?from=container-test' "$test_dir/headers"
for path in /missing-page/ /missing.js /api/health/alive /graphql; do
  expect_status "$path" 404
done
docker exec "$container_id" nginx -t
docker exec "$container_id" wget --spider --quiet --tries=1 http://127.0.0.1:3000/
