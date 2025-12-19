const escapeHtml = (unsafe) => {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
};

const validateContactData = (data) => {
  const { name, email, phonenumber, interesting, message } = data;
  if (!name || !email || !phonenumber || !interesting || !message) {
    return { isValid: false, error: "Faltan campos obligatorios." };
  }
  if (name.length < 3 || name.length > 100) {
    return { isValid: false, error: "El nombre debe tener entre 3 y 100 caracteres." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "El correo electrónico no es válido." };
  }
  const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
  if (!phoneRegex.test(phonenumber)) {
    return { isValid: false, error: "El teléfono debe contener al menos 10 dígitos válidos." };
  }
  const allowedServices = ["web", "software", "seo", "consultoria"];
  if (!allowedServices.includes(interesting)) {
    return { isValid: false, error: "El servicio seleccionado no es válido." };
  }
  if (message.length < 10 || message.length > 1e3) {
    return { isValid: false, error: "El mensaje debe tener entre 10 y 1000 caracteres." };
  }
  return { isValid: true };
};
const validateQuoteData = (data) => {
  const { name, email, phonenumber, company, message } = data;
  if (!name || !email || !phonenumber || !company || !message) {
    return { isValid: false, error: "Faltan campos obligatorios." };
  }
  if (name.length < 3 || name.length > 100) {
    return { isValid: false, error: "El nombre debe tener entre 3 y 100 caracteres." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "El correo electrónico no es válido." };
  }
  const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
  if (!phoneRegex.test(phonenumber)) {
    return { isValid: false, error: "El teléfono debe contener al menos 10 dígitos válidos." };
  }
  if (company.length < 2 || company.length > 100) {
    return { isValid: false, error: "El nombre de la empresa debe tener entre 2 y 100 caracteres." };
  }
  if (message.length < 10 || message.length > 1e3) {
    return { isValid: false, error: "El mensaje debe tener entre 10 y 1000 caracteres." };
  }
  return { isValid: true };
};

export { validateQuoteData as a, escapeHtml as e, validateContactData as v };
