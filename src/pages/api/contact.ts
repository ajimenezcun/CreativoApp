// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

// La función POST manejará el envío del formulario
export const POST: APIRoute = async ({ request }) => {
    // 1. Obtener los datos del formulario
    const data = await request.formData();

    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // 2. Validar datos (básico)
    if (!name || !email || !message) {
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

    // 3. Procesar el envío (Aquí va la lógica de envío)
    // ---
    // A. **USAR UN SERVICIO DE TERCEROS:**
    // Es la forma más fácil. Puedes integrar un servicio como:
    // - **Resend / SendGrid / Mailgun** (para enviar emails reales)
    // - **Formspree / Netlify Forms** (si quieres delegar el backend completamente)
    //
    // B. **EJEMPLO DE ENVÍO DE EMAIL CON RESEND (Necesita dependencia e instalacion)**
    /*
    const resend = new Resend(import.meta.env.RESEND_API_KEY); // Clave secreta
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Tu dominio verificado
        to: 'tu_email@ejemplo.com', // A donde quieres recibir el email
        subject: `Nuevo mensaje de ${name}`,
        html: `<p>De: ${name} (${email})</p><p>Mensaje: ${message}</p>`,
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Error enviando el email.' }), { status: 500 });
    }
    */
    // ---

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