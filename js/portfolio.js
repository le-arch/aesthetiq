// portfolio.js - Portfolio page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio data
    const portfolioItems = [
        // Residential projects (6 items)
        {
            id: 1,
            title: "Urban Apartment",
            category: ["residential", "modern"],
            description: "A contemporary living space in downtown Molyko featuring clean lines, natural materials, and smart technology integration.",
            longDescription: "This project involved a complete renovation of a downtown Chicago apartment. We focused on creating a seamless flow between spaces while maximizing natural light. The open-concept living area features custom built-ins, integrated lighting, and sustainable materials.",
            images: [
                "../images/l1.jpg",
                "../images/b2.jpg",
                "../images/d3.jpg"
            ],
            tags: ["Modern", "Residential", "Living Room", "Kitchen"],
            details: {
                location: "Molyko, CM",
                area: "1200 sq ft",
                duration: "3 months",
                budget: "85,000FCFA"
            },
            stats: {
                space: "1200",
                duration: "3",
                satisfaction: "100"
            }
        },
        {
            id: 2,
            title: "Victorian Elegance Dining",
            category: ["residential", "classic"],
            description: "Traditional dining room with modern amenities, preserving the historic character while adding contemporary comfort.",
            longDescription: "This Victorian home restoration project focused on preserving historic elements while introducing modern conveniences. We restored original woodwork, installed period-appropriate lighting, and selected furniture that complements the home's architectural style.",
            images: [
                "../images/kitchen.jpg",
                "../images/k1.jpg",
                "../images/dining.jpg"
            ],
            tags: ["Classic", "Residential", "Dining Room", "Historic"],
            details: {
                location: "Chief Street, Buea",
                area: "450 sq ft",
                duration: "2 months",
                budget: "405,000FCFA"
            },
            stats: {
                space: "450",
                duration: "2",
                satisfaction: "95"
            }
        },
        {
            id: 3,
            title: "Zen Kitchen",
            category: ["residential", "minimalist"],
            description: "Minimalist kitchen design with clean lines, hidden storage, and premium materials for a calm cooking environment.",
            longDescription: "This kitchen renovation focuses on creating a serene, clutter-free cooking space. We used natural materials like oak and marble, integrated appliances, and concealed storage solutions.",
            images: [
                "../images/d1.jpg",
                "../images/d2.jpg",
                "../images/d3.jpg"
            ],
            tags: ["Minimalist", "Residential", "Kitchen", "Renovation"],
            details: {
                location: "Buea Town",
                area: "300 sq ft",
                duration: "6 weeks",
                budget: "650,000FCFA"
            },
            stats: {
                space: "300",
                duration: "1.5",
                satisfaction: "100"
            }
        },
        {
            id: 4,
            title: "Lakeside Family Home",
            category: ["residential", "modern"],
            description: "Spacious family home with panoramic lake views and indoor-outdoor living integration.",
            longDescription: "Designed for a growing family, this lakeside property features floor-to-ceiling windows, multiple outdoor living spaces, and energy-efficient systems. The open plan encourages family interaction while providing private retreat spaces.",
            images: [
                "../images/lake1.jpg",
                "../images/lake2.jpg",
                "../images/lake3.jpg"
            ],
            tags: ["Modern", "Residential", "Family Home", "Lakeside"],
            details: {
                location: "Limbe, CM",
                area: "3500 sq ft",
                duration: "8 months",
                budget: "1,200,000FCFA"
            },
            stats: {
                space: "3500",
                duration: "8",
                satisfaction: "98"
            }
        },
        {
            id: 5,
            title: "Mountain Retreat Cabin",
            category: ["residential", "minimalist"],
            description: "Cozy minimalist cabin nestled in the mountains with sustainable materials and passive solar design.",
            longDescription: "This off-grid cabin utilizes passive solar principles, local timber, and high-performance insulation. The design maximizes views while minimizing environmental impact, creating a peaceful retreat that harmonizes with its natural surroundings.",
            images: [
                "../images/mount1.jpg",
                "../images/mount2.jpg",
                "../images/mount3.jpg"
            ],
            tags: ["Minimalist", "Residential", "Cabin", "Sustainable"],
            details: {
                location: "Mount Cameroon, Buea",
                area: "800 sq ft",
                duration: "5 months",
                budget: "750,000FCFA"
            },
            stats: {
                space: "800",
                duration: "5",
                satisfaction: "100"
            }
        },
        {
            id: 6,
            title: "Brownstone Renovation",
            category: ["residential", "classic"],
            description: "Complete restoration of a historic brownstone with updated systems and preserved architectural details.",
            longDescription: "We carefully restored this 19th-century brownstone, repairing original plasterwork, refinishing hardwood floors, and updating mechanical systems. Modern kitchen and bathrooms were added while maintaining the home's historic character.",
            images: [
                "../images/ren1.jpg",
                "../images/ren2.jpg",
                "../images/ren3.jpg"
            ],
            tags: ["Classic", "Residential", "Historic", "Restoration"],
            details: {
                location: "Old Town, Buea",
                area: "2800 sq ft",
                duration: "10 months",
                budget: "1,500,000FCFA"
            },
            stats: {
                space: "2800",
                duration: "10",
                satisfaction: "97"
            }
        },
        
        // Commercial projects (6 items)
        {
            id: 7,
            title: "Tech Hub Office",
            category: ["commercial", "modern"],
            description: "Innovative workspace for creative professionals featuring flexible work areas and collaborative spaces.",
            longDescription: "Designed for a growing tech startup, this office space emphasizes collaboration, flexibility, and employee wellbeing. The design includes open work areas, private phone booths, collaborative zones, and a fully-equipped kitchen.",
            images: [
                "../images/des.jpg",
                "../images/des1.jpg",
                "../images/image1.jpg"
            ],
            tags: ["Modern", "Commercial", "Office", "Workspace"],
            details: {
                location: "Santa Barara, Buea",
                area: "5000 sq ft",
                duration: "4 months",
                budget: "250,000FCFA"
            },
            stats: {
                space: "5000",
                duration: "4",
                satisfaction: "98"
            }
        },
        {
            id: 8,
            title: "Boutique Hotel Lobby",
            category: ["commercial", "classic"],
            description: "Elegant hotel lobby with luxurious materials and timeless design elements.",
            longDescription: "This boutique hotel lobby combines classic elegance with modern comfort. Custom millwork, imported marble, and carefully curated artwork create a welcoming first impression for guests.",
            images: [
                "../images/loby1.jpg",
                "../images/loby2.jpg",
                "../images/loby3.jpg"
            ],
            tags: ["Classic", "Commercial", "Hotel", "Hospitality"],
            details: {
                location: "Douala, CM",
                area: "2500 sq ft",
                duration: "6 months",
                budget: "1,800,000FCFA"
            },
            stats: {
                space: "2500",
                duration: "6",
                satisfaction: "99"
            }
        },
        {
            id: 9,
            title: "Minimalist Cafe",
            category: ["commercial", "minimalist"],
            description: "Clean, bright cafe design focusing on customer comfort and efficient workflow.",
            longDescription: "This cafe design prioritizes both customer experience and operational efficiency. Natural light, acoustic treatments, and strategic zoning create distinct areas for dining, working, and socializing.",
            images: [
                "../images/cafe1.jpg",
                "../images/cafe2.jpg",
                "../images/cafe3.jpg"
            ],
            tags: ["Minimalist", "Commercial", "Cafe", "Restaurant"],
            details: {
                location: "Bonduma, Buea",
                area: "1200 sq ft",
                duration: "3 months",
                budget: "950,000FCFA"
            },
            stats: {
                space: "1200",
                duration: "3",
                satisfaction: "96"
            }
        },
        {
            id: 10,
            title: "Medical Clinic",
            category: ["commercial", "modern"],
            description: "Modern healthcare facility designed for patient comfort and medical efficiency.",
            longDescription: "This clinic design focuses on creating a calming environment while meeting strict medical requirements. Infection-resistant materials, accessible design, and strategic layout optimize patient flow and staff efficiency.",
            images: [
                "../images/clinic1.jpg",
                "../images/clinic2.jpg",
                "../images/clinic3.jpg"
            ],
            tags: ["Modern", "Commercial", "Healthcare", "Clinic"],
            details: {
                location: "Molyko Medical Plaza",
                area: "4000 sq ft",
                duration: "5 months",
                budget: "2,100,000FCFA"
            },
            stats: {
                space: "4000",
                duration: "5",
                satisfaction: "100"
            }
        },
        {
            id: 11,
            title: "Co-Working Space",
            category: ["commercial", "minimalist"],
            description: "Flexible shared workspace with modular furniture and advanced technology infrastructure.",
            longDescription: "This co-working space adapts to various work styles with movable partitions, adjustable lighting, and diverse seating options. High-speed connectivity and sound masking systems ensure productivity.",
            images: [
                "../images/cowork1.jpg",
                "../images/cowork2.jpg",
                "../images/cowork3.jpg"
            ],
            tags: ["Minimalist", "Commercial", "Co-working", "Flexible"],
            details: {
                location: "Buea City Center",
                area: "6000 sq ft",
                duration: "4 months",
                budget: "1,600,000FCFA"
            },
            stats: {
                space: "6000",
                duration: "4",
                satisfaction: "97"
            }
        },
        {
            id: 12,
            title: "Traditional Bank Interior",
            category: ["commercial", "classic"],
            description: "Prestigious banking hall with solid materials and traditional architectural elements.",
            longDescription: "This bank design communicates stability and trust through classic materials like marble, mahogany, and brass. The layout balances security requirements with customer comfort and accessibility.",
            images: [
                "../images/bank1.jpg",
                "../images/bank2.jpg",
                "../images/bank3.jpg"
            ],
            tags: ["Classic", "Commercial", "Bank", "Institutional"],
            details: {
                location: "Commercial Ave, Douala",
                area: "8000 sq ft",
                duration: "9 months",
                budget: "3,500,000FCFA"
            },
            stats: {
                space: "8000",
                duration: "9",
                satisfaction: "98"
            }
        },
        
        // Additional Classic projects (6 items total)
        {
            id: 13,
            title: "French Country Kitchen",
            category: ["residential", "classic"],
            description: "Warm, inviting kitchen with rustic elements and traditional craftsmanship.",
            longDescription: "Inspired by French country homes, this kitchen features hand-painted cabinetry, a large farmhouse sink, and a custom range hood. Reclaimed wood beams and natural stone countertops add character.",
            images: [
                "../images/french1.jpg",
                "../images/french2.jpg",
                "../images/french3.jpg"
            ],
            tags: ["Classic", "Residential", "Kitchen", "Country"],
            details: {
                location: "Kumba, CM",
                area: "400 sq ft",
                duration: "3 months",
                budget: "850,000FCFA"
            },
            stats: {
                space: "400",
                duration: "3",
                satisfaction: "100"
            }
        },
        {
            id: 14,
            title: "Heritage Museum Gallery",
            category: ["commercial", "classic"],
            description: "Gallery space designed for artifact preservation and optimal viewing conditions.",
            longDescription: "This museum gallery uses archival-quality materials, specialized lighting, and climate control systems to protect valuable artifacts. The layout guides visitors through chronological exhibits while maintaining proper viewing distances.",
            images: [
                "../images/museum1.jpg",
                "../images/museum2.jpg",
                "../images/museum3.jpg"
            ],
            tags: ["Classic", "Commercial", "Museum", "Cultural"],
            details: {
                location: "National Museum, Yaoundé",
                area: "10000 sq ft",
                duration: "12 months",
                budget: "4,200,000FCFA"
            },
            stats: {
                space: "10000",
                duration: "12",
                satisfaction: "99"
            }
        },
        {
            id: 15,
            title: "Traditional Library",
            category: ["commercial", "classic"],
            description: "Wood-paneled library with custom shelving and dedicated reading nooks.",
            longDescription: "This academic library combines traditional aesthetics with modern functionality. Custom oak shelving, archival lighting, and acoustically treated spaces create an ideal environment for study and research.",
            images: [
                "../images/lib1.jpg",
                "../images/lib2.jpg",
                "../images/lib3.jpg"
            ],
            tags: ["Classic", "Commercial", "Library", "Academic"],
            details: {
                location: "University of Buea",
                area: "7500 sq ft",
                duration: "8 months",
                budget: "2,800,000FCFA"
            },
            stats: {
                space: "7500",
                duration: "8",
                satisfaction: "100"
            }
        },
        {
            id: 16,
            title: "Victorian Parlor Restoration",
            category: ["residential", "classic"],
            description: "Complete restoration of a 19th-century parlor with period-appropriate furnishings.",
            longDescription: "Every detail in this parlor restoration was researched and recreated authentically, from the wallpaper patterns to the gaslight-style fixtures. Original woodwork was meticulously restored and missing elements were recreated by master craftsmen.",
            images: [
                "../images/palor1.jpg",
                "../images/palor2.jpg",
                "../images/palor3.jpg"
            ],
            tags: ["Classic", "Residential", "Historic", "Restoration"],
            details: {
                location: "Historic District, Limbe",
                area: "600 sq ft",
                duration: "4 months",
                budget: "1,100,000FCFA"
            },
            stats: {
                space: "600",
                duration: "4",
                satisfaction: "98"
            }
        },
        {
            id: 17,
            title: "Traditional Law Office",
            category: ["commercial", "classic"],
            description: "Prestigious law firm offices with leather furnishings and wood paneling.",
            longDescription: "This law office design communicates professionalism and tradition. Custom bookcases, leather upholstery, and formal meeting spaces create an environment that instills confidence in clients while providing functional workspace for attorneys.",
            images: [
                "../images/law1.jpg",
                "../images/law2.jpg",
                "../images/law3.jpg"
            ],
            tags: ["Classic", "Commercial", "Office", "Professional"],
            details: {
                location: "Judicial Plaza, Yaoundé",
                area: "4500 sq ft",
                duration: "7 months",
                budget: "2,300,000FCFA"
            },
            stats: {
                space: "4500",
                duration: "7",
                satisfaction: "97"
            }
        },
        {
            id: 18,
            title: "Colonial Style Veranda",
            category: ["residential", "classic"],
            description: "Wraparound veranda with traditional columns and ceiling fans for tropical living.",
            longDescription: "This veranda addition provides essential outdoor living space in a tropical climate. Traditional architectural elements like turned columns, gingerbread trim, and beadboard ceilings complement the main house while creating a comfortable outdoor retreat.",
            images: [
                "../images/veranda1.jpg",
                "../images/veranda2.jpg",
                "../images/veranda3.jpg"
            ],
            tags: ["Classic", "Residential", "Outdoor", "Veranda"],
            details: {
                location: "Tiko, CM",
                area: "900 sq ft",
                duration: "2 months",
                budget: "650,000FCFA"
            },
            stats: {
                space: "900",
                duration: "2",
                satisfaction: "100"
            }
        },
        
        // Additional Modern projects (6 items total)
        {
            id: 19,
            title: "Smart Home Integration",
            category: ["residential", "modern"],
            description: "Fully automated home with integrated smart systems and energy management.",
            longDescription: "This smart home features whole-house automation with voice control, automated lighting and climate systems, and integrated security. All technology is concealed for a clean aesthetic while providing maximum functionality.",
            images: [
                "../images/smart1.jpg",
                "../images/smart2.jpg",
                "../images/smart3.jpg"
            ],
            tags: ["Modern", "Residential", "Smart Home", "Technology"],
            details: {
                location: "Bonamoussadi, Douala",
                area: "3200 sq ft",
                duration: "6 months",
                budget: "1,800,000FCFA"
            },
            stats: {
                space: "3200",
                duration: "6",
                satisfaction: "99"
            }
        },
        {
            id: 20,
            title: "Modern Art Gallery",
            category: ["commercial", "modern"],
            description: "White-box gallery with flexible wall systems and sophisticated lighting.",
            longDescription: "This contemporary art gallery features movable wall panels, track lighting systems, and climate-controlled storage. The design serves as a neutral backdrop that highlights the artwork while providing maximum flexibility for different exhibitions.",
            images: [
                "../images/gallery1.jpg",
                "../images/gallery2.jpg",
                "../images/gallery3.jpg"
            ],
            tags: ["Modern", "Commercial", "Gallery", "Art"],
            details: {
                location: "Art District, Douala",
                area: "5000 sq ft",
                duration: "5 months",
                budget: "1,900,000FCFA"
            },
            stats: {
                space: "5000",
                duration: "5",
                satisfaction: "98"
            }
        },
        {
            id: 21,
            title: "Loft-Style Apartment",
            category: ["residential", "modern"],
            description: "Industrial-chic loft with exposed elements and open spatial planning.",
            longDescription: "This loft conversion preserves industrial elements like exposed brick, ductwork, and concrete floors while adding modern comforts. Custom furniture pieces define zones within the open space without creating visual barriers.",
            images: [
                "../images/loft1.jpg",
                "../images/loft2.jpg",
                "../images/loft3.jpg"
            ],
            tags: ["Modern", "Residential", "Loft", "Industrial"],
            details: {
                location: "New Bell, Douala",
                area: "1800 sq ft",
                duration: "4 months",
                budget: "1,200,000FCFA"
            },
            stats: {
                space: "1800",
                duration: "4",
                satisfaction: "97"
            }
        },
        {
            id: 22,
            title: "Corporate Headquarters",
            category: ["commercial", "modern"],
            description: "Flagship corporate office with branded environment and collaborative zones.",
            longDescription: "This corporate headquarters reflects the company's brand through color, materials, and spatial organization. Multiple collaboration areas, touchdown stations, and formal meeting rooms support various work modes while reinforcing corporate identity.",
            images: [
                "../images/cop1.jpg",
                "../images/cop2.jpg",
                "../images/cop3.jpg"
            ],
            tags: ["Modern", "Commercial", "Corporate", "Headquarters"],
            details: {
                location: "Douala Business District",
                area: "25000 sq ft",
                duration: "10 months",
                budget: "5,600,000FCFA"
            },
            stats: {
                space: "25000",
                duration: "10",
                satisfaction: "99"
            }
        },
        {
            id: 23,
            title: "Modern Rooftop Terrace",
            category: ["residential", "modern"],
            description: "Urban rooftop retreat with outdoor kitchen, seating areas, and city views.",
            longDescription: "This rooftop design transforms unused space into a multifunctional outdoor living area. Weather-resistant materials, integrated lighting, and strategic planting create distinct zones for dining, lounging, and gardening with panoramic city views.",
            images: [
                "../images/rooftop1.jpg",
                "../images/rooftop2.jpg",
                "../images/rooftop3.jpg"
            ],
            tags: ["Modern", "Residential", "Rooftop", "Outdoor"],
            details: {
                location: "Akwa, Douala",
                area: "1200 sq ft",
                duration: "3 months",
                budget: "950,000FCFA"
            },
            stats: {
                space: "1200",
                duration: "3",
                satisfaction: "100"
            }
        },
        {
            id: 24,
            title: "Modern Retail Store",
            category: ["commercial", "modern"],
            description: "Sleek retail environment with flexible displays and immersive brand experience.",
            longDescription: "This retail design uses modular display systems, interactive technology, and strategic lighting to create an engaging shopping experience. The layout encourages exploration while maintaining clear circulation paths and visual merchandising opportunities.",
            images: [
                "../images/ret1.jpg",
                "../images/ret2.jpg",
                "../images/ret3.jpg"
            ],
            tags: ["Modern", "Commercial", "Retail", "Store"],
            details: {
                location: "Douala Grand Mall",
                area: "3000 sq ft",
                duration: "4 months",
                budget: "1,400,000FCFA"
            },
            stats: {
                space: "3000",
                duration: "4",
                satisfaction: "96"
            }
        },
        
        // Additional Minimalist projects (6 items total)
        {
            id: 25,
            title: "Monochromatic Apartment",
            category: ["residential", "minimalist"],
            description: "All-white apartment with textural variation and hidden storage solutions.",
            longDescription: "This monochromatic design uses varying textures, materials, and light to create interest within a limited color palette. Every element serves multiple functions, and storage is completely concealed to maintain visual simplicity.",
            images: [
                "../images/mono1.jpg",
                "../images/mono2.jpg",
                "../images/mono3.jpg"
            ],
            tags: ["Minimalist", "Residential", "Monochromatic", "Apartment"],
            details: {
                location: "Bonapriso, Douala",
                area: "1100 sq ft",
                duration: "3 months",
                budget: "850,000FCFA"
            },
            stats: {
                space: "1100",
                duration: "3",
                satisfaction: "100"
            }
        },
        {
            id: 26,
            title: "Minimalist Yoga Studio",
            category: ["commercial", "minimalist"],
            description: "Serene practice space with natural light, clean lines, and acoustic treatment.",
            longDescription: "This yoga studio design eliminates visual distractions to support meditation and practice. Specialized flooring, indirect lighting, and carefully controlled acoustics create an environment conducive to mindfulness and physical practice.",
            images: [
                "../images/yoga1.jpg",
                "../images/yoga2.jpg",
                "../images/yoga3.jpg"
            ],
            tags: ["Minimalist", "Commercial", "Wellness", "Studio"],
            details: {
                location: "Bonanjo, Douala",
                area: "2000 sq ft",
                duration: "3 months",
                budget: "1,100,000FCFA"
            },
            stats: {
                space: "2000",
                duration: "3",
                satisfaction: "99"
            }
        },
        {
            id: 27,
            title: "Floating Staircase Residence",
            category: ["residential", "minimalist"],
            description: "Home centered around a sculptural floating staircase as the focal point.",
            longDescription: "The design of this home revolves around a cantilevered staircase that appears to float. All other elements are subdued to highlight this architectural feature, creating a dramatic yet minimalist interior.",
            images: [
                "../images/stair1.jpg",
                "../images/stair2.jpg",
                "../images/stair3.jpg"
            ],
            tags: ["Minimalist", "Residential", "Architectural", "Staircase"],
            details: {
                location: "Bastos, Yaoundé",
                area: "2800 sq ft",
                duration: "7 months",
                budget: "2,200,000FCFA"
            },
            stats: {
                space: "2800",
                duration: "7",
                satisfaction: "98"
            }
        },
        {
            id: 28,
            title: "Japanese-Inspired Bathroom",
            category: ["residential", "minimalist"],
            description: "Spa-like bathroom with natural materials and wet room design.",
            longDescription: "Inspired by Japanese bathhouses, this bathroom features a fully integrated wet room, natural stone, and wood accents. The design emphasizes tranquility, cleanliness, and connection to natural elements.",
            images: [
                "../images/bath1.jpg",
                "../images/bath2.jpg",
                "../images/t1.jpg"
            ],
            tags: ["Minimalist", "Residential", "Bathroom", "Spa"],
            details: {
                location: "Melen, Yaoundé",
                area: "350 sq ft",
                duration: "2 months",
                budget: "750,000FCFA"
            },
            stats: {
                space: "350",
                duration: "2",
                satisfaction: "100"
            }
        },
        {
            id: 29,
            title: "Minimalist Bookstore",
            category: ["commercial", "minimalist"],
            description: "Clean, organized bookstore with curated displays and reading nooks.",
            longDescription: "This bookstore design eliminates visual clutter to focus attention on the books themselves. Custom shelving, strategic lighting, and comfortable seating areas create an inviting environment for browsing and reading.",
            images: [
                "../images/store1.jpg",
                "../images/store2.jpg",
                "../images/store3.jpg"
            ],
            tags: ["Minimalist", "Commercial", "Bookstore", "Retail"],
            details: {
                location: "University District, Buea",
                area: "2800 sq ft",
                duration: "4 months",
                budget: "1,300,000FCFA"
            },
            stats: {
                space: "2800",
                duration: "4",
                satisfaction: "97"
            }
        },
        {
            id: 30,
            title: "Micro-Apartment Solution",
            category: ["residential", "minimalist"],
            description: "Efficient 400 sq ft apartment with transformable furniture and smart storage.",
            longDescription: "This micro-apartment demonstrates how intelligent design can maximize small spaces. Every piece of furniture serves multiple functions, walls slide to transform room functions, and vertical storage utilizes every inch of available space.",
            images: [
                "../images/micro1.jpg",
                "../images/micro2.jpg",
                "../images/micro3.jpg"
            ],
            tags: ["Minimalist", "Residential", "Small Space", "Efficient"],
            details: {
                location: "Molyko Student Area",
                area: "400 sq ft",
                duration: "2 months",
                budget: "550,000FCFA"
            },
            stats: {
                space: "400",
                duration: "2",
                satisfaction: "96"
            }
        }
    ];
    
        
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
