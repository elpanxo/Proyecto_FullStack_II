let cart = [];

function loadCart() {
    cart = JSON.parse(localStorage.getItem('urbnluxe_cart')) || [];
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('urbnluxe_cart', JSON.stringify(cart));
}

window.addToCart = function(productId, productName, productPrice, productImage) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    saveCart();
    updateCartUI();
    showNotification(`Se ha añadido 1 unidad de ${productName}`, 'success');
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
};

window.updateQuantity = function(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            window.removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
};

function formatPrice(price) {
    return price.toLocaleString('es-CL', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    if (!cartItemsContainer || !cartTotalElement || !cartCountElement) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between items-center mb-4';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
            <div class="flex-1 ml-4">
                <h4 class="font-semibold">${item.name}</h4>
                <p class="text-gray-600">$${formatPrice(item.price)}</p>
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="window.updateQuantity(${item.id}, -1)" class="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition">-</button>
                <span>${item.quantity}</span>
                <button onclick="window.updateQuantity(${item.id}, 1)" class="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition">+</button>
                <button onclick="window.removeFromCart(${item.id})" class="text-gray-500 hover:text-red-500 transition"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    cartTotalElement.textContent = `$${formatPrice(total)}`;
    cartCountElement.textContent = itemCount;
}

function initializeCart() {
    const cartButton = document.getElementById('cart-button');
    const closeCartButton = document.getElementById('close-cart');
    const cartDrawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('overlay');
    const checkoutButton = document.getElementById('checkout-btn');

    if (cartButton) {
        cartButton.addEventListener('click', () => {
            cartDrawer.classList.remove('translate-x-full');
            overlay.classList.remove('hidden');
        });
    }
    if (closeCartButton) {
        closeCartButton.addEventListener('click', () => {
            cartDrawer.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', () => {
            cartDrawer.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        });
    }
    if (checkoutButton) {
        checkoutButton.addEventListener('click', handleCheckout);
    }
}

function handleCheckout() {
    const user = getLoggedInUser();
    if (!user) {
        showNotification('Debes iniciar sesión para finalizar la compra.', 'error');
        window.location.href = 'Login.html';
        return;
    }
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío.', 'error');
        return;
    }
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
        const newPurchase = {
            id: Date.now(),
            date: new Date().toISOString(),
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
        users[userIndex].purchases = users[userIndex].purchases || [];
        users[userIndex].purchases.push(newPurchase);
        saveUsers(users);
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('¡Compra finalizada con éxito!', 'success');
        closeCart();
    } else {
        showNotification('Error: Usuario no encontrado. Por favor, inicia sesión de nuevo.', 'error');
        window.location.href = 'Login.html';
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem('urbnluxe_users')) || [];
}
function saveUsers(users) {
    localStorage.setItem('urbnluxe_users', JSON.stringify(users));
}
function getLoggedInUser() {
    const userEmail = localStorage.getItem('urbnluxe_current_user_email');
    const users = getUsers();
    return users.find(user => user.email === userEmail);
}
function closeCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('overlay');
    if (cartDrawer) cartDrawer.classList.add('translate-x-full');
    if (overlay) overlay.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    initializeCart();
});