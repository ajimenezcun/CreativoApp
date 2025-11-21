// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/serverless';

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
  output: 'server', // ¡Cambia de 'static' a 'server'!
  adapter: vercel()
});