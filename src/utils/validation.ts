export interface ContactFormData {
    name: string;
    email: string;
    phonenumber: string;
    interesting: string;
    message: string;
}

export interface ValidationResult {
    isValid: boolean;
    error?: string;
}

export const validateContactData = (data: ContactFormData): ValidationResult => {
    const { name, email, phonenumber, interesting, message } = data;

    // Validar campos obligatorios
    if (!name || !email || !phonenumber || !interesting || !message) {
        return { isValid: false, error: 'Faltan campos obligatorios.' };
    }

    // Validar Nombre (Longitud)
    if (name.length < 3 || name.length > 100) {
        return { isValid: false, error: 'El nombre debe tener entre 3 y 100 caracteres.' };
    }

    // Validar Email (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'El correo electrónico no es válido.' };
    }

    // Validar Teléfono (Regex y Longitud)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phonenumber)) {
        return { isValid: false, error: 'El teléfono debe contener al menos 10 dígitos válidos.' };
    }

    // Validar Servicio (Lista permitida)
    const allowedServices = ['web', 'software', 'seo', 'consultoria'];
    if (!allowedServices.includes(interesting)) {
        return { isValid: false, error: 'El servicio seleccionado no es válido.' };
    }

    // Validar Mensaje (Longitud)
    if (message.length < 10 || message.length > 1000) {
        return { isValid: false, error: 'El mensaje debe tener entre 10 y 1000 caracteres.' };
    }

    return { isValid: true };
};

export interface QuoteFormData extends ContactFormData {
    company: string;
}

export const validateQuoteData = (data: QuoteFormData): ValidationResult => {
    const { name, email, phonenumber, company, message } = data;

    // Reutilizar validaciones comunes (podríamos refactorizar para no repetir, pero por ahora explícito es mejor)

    // Validar campos obligatorios
    if (!name || !email || !phonenumber || !company || !message) {
        return { isValid: false, error: 'Faltan campos obligatorios.' };
    }

    // Validar Nombre
    if (name.length < 3 || name.length > 100) {
        return { isValid: false, error: 'El nombre debe tener entre 3 y 100 caracteres.' };
    }

    // Validar Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'El correo electrónico no es válido.' };
    }

    // Validar Teléfono
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phonenumber)) {
        return { isValid: false, error: 'El teléfono debe contener al menos 10 dígitos válidos.' };
    }

    // Validar Empresa
    if (company.length < 2 || company.length > 100) {
        return { isValid: false, error: 'El nombre de la empresa debe tener entre 2 y 100 caracteres.' };
    }

    // Validar Mensaje
    if (message.length < 10 || message.length > 1000) {
        return { isValid: false, error: 'El mensaje debe tener entre 10 y 1000 caracteres.' };
    }

    return { isValid: true };
};
