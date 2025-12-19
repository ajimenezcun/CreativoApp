import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DeGPtDbt.mjs';
import { manifest } from './manifest_SgizKaA8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/quote.astro.mjs');
const _page3 = () => import('./pages/consultoria-digital.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/cotizar-proyecto.astro.mjs');
const _page6 = () => import('./pages/desarrollo-software.astro.mjs');
const _page7 = () => import('./pages/paginas-web-cancun.astro.mjs');
const _page8 = () => import('./pages/politicas-de-privacidad.astro.mjs');
const _page9 = () => import('./pages/posicionamiento-seo-sem.astro.mjs');
const _page10 = () => import('./pages/proyectos.astro.mjs');
const _page11 = () => import('./pages/servicios.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.15.3_@types+node@22.15.30_@vercel+functions@2.2.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/quote.ts", _page2],
    ["src/pages/consultoria-digital.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/cotizar-proyecto.astro", _page5],
    ["src/pages/desarrollo-software.astro", _page6],
    ["src/pages/paginas-web-cancun.astro", _page7],
    ["src/pages/politicas-de-privacidad.astro", _page8],
    ["src/pages/posicionamiento-seo-sem.astro", _page9],
    ["src/pages/proyectos.astro", _page10],
    ["src/pages/servicios.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8a4f0b0e-8ba6-4296-bc07-da29110b9224",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
