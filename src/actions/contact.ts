'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
    name: string
    email: string
    phone?: string
    subject: string
    message: string
}

interface ActionResult {
    success: boolean
    error?: string
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
    const { name, email, phone, subject, message } = data

    if (!name || !email || !subject || !message) {
        return { success: false, error: 'Por favor completa todos los campos obligatorios.' }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { success: false, error: 'El correo electrónico no es válido.' }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Microweb-cr <onboarding@resend.dev>',
            to: 'errold222@gmail.com',
            replyTo: email,
            subject: `[Microweb-cr] ${subject}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f2f5fb; border-radius: 16px;">
                    <h2 style="color: #1c1c2e; margin-bottom: 4px;">Nuevo mensaje de contacto</h2>
                    <p style="color: #6c6cbf; margin-top: 0; font-size: 14px;">Microweb-cr — Formulario de contacto</p>
                    <hr style="border: none; border-top: 1px solid #d4dcf1; margin: 24px 0;" />
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #42436d; font-weight: bold; width: 120px;">Nombre</td>
                            <td style="padding: 8px 0; color: #1c1c2e;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #42436d; font-weight: bold;">Correo</td>
                            <td style="padding: 8px 0; color: #1c1c2e;"><a href="mailto:${email}" style="color: #18a13f;">${email}</a></td>
                        </tr>
                        ${phone ? `
                        <tr>
                            <td style="padding: 8px 0; color: #42436d; font-weight: bold;">Teléfono</td>
                            <td style="padding: 8px 0; color: #1c1c2e;">${phone}</td>
                        </tr>` : ''}
                        <tr>
                            <td style="padding: 8px 0; color: #42436d; font-weight: bold;">Asunto</td>
                            <td style="padding: 8px 0; color: #1c1c2e;">${subject}</td>
                        </tr>
                    </table>
                    <hr style="border: none; border-top: 1px solid #d4dcf1; margin: 24px 0;" />
                    <p style="color: #42436d; font-weight: bold; margin-bottom: 8px;">Mensaje</p>
                    <p style="color: #1c1c2e; line-height: 1.7; white-space: pre-wrap; background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #18a13f;">${message}</p>
                    <p style="color: #858ccf; font-size: 12px; margin-top: 32px; text-align: center;">
                        Puedes responder directamente a este correo para contactar a ${name}.
                    </p>
                </div>
            `,
        })

        if (error) {
            return { success: false, error: `Error al enviar el mensaje. Intenta de nuevo.` }
        }

        return { success: true }
    } catch {
        return { success: false, error: 'Ocurrió un error al enviar el mensaje. Intenta de nuevo.' }
    }
}
