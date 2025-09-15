// Función para obtener todos los usuarios del localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('urbnluxe_users')) || [];
}

// Función para guardar el array de usuarios en localStorage
function saveUsers(users) {
    localStorage.setItem('urbnluxe_users', JSON.stringify(users));
}

// Función para obtener el usuario actualmente logueado
function getLoggedInUser() {
    const userEmail = localStorage.getItem('urbnluxe_current_user_email');
    const users = getUsers();
    return users.find(user => user.email === userEmail);
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const goToRegister = document.getElementById('go-to-register');
    const goToLogin = document.getElementById('go-to-login');
    const formTitle = document.getElementById('form-title');

    // Manejar el cambio de formulario
    if (goToRegister && goToLogin) {
        goToRegister.addEventListener('click', e => {
            e.preventDefault();
            if (loginForm) loginForm.classList.add('hidden');
            if (registerForm) registerForm.classList.remove('hidden');
            if (formTitle) formTitle.textContent = 'Registrarse';
        });

        goToLogin.addEventListener('click', e => {
            e.preventDefault();
            if (registerForm) registerForm.classList.add('hidden');
            if (loginForm) loginForm.classList.remove('hidden');
            if (formTitle) formTitle.textContent = 'Iniciar Sesión';
        });
    }

    // Manejar el envío del formulario de registro
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm').value;

            // Suponiendo que las funciones de validación están disponibles globalmente (Validaciones.js)
            const isValid = validateRegisterForm(name, email, password, confirmPassword);

            if (isValid) {
                const users = getUsers();
                const userExists = users.some(user => user.email === email);
                
                if (userExists) {
                    alert('Error: El correo electrónico ya está registrado.');
                } else {
                    const newUser = { 
                        name, 
                        email, 
                        password, 
                        purchases: [] 
                    };
                    users.push(newUser);
                    saveUsers(users);
                    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
                    registerForm.classList.add('hidden');
                    loginForm.classList.remove('hidden');
                    formTitle.textContent = 'Iniciar Sesión';
                }
            } else {
                alert('Por favor, complete los campos correctamente.');
            }
        });
    }

    // Manejar el envío del formulario de inicio de sesión
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const users = getUsers();
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('urbnluxe_current_user_email', user.email);
                alert('¡Inicio de sesión exitoso!');
                window.location.href = 'Productos.html'; 
            } else {
                alert('Credenciales incorrectas.');
            }
        });
    }
});

// Función para cerrar sesión
window.logout = function() {
    localStorage.removeItem('urbnluxe_current_user_email');
    alert('Sesión cerrada.');
    window.location.href = 'Login.html';
}