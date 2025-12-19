declare const grecaptcha: any;

export const initContactFormValidation = (siteKey: string) => {
    const form = document.querySelector("#contact-form") as HTMLFormElement;

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            let isValid = true;

            // Limpiar errores previos
            document.querySelectorAll(".error-message").forEach((el) => el.remove());
            const globalError = document.getElementById("global-error");
            if (globalError) globalError.remove();

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
                const submitBtn = form.querySelector("button[type='submit']") as HTMLButtonElement;
                const originalBtnText = submitBtn.textContent;

                const token = await grecaptcha.execute(siteKey, { action: 'contact_form' });

                try {
                    // Estado de carga
                    submitBtn.disabled = true;
                    submitBtn.textContent = "Enviando...";

                    const formData = new FormData(form);
                    formData.append('recaptchaToken', token);

                    const response = await fetch("/api/contact", {
                        method: "POST",
                        body: formData,
                    });

                    const result = await response.json();

                    if (response.ok) {
                        // Éxito: Ocultar form y mostrar mensaje
                        form.style.display = "none";
                        const successMessage = document.createElement("div");
                        successMessage.className = "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center";
                        successMessage.innerHTML = `
                            <strong class="font-bold">¡Mensaje enviado!</strong>
                            <span class="block sm:inline">Gracias por contactarnos, ${fullname.value}. Te responderemos pronto.</span>
                        `;
                        form.parentNode?.insertBefore(successMessage, form);
                    } else {
                        // Error del servidor
                        throw new Error(result.message || "Ocurrió un error al enviar el mensaje.");
                    }
                } catch (error: any) {
                    // Mostrar error global
                    const errorDiv = document.createElement("div");
                    errorDiv.id = "global-error";
                    errorDiv.className = "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4";
                    errorDiv.textContent = error.message;
                    form.insertBefore(errorDiv, form.firstChild);
                } finally {
                    // Restaurar botón si hubo error
                    if (form.style.display !== "none") {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                    }
                }
            }
        });
    }
};
