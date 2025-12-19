import { e as createComponent, f as createAstro, m as maybeRenderHead, p as renderSlot, h as addAttribute, r as renderTemplate, k as renderComponent, q as defineStyleVars, l as defineScriptVars } from '../chunks/astro/server_krUznCXv.mjs';
import { $ as $$Layout } from '../chunks/Layout_C768Dq_N.mjs';
/* empty css                                 */
import { $ as $$ButtonsCta } from '../chunks/ButtonsCta_BWte4G4X.mjs';
import { $ as $$CodeSVG } from '../chunks/CodeSVG_CjiiQ09Z.mjs';
import { i as items } from '../chunks/projects_CmUe49He.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, link } = Astro2.props;
  return renderTemplate`<!-- <article
    class="rounded-xl p-5 text-white transition-all duration-300 hover:bg-gray-800"
> -->${maybeRenderHead()}<article class="rounded-lg p-5 bg-gray-100 text-black"> <h3 class="!text-black !p-0 !m-0 !mb-5">${title}</h3> ${renderSlot($$result, $$slots["default"])} <a${addAttribute(link, "href")} class="primary-cta block w-fit mx-auto mt-5 !px-5 hover:scale-105">Saber más</a> </article>`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/Service.astro", void 0);

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-5 lg:p-8 rounded-lg mt-20 text-center bg-white"> <h2 class="!text-blue-company-600">Nuestros Servicios</h2> <p class="text-center !text-black text-lg mb-15 lg:w-3/4 lg:mx-auto">
Si aún no tienes presencia en Internet o ya la tienes pero deseas
        exponenciar su alcance, nuestros servicios al ser totalmente
        personalizados para cada cliente y proyecto te van ayudar sin duda a
        alcanzar cada uno de los objetivos de tu proyecto.
</p> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> ${renderComponent($$result, "Service", $$Service, { "title": "Dise\xF1o y Desarrollo Web", "link": "/paginas-web-cancun" }, { "default": ($$result2) => renderTemplate` <p>
Como <b>Agencia de Desarrollo Web</b> con sede en <b>Cancún</b>,
                entendemos la importancia de una presencia digital que impacte.
                No solo construimos sitios; creamos máquinas de conversión
                diseñadas para atraer al turismo, bienes raíces y a las empresas
                locales.
</p> ` })} ${renderComponent($$result, "Service", $$Service, { "title": "Desarrollo de Software", "link": "/software-a-medida" }, { "default": ($$result2) => renderTemplate` <p>
Escala los resultados y el control de tu empresa con soluciones
                hechas a la medida. En <b>Creativo App</b> realizamos <b>Desarrollo de Software a la Medida</b> adaptados a tus procesos y procedimientos para maximizar de manera
                eficiente y clara los resultados que buscas.
</p> ` })} ${renderComponent($$result, "Service", $$Service, { "title": "Posicionamiento SEO & SEM", "link": "/posicionamiento-seo-sem" }, { "default": ($$result2) => renderTemplate` <p>
Un gran Software y Diseño Web no es suficiente para aumentar la
                visibilidad de tu negocio y generar más clientes. Con ayuda de
                nuestro
<b>Servicio de SEO & SEM</b> diseñaremos campañas eficientes que
                te ayuden a convertir de forma más inteligente.
</p> ` })} </div> </div>`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/ServicesSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$Presencia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Presencia;
  const { title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-lg"> ${renderSlot($$result, $$slots["icon"])} <h4 class="!m-0 !text-blue-special">${title}</h4> <p class="mt-3 text-black">${content}</p> </article>`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/Presencia.astro", void 0);

const $$Astro$1 = createAstro();
const $$LogoCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoCarousel;
  const { logos, speed = 30 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ speed: `${speed}s` }]);
  return renderTemplate`${maybeRenderHead()}<div class="logo-carousel" data-astro-cid-lqivs3vl${addAttribute($$definedVars, "style")}> <div class="carousel-track" data-astro-cid-lqivs3vl${addAttribute($$definedVars, "style")}> <!-- Primera serie de logos --> ${logos.map((logo, index) => renderTemplate`<div class="carousel-item"${addAttribute(`original-${index}`, "key")} data-astro-cid-lqivs3vl${addAttribute($$definedVars, "style")}> <img${addAttribute(logo, "src")}${addAttribute(`Cliente ${index + 1}`, "alt")} class="logo-image" loading="lazy" data-astro-cid-lqivs3vl${addAttribute($$definedVars, "style")}> </div>`)} <!-- Segunda serie de logos (duplicada para efecto infinito) --> ${logos.map((logo, index) => renderTemplate`<div class="carousel-item"${addAttribute(`duplicate-${index}`, "key")} data-astro-cid-lqivs3vl${addAttribute($$definedVars, "style")}> <img${addAttribute(logo, "src")}${addAttribute(`Cliente ${index + 1}`, "alt")} class="logo-image" loading="lazy" data-astro-cid-lqivs3vl${addAttribute($$definedVars, "style")}> </div>`)} </div> </div> `;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/LogoCarousel.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$SlideCarrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SlideCarrousel;
  const {
    items,
    autoSlideInterval = 5e3,
    showItems = 2,
    showIndicators = true
  } = Astro2.props;
  const carouselId = `carousel-${Math.random().toString(36).substr(2, 9)}`;
  const $$definedVars = defineStyleVars([{
    showItems: showItems.toString(),
    autoInterval: `${autoSlideInterval}ms`
  }]);
  return renderTemplate(_a || (_a = __template(["", '<div class="slide-carousel"', " data-astro-cid-syz5j5vd", '> <div class="carousel-container" data-astro-cid-syz5j5vd', '> <!-- Contenedor de slides --> <div class="carousel-wrapper" data-astro-cid-syz5j5vd', '> <div class="carousel-track" data-astro-cid-syz5j5vd', "> ", ' </div> </div> </div> <!-- Controles en la parte inferior --> <div class="carousel-controls" data-astro-cid-syz5j5vd', "> <!-- Indicadores (si est\xE1n habilitados) --> ", ' <!-- Botones de navegaci\xF3n --> <div class="carousel-buttons" data-astro-cid-syz5j5vd', '> <button class="carousel-btn carousel-btn-prev bg-blue-company-800 w-[48px] h-[48px] p-5 rounded-md cursor-pointer" aria-label="Anterior" data-astro-cid-syz5j5vd', '> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="!-mt-[10px] !-ml-[10px]" data-astro-cid-syz5j5vd', '> <polyline points="15,18 9,12 15,6" data-astro-cid-syz5j5vd', '></polyline> </svg> </button> <button class="carousel-btn carousel-btn-next bg-blue-company-800 w-[48px] h-[48px] p-5 rounded-md cursor-pointer" aria-label="Siguiente" data-astro-cid-syz5j5vd', '> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="!-mt-[10px] !-ml-[10px]" data-astro-cid-syz5j5vd', '> <polyline points="9,18 15,12 9,6" data-astro-cid-syz5j5vd', "></polyline> </svg> </button> </div> </div> </div>  <script>(function(){", '\n  document.addEventListener("DOMContentLoaded", function () {\n    const carousel = document.getElementById(carouselId);\n    if (!carousel) return;\n\n    const track = carousel.querySelector(".carousel-track");\n    const prevBtn = carousel.querySelector(".carousel-btn-prev");\n    const nextBtn = carousel.querySelector(".carousel-btn-next");\n    const indicators = carousel.querySelectorAll(".indicator");\n    const slides = carousel.querySelectorAll(".carousel-slide");\n\n    let currentIndex = 0;\n    let autoSlideTimer = null;\n    const totalSlides = slides.length;\n    const maxIndex = Math.ceil(totalSlides / showItems) - 1;\n\n    function updateCarousel() {\n      const translateX = -(\n        currentIndex *\n        (100 + 20 / (carousel.offsetWidth / 2))\n      ); // Considerando el gap\n      track.style.transform = `translateX(${translateX}%)`;\n\n      // Actualizar indicadores solo si existen\n      if (indicators.length > 0) {\n        indicators.forEach((indicator, index) => {\n          indicator.classList.toggle("active", index === currentIndex);\n        });\n      }\n    }\n\n    function nextSlide() {\n      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;\n      updateCarousel();\n    }\n\n    function prevSlide() {\n      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;\n      updateCarousel();\n    }\n\n    function goToSlide(index) {\n      currentIndex = Math.max(0, Math.min(index, maxIndex));\n      updateCarousel();\n    }\n\n    function startAutoSlide() {\n      stopAutoSlide();\n      autoSlideTimer = setInterval(nextSlide, autoSlideInterval);\n    }\n\n    function stopAutoSlide() {\n      if (autoSlideTimer) {\n        clearInterval(autoSlideTimer);\n        autoSlideTimer = null;\n      }\n    }\n\n    // Event listeners\n    nextBtn.addEventListener("click", () => {\n      nextSlide();\n      startAutoSlide(); // reiniciar timer\n    });\n\n    prevBtn.addEventListener("click", () => {\n      prevSlide();\n      startAutoSlide(); // reiniciar timer\n    });\n\n    // Event listeners para indicadores (solo si existen)\n    if (indicators.length > 0) {\n      indicators.forEach((indicator, index) => {\n        indicator.addEventListener("click", () => {\n          goToSlide(index);\n          startAutoSlide(); // reiniciar timer\n        });\n      });\n    }\n\n    // Pausar en hover\n    carousel.addEventListener("mouseenter", stopAutoSlide);\n    carousel.addEventListener("mouseleave", startAutoSlide);\n\n    // Iniciar auto-slide\n    startAutoSlide();\n  });\n})();<\/script>'], ["", '<div class="slide-carousel"', " data-astro-cid-syz5j5vd", '> <div class="carousel-container" data-astro-cid-syz5j5vd', '> <!-- Contenedor de slides --> <div class="carousel-wrapper" data-astro-cid-syz5j5vd', '> <div class="carousel-track" data-astro-cid-syz5j5vd', "> ", ' </div> </div> </div> <!-- Controles en la parte inferior --> <div class="carousel-controls" data-astro-cid-syz5j5vd', "> <!-- Indicadores (si est\xE1n habilitados) --> ", ' <!-- Botones de navegaci\xF3n --> <div class="carousel-buttons" data-astro-cid-syz5j5vd', '> <button class="carousel-btn carousel-btn-prev bg-blue-company-800 w-[48px] h-[48px] p-5 rounded-md cursor-pointer" aria-label="Anterior" data-astro-cid-syz5j5vd', '> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="!-mt-[10px] !-ml-[10px]" data-astro-cid-syz5j5vd', '> <polyline points="15,18 9,12 15,6" data-astro-cid-syz5j5vd', '></polyline> </svg> </button> <button class="carousel-btn carousel-btn-next bg-blue-company-800 w-[48px] h-[48px] p-5 rounded-md cursor-pointer" aria-label="Siguiente" data-astro-cid-syz5j5vd', '> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="!-mt-[10px] !-ml-[10px]" data-astro-cid-syz5j5vd', '> <polyline points="9,18 15,12 9,6" data-astro-cid-syz5j5vd', "></polyline> </svg> </button> </div> </div> </div>  <script>(function(){", '\n  document.addEventListener("DOMContentLoaded", function () {\n    const carousel = document.getElementById(carouselId);\n    if (!carousel) return;\n\n    const track = carousel.querySelector(".carousel-track");\n    const prevBtn = carousel.querySelector(".carousel-btn-prev");\n    const nextBtn = carousel.querySelector(".carousel-btn-next");\n    const indicators = carousel.querySelectorAll(".indicator");\n    const slides = carousel.querySelectorAll(".carousel-slide");\n\n    let currentIndex = 0;\n    let autoSlideTimer = null;\n    const totalSlides = slides.length;\n    const maxIndex = Math.ceil(totalSlides / showItems) - 1;\n\n    function updateCarousel() {\n      const translateX = -(\n        currentIndex *\n        (100 + 20 / (carousel.offsetWidth / 2))\n      ); // Considerando el gap\n      track.style.transform = \\`translateX(\\${translateX}%)\\`;\n\n      // Actualizar indicadores solo si existen\n      if (indicators.length > 0) {\n        indicators.forEach((indicator, index) => {\n          indicator.classList.toggle("active", index === currentIndex);\n        });\n      }\n    }\n\n    function nextSlide() {\n      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;\n      updateCarousel();\n    }\n\n    function prevSlide() {\n      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;\n      updateCarousel();\n    }\n\n    function goToSlide(index) {\n      currentIndex = Math.max(0, Math.min(index, maxIndex));\n      updateCarousel();\n    }\n\n    function startAutoSlide() {\n      stopAutoSlide();\n      autoSlideTimer = setInterval(nextSlide, autoSlideInterval);\n    }\n\n    function stopAutoSlide() {\n      if (autoSlideTimer) {\n        clearInterval(autoSlideTimer);\n        autoSlideTimer = null;\n      }\n    }\n\n    // Event listeners\n    nextBtn.addEventListener("click", () => {\n      nextSlide();\n      startAutoSlide(); // reiniciar timer\n    });\n\n    prevBtn.addEventListener("click", () => {\n      prevSlide();\n      startAutoSlide(); // reiniciar timer\n    });\n\n    // Event listeners para indicadores (solo si existen)\n    if (indicators.length > 0) {\n      indicators.forEach((indicator, index) => {\n        indicator.addEventListener("click", () => {\n          goToSlide(index);\n          startAutoSlide(); // reiniciar timer\n        });\n      });\n    }\n\n    // Pausar en hover\n    carousel.addEventListener("mouseenter", stopAutoSlide);\n    carousel.addEventListener("mouseleave", startAutoSlide);\n\n    // Iniciar auto-slide\n    startAutoSlide();\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(carouselId, "id"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), items.map((item, index) => renderTemplate`<div class="carousel-slide"${addAttribute(item.id, "key")} data-astro-cid-syz5j5vd${addAttribute($$definedVars, "style")}> ${item.image && renderTemplate`<div class="slide-image" data-astro-cid-syz5j5vd${addAttribute($$definedVars, "style")}> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} loading="lazy" data-astro-cid-syz5j5vd${addAttribute($$definedVars, "style")}> </div>`} </div>`), addAttribute($$definedVars, "style"), showIndicators && renderTemplate`<div class="carousel-indicators" data-astro-cid-syz5j5vd${addAttribute($$definedVars, "style")}> ${Array.from({ length: Math.ceil(items.length / showItems) }).map(
    (_, index) => renderTemplate`<button${addAttribute(`indicator ${index === 0 ? "active" : ""}`, "class")}${addAttribute(index, "data-slide")}${addAttribute(`Ir a grupo ${index + 1}`, "aria-label")} data-astro-cid-syz5j5vd${addAttribute($$definedVars, "style")}></button>`
  )} </div>`, addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), defineScriptVars({ carouselId, autoSlideInterval, showItems }));
}, "C:/JSApps/creativoapp.com/CreativoApp/src/components/SlideCarrousel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    "/src/assets/pioneros-cancun-marca.webp",
    "/src/assets/yachtsadventures-logo-light.webp",
    "/src/assets/caribbean-paradise-vacations-marca.webp",
    "/src/assets/digrama-marca.webp",
    "/src/assets/yachting-in-cancun-marca.webp",
    "/src/assets/fantastic-travel-marca.webp",
    "/src/assets/tulum-siankaan-tours-marca.webp",
    "/src/assets/mayikal-experiences-marca.webp"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agencia de Desarrollo Web en Canc\xFAn y Desarrollo de Software a la Medida", "description": "Creamos soluciones digitales a la medida: Software, CRMs y Aplicaciones Web. Somos tu agencia de desarrollo de software y web en Canc\xFAn. \xA1Cotiza tu proyecto!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section relative"> <h1 class="block !mb-10 !mt-10 h1 relative z-100 lg:!mt-20 lg:w-3/4">
Soluciones de Software y Desarrollo Web a Medida en Cancún
</h1> <p class="text-xl mx-auto mb-8 leading-8 relative z-100">
En <b class="text-blue-company-500">Creativo APP</b>, transformamos
			desafíos operativos en ventajas competitivas. Somos la <b class="text-blue-company-500">
Agencia de Desarrollo Web en Cancún</b>
y el equipo experto en <b class="text-blue-company-500">Desarrollo de Software a Medida</b> que tu negocio necesita para escalar. Desde sitios web optimizados
			hasta plataformas empresariales complejas, diseñamos y codificamos soluciones
			que trabajan para ti.
</p> <div class="quote-button head-item"> <a href="/contacto" class="compnay-button group"> <span>Empieza Ahora</span> <div></div> </a> </div> ${renderComponent($$result2, "CodeSVG", $$CodeSVG, {})} ${renderComponent($$result2, "Services", $$ServicesSection, {})} <div class="mt-20"> <h2 class="text-center !mb-0">Casos de Éxito</h2> <h3 class="text-center !text-2xl !mt-0">Nuestros Proyectos</h3> <p class="text-center mx-auto mb-10 w-11/12">
Nuestros proyectos hablan por sí mismos. Hemos colaborado en
				proyectos de diferentes ambientes y sectores, ayudando a
				empresas de Turismo, Construcción, y Restaurantes brindándoles
<b>Desarrollo de Software a Medida</b> y las <b>Páginas Web</b> que
				necesitaban.
</p> ${renderComponent($$result2, "LogoCarousel", $$LogoCarousel, { "logos": logos })} ${renderComponent($$result2, "SlideCarrousel", $$SlideCarrousel, { "items": items, "showIndicators": false })} </div> <div class="mt-20 mb-20 p-5 lg:p-10 bg-white rounded-lg"> <article class="text-center mb-10 lg:mb-20"> <h2 class="!mt-0 !text-blue-company-600">
¿Por qué elegir un desarrollo hecho a la medida?
</h2> <p class="text-black text-xl mb-10 lg:mb-5">
El software genérico no está diseñado para tu modelo de
					negocio único. Nuestro servicio de <b>Desarrollo de Software a Medida</b> garantiza que cada aplicación, sistema o plataforma se ajuste
					perfectamente a tus procesos internos, eliminando ineficiencias
					y potenciando la productividad.
</p> </article> <div class="grid grid-cols-1 gap-8 lg:grid-cols-3"> <div class="bg-gray-100 p-5 rounded-lg col-span-1"> ${renderComponent($$result2, "Presencia", $$Presencia, { "title": "Control Total", "content": "Al desarrollar software a la medida, tienes control total sobre las funcionalidades, el dise\xF1o y la escalabilidad del sistema. Esto te permite adaptar y evolucionar la soluci\xF3n seg\xFAn las necesidades cambiantes de tu negocio." }, { "icon": ($$result3) => renderTemplate`<svg class="text-blue-company-600 w-8 h-8 block mb-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"> <path fill="#2196f3" d="M11 8h2v6h-2zm4-7H9v2h6zm-3 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7c.7 0 1.36.13 2 .35V13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0 0 18c.59 0 1.16-.06 1.71-.17c-.31-.58-.53-1.23-.63-1.92c-.36.05-.71.09-1.08.09m11-2.11l-2.89-.25L19 15l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81l2.5-1.49l2.45 1.49l-.65-2.81z"></path> </svg>` })} </div> <div class="bg-gray-100 p-5 rounded-lg col-span-1"> ${renderComponent($$result2, "Presencia", $$Presencia, { "title": "Escalabilidad", "content": "Nuestras soluciones est\xE1n dise\xF1adas para crecer contigo. Ofrecemos sistemas y sitios web escalables que pueden expandirse y adaptarse f\xE1cilmente a medida que tu negocio evoluciona." }, { "icon": ($$result3) => renderTemplate`<svg class="text-blue-company-600 w-8 h-8 block mb-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"> <path fill="#2196f3" d="M1 12V7h1.5v2.45l2.975-2.975l1.05 1.05L3.55 10.5H6V12zm6.525-5.475l-1.05-1.05L9.45 2.5H7V1h5v5h-1.5V3.55zM14.825 23q-.6 0-1.15-.225t-.975-.65L7.6 17l.75-.775q.4-.4.938-.537t1.062.012l1.65.475V8q0-.425.288-.712T13 7t.713.288T14 8v10.825l-2.425-.675l2.55 2.55q.125.125.313.213t.387.087H19q.825 0 1.413-.587T21 19v-4q0-.425.288-.712T22 14t.713.288T23 15v4q0 1.65-1.175 2.825T19 23zM15 16v-4q0-.425.288-.712T16 11t.713.288T17 12v4zm3 0v-3q0-.425.288-.712T19 12t.713.288T20 13v3zm-.5 2"></path> </svg>` })} </div> <div class="bg-gray-100 p-5 rounded-lg col-span-1"> ${renderComponent($$result2, "Presencia", $$Presencia, { "title": "Soporte Continuo", "content": "Nuestra relaci\xF3n no termina con la entrega del proyecto. Ofrecemos soporte y mantenimiento continuo para asegurarnos de que todo funcione perfectamente y para realizar mejoras cuando sea necesario." }, { "icon": ($$result3) => renderTemplate`<svg class="text-blue-company-600 w-8 h-8 block mb-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"> <path fill="none" stroke="#2196f3" stroke-linejoin="round" d="M14.5 12.5h-2v-4h2zm0 0c.667-3.667.3-11-6.5-11s-7.167 7.333-6.5 11m0 0h2v-4h-2zm7 2c1.31.11 3.476-.268 4.816-2m-4.816 2v-1h-1v1z"></path> </svg>` })} </div> </div> </div> ${renderComponent($$result2, "ButtonsCta", $$ButtonsCta, { "title": "\xBFEst\xE1s listo para llevar tu negocio al siguiente nivel?" })} </section> ` })};`;
}, "C:/JSApps/creativoapp.com/CreativoApp/src/pages/index.astro", void 0);

const $$file = "C:/JSApps/creativoapp.com/CreativoApp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
