// portfolio.js - Portfolio page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Load portfolio data from HTML
    const portfolioDataElement = document.getElementById('portfolioItemsData');
    const portfolioItems = portfolioDataElement ? JSON.parse(portfolioDataElement.textContent) : [];
    
    // DOM Elements - UPDATED WITH CORRECT SELECTORS
    const portfolioGrid = document.getElementById('portfolio-grid') || document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('portfolio-search');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const resultsCount = document.getElementById('results-count');
    
    // Initial display count
    let displayCount = 4;
    const itemsPerLoad = 8; // Increased for better UX with 30 items
    let filteredItems = [...portfolioItems];
    
    // Update results count display
    function updateResultsCount(itemsShown, totalItems) {
        if (resultsCount) {
            resultsCount.textContent = `Showing ${itemsShown} of ${totalItems} projects`;
        }
    }
    
    // Calculate category counts
    function getCategoryCounts() {
        return {
            all: portfolioItems.length,
            residential: portfolioItems.filter(item => item.category.includes('residential')).length,
            commercial: portfolioItems.filter(item => item.category.includes('commercial')).length,
            modern: portfolioItems.filter(item => item.category.includes('modern')).length,
            classic: portfolioItems.filter(item => item.category.includes('classic')).length,
            minimalist: portfolioItems.filter(item => item.category.includes('minimalist')).length
        };
    }
    
    // Update filter button counts
    function updateFilterButtonCounts() {
        const counts = getCategoryCounts();
        
        filterButtons.forEach(button => {
            const filter = button.getAttribute('data-filter');
            if (counts[filter]) {
                const text = button.textContent.replace(/\(\d+\)/, '');
                button.textContent = `${text} (${counts[filter]})`;
            }
        });
    }
    
    // Render portfolio items
    function renderPortfolioItems(items, count = displayCount) {
        if (!portfolioGrid) {
            console.error('Portfolio grid element not found!');
            return;
        }
        
        // Clear the grid
        portfolioGrid.innerHTML = '';
        
        const itemsToShow = items.slice(0, count);
        
        // Check if there are items to show
        if (itemsToShow.length === 0) {
            portfolioGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                    <h3>No projects found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
        } else {
            // Render each item
            itemsToShow.forEach(item => {
                const portfolioItem = document.createElement('div');
                portfolioItem.className = 'portfolio-item';
                portfolioItem.setAttribute('data-category', item.category.join(' '));
                portfolioItem.setAttribute('data-id', item.id);
                
                portfolioItem.innerHTML = `
                    <img src="${item.images[0]}" alt="${item.title}" loading="lazy">
                    <div class="portfolio-overlay">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="portfolio-tags">
                            ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <button class="view-project" data-id="${item.id}">View Project</button>
                `;
                
                portfolioGrid.appendChild(portfolioItem);
            });
        }
        
        // Update load more button visibility
        if (loadMoreBtn) {
            if (items.length > count) {
                loadMoreBtn.style.display = 'block';
                loadMoreBtn.textContent = `Load More (${items.length - count} remaining)`;
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
        
        // Update results count
        updateResultsCount(itemsToShow.length, items.length);
        
        // Add event listeners to view project buttons
        document.querySelectorAll('.view-project').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-id'));
                openProjectModal(projectId);
            });
        });
    }
    
    // Filter portfolio items
    function filterPortfolio(category) {
        if (category === 'all') {
            filteredItems = [...portfolioItems];
        } else {
            filteredItems = portfolioItems.filter(item => 
                item.category.includes(category)
            );
        }
        
        displayCount = 4;
        renderPortfolioItems(filteredItems);
    }
    
    // Search portfolio items
    function searchPortfolio(query) {
        if (!query.trim()) {
            filteredItems = [...portfolioItems];
        } else {
            filteredItems = portfolioItems.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
            );
        }
        
        displayCount = 4;
        renderPortfolioItems(filteredItems);
    }
    
    // Initialize portfolio
    function initPortfolio() {
        if (!portfolioGrid) {
            console.error('Portfolio grid not found. Make sure your HTML has an element with class "portfolio-grid"');
            return;
        }
        
        // Update filter button counts
        updateFilterButtonCounts();
        
        // Initial render
        renderPortfolioItems(portfolioItems);
        
        // Filter button event listeners
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter items
                const filter = this.getAttribute('data-filter');
                filterPortfolio(filter);
                
                // Update search input if it has value
                if (searchInput && searchInput.value) {
                    searchInput.value = '';
                }
            });
        });
        
        // Search input event listener
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                // Remove active class from filter buttons when searching
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Find and activate "all" filter button
                const allButton = document.querySelector('.filter-btn[data-filter="all"]');
                if (allButton) {
                    allButton.classList.add('active');
                }
                
                searchPortfolio(this.value);
            });
        }
        
        // Search icon click event listener
        const searchIcon = document.querySelector('.filter-search i');
        if (searchIcon) {
            searchIcon.addEventListener('click', function() {
                if (searchInput) {
                    searchInput.focus();
                    // Trigger search with current value
                    const event = new Event('input', { bubbles: true });
                    searchInput.dispatchEvent(event);
                }
            });
        }
        
        // Load more button event listener:
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                displayCount += itemsPerLoad;
                renderPortfolioItems(filteredItems, displayCount);
                
                // Smooth scroll to newly loaded items
                setTimeout(() => {
                    portfolioGrid.lastElementChild.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            });
        }
    }
    
    // Initialize when DOM is loaded
    initPortfolio();
    
    // Function to open project modal
    window.openProjectModal = function(projectId) {
        const project = portfolioItems.find(item => item.id === projectId);
        if (!project) {
            console.error(`Project with ID ${projectId} not found!`);
            return;
        }
        
        const modal = document.getElementById('project-modal');
        const modalBody = modal.querySelector('.modal-body');
        
        if (!modal || !modalBody) {
            console.error('Modal elements not found!');
            return;
        }
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            </div>
            
            <div class="modal-images">
                ${project.images.map((img, index) => `
                    <img src="${img}" alt="${project.title} - Image ${index + 1}" class="modal-image">
                `).join('')}
            </div>
            
            <div class="modal-details">
                <div class="detail-item">
                    <h4>Location</h4>
                    <p>${project.details.location}</p>
                </div>
                <div class="detail-item">
                    <h4>Area</h4>
                    <p>${project.details.area}</p>
                </div>
                <div class="detail-item">
                    <h4>Duration</h4>
                    <p>${project.details.duration}</p>
                </div>
                <div class="detail-item">
                    <h4>Budget</h4>
                    <p>${project.details.budget}</p>
                </div>
            </div>
            
            <div class="modal-description">
                <h4>Project Description</h4>
                <p>${project.longDescription}</p>
            </div>
            
            <div class="project-stats">
                <div class="stat-item">
                    <span class="stat-number">${project.stats.space}</span>
                    <span class="stat-label">Square Feet</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${project.stats.duration}</span>
                    <span class="stat-label">Months</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${project.stats.satisfaction}%</span>
                    <span class="stat-label">Client Satisfaction</span>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add click event to modal images for lightbox functionality
        modalBody.querySelectorAll('.modal-image').forEach((img, index) => {
            img.addEventListener('click', function() {
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <span class="close-lightbox">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                    <div class="lightbox-counter">${index + 1} / ${project.images.length}</div>
                `;
                document.body.appendChild(lightbox);
                
                lightbox.querySelector('.close-lightbox').addEventListener('click', function() {
                    lightbox.remove();
                });
                
                lightbox.addEventListener('click', function(e) {
                    if (e.target === this) {
                        lightbox.remove();
                    }
                });
            });
        });
    };
    
    // Add lightbox styles dynamically
    const lightboxStyles = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1200;
            padding: 20px;
        }
        .lightbox img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
        .close-lightbox {
            position: absolute;
            top: 20px;
            right: 20px;
            color: white;
            font-size: 40px;
            cursor: pointer;
            background: var(--primary-color);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .close-lightbox:hover {
            background: var(--secondary-color);
            color: var(--primary-color);
            transform: rotate(90deg);
        }
        .lightbox-counter {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            background: rgba(0, 0, 0, 0.7);
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
    `;
    
    // Inject lightbox styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = lightboxStyles;
    document.head.appendChild(styleSheet);
});