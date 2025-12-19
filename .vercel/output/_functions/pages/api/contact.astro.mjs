import { Resend } from 'resend';
import { v as validateContactData, e as escapeHtml } from '../../chunks/validation_CGSbQVm0.mjs';
export { renderers } from '../../renderers.mjs';

const RECAPTCHA_THRESHOLD = 0.5;
async function verifyRecaptcha(token) {
  const RECAPTCHA_SECRET_KEY = "6Ldu4oYoAAAAAFaUrlZ_DlCtXhEAl0kiSV_kwk8a";
  const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";
  const params = new URLSearchParams();
  params.append("secret", RECAPTCHA_SECRET_KEY);
  params.append("response", token);
  try {
    const response = await fetch(verificationUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });
    const data = await response.json();
    console.info(data);
    if (!data.success || data.score < RECAPTCHA_THRESHOLD) {
      console.warn(`reCAPTCHA falló. Score: ${data.score}, Success: ${data.success}`);
      return { success: false, score: data.score, message: "Verificación de seguridad fallida. Inténtalo de nuevo." };
    }
    return { success: true, score: data.score };
  } catch (error) {
    console.error("Error al contactar con el servidor de reCAPTCHA:", error);
    return { success: false, score: 0, message: "Error de conexión con el servicio de seguridad." };
  }
}

const POST = async ({ request }) => {
  const data = await request.formData();
  const rawData = {
    name: data.get("fullname")?.toString().trim() || "",
    email: data.get("email")?.toString().trim() || "",
    phonenumber: data.get("phonenumber")?.toString().trim() || "",
    interesting: data.get("interesting")?.toString().trim() || "",
    message: data.get("message")?.toString().trim() || ""
  };
  const validation = validateContactData(rawData);
  if (!validation.isValid) {
    return new Response(
      JSON.stringify({ message: validation.error }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const safeName = escapeHtml(rawData.name);
  const safeEmail = escapeHtml(rawData.email);
  const safeMessage = escapeHtml(rawData.message);
  const safePhone = escapeHtml(rawData.phonenumber);
  const safeService = escapeHtml(rawData.interesting);
  const RESEND_API_KEY = "re_EDDg2JsD_4bwTH5HUdFP7vo162A1pes6T";
  const recaptchaToken = data.get("recaptchaToken")?.toString().trim() || "";
  console.warn(recaptchaToken);
  const recaptchaResult = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaResult.success) {
    return new Response(
      JSON.stringify({ message: recaptchaResult.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const resend = new Resend(RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ajimenez.devs@gmail.com",
      subject: `Nuevo mensaje de ${safeName} - ${safeService}`,
      html: `
                <h2>Nuevo Contacto desde CreativoApp</h2>
                <p><strong>Nombre:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Teléfono:</strong> ${safePhone}</p>
                <p><strong>Servicio de interés:</strong> ${safeService}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${safeMessage}</p>
            `
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error enviando el email." }), { status: 500 });
  }
  return new Response(
    JSON.stringify({
      message: "Mensaje enviado correctamente!"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
