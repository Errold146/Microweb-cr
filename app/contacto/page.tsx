import Link from "next/link";
import { ContactForm } from "@/src/components/ContactForm";
import { generateTitle } from "@/src/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: generateTitle("Contacto"),
    description: "Contáctame para hablar sobre tu proyecto web. Estoy disponible para emprendedores y pequeños negocios en Costa Rica.",
};

const contactInfo = [
    {
        label: "WhatsApp",
        value: "+506 7211-7802",
        href: "https://wa.me/+50672117802",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
    },
    {
        label: "Correo",
        value: "errold222@gmail.com",
        href: "mailto:errold222@gmail.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        value: "@microweb_cr",
        href: "https://www.instagram.com/microweb_cr",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "Ubicación",
        value: "Costa Rica",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
];

export default function ContactoPage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className="bg-mirage-900 py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="inline-block text-verde-400 font-semibold uppercase tracking-[0.2em] text-sm mb-6 border border-verde-400/40 px-4 py-1.5 rounded-full">
                        Hablemos
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        ¿Tienes un proyecto<br />
                        <span className="text-verde-400">en mente?</span>
                    </h1>
                    <p className="text-mirage-300 text-xl max-w-2xl mx-auto">
                        Cuéntame sobre tu negocio. Sin compromiso, sin tecnicismos.
                        Solo una conversación para ver cómo puedo ayudarte.
                    </p>
                </div>
            </section>

            {/* ─── FORMULARIO + INFO ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                        {/* Info lateral */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <p className="text-verde-600 font-semibold uppercase tracking-widest text-sm mb-3">Contacto directo</p>
                                <h2 className="text-3xl font-bold text-mirage-900 mb-4 leading-tight">
                                    Estoy disponible<br />para tu proyecto
                                </h2>
                                <p className="text-mirage-500 leading-relaxed">
                                    Trabajo con emprendedores y pequeños negocios en Costa Rica.
                                    Si tienes dudas, preferís hablar directo, también podés escribirme por WhatsApp.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-mirage-50 border border-mirage-100 hover:border-verde-300 hover:bg-verde-50 transition-all duration-200 group"
                                    >
                                        <div className="w-12 h-12 bg-verde-100 group-hover:bg-verde-500 rounded-xl flex items-center justify-center text-verde-600 group-hover:text-white transition-all duration-200 shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-mirage-400">{item.label}</p>
                                            <p className="text-mirage-800 font-semibold">{item.value}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Tiempo de respuesta */}
                            <div className="p-5 rounded-2xl bg-verde-50 border border-verde-200">
                                <p className="text-verde-800 font-semibold text-sm">
                                    ⚡ Tiempo de respuesta habitual: menos de 24 horas
                                </p>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="lg:col-span-3 bg-white rounded-3xl border border-mirage-100 shadow-xl shadow-mirage-100/50 p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-mirage-900 mb-2">Envíame un mensaje</h3>
                            <p className="text-mirage-400 text-sm mb-8">Los campos marcados con <span className="text-rojo-500">*</span> son obligatorios.</p>
                            <ContactForm />
                        </div>

                    </div>
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
