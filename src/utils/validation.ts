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
