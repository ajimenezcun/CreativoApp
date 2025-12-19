import { Resend } from 'resend';
import { a as validateQuoteData, e as escapeHtml } from '../../chunks/validation_CGSbQVm0.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.formData();
  const rawData = {
    name: data.get("fullname")?.toString().trim() || "",
    email: data.get("email")?.toString().trim() || "",
    phonenumber: data.get("phonenumber")?.toString().trim() || "",
    company: data.get("company")?.toString().trim() || "",
    message: data.get("message")?.toString().trim() || ""};
  const validation = validateQuoteData(rawData);
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
  const safeCompany = escapeHtml(rawData.company);
  const RESEND_API_KEY = "re_EDDg2JsD_4bwTH5HUdFP7vo162A1pes6T";
  const resend = new Resend(RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ajimenez.devs@gmail.com",
      subject: `Nueva Cotización de ${safeName} - ${safeCompany}`,
      html: `
                <h2>Solicitud de Cotización - CreativoApp</h2>
                <p><strong>Nombre:</strong> ${safeName}</p>
                <p><strong>Empresa:</strong> ${safeCompany}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Teléfono:</strong> ${safePhone}</p>
                <p><strong>Detalles del Proyecto:</strong></p>
                <p>${safeMessage}</p>
            `
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error enviando la cotización." }), { status: 500 });
  }
  return new Response(
    JSON.stringify({
      message: "Solicitud enviada correctamente!"
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
