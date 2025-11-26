// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { escapeHtml } from '../../utils/sanitization';
import { validateContactData, type ContactFormData } from '../../utils/validation';

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();

    const rawData: ContactFormData = {
        name: data.get('fullname')?.toString().trim() || '',
        email: data.get('email')?.toString().trim() || '',
        phonenumber: data.get('phonenumber')?.toString().trim() || '',
        interesting: data.get('interesting')?.toString().trim() || '',
        message: data.get('message')?.toString().trim() || '',
    };

    // 1. Validaciones Robustas
    const validation = validateContactData(rawData);

    if (!validation.isValid) {
        return new Response(
            JSON.stringify({ message: validation.error }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // 2. Sanitización de datos
    const safeName = escapeHtml(rawData.name);
    const safeEmail = escapeHtml(rawData.email);
    const safeMessage = escapeHtml(rawData.message);
    const safePhone = escapeHtml(rawData.phonenumber);
    const safeService = escapeHtml(rawData.interesting);

    // 3. Procesar el envío 
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    const resend = new Resend(RESEND_API_KEY);
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ajimenez.devs@gmail.com',
            subject: `Nuevo mensaje de ${safeName} - ${safeService}`,
            html: `
                <h2>Nuevo Contacto desde CreativoApp</h2>
                <p><strong>Nombre:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Teléfono:</strong> ${safePhone}</p>
                <p><strong>Servicio de interés:</strong> ${safeService}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${safeMessage}</p>
            `,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error enviando el email.' }), { status: 500 });
    }

    // 4. Respuesta de éxito
    return new Response(
        JSON.stringify({
            message: 'Mensaje enviado correctamente!',
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};