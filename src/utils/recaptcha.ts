export const RECAPTCHA_THRESHOLD = 0.5;

export async function verifyRecaptcha(token: string): Promise<{ success: boolean, score: number, message?: string }> {
    const RECAPTCHA_SECRET_KEY = import.meta.env.RECAPTCHA_SECRET_KEY;

    if (!RECAPTCHA_SECRET_KEY) {
        console.error("RECAPTCHA_SECRET_KEY no está configurada.");
        return { success: false, score: 0, message: "Error interno de configuración." };
    }

    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';

    // Parámetros que se envían a Google
    const params = new URLSearchParams();
    params.append('secret', RECAPTCHA_SECRET_KEY);
    params.append('response', token);

    try {
        const response = await fetch(verificationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const data = await response.json();

        console.info(data);

        // Si Google no devuelve éxito o el puntaje es bajo
        if (!data.success || data.score < RECAPTCHA_THRESHOLD) {
            console.warn(`reCAPTCHA falló. Score: ${data.score}, Success: ${data.success}`);
            return { success: false, score: data.score, message: "Verificación de seguridad fallida. Inténtalo de nuevo." };
        }

        return { success: true, score: data.score };

    } catch (error) {
        console.error('Error al contactar con el servidor de reCAPTCHA:', error);
        return { success: false, score: 0, message: "Error de conexión con el servicio de seguridad." };
    }
}
