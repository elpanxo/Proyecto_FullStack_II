import { isValidName, isValidEmail, isValidMessage, showError, clearError } from "./validaciones.js";

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const messageInput = document.getElementById('contact-message');

            const name = nameInput.value;
            const email = emailInput.value;
            const message = messageInput.value;

            let isFormValid = true;

            clearError('name-error');
            clearError('email-error');
            clearError('message-error');

            if (!isValidName(name)) {
                showError('name-error', 'Por favor, ingresa un nombre válido.');
                isFormValid = false;
            }

            if (!isValidEmail(email)) {
                showError('email-error', 'El correo no es válido o el dominio no está permitido.');
                isFormValid = false;
            }

            if (!isValidMessage(message)) {
                showError('message-error', 'El mensaje no puede estar vacío y debe tener menos de 500 caracteres.');
                isFormValid = false;
            }

            // Si el formulario es válido, guardar en localStorage
            if (isFormValid) {
                const contactData = {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                };

                // Obtener mensajes existentes o crear un array vacío
                let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
                messages.push(contactData);
                localStorage.setItem('contactMessages', JSON.stringify(messages));

                // Opcional: Mostrar mensaje de éxito y limpiar el formulario
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
                contactForm.reset();
            }
        });
    }
});