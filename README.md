<div align="center">

# Microweb-cr

**Desarrollo web profesional para emprendedores y pequeños negocios en Costa Rica**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Resend](https://img.shields.io/badge/Resend-email-black?logo=mail)](https://resend.com)

[microweb-cr.es](https://microweb-cr.es) · [Portafolio](https://microweb-cr.es/portafolio) · [Contacto](https://microweb-cr.es/contacto)

</div>

---

## Descripción

Sitio web oficial de **Microweb-cr**, emprendimiento de desarrollo web con base en Costa Rica. Diseñado para transmitir confianza y profesionalismo a potenciales clientes que buscan una presencia digital de calidad para sus negocios.

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Página principal — hero, servicios, portafolio preview y CTA |
| `/nosotros` | Historia, stack tecnológico y valores del fundador |
| `/portafolio` | Galería completa de proyectos desarrollados |
| `/contacto` | Formulario de contacto funcional con Resend |

## Stack tecnológico

- **Framework** — [Next.js 16](https://nextjs.org) con App Router y Turbopack
- **Lenguaje** — [TypeScript](https://www.typescriptlang.org)
- **Estilos** — [Tailwind CSS v4](https://tailwindcss.com)
- **Fuente** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via `next/font`
- **Email** — [Resend](https://resend.com) con Server Actions
- **Imágenes** — `next/image` con optimización automática

## Paleta de colores

| Nombre | Uso |
|---|---|
| `mirage` | Color base — fondos, textos y estructuras |
| `verde` | Color principal — CTAs, acentos y hover |
| `rojo` | Color de acento — estadísticas y detalles |

## Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/Errold146/microweb-cr.git
cd microweb-cr

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tu API key de Resend

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Obtener la API key en [resend.com](https://resend.com).

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Verificar errores de lint
```

## Estructura del proyecto

```
app/
├── contacto/        # Página de contacto
├── nosotros/        # Página nosotros
├── portafolio/      # Página portafolio
├── globals.css      # Estilos globales y tokens de color
├── layout.tsx       # Layout raíz
├── not-found.tsx    # Página 404
└── page.tsx         # Página principal

src/
├── actions/
│   └── contact.ts   # Server Action para envío de emails
├── components/
│   ├── ContactForm.tsx
│   ├── Logo.tsx
│   └── Navbar.tsx
├── data/
│   └── index.ts     # Data del portafolio
└── utils/
    └── index.ts     # Helpers (generateTitle)
```

---

<div align="center">

Desarrollado con ❤️ por [Errold Núñez](https://www.linkedin.com/in/errold-n%C3%BA%C3%B1ez-s%C3%A1nchez) · Costa Rica 🇨🇷

[![GitHub](https://img.shields.io/badge/GitHub-Errold146-181717?logo=github&style=flat-square)](https://github.com/Errold146)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ErroldNúñezS-0A66C2?logo=linkedin&style=flat-square)](https://linkedin.com/in/errold-núñez-sánchez)
[![Email](https://img.shields.io/badge/Email-errold222@gmail.com-D14836?logo=gmail&style=flat-square)](mailto:errold222@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+506_7802_7211-25D366?logo=whatsapp&logoColor=white&style=flat-square)](https://wa.me/50678027211)

</div>


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
