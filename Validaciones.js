function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) return false;

    const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
}

function isValidPassword(password) {
    return password.length >= 4 && password.length <= 10;
}

function isValidName(name) {
    return name.trim().length > 0 && name.length <= 100;
}

function isValidMessage(message) {
    return message.trim().length > 0 && message.length <= 500;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
    }
}

function clearError(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = '';
        element.style.display = 'none';
    }
}

function validateRegisterForm(name, email, password, confirmPassword) {
    let valid = true;
    clearError('register-name-error');
    clearError('register-email-error');
    clearError('register-password-error');
    clearError('register-confirm-error');

    if (!isValidName(name)) {
        showError('register-name-error', 'Nombre inválido.');
        valid = false;
    }
    if (!isValidEmail(email)) {
        showError('register-email-error', 'Correo inválido o dominio no permitido.');
        valid = false;
    }
    if (!isValidPassword(password)) {
        showError('register-password-error', 'Contraseña entre 4 y 10 caracteres.');
        valid = false;
    }
    if (password !== confirmPassword) {
        showError('register-confirm-error', 'Las contraseñas no coinciden.');
        valid = false;
    }
    return valid;
}
