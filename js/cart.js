// Shopping Cart JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const continueShopping = document.getElementById('continueShopping');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutModal = document.querySelector('.close-checkout-modal');
    
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Toggle cart sidebar
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cartSidebar.classList.add('active');
            renderCartItems();
        });
    }
    
    // Close cart sidebar
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartSidebar.classList.remove('active');
        });
    }
    
    // Close cart when clicking outside (on overlay)
    document.addEventListener('click', function(event) {
        if (!cartSidebar.contains(event.target) && 
            !cartIcon.contains(event.target) && 
            cartSidebar.classList.contains('active')) {
            cartSidebar.classList.remove('active');
        }
    });
    
    // Continue shopping button
    if (continueShopping) {
        continueShopping.addEventListener('click', function() {
            cartSidebar.classList.remove('active');
        });
    }
    
    // Render cart items
    function renderCartItems() {
        if (!cartItems) return;
        
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
            updateCartSummary(0);
            return;
        }
        
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.setAttribute('data-index', index);
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">FCFA${item.price.toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease" data-index="${index}">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn increase" data-index="${index}">+</button>
                        </div>
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                updateQuantity(index, -1);
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                updateQuantity(index, 1);
            });
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeItem(index);
            });
        });
        
        updateCartSummary(subtotal);
    }
    
    // Update item quantity
    function updateQuantity(index, change) {
        if (cart[index]) {
            cart[index].quantity += change;
            
            // Remove item if quantity becomes 0 or less
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update UI
            renderCartItems();
            updateCartUI();
        }
    }
    
    // Remove item from cart
    function removeItem(index) {
        if (cart[index]) {
            cart.splice(index, 1);
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update UI
            renderCartItems();
            updateCartUI();
        }
    }
    
    // Update cart summary
    function updateCartSummary(subtotal) {
        if (cartSubtotal) {
            cartSubtotal.textContent = `FCFA${subtotal.toFixed(2)}`;
        }
        
        if (cartTotal) {
            cartTotal.textContent = `FCFA${subtotal.toFixed(2)}`;
        }
    }
    
    // Update cart UI (icon count)
    function updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty. Add some items before checking out.');
                return;
            }
            
            // Close cart sidebar
            cartSidebar.classList.remove('active');
            
            // Show checkout modal
            showCheckoutModal();
        });
    }
    
    // Show checkout modal
    function showCheckoutModal() {
        const checkoutModalBody = document.querySelector('.checkout-modal-body');
        
        // Calculate order summary
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 2000;
        const tax = subtotal * 0.08;
        const total = subtotal + shipping + tax;
        
        checkoutModalBody.innerHTML = `
            <div class="checkout-container">
                <h2>Checkout</h2>
                
                <div class="checkout-content">
                    <div class="checkout-form">
                        <h3>Shipping Information</h3>
                        
                        <div class="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" required>
                        </div>
                        
                        <button class="btn btn-primary" id="continueToPayment">Continue to Payment</button>
                    </div>
                    
                    <div class="order-summary">
                        <h3>Order Summary</h3>
                        
                        <div class="summary-items">
                            ${cart.map(item => `
                                <div class="summary-item">
                                    <span>${item.name} × ${item.quantity}</span>
                                    <span>FCFA${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="summary-totals">
                            <div class="summary-row">
                                <span>Subtotal</span>
                                <span>FCFA${subtotal.toFixed(2)}</span>
                            </div>
                            <div class="summary-row">
                                <span>Shipping</span>
                                <span>FCFA${shipping.toFixed(2)}</span>
                            </div>
                            <div class="summary-row">
                                <span>Tax</span>
                                <span>FCFA${tax.toFixed(2)}</span>
                            </div>
                            <div class="summary-row total">
                                <span>Total</span>
                                <span>FCFA${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        checkoutModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add event listener to continue button
        const continueToPayment = document.getElementById('continueToPayment');
        if (continueToPayment) {
            continueToPayment.addEventListener('click', function() {
                alert('This is a demo. In a real implementation, this would proceed to payment processing.');
            });
        }
    }
    
    // Close checkout modal
    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener('click', function() {
            checkoutModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === checkoutModal) {
            checkoutModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Initialize cart UI
    updateCartUI();
    
    // Load cart items on page load
    renderCartItems();
});