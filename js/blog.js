// Blog Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Blog data
    const blogPosts = [
        {
            id: 1,
            title: "Top Interior Design Trends for 2026",
            category: "Trends",
            date: "January 1, 2026",
            author: "Sarah Eposi",
            readTime: "8 min read",
            excerpt: "Discover the emerging trends that will define interior design in 2024, from sustainable materials to bold color choices and smart home integration.",
            content: `
                <div class="blog-modal-header">
                    <h2>Top Interior Design Trends for 2026</h2>
                    <div class="blog-modal-meta">
                        <span><i class="far fa-calendar"></i> January 1, 2026</span>
                        <span><i class="far fa-user"></i> Sarah Eposi</span>
                        <span><i class="far fa-clock"></i> 8 min read</span>
                        <span><i class="far fa-folder"></i> Trends</span>
                    </div>
                </div>
                
                <img src="../images/9.jpg" alt="2026 Design Trends" class="blog-modal-image">
                
                <div class="blog-modal-content-text">
                    <p>As we step into 2026, the world of interior design continues to evolve, blending innovation with sustainability, technology with craftsmanship, and bold expression with timeless elegance. This year promises exciting new directions that will reshape how we think about our living spaces.</p>
                    
                    <h3>1. Sustainable & Biophilic Design</h3>
                    <p>The push towards sustainability continues to gain momentum and is now more important than ever. Expect to see more recycled materials, energy-efficient solutions, and a stronger emphasis on indoor air quality. Biophilic design—incorporating natural elements like plants, natural light, and organic materials—creates spaces that promote well-being and connection to nature. Living walls, natural wood elements, and large windows are becoming centerpieces of modern design.</p>
                    
                    <h3>2. Bold Color Palettes</h3>
                    <p>Neutral palettes are making way for more daring color choices. Rich earth tones, deep blues, forest greens, and vibrant accents are becoming increasingly popular. 2026 sees designers embracing color confidence—using bold jewel tones in accent walls, furniture pieces, and decorative elements. This isn't just about painting walls; it's about layering colors in textiles, artwork, and accessories to create dynamic, personalized spaces.</p>
                    
                    <h3>3. Smart Home Integration</h3>
                    <p>Technology continues to seamlessly integrate into home design in ways that are both functional and beautiful. From voice-controlled lighting and climate systems to invisible speakers and automated window treatments, technology is becoming increasingly invisible. The focus is on creating intelligent spaces that adapt to your lifestyle while maintaining aesthetic appeal.</p>
                    
                    <h3>4. Maximalist Approach with Intentionality</h3>
                    <p>While minimalism had its reign, 2026 embraces a more curated maximalist approach. The key difference is intentionality—every piece tells a story and serves a purpose. Layered textures, eclectic artwork, and collected treasures create rich, personalized environments that reflect the inhabitants' personalities and stories.</p>
                    
                    <h3>5. Artisanal & Handcrafted Elements</h3>
                    <p>There's a growing appreciation for handmade, artisanal pieces that showcase craftsmanship. From hand-thrown ceramics to hand-woven textiles and custom furniture pieces, these items add authenticity and soul to spaces. This trend reflects a desire for quality over quantity and connections to makers and their stories.</p>
                    
                    <h3>Key Takeaways</h3>
                    <p>The interior design trends for 2026 emphasize authenticity, sustainability, and personal expression. Whether you're planning a full renovation or making incremental updates to your space, consider how these trends can be adapted to reflect your unique style and values.</p>
                </div>
                
                <div class="blog-modal-footer">
                    <div class="blog-tags">
                        <span class="blog-tag">Trends</span>
                        <span class="blog-tag">2026</span>
                        <span class="blog-tag">Design</span>
                        <span class="blog-tag">Sustainability</span>
                    </div>
                    <div class="share-buttons">
                        <a href="#" class="share-btn"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="share-btn"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="share-btn"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            `,
            image: "../images/9.jpg",
            tags: ["Trends", "2026", "Design"]
        },
        {
            id: 2,
            title: "How to Choose the Perfect Color Scheme",
            category: "Tips & Tricks",
            date: "February 5, 2026",
            author: "Lisa Namondo",
            readTime: "6 min read",
            excerpt: "A comprehensive guide to selecting colors that create harmony and reflect your personal style in any space.",
            content: `
                <div class="blog-modal-header">
                    <h2>How to Choose the Perfect Color Scheme</h2>
                    <div class="blog-modal-meta">
                        <span><i class="far fa-calendar"></i> February 5, 2026</span>
                        <span><i class="far fa-user"></i> Lisa Namondo</span>
                        <span><i class="far fa-clock"></i> 6 min read</span>
                        <span><i class="far fa-folder"></i> Tips & Tricks</span>
                    </div>
                </div>
                
                <img src="../images/8.jpg" alt="Color Scheme Guide" class="blog-modal-image">
                
                <div class="blog-modal-content-text">
                    <p>Choosing the right color scheme is one of the most important decisions in interior design. Colors influence mood, perception of space, overall aesthetic harmony, and even how we feel when we're in a room. This comprehensive guide will walk you through the process of selecting colors that work beautifully together and create the atmosphere you desire.</p>
                    
                    <h3>1. Start with Inspiration</h3>
                    <p>Begin by collecting images, fabrics, or artwork that you're drawn to. Create a mood board—either physical or digital—and look for recurring color patterns. Many designers suggest starting with a favorite piece of art, a cherished textile, or even a photograph that speaks to you, then pulling colors from it to create a cohesive palette. This personal connection ensures your color scheme reflects your taste.</p>
                    
                    <h3>2. Understand Color Theory Basics</h3>
                    <p>The color wheel is your best friend in design. Consider these classic schemes:</p>
                    <ul>
                        <li><strong>Monochromatic:</strong> Variations of a single color (tints, tones, shades). This creates harmony and sophistication but may feel monotonous if not layered with textures.</li>
                        <li><strong>Analogous:</strong> Colors next to each other on the wheel (e.g., blue, blue-green, green). These naturally harmonious schemes feel comfortable and cohesive.</li>
                        <li><strong>Complementary:</strong> Colors opposite each other (e.g., blue and orange). These create vibrant, high-energy spaces with maximum contrast.</li>
                        <li><strong>Triadic:</strong> Three colors equally spaced on the wheel. This balanced approach offers variety while maintaining harmony.</li>
                    </ul>
                    
                    <h3>3. Consider the 60-30-10 Rule</h3>
                    <p>This classic design rule helps balance colors perfectly in a space:</p>
                    <ul>
                        <li><strong>60% Dominant color:</strong> Usually walls, large furniture pieces, or flooring. This is your base color that creates the overall feeling of the space.</li>
                        <li><strong>30% Secondary color:</strong> Upholstery, curtains, accent walls, or larger decorative pieces. This adds complexity without overwhelming the space.</li>
                        <li><strong>10% Accent color:</strong> Throw pillows, artwork, decorative accessories, or small furniture pieces. This energizes the space and draws the eye.</li>
                    </ul>
                    
                    <h3>4. Test Colors in Your Space</h3>
                    <p>Always test paint colors on your actual walls at different times of day. Natural and artificial light dramatically affect how colors appear. Morning light differs from evening light, and artificial lighting can shift warm or cool tones. Paint large swatches (at least 12x12 inches) and observe them for at least 24-48 hours before making a final decision. Consider how the color looks on different walls and at different times.</p>
                    
                    <h3>5. Consider Room Function and Mood</h3>
                    <p>Different colors evoke different emotions and work better in different rooms:</p>
                    <ul>
                        <li><strong>Bedrooms:</strong> Softer, calming colors like blues, greens, lavenders, or warm neutrals promote relaxation and sleep.</li>
                        <li><strong>Living rooms:</strong> Warm, inviting colors that promote conversation and gather people together—think warm grays, terracottas, or soft golds.</li>
                        <li><strong>Home offices:</strong> Colors that promote focus and creativity, such as soft blues for concentration or greens for balance and creativity.</li>
                        <li><strong>Dining rooms:</strong> Rich, warm colors like deep reds, oranges, or warm golds that stimulate appetite and conversation.</li>
                        <li><strong>Kitchens:</strong> Energizing colors that uplift and inspire, such as yellows, whites, or soft greens.</li>
                    </ul>
                    
                    <h3>6. Don't Forget About Texture</h3>
                    <p>Texture can significantly affect how color is perceived. A matte surface absorbs light while a glossy surface reflects it, making the same color appear completely different. A textured fabric will read differently than a smooth one. Mix textures—matte and glossy, smooth and rough, soft and hard—to add depth, interest, and sophistication to your color scheme. This layering creates a more dynamic and visually interesting space.</p>
                    
                    <h3>7. Account for Existing Elements</h3>
                    <p>Consider permanent or semi-permanent elements in your space: flooring, countertops, fixtures, and architectural features. Your color scheme should complement these elements. If you have warm wood flooring, cooler paint colors might clash, while warm earth tones would create harmony.</p>
                    
                    <h3>Final Tips</h3>
                    <p>Remember that color is subjective and deeply personal. What matters most is how the colors make you feel in your space. Don't be afraid to take risks, but also don't rush the decision. Live with your color choices mentally before committing, and remember that you can always change them later.</p>
                </div>
                
                <div class="blog-modal-footer">
                    <div class="blog-tags">
                        <span class="blog-tag">Color</span>
                        <span class="blog-tag">Tips</span>
                        <span class="blog-tag">Design</span>
                        <span class="blog-tag">Beginners</span>
                    </div>
                    <div class="share-buttons">
                        <a href="#" class="share-btn"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="share-btn"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="share-btn"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            `,
            image: "../images/8.jpg",
            tags: ["Color", "Tips", "Design"]
        },
        {
            id: 3,
            title: "Maximizing Small Spaces",
            category: "Tips & Tricks",
            date: "May 20, 2026",
            author: "Michael Tambe",
            readTime: "7 min read",
            excerpt: "Clever design strategies to make the most of compact living areas without sacrificing style or functionality.",
            content: `
                <div class="blog-modal-header">
                    <h2>Maximizing Small Spaces: Smart Design for Compact Living</h2>
                    <div class="blog-modal-meta">
                        <span><i class="far fa-calendar"></i>May 20, 2026</span> 
                        <span><i class="far fa-user"></i> Michael Tambe</span>
                        <span><i class="far fa-clock"></i> 7 min read</span>
                        <span><i class="far fa-folder"></i> Tips & Tricks</span>
                    </div>
                </div>
                
                <img src="../images/7.jpg" alt="Small Space Design" class="blog-modal-image">
                
                <div class="blog-modal-content-text">
                    <p>Living in a small space doesn't mean sacrificing style or comfort. With thoughtful design strategies, you can create a functional, beautiful home that feels much larger than its square footage suggests.</p>
                    
                    <h3>1. Embrace Vertical Space</h3>
                    <p>When floor space is limited, look up! Vertical storage solutions can dramatically increase your storage capacity:</p>
                    <ul>
                        <li>Floor-to-ceiling bookshelves</li>
                        <li>Wall-mounted shelves in kitchens and bathrooms</li>
                        <li>Tall, narrow storage cabinets</li>
                        <li>Over-the-door organizers</li>
                    </ul>
                    
                    <h3>2. Choose Multi-Functional Furniture</h3>
                    <p>Invest in pieces that serve multiple purposes:</p>
                    <ul>
                        <li><strong>Storage ottomans:</strong> Seating plus hidden storage</li>
                        <li><strong>Sofa beds:</strong> Living room by day, guest room by night</li>
                        <li><strong>Drop-leaf tables:</strong> Compact when not in use, expandable for entertaining</li>
                        <li><strong>Nesting tables:</strong> Stackable when not needed</li>
                        <li><strong>Bed frames with drawers:</strong> Utilize under-bed space</li>
                    </ul>
                    
                    <h3>3. Use Light Colors Strategically</h3>
                    <p>Light colors reflect light and make spaces feel larger and airier. Consider:</p>
                    <ul>
                        <li>Light-colored walls and ceilings</li>
                        <li>Monochromatic or analogous color schemes</li>
                        <li>Light-colored flooring</li>
                        <li>Using mirrors strategically to reflect light and views</li>
                    </ul>
                    
                    <h3>4. Create Visual Continuity</h3>
                    <p>Breaking up a small space with too many different elements can make it feel cluttered. Instead:</p>
                    <ul>
                        <li>Use consistent flooring throughout</li>
                        <li>Consider open floor plans where possible</li>
                        <li>Use glass or transparent elements to maintain sight lines</li>
                        <li>Keep window treatments simple and minimal</li>
                    </ul>
                    
                    <h3>5. Smart Lighting Solutions</h3>
                    <p>Proper lighting can make a small space feel larger:</p>
                    <ul>
                        <li>Layer lighting (ambient, task, accent)</li>
                        <li>Use wall sconces to save floor and table space</li>
                        <li>Install dimmer switches to control mood and perception of space</li>
                        <li>Maximize natural light with sheer window treatments</li>
                    </ul>
                    
                    <h3>6. Declutter Ruthlessly</h3>
                    <p>In small spaces, every item needs to earn its keep:</p>
                    <ul>
                        <li>Adopt a "one in, one out" policy</li>
                        <li>Regularly edit your belongings</li>
                        <li>Use hidden storage for items you don't use daily</li>
                        <li>Consider digital solutions for media and documents</li>
                    </ul>
                    
                    <h3>7. Zone Your Space</h3>
                    <p>Even in studio apartments, you can create distinct areas:</p>
                    <ul>
                        <li>Use area rugs to define living spaces</li>
                        <li>Create room dividers with bookshelves or screens</li>
                        <li>Use furniture arrangement to separate sleeping and living areas</li>
                        <li>Consider different lighting for different zones</li>
                    </ul>
                    
                    <p>Remember, small spaces encourage creativity and intentionality. Every design choice matters, and when done well, a small home can be incredibly cozy, efficient, and stylish.</p>
                </div>
                
                <div class="blog-modal-footer">
                    <div class="blog-tags">
                        <span class="blog-tag">Small Spaces</span>
                        <span class="blog-tag">Tips</span>
                        <span class="blog-tag">Organization</span>
                        <span class="blog-tag">Storage</span>
                    </div>
                    <div class="share-buttons">
                        <a href="#" class="share-btn"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="share-btn"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="share-btn"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            `,
            image: "../images/7.jpg",
            tags: ["Small Spaces", "Tips", "Organization"]
        }
    ];
    
    // DOM Elements
    const postsContainer = document.getElementById('postsContainer');
    const loadMoreBtn = document.getElementById('loadMorePosts');
    const blogModal = document.getElementById('blogModal');
    const closeBlogModal = document.querySelector('.close-blog-modal');
    const blogModalBody = document.querySelector('.blog-modal-body');
    const blogNewsletter = document.getElementById('blogNewsletter');
    
    // Initial display count
    let displayCount = 3;
    const postsPerLoad = 3;
    
    // Render blog posts
    function renderBlogPosts(count = displayCount) {
        if (!postsContainer) return;
        
        postsContainer.innerHTML = '';
        
        const postsToShow = blogPosts.slice(0, count);
        
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
            loadMoreBtn.style.display = blogPosts.length > count ? 'block' : 'none';
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
    }
    
    // Initialize blog page
    if (postsContainer) {
        // Initial render
        renderBlogPosts();
        
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
    
    // Newsletter form submission
    if (blogNewsletter) {
        blogNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`Thank you for subscribing to our newsletter! You'll receive design inspiration in your inbox.`);
                this.reset();
            }
        });
    }
});