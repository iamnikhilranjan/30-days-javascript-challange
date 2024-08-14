let cart = [];

const products = [
    {
        name: "Wireless Headphones",
        price: 1559,
        description: "High-quality wireless headphones with 20 hours of battery life.",
        imageUrl: "https://cdn.pixabay.com/photo/2012/02/22/20/09/headphones-15600_1280.jpg"
    },
    {
        name: "Smartphone",
        price: 16699,
        description: "Latest model smartphone with 128GB storage and an advanced camera system.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg"
    },
    {
        name: "Gaming Mouse",
        price: 1229,
        description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
        imageUrl: "https://cdn.pixabay.com/photo/2022/08/14/16/39/mouse-7386247_960_720.jpg"
    },
    {
        name: "Laptop",
        price: 39549,
        description: "High-performance laptop with 16GB RAM, 512GB SSD, and a 15.6-inch display.",
        imageUrl: "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg"
    },
    {
        name: "Smart Watch",
        price: 2969,
        description: "Fitness-focused smartwatch with heart rate monitor and GPS tracking.",
        imageUrl: "https://cdn.pixabay.com/photo/2022/01/24/18/06/smart-watch-6964296_1280.jpg"
    },
    {
        name: "Bluetooth Speaker",
        price: 1249,
        description: "Portable Bluetooth speaker with deep bass and 12 hours of playtime.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/01/22/15/bose-2568269_1280.jpg"
    },
    {
        name: "Tablet",
        price: 15999,
        description: "Powerful tablet with 256GB storage and a 10.5-inch Retina display.",
        imageUrl: "https://cdn.pixabay.com/photo/2014/09/26/22/53/tablet-462950_1280.png"
    },
    {
        name: "DSLR Camera",
        price: 35949,
        description: "Professional-grade DSLR camera with 24MP resolution and 4K video recording.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/04/30/05/04/camera-1362419_960_720.jpg"
    }
];

// Render product items
const productList = document.querySelector('.product-list');
products.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price.toFixed(2)}</p>
        <button data-index="${index}" class="add-to-cart">Add to Cart</button>
    `;
    productList.appendChild(productItem);
});

// Handle adding items to the cart
productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const index = event.target.getAttribute('data-index');
        const product = products[index];
        const cartItem = cart.find(item => item.product === product);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }

        updateCartDisplay();
    }
});

// Handle opening and closing the cart
document.getElementById('view-cart').addEventListener('click', () => {
    document.getElementById('cart-section').style.display = 'block';
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-section').style.display = 'none';
});

// Handle updating cart display
function updateCartDisplay() {
    const cartList = document.querySelector('.cart-list');
    cartList.innerHTML = '';
    cart.forEach((cartItem, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${cartItem.product.name}</span>
            <span>₹${cartItem.product.price.toFixed(2)}</span>
            <span>Quantity: ${cartItem.quantity}</span>
            <button data-index="${index}" class="increase-quantity">+</button>
            <button data-index="${index}" class="decrease-quantity">-</button>
            <button data-index="${index}" class="remove-item">Remove</button>
        `;
        cartList.appendChild(cartItemDiv);
    });

    document.querySelector('.cart-count').textContent = cart.length;
}

// Handle updating quantities and removing items from the cart
document.querySelector('.cart-list').addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');

    if (event.target.classList.contains('increase-quantity')) {
        cart[index].quantity++;
        updateCartDisplay();
    } else if (event.target.classList.contains('decrease-quantity')) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCartDisplay();
    } else if (event.target.classList.contains('remove-item')) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
});

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);

    const userInfo = {
        name: formData.get('name'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        zip: formData.get('zip'),
        cardNumber: formData.get('card-number'),
        expiryDate: formData.get('expiry-date'),
        cvv: formData.get('cvv')
    };

    // Calculate total price from the cart
    const totalPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    // Display confirmation message
    const confirmationMessage = `
        <h3>Order Confirmation</h3>
        <p>Thank you for your order, ${userInfo.name}!</p>
        <p><strong>Shipping Address:</strong></p>
        <p>${userInfo.address}, ${userInfo.city}, ${userInfo.state}, ${userInfo.zip}</p>
        <p><strong>Total Price:</strong> ₹${totalPrice.toFixed(2)}</p>
        <p><strong>Payment Details:</strong></p>
        <p>Card Number: ${userInfo.cardNumber}</p>
        <p>Expiry Date: ${userInfo.expiryDate}</p>
        <p>CVV: ${userInfo.cvv}</p>
    `;

    document.getElementById('confirmation-message').innerHTML = confirmationMessage;
    document.getElementById('confirmation-message').style.display = 'block';

    // Optionally, you could reset the form and hide the checkout section
    event.target.reset();
    document.getElementById('checkout-section').style.display = 'none';
    cart = [];  // Clear the cart after checkout
    updateCartDisplay();  // Update cart display to reflect changes
});