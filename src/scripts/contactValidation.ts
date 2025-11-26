export const initContactFormValidation = () => {
    const form = document.querySelector("#contact-form") as HTMLFormElement;

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            // Limpiar errores previos
            document.querySelectorAll(".error-message").forEach((el) => el.remove());

            // Helper para mostrar errores
            const showError = (input: HTMLElement, message: string) => {
                const error = document.createElement("p");
                error.className = "text-red-500 text-sm mt-1 error-message italic";
                error.textContent = message;
                input.parentNode?.appendChild(error);
                isValid = false;
            };

            // Validar Nombre
            const fullname = form.querySelector("#fullname") as HTMLInputElement;
            if (!fullname.value.trim()) {
                showError(fullname, "El nombre completo es obligatorio.");
            } else if (fullname.value.trim().length < 3) {
                showError(fullname, "El nombre debe tener al menos 3 caracteres.");
            }

            // Validar Email
            const email = form.querySelector("#email") as HTMLInputElement;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError(email, "El correo electrónico es obligatorio.");
            } else if (!emailRegex.test(email.value.trim())) {
                showError(email, "Por favor, ingresa un correo electrónico válido.");
            }

            // Validar Teléfono
            const phonenumber = form.querySelector("#phonenumber") as HTMLInputElement;
            const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
            if (!phonenumber.value.trim()) {
                showError(phonenumber, "El teléfono es obligatorio.");
            } else if (!phoneRegex.test(phonenumber.value.trim())) {
                showError(phonenumber, "El teléfono debe contener al menos 10 dígitos válidos.");
            }

            // Validar Servicio
            const interesting = form.querySelector("#interesting") as HTMLSelectElement;
            if (!interesting.value) {
                showError(interesting, "Por favor, selecciona un servicio de interés.");
            }

            // Validar Mensaje
            const message = form.querySelector("#message") as HTMLTextAreaElement;
            if (!message.value.trim()) {
                showError(message, "El mensaje es obligatorio.");
            } else if (message.value.trim().length < 10) {
                showError(message, "El mensaje debe tener al menos 10 caracteres.");
            }

            if (isValid) {
                form.submit();
            }
        });
    }
};
