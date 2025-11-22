// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// La función POST manejará el envío del formulario
export const POST: APIRoute = async ({ request }) => {
    // 1. Obtener los datos del formulario
    const data = await request.formData();

    const name = data.get('fullname');
    const email = data.get('email');
    const phonenumber = data.get('phonenumber');
    const interesting = data.get('interesting');
    const message = data.get('message');

    // 2. Validar datos (básico)
    if (!name || !email || !phonenumber || !interesting || !message) {
        return new Response(
            JSON.stringify({
                message: 'Faltan campos obligatorios.',
            }),
            {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    // 3. Procesar el envío 
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
    console.log(RESEND_API_KEY);

    const resend = new Resend(RESEND_API_KEY); // Clave secreta
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev', // Tu dominio verificado
            to: 'ajimenez@creativoapp.com', // A donde quieres recibir el email
            subject: `Nuevo mensaje de ${name}`,
            html: `<p>De: ${name} (${email})</p><p>Mensaje: ${message}</p>`,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error enviando el email.' }), { status: 500 });
    }


    // 4. Respuesta de éxito
    return new Response(
        JSON.stringify({
            message: 'Mensaje enviado correctamente!',
            name,
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
};