import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_krUznCXv.mjs';
import { $ as $$Layout } from '../chunks/Layout_C768Dq_N.mjs';
import { i as items } from '../chunks/projects_CmUe49He.mjs';
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos de Desarrollo Web y Software a la medida en Canc\xFAn | Casos de \xC9xito", "description": "Explora nuestros casos de \xE9xito en desarrollo de software y web. Proyectos funcionales y de calidad que demuestran nuestra experiencia." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="section"> <h1 class="block h1 !mb-10 lg:!mt-30 lg:w-3/4">
Nuestro Proyectos
</h1> <p class="text-xl mx-auto mb-15 leading-8">
En Creativo APP, la calidad y la innovación se demuestran con
                resultados. Esta sección es una muestra de tan solo algunos de
                nuestros <b class="text-blue-company-500">proyectos de Desarrollo Web y Software a Medida</b>, donde hemos transformado ideas en soluciones digitales
                eficientes para nuestros clientes en Cancún y México.
</p> <article class="bg-white rounded-lg p-5 !text-black"> <h2 class="!text-black !mt-0">
Nuestro proceso habitual de trabajo
</h2> <p class="mb-5">
En Creativo APP, seguimos un proceso estructurado para
                    garantizar que cada proyecto de desarrollo web y software a
                    medida se entregue con la máxima calidad y eficiencia
                    posible. A continuación, describimos nuestro enfoque
                    habitual de trabajo:
</p> <div class="cascade-list"> <div> <b>1. Reunión inicial y Análisis de requisitos</b> </div> <div> <b>2. Planificación y Prototipado</b> </div> <div> <b>3. Diseño y Retroalimentación</b> </div> <div> <b>4. Desarrollo modular y Pruebas</b> </div> <div> <b>5. Monitoreo y Mejora continua</b> </div> </div> </article> </section> </main> <section class="section"> <div class="grid grid-cols-1 mt-5 mb-20 md:grid-cols-2 gap-10"> ${items.map((project) => renderTemplate`<div${addAttribute(project.id, "key")} class="relative rounded-lg overflow-hidden border-2 border-gray-700 transition-all duration-300"> <img${addAttribute(project.image, "src")}${addAttribute(project.client, "alt")} class="w-full object-cover rounded-lg"> <div class="absolute bottom-0 right-0 left-0 z-10 p-5 pt-20 pr-10 bg-gradient-to-t from-black to-transparent"> <h3 class="text-lg font-semibold !m-0 !text-gray-200 text-center lg:text-left"> ${project.client} </h3> <p class="text-white text-sm hidden lg:block"> ${project.description} </p> </div> <a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer nofollow" title="Explorar Proyecto" class="absolute bottom-5 right-5 hidden p-3 bg-blue-company-700 rounded-lg z-20 transition-all duration-300 lg:block hover:bg-blue-company-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"> <path fill="#FFF" d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2m6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03L9.28 7.78a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.75-3.75l-1.543-1.543A.25.25 0 0 1 10.604 1"></path> </svg> </a> </div>`)} </div> </section> ` })}`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/pages/proyectos.astro", void 0);

const $$file = "C:/JSApps/creativoapp.com/CreativoApp/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Proyectos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
