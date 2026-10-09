import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ritmod.ru',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/ru/docs/automations/lighting/prepare/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/setup/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/devices/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/settings/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/diagnostics/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/recipes/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/recipes/single-zone/': '/ru/docs/automations/lighting/',
    '/ru/docs/automations/lighting/recipes/several-zones/': '/ru/docs/automations/lighting/',
  },
  integrations: [
    starlight({
      title: 'Ritmod / Документация',
      description: 'Возможности автоматизации Ritmod: результат, поведение и условия применения.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/docs.css'],
      components: {
        SiteTitle: './src/components/docs-site-title.astro',
        MobileMenuToggle: './src/components/docs-menu-toggle.astro',
      },
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'noindex,nofollow' },
        },
      ],
      sidebar: [
        {
          label: 'Возможности Ritmod',
          items: [
            { label: 'Начало', link: '/ru/docs/' },
            { label: 'Освещение', link: '/ru/docs/automations/lighting/' },
            { label: 'Шторы', link: '/ru/docs/automations/curtains/' },
            { label: 'Кондиционирование', link: '/ru/docs/automations/air-conditioning/' },
            { label: 'Отопление', link: '/ru/docs/automations/heating/' },
            { label: 'Параллельная загрузка бойлера', link: '/ru/docs/automations/boiler-loading/' },
            { label: 'Рециркуляция горячей воды', link: '/ru/docs/automations/recirculation/' },
            { label: 'Защита от протечек воды', link: '/ru/docs/automations/leaks/' },
            { label: 'Защита от утечки газа', link: '/ru/docs/automations/gas-leaks/' },
            { label: 'Позиционный привод', link: '/ru/docs/automations/positional-drive/' },
            { label: 'Учёт ресурсов', link: '/ru/docs/automations/resource-metering/' },
          ],
        },
        {
          label: 'Сайт',
          items: [
            { label: 'ПО Ritmod', link: '/software/' },
            { label: 'Вернуться на главную', link: '/' },
          ],
        },
      ],
    }),
  ],
});
