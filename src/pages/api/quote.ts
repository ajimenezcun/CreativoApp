// src/pages/api/quote.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { escapeHtml } from '../../utils/sanitization';
import { validateQuoteData, type QuoteFormData } from '../../utils/validation';
import { verifyRecaptcha } from '../../utils/recaptcha';

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();

    const rawData: QuoteFormData = {
        name: data.get('fullname')?.toString().trim() || '',
        email: data.get('email')?.toString().trim() || '',
        phonenumber: data.get('phonenumber')?.toString().trim() || '',
        company: data.get('company')?.toString().trim() || '',
        message: data.get('message')?.toString().trim() || '',
        interesting: '',
    };

    // 1. Validaciones
    const validation = validateQuoteData(rawData);

    if (!validation.isValid) {
        return new Response(
            JSON.stringify({ message: validation.error }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    // 2. Sanitización
    const safeName = escapeHtml(rawData.name);
    const safeEmail = escapeHtml(rawData.email);
    const safeMessage = escapeHtml(rawData.message);
    const safePhone = escapeHtml(rawData.phonenumber);
    const safeCompany = escapeHtml(rawData.company);

    // 3. Procesar el envío 
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    // Recaptcha logic moved to utils/recaptcha.ts
    const recaptchaToken = data.get('recaptchaToken')?.toString().trim() || '';

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
        return new Response(
            JSON.stringify({ message: recaptchaResult.message }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const resend = new Resend(RESEND_API_KEY);
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ajimenez.devs@gmail.com',
            subject: `Nueva Cotización de ${safeName} - ${safeCompany}`,
            html: `
                <h2>Solicitud de Cotización - CreativoApp</h2>
                <p><strong>Nombre:</strong> ${safeName}</p>
                <p><strong>Empresa:</strong> ${safeCompany}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Teléfono:</strong> ${safePhone}</p>
                <p><strong>Detalles del Proyecto:</strong></p>
                <p>${safeMessage}</p>
            `,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error enviando la cotización.' }), { status: 500 });
    }

    // 4. Respuesta de éxito
    return new Response(
        JSON.stringify({
            message: 'Solicitud enviada correctamente!',
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};
