import Image from "next/image";
import Link from "next/link";
import { data } from "@/src/data";
import { generateTitle } from "@/src/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: generateTitle("Portafolio"),
    description: "Conoce los proyectos web desarrollados por Microweb-cr para emprendedores y negocios costarricenses.",
};

export default function PortafolioPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className="bg-mirage-900 py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="inline-block text-verde-400 font-semibold uppercase tracking-[0.2em] text-sm mb-6 border border-verde-400/40 px-4 py-1.5 rounded-full">
                        Nuestro trabajo
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Proyectos que<br />
                        <span className="text-verde-400">hablan por sí solos</span>
                    </h1>
                    <p className="text-mirage-300 text-xl max-w-2xl mx-auto">
                        Cada proyecto es una historia de colaboración, creatividad y resultados reales.
                        Aquí está una muestra de lo que construimos.
                    </p>
                </div>
            </section>

            {/* ─── GRID ─── */}
            <section className="py-20 bg-mirage-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((project) => (
                            <Link
                                key={project.url}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-mirage-100 hover:border-verde-300 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Imagen */}
                                <div className="relative h-52 overflow-hidden bg-mirage-100">
                                    <Image
                                        src={project.imageUrl}
                                        alt={`Captura de pantalla de ${project.name}`}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay con ícono en hover */}
                                    <div className="absolute inset-0 bg-mirage-950/0 group-hover:bg-mirage-950/40 transition-colors duration-300 flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-verde-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                                            Ver proyecto →
                                        </span>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="flex flex-col flex-1 p-6">
                                    <h2 className="text-lg font-bold text-mirage-900 group-hover:text-verde-600 transition-colors duration-200 mb-2">
                                        {project.name}
                                    </h2>
                                    <p className="text-mirage-500 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>
                                    <p className="text-verde-500 text-xs font-semibold mt-4 truncate">
                                        {project.url.replace(/^https?:\/\//, '').split('/')[0]}
                                    </p>
                                </div>
                            </Link>
                        ))}
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
                        ¿Quieres que tu proyecto<br />
                        <span className="text-verde-400">esté aquí también?</span>
                    </h2>
                    <p className="text-mirage-300 text-lg mb-10 max-w-2xl mx-auto">
                        Contáctame y hablamos sobre cómo llevar tu negocio al siguiente nivel digital.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block px-10 py-5 bg-verde-500 hover:bg-verde-600 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-xl shadow-verde-500/30 hover:shadow-verde-500/50"
                    >
                        Comenzar mi proyecto
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
