'use client'

import { useState, useEffect } from 'react'
import { sendContactEmail } from '@/src/actions/contact'

const subjects = [
    'Quiero una web para mi negocio',
    'Tengo preguntas sobre los servicios',
    'Quiero ver precios y planes',
    'Otro',
]

export function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: subjects[0],
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        if (status !== 'success') return
        const timer = setTimeout(() => setStatus('idle'), 3000)
        return () => clearTimeout(timer)
    }, [status])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMsg('')

        const result = await sendContactEmail(form)

        if (result.success) {
            setStatus('success')
            setForm({ name: '', email: '', phone: '', subject: subjects[0], message: '' })
        } else {
            setStatus('error')
            setErrorMsg(result.error ?? 'Error desconocido.')
        }
    }

    const inputClass = 'w-full px-4 py-3 rounded-xl bg-mirage-50 border border-mirage-200 text-mirage-900 placeholder-mirage-400 focus:outline-none focus:border-verde-400 focus:ring-2 focus:ring-verde-400/20 transition-all duration-200'

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-mirage-700 mb-2">
                        Nombre completo <span className="text-rojo-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-mirage-700 mb-2">
                        Correo electrónico <span className="text-rojo-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        required
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-mirage-700 mb-2">
                        Teléfono / WhatsApp <span className="text-mirage-400 font-normal">(opcional)</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+506 0000-0000"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-mirage-700 mb-2">
                        Asunto <span className="text-rojo-500">*</span>
                    </label>
                    <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    >
                        {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-mirage-700 mb-2">
                    Mensaje <span className="text-rojo-500">*</span>
                </label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu negocio y qué tipo de web necesitas..."
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                />
            </div>

            {/* Feedback */}
            {status === 'error' && (
                <p className="text-rojo-600 text-sm bg-rojo-50 border border-rojo-200 px-4 py-3 rounded-xl">
                    {errorMsg}
                </p>
            )}
            {status === 'success' && (
                <p className="text-verde-700 text-sm bg-verde-50 border border-verde-200 px-4 py-3 rounded-xl font-semibold">
                    ¡Mensaje enviado! Te contactaré a la brevedad.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-verde-500 hover:bg-verde-600 disabled:bg-verde-300 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-verde-500/30 hover:shadow-verde-500/50"
            >
                {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
        </form>
    )
}
