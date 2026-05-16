// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.villadelapalma.com',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'de', 'es'],
  },
});
