// Blog Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get blog data from HTML
    const blogPostsDataElement = document.getElementById('blogPostsData');
    let blogPosts = [];
    
    if (blogPostsDataElement) {
        try {
            blogPosts = JSON.parse(blogPostsDataElement.textContent);
        } catch (e) {
            console.error('Error parsing blog posts data:', e);
        }
    }
    
    // DOM Elements
    const postsContainer = document.getElementById('postsContainer');
    const loadMoreBtn = document.getElementById('loadMorePosts');
    const blogModal = document.getElementById('blogModal');
    const closeBlogModal = document.querySelector('.close-blog-modal');
    const blogModalBody = document.querySelector('.blog-modal-body');
    const blogNewsletter = document.getElementById('blogNewsletter');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Initial display count
    let displayCount = 3;
    const postsPerLoad = 3;
    let currentFilter = 'all';
    
    // Render blog posts
    function renderBlogPosts(count = displayCount) {
        if (!postsContainer) return;
        
        postsContainer.innerHTML = '';
        
        // Filter posts based on current filter
        let filteredPosts = blogPosts;
        if (currentFilter !== 'all') {
            filteredPosts = blogPosts.filter(post => post.category === currentFilter);
        }
        
        const postsToShow = filteredPosts.slice(0, count);
        
        if (postsToShow.length === 0) {
            postsContainer.innerHTML = '<p class="no-posts">No blog posts found for this category.</p>';
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }
        
        postsToShow.forEach(post => {
            const postCard = document.createElement('article');
            postCard.className = 'post-card';
            postCard.setAttribute('data-id', post.id);
            
            postCard.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="post-category-badge">${post.category}</span>
                </div>
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-meta-small">
                        <span>${post.date}</span>
                        <span>${post.readTime}</span>
                    </div>
                    <a href="#" class="read-more" data-id="${post.id}">
                        Read Article <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            
            postsContainer.appendChild(postCard);
        });
        
        // Update load more button visibility
        if (loadMoreBtn) {
            const hasMorePosts = filteredPosts.length > count;
            loadMoreBtn.style.display = hasMorePosts ? 'block' : 'none';
            loadMoreBtn.textContent = hasMorePosts ? 'Load More Articles' : 'No More Articles';
        }
        
        // Add event listeners to read more buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const postId = parseInt(this.getAttribute('data-id'));
                openBlogPost(postId);
            });
        });
    }
    
    // Open blog post modal
    function openBlogPost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;
        
        blogModalBody.innerHTML = post.content;
        blogModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add event listeners to share buttons
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                // Share functionality would go here
                alert('Share functionality would be implemented here');
            });
        });
    }
    
    // Filter blog posts by category
    function setupFilterButtons() {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update current filter
                currentFilter = this.getAttribute('data-category');
                
                // Reset display count
                displayCount = 3;
                
                // Re-render posts
                renderBlogPosts(displayCount);
            });
        });
    }
    
    // Initialize blog page
    if (postsContainer) {
        // Initial render
        renderBlogPosts();
        
        // Setup filter buttons
        setupFilterButtons();
        
        // Load more button event listener
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                displayCount += postsPerLoad;
                renderBlogPosts(displayCount);
            });
        }
    }
    
    // Featured post read more button
    const featuredReadMore = document.querySelector('.featured-blog .read-more');
    if (featuredReadMore) {
        featuredReadMore.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = parseInt(this.getAttribute('data-id'));
            openBlogPost(postId);
        });
    }
    
    // Close blog modal
    if (closeBlogModal) {
        closeBlogModal.addEventListener('click', function() {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === blogModal) {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && blogModal.style.display === 'block') {
            blogModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Newsletter form submission
    if (blogNewsletter) {
        blogNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                alert(`Thank you for subscribing to our newsletter! You'll receive design inspiration in your inbox.`);
                this.reset();
            } else {
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Category cards click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Find and click the corresponding filter button
            filterButtons.forEach(button => {
                if (button.getAttribute('data-category') === category) {
                    button.click();
                }
            });
            
            // Scroll to blog posts section
            document.querySelector('.blog-posts').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});