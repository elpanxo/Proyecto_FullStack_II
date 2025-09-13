
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartButton = document.getElementById('cart-button');
const closeCart = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const cartNotification = document.getElementById('cart-notification');
const checkoutBtn = document.getElementById('checkout-btn');

updateCart();

// Abrir carrito
cartButton.addEventListener('click', () => {
    cartDrawer.classList.add('drawer-open');
    overlay.classList.add('overlay-open');
});

// Cerrar carrito
closeCart.addEventListener('click', closeCartDrawer);
overlay.addEventListener('click', closeCartDrawer);

// Finalizar compra
checkoutBtn.addEventListener('click', checkout);

function closeCartDrawer() {
    cartDrawer.classList.remove('drawer-open');
    overlay.classList.remove('overlay-open');
}

// Añadir producto
function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1
        });
    }
    
    // Guardar en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    
    showNotification(`${name} añadido al carrito`);
}

function showNotification(message) {
    if (cartNotification) {
        cartNotification.textContent = message;
        cartNotification.style.display = 'block';
        setTimeout(() => {
            cartNotification.style.display = 'none';
        }, 3000);
    }
}

// Actualizar carrito
function updateCart() {
    // Actualizar contador
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Limpiar carrito
    cartItems.innerHTML = '';
    
    // Calcular subtotal
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    if (cartSubtotal) cartSubtotal.textContent = `${subtotal.toFixed(2)} €`;
    if (cartTotal) cartTotal.textContent = `${subtotal.toFixed(2)} €`;
    
    // Añadir items al carrito
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío</p>';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${item.price.toFixed(2)} €</p>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${item.id})" class="quantity-btn">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" 
                           onchange="updateQuantityInput(${item.id}, this.value)">
                    <button onclick="increaseQuantity(${item.id})" class="quantity-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Actualizar cantidad desde input
function updateQuantityInput(id, value) {
    const quantity = parseInt(value);
    if (isNaN(quantity) || quantity < 1) return;
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Aumentar cantidad
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Disminuir cantidad
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
            removeFromCart(id);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }
}

// Eliminar producto del carrito
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    showNotification('Producto eliminado del carrito');
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const confirmMessage = `¿Deseas finalizar tu compra por ${total.toFixed(2)} €?`;
    
    if (confirm(confirmMessage)) {
        // Simular proceso de pago
        showNotification('Procesando pago...');
        
        setTimeout(() => {
            // Limpiar carrito después de la compra
            cart = [];
            localStorage.removeItem('cart');
            updateCart();
            closeCartDrawer();
            showNotification('¡Compra realizada con éxito!');
        }, 2000);
    }
}

// Inicializar botones "Añadir al carrito"
document.addEventListener('DOMContentLoaded', function() {
    // Asignar event listeners a todos los botones de añadir al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            
            addToCart(id, name, price, image);
        });
    });
    
    // Cerrar carrito con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCartDrawer();
        }
    });
});