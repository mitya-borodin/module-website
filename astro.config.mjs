import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'MODULE / ДОКУМЕНТАЦИЯ',
      description: 'Документация инженерной автоматизации Module.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/docs.css'],
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
          label: 'Документация',
          items: [{ label: 'Начало', link: '/ru/docs/' }],
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
