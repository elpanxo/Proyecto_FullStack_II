// Funciones de productos y carrito en JavaScript

window.products = [
    {
        id: 1,
        name: "Camiseta Essential",
        price: 24990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/ec/e0/ac/ece0acf831fda57ec6fbb57338b62f1a.jpg",
        description: "Camiseta de algodón 100% de alta calidad.",
        brand: "Essential Wear"
    },
    {
        id: 2,
        name: "Hoodie Y2K",
        price: 45990, // Precio en CLP
        image: "https://i.pinimg.com/736x/13/cd/28/13cd28960fc0267ed5fb0b96feaa1843.jpg",
        description: "Sudadera canguro.",
        brand: "StreetWear"
    },
    {
        id: 3,
        name: "Tracksuit Brasil ft. Corteiz ",
        price: 99990, // Precio en CLP
        image: "https://i.pinimg.com/736x/b5/83/ea/b583eaafbfe0c12acd198043e4c37fec.jpg",
        description: "Tracksuit en todas las tallas todo original.",
        brand: "Corteiz"
    },
    {
        id: 4,
        name: "Carhartt jacket 90s",
        price: 69990, // Precio en CLP
        image: "https://i.pinimg.com/736x/1d/8b/f2/1d8bf25e07eec89ef8e016038348feaa.jpg",
        description: "Chaqueta en buen estado esta hermosa, original",
        brand: "Carhartt"
    },
    {
        id: 5,
        name: "Nike Nocta Glide",
        price: 189990, // Precio en CLP
        image: "https://i.pinimg.com/736x/cd/5d/ea/cd5deaf7d357700d221aee212e7d0d20.jpg",
        description: "Zapatillas cómodas y modernas, S - 40, M - 41, L - 42, XL - 43",
        brand: "Nike"
    },
    {
        id: 6,
        name: "Gorro Arc'teryx",
        price: 44990, // Precio en CLP
        image: "https://i.pinimg.com/736x/4c/d4/e0/4cd4e06e707bef96b91bb4258c397a50.jpg",
        description: "Gorra ajustable con estilo urbano.",
        brand: "Arc'teryx"
    },
    {
        id: 7,
        name: "Polera Calvin Klein Classic",
        price: 39990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/16/6c/33/166c3304de2d3859c6065166cc0a03d8.jpg",
        description: "Polera clásica de Calvin Klein en algodón premium.",
        brand: "Calvin Klein"
    },
    {
        id: 8,
        name: "Jordan Air 1 Retro",
        price: 149990, // Precio en CLP
        image: "https://i.pinimg.com/736x/35/82/2f/35822f806262db07b0461c94ac4aad8a.jpg",
        description: "Zapatillas Jordan Air 1 Retro, edición limitada. S - 40, M - 41, L - 42, XL - 43",
        brand: "Nike"
    },
    {
        id: 9,
        name: "Bolso LV Monogram",
        price: 129990, // Precio en CLP
        image: "https://i.pinimg.com/736x/25/bd/27/25bd27beb36f6068edda2335e44cf756.jpg",
        description: "Bolso Louis Vuitton clásico.",
        brand: "Louis Vuitton"
    },
    {
        id: 10,
        name: "Jeans Regular Fit G-Star",
        price: 39990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/15/5a/7f/155a7f03431d740d04fc45528dfca7d8.jpg",
        description: "Jeans slim fit con efecto destructurado y lavado premium.",
        brand: "G-Star"
    },
    {
        id: 11,
        name: "Chaqueta Arc'teryx Beta AR",
        price: 299990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/cf/11/70/cf11704f37869fb6531b121eae8f81f6.jpg",
        description: "Chaqueta técnica impermeable para condiciones extremas.",
        brand: "Arc'teryx"
    },
    {
        id: 12,
        name: "Camiseta Stussy Basic Logo",
        price: 49990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/fc/b9/89/fcb989c3552cc9f41d89862b0f067510.jpg",
        description: "Camiseta Stussy con logo clásico, 100% algodón.",
        brand: "Stussy"
    },
    {
        id: 13,
        name: "Sudadera Nike Sportswear",
        price: 59990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/69/0a/11/690a11e1f8d2c1b9ccbe6f840ca107f8.jpg",
        description: "Sudadera Nike con capucha y bolsillo canguro.",
        brand: "Nike"
    },
    {
        id: 14,
        name: "Gafas de Sol Louis Vuitton",
        price: 349990, 
        image: "https://i.pinimg.com/1200x/fc/a5/2e/fca52ee984c361b419e875916d0e48d6.jpg",
        description: "Gafas de sol Louis Vuitton con montura de acetato.",
        brand: "Louis Vuitton"
    },
    {
        id: 15,
        name: "Mochila Arc'teryx Mantis",
        price: 89990, 
        image: "https://i.pinimg.com/736x/ee/b1/95/eeb195ac89f62b61e8ea04dec64ddf14.jpg",
        description: "Mochila compacta y resistente para uso urbano y outdoor.",
        brand: "Arc'teryx"
    },
    {
        id: 16,
        name: "Reloj Calvin Klein Minimal",
        price: 159990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/aa/30/77/aa3077bbebbc04a8e53947b36180c3f8.jpg",
        description: "Reloj de pulsera minimalista con correa de acero inoxidable.",
        brand: "Calvin Klein"
    },
    {
        id: 17,
        name: "Zapatillas Nike Dunk Low",
        price: 129990, // Precio en CLP
        image: "https://i.pinimg.com/1200x/3b/94/11/3b94115caddece332a08de58f72c5ffc.jpg",
        description: "Zapatillas Nike Dunk Low, estilo skateboarding. S - 40, M - 41, L - 42, XL - 43",
        brand: "Nike"
    },
    {
        id: 18,
        name: "Cinturón Louis Vuitton Initiales",
        price: 259990, // Precio en CLP
        image: "https://i.pinimg.com/736x/7b/80/89/7b80899dab3f8ec2f5ab20806fa11c45.jpg",
        description: "Cinturón de cuero con hebilla metálica y logo LV.",
        brand: "Louis Vuitton"
    }
];

// Función para formatear precios en pesos chilenos
function formatPrice(price) {
    return price.toLocaleString('es-CL', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Función para inicializar y renderizar los productos en la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    loadCart();
});

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) {
        console.error('No se encontró el elemento con ID "products-grid"');
        return;
    }
    
    productsGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-lg overflow-hidden shadow-md';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <a href="DetalleProducto.html?id=${product.id}" class="block hover:scale-105 transition-transform">
                <div class="overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="product-image w-full h-64 object-cover">
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-2 text-sm">${product.brand}</p>
                    <p class="text-gray-600 mb-4 text-sm">${product.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-xl">${formatPrice(product.price)}</span>
                    </div>
                </div>
            </a>
            <div class="p-4 pt-0 flex justify-end">
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" 
                        class="add-to-cart bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                    Añadir al carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function formatPrice(price) {
    return price.toLocaleString('es-CL', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Renderiza los productos en la página
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-lg overflow-hidden shadow-md';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <a href="DetalleProducto.html?id=${product.id}" class="block hover:scale-105 transition-transform">
                <div class="overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="product-image w-full h-64 object-cover">
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-2 text-sm">${product.brand}</p>
                    <p class="text-gray-600 mb-4 text-sm">${product.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-xl">$${formatPrice(product.price)}</span>
                    </div>
                </div>
            </a>
            <div class="p-4 pt-0 flex justify-end">
                <button onclick="window.addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" 
                        class="add-to-cart bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                    Añadir al carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Inicializa productos y carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    if (typeof window.loadCart === 'function') window.loadCart();
    if (typeof window.initializeCart === 'function') window.initializeCart();
});