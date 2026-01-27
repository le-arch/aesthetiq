// Shop Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Products data - Expanded with more items
    const products = [
        {
            id: 1,
            name: "Modern Velvet Sofa",
            category: "furniture",
            style: ["modern", "luxury"],
            price: 24099.99,
            originalPrice: 30000.99,
            description: "Luxurious velvet sofa with solid wood frame and premium cushioning.",
            image: "../images/sofa1.jpg",
            colors: ["Navy Blue", "Emerald Green", "Charcoal Gray"],
            dimensions: "84\" W × 36\" D × 32\" H",
            material: "Velvet, Solid Oak",
            inStock: true,
            featured: true,
            rating: 4.8,
            reviews: 124
        },
        {
            id: 2,
            name: "Minimalist Pendant Light",
            category: "lighting",
            style: ["modern", "minimalist", "scandinavian"],
            price: 14500,
            originalPrice: 20000,
            description: "Handcrafted pendant light with matte black finish and LED compatible.",
            image: "../images/lamp1.jpg",
            colors: ["Matte Black", "Brushed Nickel", "White"],
            dimensions: "18\" Diameter",
            material: "Powder-coated Steel",
            inStock: true,
            featured: true,
            rating: 4.6,
            reviews: 89
        },
        {
            id: 3,
            name: "Handwoven Wool Rug",
            category: "rugs",
            style: ["traditional", "bohemian"],
            price: 8000,
            originalPrice: 11000,
            description: "Artisanal handwoven wool rug with traditional geometric patterns.",
            image: "../images/rug1.jpg",
            colors: ["Ivory/Black", "Navy/Gold", "Terracotta/Beige"],
            dimensions: "8' × 10'",
            material: "100% New Zealand Wool",
            inStock: true,
            featured: true,
            rating: 4.9,
            reviews: 67
        },
        {
            id: 4,
            name: "Marble Coffee Table",
            category: "furniture",
            style: ["modern", "luxury"],
            price: 15000,
            originalPrice: null,
            description: "Solid marble top coffee table with brass inlay details.",
            image: "../images/table3.jpg",
            colors: ["Carrara Marble", "Calacatta Gold"],
            dimensions: "48\" W × 30\" D × 18\" H",
            material: "Marble, Brass",
            inStock: true,
            featured: false,
            rating: 4.7,
            reviews: 42
        },
        {
            id: 5,
            name: "Mid-Century Armchair",
            category: "furniture",
            style: ["midcentury", "modern"],
            price: 70000,
            originalPrice: 90500,
            description: "Authentic mid-century design with walnut legs and premium upholstery.",
            image: "../images/chair2.jpg",
            colors: ["Mustard Yellow", "Forest Green", "Cream White"],
            dimensions: "28\" W × 32\" D × 32\" H",
            material: "Walnut, Premium Fabric",
            inStock: true,
            featured: true,
            rating: 4.5,
            reviews: 56
        },
        {
            id: 6,
            name: "Industrial Floor Lamp",
            category: "lighting",
            style: ["industrial", "modern"],
            price: 29500,
            originalPrice: null,
            description: "Adjustable floor lamp with vintage Edison bulb and iron finish.",
            image: "../images/lamp5.jpg",
            colors: ["Black Iron", "Bronze"],
            dimensions: "72\" Height",
            material: "Iron, Brass",
            inStock: true,
            featured: false,
            rating: 4.3,
            reviews: 78
        },
        {
            id: 7,
            name: "Scandinavian Dining Table",
            category: "furniture",
            style: ["scandinavian", "minimalist"],
            price: 12950,
            originalPrice: 15900,
            description: "Minimalist dining table with solid oak top and tapered legs.",
            image: "../images/table2.jpg",
            colors: ["Natural Oak", "White Oak"],
            dimensions: "72\" W × 36\" D × 30\" H",
            material: "Solid Oak",
            inStock: true,
            featured: true,
            rating: 4.8,
            reviews: 92
        },
        {
            id: 8,
            name: "Bohemian Wall Tapestry",
            category: "decor",
            style: ["bohemian", "traditional"],
            price: 14900,
            originalPrice: 19900,
            description: "Hand-embroidered tapestry with intricate patterns and natural dyes.",
            image: "../images/tapestry1.jpg",
            colors: ["Multi-color", "Earth Tones"],
            dimensions: "5' × 7'",
            material: "Cotton, Wool",
            inStock: true,
            featured: false,
            rating: 4.6,
            reviews: 34
        },
        {
            id: 9,
            name: "Modern Bookcase",
            category: "furniture",
            style: ["modern", "industrial"],
            price: 18500,
            originalPrice: null,
            description: "Modular bookcase with open shelving and metal frame.",
            image: "../images/case1.jpg",
            colors: ["Black", "Walnut"],
            dimensions: "72\" W × 14\" D × 72\" H",
            material: "Powder-coated Steel, Wood",
            inStock: true,
            featured: false,
            rating: 4.4,
            reviews: 41
        },
        {
            id: 10,
            name: "Ceramic Table Lamp",
            category: "lighting",
            style: ["modern", "minimalist"],
            price: 19000,
            originalPrice: 24000,
            description: "Hand-thrown ceramic lamp with linen shade and brass details.",
            image: "../images/lamp3.jpg",
            colors: ["White", "Terracotta", "Navy"],
            dimensions: "24\" Height",
            material: "Ceramic, Linen, Brass",
            inStock: true,
            featured: true,
            rating: 4.7,
            reviews: 63
        },
        {
            id: 11,
            name: "Persian Style Rug",
            category: "rugs",
            style: ["traditional", "luxury"],
            price: 12900,
            originalPrice: 16000,
            description: "Hand-knotted wool rug with intricate Persian patterns.",
            image: "../images/rug2.jpg",
            colors: ["Red/Ivory", "Blue/Gold", "Green/Beige"],
            dimensions: "9' × 12'",
            material: "100% Wool",
            inStock: true,
            featured: false,
            rating: 4.9,
            reviews: 28
        },
        {
            id: 12,
            name: "Acrylic Side Table",
            category: "furniture",
            style: ["modern", "luxury"],
            price: 40000,
            originalPrice: 55000,
            description: "Transparent acrylic table with gold metal accents.",
            image: "../images/acrytable.jpg",
            colors: ["Clear", "Smoke"],
            dimensions: "24\" W × 24\" D × 22\" H",
            material: "Acrylic, Brass",
            inStock: true,
            featured: true,
            rating: 4.5,
            reviews: 37
        },
        {
            id: 13,
            name: "Woven Pendant Cluster",
            category: "lighting",
            style: ["bohemian", "modern"],
            price: 15000,
            originalPrice: 27000,
            description: "Cluster of three woven rattan pendant lights.",
            image: "../images/lamp1.jpg",
            colors: ["Natural Rattan", "Black"],
            dimensions: "Varies",
            material: "Rattan, Metal",
            inStock: true,
            featured: false,
            rating: 4.8,
            reviews: 51
        },
        {
            id: 14,
            name: "Leather Accent Chair",
            category: "furniture",
            style: ["midcentury", "luxury"],
            price: 25600,
            originalPrice: 34500,
            description: "Full-grain leather chair with walnut legs and tufted back.",
            image: "../images/sofa.jpg",
            colors: ["Cognac", "Black", "Olive"],
            dimensions: "30\" W × 32\" D × 31\" H",
            material: "Full-grain Leather, Walnut",
            inStock: true,
            featured: true,
            rating: 4.9,
            reviews: 45
        },
        {
            id: 15,
            name: "Abstract Wall Art",
            category: "decor",
            style: ["modern", "abstract"],
            price: 12900,
            originalPrice: 23000,
            description: "Large canvas print with abstract geometric design.",
            image: "../images/wallart.jpg",
            colors: ["Blue/Gray", "Terracotta/Cream", "Green/White"],
            dimensions: "36\" × 48\"",
            material: "Canvas, Acrylic",
            inStock: true,
            featured: false,
            rating: 4.4,
            reviews: 29
        },
        // Additional products to ensure we have multiple pages
        {
            id: 16,
            name: "Modern Office Desk",
            category: "furniture",
            style: ["modern", "minimalist"],
            price: 17900,
            originalPrice: 29000,
            description: "Sleek office desk with cable management and drawer.",
            image: "../images/desk.jpg",
            colors: ["White", "Black", "Walnut"],
            dimensions: "60\" W × 30\" D × 30\" H",
            material: "MDF, Steel",
            inStock: true,
            featured: false,
            rating: 4.6,
            reviews: 38
        },
        {
            id: 17,
            name: "Crystal Chandelier",
            category: "lighting",
            style: ["luxury", "traditional"],
            price: 50000,
            originalPrice: 80000,
            description: "Elegant crystal chandelier with LED lights.",
            image: "../images/chandalier.jpg",
            colors: ["Crystal", "Gold", "Chrome"],
            dimensions: "24\" Diameter",
            material: "Crystal, Brass",
            inStock: true,
            featured: false,
            rating: 4.9,
            reviews: 52
        },
        {
            id: 18,
            name: "Silk Throw Pillows",
            category: "decor",
            style: ["luxury", "modern"],
            price: 8000,
            originalPrice: 12000,
            description: "Set of 2 silk throw pillows with embroidery.",
            image: "../images/pillow.jpg",
            colors: ["Ivory", "Silver", "Gold"],
            dimensions: "18\" × 18\"",
            material: "Silk, Cotton",
            inStock: true,
            featured: false,
            rating: 4.7,
            reviews: 64
        },
        {
            id: 19,
            name: "Geometric Area Rug",
            category: "rugs",
            style: ["modern", "abstract"],
            price: 6950,
            originalPrice: 10000,
            description: "Modern geometric pattern area rug.",
            image: "../images/rug5.jpg",
            colors: ["Gray/White", "Navy/White", "Black/White"],
            dimensions: "6' × 9'",
            material: "Polypropylene",
            inStock: true,
            featured: false,
            rating: 4.5,
            reviews: 41
        },
        {
            id: 20,
            name: "Bar Stool Set",
            category: "furniture",
            style: ["industrial", "modern"],
            price: 7500,
            originalPrice: 15000,
            description: "Set of 2 industrial style bar stools.",
            image: "../images/stool1.jpg",
            colors: ["Black", "Copper", "Brass"],
            dimensions: "18\" W × 18\" D × 30\" H",
            material: "Steel, Leather",
            inStock: true,
            featured: false,
            rating: 4.4,
            reviews: 33
        },
        {
            id: 21,
            name: "Wall Sconce",
            category: "lighting",
            style: ["modern", "minimalist"],
            price: 19500,
            originalPrice: 24900,
            description: "Minimalist wall sconce with adjustable arm.",
            image: "../images/lamp6.jpg",
            colors: ["Black", "White", "Brass"],
            dimensions: "12\" × 8\"",
            material: "Aluminum, Glass",
            inStock: true,
            featured: false,
            rating: 4.6,
            reviews: 47
        },
        {
            id: 22,
            name: "Decorative Vase",
            category: "decor",
            style: ["modern", "abstract"],
            price: 12000,
            originalPrice: 17000,
            description: "Handmade ceramic decorative vase.",
            image: "../images/vase6.jpg",
            colors: ["White", "Terracotta", "Blue"],
            dimensions: "14\" Height",
            material: "Ceramic",
            inStock: true,
            featured: false,
            rating: 4.8,
            reviews: 39
        },
        {
            id: 23,
            name: "Outdoor Patio Rug",
            category: "rugs",
            style: ["modern", "outdoor"],
            price: 13000,
            originalPrice: 24000,
            description: "Weather-resistant outdoor patio rug.",
            image: "../images/rug5.jpg",
            colors: ["Beige", "Gray", "Navy"],
            dimensions: "5' × 7'",
            material: "Polypropylene",
            inStock: true,
            featured: false,
            rating: 4.3,
            reviews: 28
        },
        {
            id: 24,
            name: "Media Console",
            category: "furniture",
            style: ["modern", "scandinavian"],
            price: 11900,
            originalPrice: 20000,
            description: "Modern media console with storage.",
            image: "../images/medcon.jpg",
            colors: ["White Oak", "Walnut", "Black"],
            dimensions: "72\" W × 18\" D × 24\" H",
            material: "Wood, Metal",
            inStock: true,
            featured: false,
            rating: 4.7,
            reviews: 55
        }
    ];
    
    // DOM Elements
    const productsContainer = document.getElementById('productsContainer');
    const allProductsContainer = document.getElementById('allProductsContainer');
    const priceRange = document.getElementById('priceRange');
    const maxPriceLabel = document.getElementById('maxPriceLabel');
    const categoryCheckboxes = document.querySelectorAll('.category-list input[type="checkbox"]');
    const styleTags = document.querySelectorAll('.style-tag');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const sortSelect = document.getElementById('sortSelect');
    
    // Pagination Elements
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const currentPageInfo = document.getElementById('currentPageInfo');
    const productRangeInfo = document.getElementById('productRangeInfo');
    
    // Shopping Cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Pagination state
    let currentPage = 1;
    const itemsPerPage = 6; // Changed to 6 for better pagination demonstration
    let filteredProducts = [];
    let totalPages = 0;
    
    // Current filter state
    let currentFilters = {
        maxPrice: 10000, // This equals 100,000 FCFA (10000 * 10)
        categories: ['furniture', 'lighting', 'decor', 'rugs'],
        styles: [],
        sortBy: 'featured'
    };
    
    // Category Images Mapping
    const categoryImages = {
        lighting: ['candle', 'chandalier', 'chandalier2', 'chandalier3', 'chandalier4', 'lamp', 'lamp1', 'lamp2', 'lamp3', 'lamp4', 'lamp5', 'lamp6', 'lamp7', 'lamp8', 'lamp9'],
        furniture: ['case1', 'case2', 'case3', 'desk', 'desk1', 'desk2', 'desk4', 'sofa', 'sofa1', 'sofa2', 'sofa3', 'stool', 'stool1', 'stool2', 'stool3', 'table1', 'table2', 'table3', 'table'],
        decor: ['tapestry1', 'decor', 'decor1', 'decor2', 'decor3', 'frame1', 'frame2', 'frame3', 'frame4', 'g1', 'g3', 'g4', 'mirror', 'pillow', 'pillow1', 'pillow2', 'pillow3', 'wood', 'culetry', 'tapestry2', 'tapestry3', 'vase1', 'vase2', 'vase3', 'vase4', 'vase5', 'vase6', 'vase7', 'wallart', 'wallart1', 'wallart2'],
        rugs: ['rug', 'rug1', 'rug2', 'rug5']
    };
    
    // Category Click Handler Functions
    function initCategoryClickHandlers() {
        const categoryCards = document.querySelectorAll('.category-card');
        const categoryItemsSection = document.getElementById('categoryItemsSection');
        const categoryItemsGrid = document.getElementById('categoryItemsGrid');
        const categoryItemsTitle = document.getElementById('categoryItemsTitle');
        const closeCategoryBtn = document.getElementById('closeCategoryItems');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                const categoryName = this.querySelector('.category-content h3').textContent;
                const categoryCountText = this.querySelector('.category-count').textContent;
                
                // Extract the number of items from "XX items" format
                const itemCount = parseInt(categoryCountText);
                
                // Get products for this category
                const categoryProducts = products.filter(p => p.category === category);
                
                // Limit to the specified count
                const itemsToDisplay = categoryProducts.slice(0, itemCount);
                
                // Update section title
                categoryItemsTitle.textContent = categoryName;
                
                // Clear grid
                categoryItemsGrid.innerHTML = '';
                
                // Render items
                itemsToDisplay.forEach((product, index) => {
                    const itemElement = createCategoryItemElement(product, category, index);
                    categoryItemsGrid.appendChild(itemElement);
                });
                
                // Show the section
                categoryItemsSection.style.display = 'block';
                
                // Scroll to section
                categoryItemsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
        
        // Close button handler
        if (closeCategoryBtn) {
            closeCategoryBtn.addEventListener('click', function() {
                categoryItemsSection.style.display = 'none';
            });
        }
    }
    
    function createCategoryItemElement(product, category, index) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'category-item';
        itemDiv.style.animationDelay = `${index * 0.05}s`;
        
        // Get image from category images pool
        let imageUrl = 'images/placeholder.jpg';
        if (categoryImages[category] && index < categoryImages[category].length) {
            const imageName = categoryImages[category][index];
            imageUrl = `../images/${imageName}.jpg`;
        }
        
        itemDiv.innerHTML = `
            <div class="category-item-image">
                <img src="${imageUrl}" alt="${product.name}" onerror="this.parentElement.innerHTML='<div class=\'category-item-placeholder\'><i class=\'fas fa-image\'></i></div>'">
            </div>
            <div class="category-item-info">
                <div class="category-item-name">${product.name}</div>
                <div class="category-item-desc">${product.description}</div>
                <div class="category-item-price">FCFA${product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                <div class="category-item-rating">
                    <span class="stars">
                        <i class="fas fa-star"></i>
                        <span style="margin-left: 3px; color: #333; font-weight: 600;">${product.rating}</span>
                    </span>
                    <span class="reviews">(${product.reviews} reviews)</span>
                </div>
            </div>
        `;
        
        // Add click handler to add to cart
        itemDiv.addEventListener('click', function() {
            addToCart(product);
        });
        
        return itemDiv;
    }
    
    // Initialize shop page
    function initShop() {
        if (productsContainer) {
            initFeaturedSlider();
        }
        
        if (allProductsContainer) {
            // Initial render of all products
            renderAllProducts();
            
            // Setup event listeners
            setupEventListeners();
        }
        
        // Initialize category click handlers
        initCategoryClickHandlers();
        
        // Initialize cart UI
        updateCartUI();
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Price range filter
        if (priceRange && maxPriceLabel) {
            priceRange.addEventListener('input', function() {
                const value = parseInt(this.value);
                // Convert slider value to FCFA (multiply by 10 for display)
                maxPriceLabel.textContent = value === 10000 ? 'FCFA100,000+' : `FCFA${value * 10}`;
                currentFilters.maxPrice = value;
            });
        }
        
        // Category filter
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const category = this.value;
                if (this.checked) {
                    if (!currentFilters.categories.includes(category)) {
                        currentFilters.categories.push(category);
                    }
                } else {
                    currentFilters.categories = currentFilters.categories.filter(c => c !== category);
                }
            });
        });
        
        // Style filter
        styleTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const style = this.getAttribute('data-style');
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    if (!currentFilters.styles.includes(style)) {
                        currentFilters.styles.push(style);
                    }
                } else {
                    currentFilters.styles = currentFilters.styles.filter(s => s !== style);
                }
            });
        });
        
        // Apply filters button
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', function() {
                currentPage = 1;
                renderAllProducts();
            });
        }
        
        // Clear filters button
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', function() {
                // Reset pagination to page 1
                currentPage = 1;
                
                // Reset filters
                if (priceRange) {
                    priceRange.value = 10000;
                    currentFilters.maxPrice = 10000;
                    if (maxPriceLabel) {
                        maxPriceLabel.textContent = 'FCFA100,000+';
                    }
                }
                
                categoryCheckboxes.forEach(checkbox => {
                    checkbox.checked = true;
                });
                currentFilters.categories = ['furniture', 'lighting', 'decor', 'rugs'];
                
                styleTags.forEach(tag => {
                    tag.classList.remove('active');
                });
                currentFilters.styles = [];
                
                // Re-render products
                renderAllProducts();
            });
        }
        
        // Sort select
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                currentPage = 1;
                currentFilters.sortBy = this.value;
                renderAllProducts();
            });
        }
        
        // Previous page button
        if (prevPageBtn) {
            prevPageBtn.addEventListener('click', goToPreviousPage);
        }
        
        // Next page button
        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', goToNextPage);
        }
    }
    
    // Initialize featured products slider
    function initFeaturedSlider() {
        if (!productsContainer) return;
        
        const featuredProducts = products.filter(product => product.featured);
        
        // Create slider container
        productsContainer.innerHTML = `
            <div class="featured-slider-container">
                <div class="featured-slider">
                    ${featuredProducts.map(product => `
                        <div class="featured-slide">
                            ${createProductCardHTML(product, true)}
                        </div>
                    `).join('')}
                </div>
                <button class="slider-nav-btn slider-prev-btn" aria-label="Previous product">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="slider-nav-btn slider-next-btn" aria-label="Next product">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="slider-dots-container">
                    ${featuredProducts.map((_, index) => `
                        <span class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Setup slider functionality
        setupFeaturedSlider();
    }
    
    // Setup featured slider functionality
    function setupFeaturedSlider() {
        const slider = productsContainer.querySelector('.featured-slider');
        const slides = productsContainer.querySelectorAll('.featured-slide');
        const prevBtn = productsContainer.querySelector('.slider-prev-btn');
        const nextBtn = productsContainer.querySelector('.slider-next-btn');
        const dots = productsContainer.querySelectorAll('.slider-dot');
        
        if (slides.length <= 1) return;
        
        let currentSlide = 0;
        
        function showSlide(index) {
            // Update active slide
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            // Update dots
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            
            currentSlide = index;
            
            // Update slider transform
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }
        
        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }
        
        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index !== currentSlide) {
                    showSlide(index);
                }
            });
        });
        
        // Auto slide
        let autoSlideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto slide on hover
        slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        slider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Create product card HTML
    function createProductCardHTML(product, isFeatured = false) {
        const discountBadge = product.originalPrice ? 
            `<span class="product-badge">Sale</span>` : '';
        
        const outOfStockBadge = !product.inStock ?
            `<span class="product-badge" style="background-color: #666;">Out of Stock</span>` : '';
        
        const originalPrice = product.originalPrice ?
            `<span class="original-price">FCFA${product.originalPrice.toFixed(2)}</span>` : '';
        
        const addToCartBtn = product.inStock ?
            `<button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>` :
            `<button class="add-to-cart" disabled style="opacity: 0.6; cursor: not-allowed;">
                Out of Stock
            </button>`;
        
        return `
            <div class="product-card ${isFeatured ? 'featured-card' : ''}" data-id="${product.id}">
                ${discountBadge}
                ${outOfStockBadge}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="quick-view" data-id="${product.id}">Quick View</div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="current-price">FCFA${product.price.toFixed(2)}</span>
                        ${originalPrice}
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStarRating(product.rating)}
                        </div>
                        <span class="review-count">(${product.reviews})</span>
                    </div>
                    ${addToCartBtn}
                </div>
            </div>
        `;
    }
    
    // Generate star rating HTML
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        return stars;
    }
    
    // Sort products
    function sortProducts(productsArray, sortBy) {
        switch(sortBy) {
            case 'price-low':
                return [...productsArray].sort((a, b) => a.price - b.price);
            case 'price-high':
                return [...productsArray].sort((a, b) => b.price - a.price);
            case 'newest':
                return [...productsArray].sort((a, b) => b.id - a.id);
            case 'popular':
                return [...productsArray].sort((a, b) => b.rating - a.rating);
            case 'featured':
            default:
                return [...productsArray].sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return b.rating - a.rating;
                });
        }
    }
    
    // Render all products with pagination
    function renderAllProducts() {
        if (!allProductsContainer) return;
        
        // Show loading state
        allProductsContainer.classList.add('loading');
        
        // Apply filters
        filteredProducts = products.filter(product => {
            // Price filter (convert slider value to actual FCFA: slider value * 10)
            if (product.price > currentFilters.maxPrice * 10) return false;
            
            // Category filter
            if (!currentFilters.categories.includes(product.category)) return false;
            
            // Style filter
            if (currentFilters.styles.length > 0) {
                const hasMatchingStyle = currentFilters.styles.some(style => 
                    product.style.includes(style)
                );
                if (!hasMatchingStyle) return false;
            }
            
            return true;
        });
        
        // Apply sorting
        filteredProducts = sortProducts(filteredProducts, currentFilters.sortBy);
        
        // Calculate total pages
        totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
        
        // Ensure currentPage is valid
        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        
        // Calculate pagination slice
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        
        // Clear container
        allProductsContainer.innerHTML = '';
        
        // Render products in grid
        if (paginatedProducts.length === 0) {
            // Show no results message
            allProductsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No Products Found</h3>
                    <p>Try adjusting your filters or search criteria</p>
                    <button class="btn btn-primary" id="resetFiltersBtn">Reset All Filters</button>
                </div>
            `;
            
            // Add reset filters button event listener
            const resetBtn = document.getElementById('resetFiltersBtn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    if (clearFiltersBtn) {
                        clearFiltersBtn.click();
                    }
                });
            }
        } else {
            // Add animation delay to each card
            paginatedProducts.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.setAttribute('data-id', product.id);
                productCard.style.animationDelay = `${index * 0.1}s`;
                productCard.innerHTML = createProductCardHTML(product, false);
                allProductsContainer.appendChild(productCard);
            });
        }
        
        // Remove loading state
        setTimeout(() => {
            allProductsContainer.classList.remove('loading');
        }, 500);
        
        // Update pagination
        updatePagination();
        
        // Add event listeners to new cards
        addProductCardListeners();
    }
    
    // Update pagination UI
    function updatePagination() {
        updatePageNumbers();
        updatePaginationButtons();
        updatePaginationInfo();
    }

    // Update page numbers dynamically
    function updatePageNumbers() {
        if (!pageNumbersContainer) return;
        
        pageNumbersContainer.innerHTML = '';
        
        if (totalPages === 0) {
            return;
        }
        
        // Define how many page numbers to show
        const maxPagesToShow = 5;
        let startPage = 1;
        let endPage = totalPages;
        
        if (totalPages > maxPagesToShow) {
            // Show pages around current page
            const halfPages = Math.floor(maxPagesToShow / 2);
            startPage = Math.max(1, currentPage - halfPages);
            endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
            
            // Adjust if we're near the end
            if (endPage - startPage + 1 < maxPagesToShow) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            }
        }
        
        // Add first page and ellipsis if needed
        if (startPage > 1) {
            addPageNumber(1);
            if (startPage > 2) {
                addEllipsis();
            }
        }
        
        // Add page numbers
        for (let i = startPage; i <= endPage; i++) {
            addPageNumber(i);
        }
        
        // Add last page and ellipsis if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                addEllipsis();
            }
            addPageNumber(totalPages);
        }
        
        // Helper functions
        function addPageNumber(page) {
            const pageNumber = document.createElement('span');
            pageNumber.className = `page-number ${page === currentPage ? 'active' : ''}`;
            pageNumber.textContent = page;
            pageNumber.setAttribute('data-page', page);
            
            pageNumber.addEventListener('click', () => {
                if (page !== currentPage) {
                    currentPage = page;
                    renderAllProducts();
                }
            });
            
            pageNumbersContainer.appendChild(pageNumber);
        }
        
        function addEllipsis() {
            const dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.textContent = '...';
            dots.style.cursor = 'default';
            pageNumbersContainer.appendChild(dots);
        }
    }

    // Update pagination buttons
    function updatePaginationButtons() {
        if (prevPageBtn) {
            const isPrevDisabled = currentPage === 1 || filteredProducts.length === 0;
            prevPageBtn.disabled = isPrevDisabled;
            prevPageBtn.classList.toggle('disabled', isPrevDisabled);
        }
        
        if (nextPageBtn) {
            const isNextDisabled = currentPage >= totalPages || filteredProducts.length === 0;
            nextPageBtn.disabled = isNextDisabled;
            nextPageBtn.classList.toggle('disabled', isNextDisabled);
        }
    }

    // Update pagination info
    function updatePaginationInfo() {
        if (!currentPageInfo || !productRangeInfo) return;
        
        if (filteredProducts.length === 0) {
            currentPageInfo.textContent = 'No products found';
            productRangeInfo.textContent = '';
            return;
        }
        
        currentPageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        const startIndex = (currentPage - 1) * itemsPerPage + 1;
        const endIndex = Math.min(currentPage * itemsPerPage, filteredProducts.length);
        productRangeInfo.textContent = `Showing ${startIndex}-${endIndex} of ${filteredProducts.length} products`;
    }

    // Go to previous page
    function goToPreviousPage() {
        if (currentPage > 1) {
            currentPage--;
            renderAllProducts();
            
            // Scroll to top of products
            setTimeout(() => {
                allProductsContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
    
    // Go to next page
    function goToNextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            renderAllProducts();
            
            // Scroll to top of products
            setTimeout(() => {
                allProductsContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
    
    // Add event listeners to product cards
    function addProductCardListeners() {
        // Quick view buttons
        document.querySelectorAll('.quick-view').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                showQuickView(productId);
            });
        });
        
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart:not([disabled])').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }
    
    // Show quick view modal
    function showQuickView(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        // Create quick view modal
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="quick-view-content">
                <button class="close-quick-view">&times;</button>
                <div class="quick-view-grid">
                    <div class="quick-view-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="quick-view-details">
                        <h3>${product.name}</h3>
                        <div class="product-price">
                            <span class="current-price">FCFA${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="original-price">FCFA${product.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <div class="product-rating">
                            <div class="stars">
                                ${generateStarRating(product.rating)}
                            </div>
                            <span class="review-count">${product.reviews} reviews</span>
                        </div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-specs">
                            <div class="spec-item">
                                <span class="spec-label">Category:</span>
                                <span class="spec-value">${product.category}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Style:</span>
                                <span class="spec-value">${product.style.join(', ')}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Dimensions:</span>
                                <span class="spec-value">${product.dimensions}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Material:</span>
                                <span class="spec-value">${product.material}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Colors:</span>
                                <span class="spec-value">${product.colors.join(', ')}</span>
                            </div>
                        </div>
                        <button class="btn btn-primary add-to-cart-full" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart - FCFA${product.price.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .quick-view-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                z-index: 1200;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                animation: fadeIn 0.3s ease;
            }
            
            .quick-view-content {
                background: white;
                max-width: 1000px;
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                position: relative;
                max-height: 90vh;
                overflow-y: auto;
            }
            
            .close-quick-view {
                position: absolute;
                top: 15px;
                right: 15px;
                background: var(--primary-color);
                color: var(--secondary-color);
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
            }
            
            .quick-view-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                padding: 40px;
            }
            
            .quick-view-image img {
                width: 100%;
                height: 400px;
                object-fit: cover;
                border-radius: 8px;
            }
            
            .quick-view-details h3 {
                font-size: 2rem;
                margin-bottom: 20px;
            }
            
            .product-specs {
                margin: 25px 0;
                background: var(--light-color);
                padding: 20px;
                border-radius: 8px;
            }
            
            .spec-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid #eee;
            }
            
            .spec-item:last-child {
                border-bottom: none;
            }
            
            .spec-label {
                font-weight: 600;
                color: #666;
            }
            
            .add-to-cart-full {
                width: 100%;
                padding: 15px;
                font-size: 1.1rem;
            }
            
            @media (max-width: 768px) {
                .quick-view-grid {
                    grid-template-columns: 1fr;
                    padding: 20px;
                }
                
                .quick-view-image img {
                    height: 300px;
                }
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Close modal
        const closeBtn = modal.querySelector('.close-quick-view');
        closeBtn.addEventListener('click', () => {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            }, 300);
        });
        
        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(modal);
                    document.head.removeChild(style);
                }, 300);
            }
        });
        
        // Add to cart from modal
        const addToCartBtn = modal.querySelector('.add-to-cart-full');
        addToCartBtn.addEventListener('click', () => {
            addToCart(productId);
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            }, 300);
        });
    }
    
    // Add to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product || !product.inStock) return;
        
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart UI
        updateCartUI();
        
        // Show confirmation
        showAddToCartConfirmation(product.name);
    }
    
    // Show add to cart confirmation
    function showAddToCartConfirmation(productName) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${productName} added to cart</span>
            <a href="#cart" class="view-cart-btn">View Cart</a>
        `;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary-color);
            color: var(--secondary-color);
            padding: 15px 25px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 1000;
            box-shadow: var(--shadow);
            animation: slideIn 0.3s ease-out;
        `;
        
        // Style the view cart button
        const viewCartBtn = notification.querySelector('.view-cart-btn');
        viewCartBtn.style.cssText = `
            background: var(--secondary-color);
            color: var(--primary-color);
            padding: 5px 10px;
            border-radius: 3px;
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        `;
        
        viewCartBtn.addEventListener('mouseenter', () => {
            viewCartBtn.style.opacity = '0.9';
        });
        
        viewCartBtn.addEventListener('mouseleave', () => {
            viewCartBtn.style.opacity = '1';
        });
        
        viewCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.classList.add('active');
            }
        });
        
        // Add to document
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // Update cart UI
    function updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }
    
    // Initialize shop
    initShop();
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});