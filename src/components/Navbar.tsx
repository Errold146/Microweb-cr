'use client'

import { useState } from 'react'
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/portafolio', label: 'Portafolio' },
]

export function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-mirage-900">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Logo />
                    <h2 className="font-bold text-2xl text-mirage-50">Microweb-cr</h2>
                </div>

                {/* Links escritorio */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="uppercase font-semibold text-sm text-mirage-200 hover:text-verde-400 transition-colors duration-150 tracking-wider"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contacto"
                        className="uppercase font-semibold text-sm py-2 px-5 bg-verde-500 hover:bg-verde-600 text-white rounded-xl shadow-lg shadow-verde-500/30 transition-all duration-200 tracking-wider"
                    >
                        Contacto
                    </Link>
                </div>

                {/* Botón hamburguesa móvil */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-mirage-800 transition-colors"
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-0.5 bg-mirage-200 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-mirage-200 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-mirage-200 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Menú móvil desplegable */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72 border-t border-mirage-800' : 'max-h-0'}`}>
                <div className="px-6 py-4 flex flex-col gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="uppercase font-semibold text-sm text-mirage-200 hover:text-verde-400 py-3 border-b border-mirage-800 transition-colors tracking-wider"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contacto"
                        onClick={() => setOpen(false)}
                        className="mt-2 text-center uppercase font-semibold text-sm py-3 px-5 bg-verde-500 hover:bg-verde-600 text-white rounded-xl shadow-lg shadow-verde-500/30 transition-all duration-200 tracking-wider"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    )
}
