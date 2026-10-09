# syntax=docker/dockerfile:1
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN --mount=type=cache,id=module-website-yarn,target=/usr/local/share/.cache/yarn \
    yarn install --frozen-lockfile --non-interactive

COPY . .
RUN yarn build

FROM nginx:1.28-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --spider --quiet --tries=1 http://127.0.0.1:3000/ || exit 1
