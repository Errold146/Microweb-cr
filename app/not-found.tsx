import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-mirage-50 px-6">
            <div className="text-center max-w-2xl mx-auto">

                {/* Número 404 decorativo */}
                <div className="relative inline-block mb-8 select-none">
                    <span className="text-[160px] md:text-[220px] font-black leading-none text-mirage-100 tracking-tighter">
                        404
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-[160px] md:text-[220px] font-black leading-none tracking-tighter bg-gradient-to-br from-verde-400 to-mirage-600 bg-clip-text text-transparent opacity-20">
                        404
                    </span>
                    {/* Punto de color encima */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-verde-400 rounded-full blur-sm" />
                    <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-rojo-400 rounded-full blur-sm" />
                </div>

                {/* Texto */}
                <div className="mb-10">
                    <span className="inline-block text-verde-600 font-semibold uppercase tracking-[0.2em] text-sm mb-4 border border-verde-400/40 px-4 py-1.5 rounded-full">
                        Página no encontrada
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-mirage-900 mb-4 leading-tight">
                        Esta página no existe
                    </h1>
                    <p className="text-mirage-500 text-lg max-w-md mx-auto leading-relaxed">
                        Puede que el enlace esté roto, la página fue movida o simplemente escribiste algo diferente en la URL.
                    </p>
                </div>

                {/* Acciones */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-verde-500 hover:bg-verde-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-verde-500/30 hover:shadow-verde-500/50"
                    >
                        Volver al inicio
                    </Link>
                    <Link
                        href="/portafolio"
                        className="px-8 py-4 border-2 border-mirage-200 hover:border-verde-400 text-mirage-600 hover:text-verde-600 font-bold rounded-xl transition-all duration-200"
                    >
                        Ver portafolio
                    </Link>
                    <Link
                        href="/contacto"
                        className="px-8 py-4 border-2 border-mirage-200 hover:border-verde-400 text-mirage-600 hover:text-verde-600 font-bold rounded-xl transition-all duration-200"
                    >
                        Contacto
                    </Link>
                </div>

            </div>
        </div>
    );
}
