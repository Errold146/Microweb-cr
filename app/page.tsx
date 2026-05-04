

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className="relative min-h-[88vh] flex items-center">
                <Image
                    src="/principal2.jpg"
                    alt="Equipo de trabajo digital"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-mirage-950/80" />
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
                    <span className="inline-block text-verde-400 font-semibold uppercase tracking-[0.2em] text-sm mb-6 border border-verde-400/40 px-4 py-1.5 rounded-full">
                        Desarrollo web · Costa Rica
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Tu negocio merece<br />
                        <span className="text-verde-400">una web que impacte</span>
                    </h1>
                    <p className="text-mirage-200 text-xl max-w-2xl mb-10 leading-relaxed">
                        En <strong className="text-white">Microweb-cr</strong> diseñamos sitios web
                        elegantes y funcionales para emprendedores y pequeños negocios que quieren
                        destacar en el mundo digital.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/portafolio"
                            className="px-8 py-4 bg-verde-500 hover:bg-verde-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-verde-500/30 hover:shadow-verde-500/50"
                        >
                            Ver portafolio
                        </Link>
                        <Link
                            href="/contacto"
                            className="px-8 py-4 border-2 border-white/30 hover:border-verde-400 text-white hover:text-verde-400 font-bold rounded-xl transition-all duration-200"
                        >
                            Hablemos hoy →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── STATS ─── */}
            <section className="bg-mirage-900 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-rojo-400">+10</p>
                            <p className="text-mirage-300 mt-1 text-sm">Proyectos entregados</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-rojo-400">100%</p>
                            <p className="text-mirage-300 mt-1 text-sm">Clientes satisfechos</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-rojo-400">3</p>
                            <p className="text-mirage-300 mt-1 text-sm">Años de experiencia</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-rojo-400">∞</p>
                            <p className="text-mirage-300 mt-1 text-sm">Soporte post-entrega</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-verde-600 font-semibold uppercase tracking-widest text-sm mb-3">Lo que hacemos</p>
                        <h2 className="text-4xl font-bold text-mirage-900 mb-4">
                            Servicios pensados para tu negocio
                        </h2>
                        <p className="text-mirage-500 text-lg max-w-2xl mx-auto">
                            Todo lo que necesitas para tener una presencia digital sólida y profesional.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1 */}
                        <div className="group p-8 rounded-2xl bg-mirage-50 hover:bg-mirage-900 transition-all duration-300 border border-mirage-100 hover:border-mirage-800">
                            <div className="w-14 h-14 bg-verde-100 group-hover:bg-verde-500/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600 group-hover:text-verde-400 transition-colors duration-300">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 group-hover:text-white mb-3 transition-colors duration-300">
                                Diseño a medida
                            </h3>
                            <p className="text-mirage-500 group-hover:text-mirage-300 transition-colors duration-300 text-sm leading-relaxed">
                                Cada web es única, diseñada pensando en tu negocio y en la experiencia de tus clientes.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group p-8 rounded-2xl bg-mirage-50 hover:bg-mirage-900 transition-all duration-300 border border-mirage-100 hover:border-mirage-800">
                            <div className="w-14 h-14 bg-verde-100 group-hover:bg-verde-500/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600 group-hover:text-verde-400 transition-colors duration-300">
                                    <rect x="5" y="2" width="14" height="20" rx="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 group-hover:text-white mb-3 transition-colors duration-300">
                                Optimizado para móviles
                            </h3>
                            <p className="text-mirage-500 group-hover:text-mirage-300 transition-colors duration-300 text-sm leading-relaxed">
                                Tu web se verá perfecta en cualquier dispositivo, desde celular hasta escritorio.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group p-8 rounded-2xl bg-mirage-50 hover:bg-mirage-900 transition-all duration-300 border border-mirage-100 hover:border-mirage-800">
                            <div className="w-14 h-14 bg-verde-100 group-hover:bg-verde-500/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600 group-hover:text-verde-400 transition-colors duration-300">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 group-hover:text-white mb-3 transition-colors duration-300">
                                Rápido y seguro
                            </h3>
                            <p className="text-mirage-500 group-hover:text-mirage-300 transition-colors duration-300 text-sm leading-relaxed">
                                Velocidad de carga optimizada y buenas prácticas de seguridad incluidas desde el inicio.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group p-8 rounded-2xl bg-mirage-50 hover:bg-mirage-900 transition-all duration-300 border border-mirage-100 hover:border-mirage-800">
                            <div className="w-14 h-14 bg-verde-100 group-hover:bg-verde-500/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-verde-600 group-hover:text-verde-400 transition-colors duration-300">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-mirage-900 group-hover:text-white mb-3 transition-colors duration-300">
                                Listo para crecer
                            </h3>
                            <p className="text-mirage-500 group-hover:text-mirage-300 transition-colors duration-300 text-sm leading-relaxed">
                                Construimos bases sólidas para que tu presencia digital crezca junto a tu negocio.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── PORTFOLIO PREVIEW ─── */}
            <section className="py-24 bg-mirage-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <p className="text-verde-600 font-semibold uppercase tracking-widest text-sm mb-3">Portafolio</p>
                            <h2 className="text-4xl font-bold text-mirage-900">Trabajos recientes</h2>
                        </div>
                        <Link href="/portafolio" className="text-verde-600 hover:text-verde-700 font-semibold underline underline-offset-4 transition-colors">
                            Ver todos los proyectos →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="group relative rounded-2xl overflow-hidden h-72 bg-gradient-to-br from-verde-800 to-verde-950 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <span className="text-xs font-semibold uppercase tracking-widest text-verde-300 mb-2">E-commerce</span>
                                <h3 className="text-2xl font-bold text-white">Tienda en línea</h3>
                                <p className="text-verde-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Plataforma de ventas online para negocio local
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden h-72 bg-gradient-to-br from-mirage-700 to-mirage-950 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <span className="text-xs font-semibold uppercase tracking-widest text-mirage-300 mb-2">Branding</span>
                                <h3 className="text-2xl font-bold text-white">Sitio corporativo</h3>
                                <p className="text-mirage-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Presencia digital profesional para empresa costarricense
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-2xl overflow-hidden h-72 bg-gradient-to-br from-rojo-800 to-rojo-950 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <span className="text-xs font-semibold uppercase tracking-widest text-rojo-300 mb-2">Marketing</span>
                                <h3 className="text-2xl font-bold text-white">Landing page</h3>
                                <p className="text-rojo-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Página de aterrizaje de alta conversión para campaña digital
                                </p>
                            </div>
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
                        ¿Listo para tener la web<br />
                        <span className="text-verde-400">que tu negocio necesita?</span>
                    </h2>
                    <p className="text-mirage-300 text-lg mb-10 max-w-2xl mx-auto">
                        Cuéntame sobre tu proyecto y juntos construimos una presencia digital
                        que realmente represente a tu negocio.
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
