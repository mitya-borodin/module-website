import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
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
      title: 'MODULE / ДОКУМЕНТАЦИЯ',
      description: 'Возможности автоматизации Module: результат, поведение и условия применения.',
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
          label: 'Возможности Module',
          items: [
            { label: 'Начало', link: '/ru/docs/' },
            { label: 'Освещение', link: '/ru/docs/automations/lighting/' },
            { label: 'Защита от протечек', link: '/ru/docs/automations/leaks/' },
          ],
        },
        {
          label: 'Сайт',
          items: [
            { label: 'ПО Module', link: '/software/' },
            { label: 'Вернуться на главную', link: '/' },
          ],
        },
      ],
    }),
  ],
});
