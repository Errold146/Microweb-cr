import Image from "next/image";
import Link from "next/link";
import { generateTitle } from "@/src/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: generateTitle("Nosotros"),
    description: "Conoce a Errold, el programador detrás de Microweb-cr, su historia y su visión.",
};

const stack = [
    "Next.js", "React", "Vue.js", "Astro",
    "TypeScript", "Node.js", "WordPress",
    "Tailwind CSS", "HTML & CSS",
];

const redes = [
    {
        label: "TerraLink",
        href: "https://terra-link-phi.vercel.app/MicroWeb-cr",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/microweb_cr",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/errold-n%C3%BA%C3%B1ez-s%C3%A1nchez",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/Errold146",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/+50672117802",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
    },
    {
        label: "Correo",
        href: "mailto:errold222@gmail.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
];

export default function NosotrosPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className="bg-mirage-900 py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="inline-block text-verde-400 font-semibold uppercase tracking-[0.2em] text-sm mb-6 border border-verde-400/40 px-4 py-1.5 rounded-full">
                        La persona detrás del código
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Hola, soy <span className="text-verde-400">Errold</span>
                    </h1>
                    <p className="text-mirage-300 text-xl max-w-2xl mx-auto">
                        Programador, emprendedor digital y el fundador de Microweb-cr.
                    </p>
                </div>
            </section>

            {/* ─── BIO ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Foto */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-br from-verde-400 to-mirage-700 rounded-3xl opacity-20 blur-xl" />
                                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-verde-400/30 shadow-2xl">
                                    <Image
                                        src="/Foto.jpeg"
                                        alt="Errold Núñez — Fundador de Microweb-cr"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Texto */}
                        <div>
                            <p className="text-verde-600 font-semibold uppercase tracking-widest text-sm mb-4">Mi historia</p>
                            <h2 className="text-4xl font-bold text-mirage-900 mb-6 leading-tight">
                                Construir con propósito,<br />diseñar con identidad
                            </h2>
                            <div className="space-y-4 text-mirage-600 text-lg leading-relaxed">
                                <p>
                                    Comencé a programar en <strong className="text-mirage-900">2022</strong> movido por la pasión de crear cosas que realmente funcionen y que las personas disfruten usar. Desde entonces no he parado: React, Vue.js, Next.js, Astro, WordPress — cada tecnología aprendida con proyectos reales detrás.
                                </p>
                                <p>
                                    Microweb-cr nació de una convicción simple: <strong className="text-mirage-900">si la oportunidad no llega, la creo yo</strong>. Después de más de un año buscando empleo sin conseguirlo, decidí canalizar todo ese aprendizaje en algo propio, en algo que me apasiona y que, al mismo tiempo, ayude a otros emprendedores costarricenses a crecer digitalmente.
                                </p>
                                <p>
                                    Mi enfoque es construir soluciones <strong className="text-mirage-900">elegantes, mantenibles y centradas en las personas</strong>. Disfruto tanto el backend como el frontend, y me obsesiona que cada detalle de la experiencia de usuario sea intuitivo y funcional. También investigo infraestructura en la nube, porque creo que la tecnología debe ser poderosa <em>y</em> eficiente.
                                </p>
                                <p>
                                    Trabajo de manera independiente, lo que me permite dedicar atención completa a cada proyecto. De momento opero a nivel nacional, entregando sitios web pequeños y de alto impacto para negocios y emprendimientos en Costa Rica.
                                </p>
                            </div>

                            {/* Redes */}
                            <div className="flex flex-wrap gap-3 mt-8">
                                {redes.map((red) => (
                                    <Link
                                        key={red.href}
                                        href={red.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-mirage-50 hover:bg-verde-500 text-mirage-700 hover:text-white border border-mirage-200 hover:border-verde-500 rounded-xl text-sm font-semibold transition-all duration-200"
                                    >
                                        {red.icon}
                                        {red.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── STACK ─── */}
            <section className="py-20 bg-mirage-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-verde-600 font-semibold uppercase tracking-widest text-sm mb-3">Herramientas</p>
                    <h2 className="text-4xl font-bold text-mirage-900 mb-12">Tecnologías que domino</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-6 py-3 bg-white border border-mirage-200 rounded-2xl text-mirage-700 font-semibold shadow-sm hover:border-verde-400 hover:text-verde-600 hover:shadow-md transition-all duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── VALORES ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-verde-600 font-semibold uppercase tracking-widest text-sm mb-3">Forma de trabajar</p>
                        <h2 className="text-4xl font-bold text-mirage-900">Lo que guía cada proyecto</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                        <div className="text-center p-8 rounded-2xl bg-mirage-50 border border-mirage-100">
                            <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v4l3 3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 mb-3">Modularidad</h3>
                            <p className="text-mirage-500 text-sm leading-relaxed">
                                Cada pieza del código tiene un propósito claro. Construyo para que el proyecto pueda crecer sin convertirse en un caos.
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-mirage-50 border border-mirage-100">
                            <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600">
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 mb-3">Identidad visual</h3>
                            <p className="text-mirage-500 text-sm leading-relaxed">
                                Una web no solo debe funcionar bien, debe transmitir personalidad y confianza. El diseño es parte de la estrategia.
                            </p>
                        </div>

                        <div className="text-center p-8 rounded-2xl bg-mirage-50 border border-mirage-100">
                            <div className="w-14 h-14 bg-verde-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 mb-3">Eficiencia</h3>
                            <p className="text-mirage-500 text-sm leading-relaxed">
                                Tecnología poderosa y sostenible. Investigo costos de infraestructura para que cada solución sea rentable a largo plazo.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-24 bg-mirage-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-verde-400 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rojo-400 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        ¿Conectamos y<br />
                        <span className="text-verde-400">creamos algo juntos?</span>
                    </h2>
                    <p className="text-mirage-300 text-lg mb-10 max-w-2xl mx-auto">
                        Si tienes un proyecto en mente o simplemente quieres conversar, estoy a un mensaje de distancia.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block px-10 py-5 bg-verde-500 hover:bg-verde-600 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-verde-500/30 hover:shadow-verde-500/50"
                    >
                        Hablemos hoy →
                    </Link>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="bg-mirage-950 py-10">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-mirage-400 text-sm">
                        © 2026 Microweb-cr. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/nosotros" className="text-mirage-400 hover:text-verde-400 text-sm transition-colors">Nosotros</Link>
                        <Link href="/portafolio" className="text-mirage-400 hover:text-verde-400 text-sm transition-colors">Portafolio</Link>
                        <Link href="/contacto" className="text-mirage-400 hover:text-verde-400 text-sm transition-colors">Contacto</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
