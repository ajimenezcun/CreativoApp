# Project Specification: CreativoApp

## 1. Overview
CreativoApp is a digital agency website built with Astro. It showcases services like software development, digital consulting, and SEO/SEM. The site is designed for performance and modern aesthetics, utilizing static site generation (SSG).

## 2. Technology Stack
- **Framework**: [Astro](https://astro.build/) (v5.15.3)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.1.5)
- **Animations**: [GSAP](https://greensock.com/gsap/) (v3.13.0)
- **Deployment**: Vercel Adapter
- **Package Manager**: pnpm

## 3. Site Structure (Pages)
The project follows a standard Astro file-based routing system in `src/pages`:

- **Home**: `index.astro` - Landing page.
- **Services**:
    - `servicios.astro`: Main services overview.
    - `desarrollo-software.astro`: Software development specifics.
    - `consultoria-digital.astro`: Digital consulting services.
    - `posicionamiento-seo-sem.astro`: SEO and SEM services.
    - `paginas-web-cancun.astro`: Web design services specific to Cancun.
- **Projects**: `proyectos.astro` - Portfolio of work.
- **Contact**:
    - `contacto.astro`: General contact form and info.
    - `cotizar-proyecto.astro`: Project quotation form.
- **Legal**: `politicas-de-privacidad.astro`.

## 4. Key Components
Reusable UI components located in `src/components`:

- **Navigation/Layout**: `ServicesBreadcrumb.astro`.
- **Content Blocks**:
    - `ServicesSection.astro`: Displaying service details.
    - `QuoteSection.astro`: Testimonials or key quotes.
    - `FaqItem.astro`: Accordion style FAQ items.
    - `ContactCard.astro`: Contact information display.
- **Interactive/Visual**:
    - `SlideCarrousel.astro`: Image or content slider.
    - `LogoCarousel.astro`: Client or partner logo display.
    - `ButtonsCta.astro`: Call-to-action buttons.
- **SEO**: `SeoTags.astro` for managing meta tags.

## 5. Data Sources
Static data is managed in JSON files within `src/data`:
- `clients.json`: List of clients for display (likely in `LogoCarousel`).
- `projects.json`: Portfolio items for the `proyectos` page.

## 6. Design & Assets
- **Styles**: Global styles and Tailwind configuration.
- **Assets**: Images and other static assets in `src/assets` and `public`.
