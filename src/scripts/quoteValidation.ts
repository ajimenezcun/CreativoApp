declare const grecaptcha: any;
export const initQuoteFormValidation = (siteKey: string) => {
    const form = document.querySelector("#quote-form") as HTMLFormElement;

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
                showError(fullname, "El nombre de contacto es obligatorio.");
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

            // Validar Empresa
            const company = form.querySelector("#company") as HTMLInputElement;
            if (!company.value.trim()) {
                showError(company, "El nombre de la empresa o producto es obligatorio.");
            }

            // Validar Mensaje
            const message = form.querySelector("#message") as HTMLTextAreaElement;
            if (!message.value.trim()) {
                showError(message, "Los detalles del proyecto son obligatorios.");
            } else if (message.value.trim().length < 10) {
                showError(message, "Por favor detalla un poco más tu proyecto (mínimo 10 caracteres).");
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

                    const response = await fetch("/api/quote", {
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
                            <strong class="font-bold">¡Solicitud enviada!</strong>
                            <span class="block sm:inline">Gracias por tu interés, ${fullname.value}. Analizaremos tu proyecto y te contactaremos pronto.</span>
                        `;
                        form.parentNode?.insertBefore(successMessage, form);
                    } else {
                        // Error del servidor
                        throw new Error(result.message || "Ocurrió un error al enviar la solicitud.");
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
