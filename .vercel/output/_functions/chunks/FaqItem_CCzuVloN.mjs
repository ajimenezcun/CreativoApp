import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, o as renderScript } from './astro/server_krUznCXv.mjs';

const $$Astro$2 = createAstro();
const $$ServicesBreadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServicesBreadcrumb;
  const { current } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2 text-white text-sm mb-10 lg:flex-row lg:items-center"> <a href="/" class="font-semibold text-blue-company-600">Creativo APP</a> <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l7-7l-7-7m7 7H5"></path></svg> </span> <a href="/servicios" class="font-semibold text-blue-company-400">Servicios</a> <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l7-7l-7-7m7 7H5"></path></svg> </span> <span>${current}</span> </div>`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/ServicesBreadcrumb.astro", void 0);

const $$Astro$1 = createAstro();
const $$QuoteSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QuoteSection;
  const { section } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-center">Cotiza tu ${section}</h2> <p class="text-xl mb-5 mx-auto w-2/3 text-center">
Estamos listos para colaborar en tu proyecto y llevarlo al siguiente nivel.
    Contáctanos para obtener una cotización y atención personalizada.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-15 border-2 border-gray-800 p-5 rounded-lg"> <div class="lg:border-r-2 lg:border-gray-800 py-3 text-center flex flex-col gap-2 transition-all duration-300 hover:bg-gray-800 hover:rounded-lg"> <b>Llámanos</b> <a href="tel:+529982235933" target="_blank" class="text-xl">(998) 223-5933</a> </div> <div class="lg:border-r-2 lg:border-gray-800 py-3 text-center flex flex-col gap-2 transition-all duration-300 hover:bg-gray-800 hover:rounded-lg"> <b>Whatsapp</b> <a href="https://wa.me/529982235933" target="_blank" class="text-xl">Ir al Chat</a> </div> <div class="lg:border-r-2 lg:border-gray-800 py-3 text-center flex flex-col gap-2 transition-all duration-300 hover:bg-gray-800 hover:rounded-lg"> <b>Escríbenos</b> <a href="mailto:hola@creativoapp.com" target="_blank" class="text-xl">hola@creativoapp.com</a> </div> <div class="py-3 text-center flex flex-col gap-2 transition-all duration-300 hover:bg-gray-800 hover:rounded-lg"> <b>Contacto</b> <a href="/contacto" class="text-xl">Ir al Formulario</a> </div> </div>`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/QuoteSection.astro", void 0);

const $$Astro = createAstro();
const $$FaqItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqItem;
  const { question, answer, visible = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "p-5 rounded-lg mt-10 border border-gray-700",
    { "bg-gray-800": visible }
  ], "class:list")}> <div class="flex items-center justify-between cursor-pointer faq-item-event"> <h3 class="!text-gray-300 !m-0"> ${question} </h3> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 12h-6m0 0H6m6 0V6m0 6v6"></path></svg> </div> <p${addAttribute(["text-white", "mt-5", { hidden: !visible }], "class:list")}> ${answer} </p> </article> <!-- Agrega listener para mostrar/ocultar respuesta --> ${renderScript($$result, "C:/JSApps/creativoapp.com/CreativoApp/src/components/FaqItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/FaqItem.astro", void 0);

export { $$ServicesBreadcrumb as $, $$QuoteSection as a, $$FaqItem as b };
