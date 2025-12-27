// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/serverless';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  redirects: {
    '/politicas': '/politicas-de-privacidad',
    '/paginas-web': '/paginas-web-cancun',
    '/optimizacion-web': '/posicionamiento-seo-sem',
    '/software': '/desarrollo-software',
  },

  // ¡Cambia de 'static' a 'server'!
  output: 'server',

  adapter: vercel(),
  integrations: [partytown()]
});