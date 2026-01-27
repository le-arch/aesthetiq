// Virtual Tours JavaScript - Consolidated Version with Fixes
document.addEventListener('DOMContentLoaded', function() {
    // Tours data with 12 tours total (3 in each category)
    const virtualTours = [
        // Residential Category
        {
            id: 1,
            title: "Modern Limbe Penthouse",
            category: ["residential", "luxury", "modern"],
            description: "Experience this breathtaking 360° tour of our latest luxury penthouse project.",
            scenes: [
                "../images/pent1.jpg",
                "../images/ex2.jpg",
                "../images/9.jpg"
            ],
            roomSpecificImages: {
                kitchen: "../images/k1.jpg",
                bedroom: "../images/12.jpg",
                bathroom: "../images/t2.jpg"
            },
            details: {
                type: "Luxury Residential Penthouse",
                area: "3,500 sq ft",
                location: "Bastos, Yaoundé, Cameroon",
                completion: "December 2023",
                style: "Modern Contemporary"
            },
            vrCompatible: true,
            vrVideo: "../videos/v1.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "15-20 minutes"
        },
        {
            id: 2,
            title: "Coastal Limbe Retreat",
            category: ["residential", "luxury"],
            description: "Step into this stunning beachfront property with indoor-outdoor living and ocean views.",
            scenes: [
                "../images/beach.jpg",
                "../images/lake3.jpg",
                "../images/3.jpg"
            ],
            roomSpecificImages: {
                kitchen: "../images/french3.jpg",
                bedroom: "../images/b1.jpg",
                bathroom: "../images/t3.jpg"
            },
            details: {
                type: "Beachfront Villa",
                area: "4,200 sq ft",
                location: "Limbe, Southwest Cameroon",
                completion: "August 2023",
                style: "Coastal Contemporary"
            },
            vrCompatible: true,
            vrVideo: "../videos/v2.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "20-25 minutes"
        },
        {
            id: 3,
            title: "Traditional Bamenda Villa",
            category: ["residential", "luxury"],
            description: "Experience traditional Cameroonian architecture with modern amenities.",
            scenes: [
                "../images/ex4.jpg",
                "../images/5.jpg",
                "../images/background.jpg"
            ],
            roomSpecificImages: {
                kitchen: "../images/kitchen.jpg",
                bedroom: "../images/b2.jpg",
                bathroom: "../images/t4.jpg"
            },
            details: {
                type: "Traditional Villa",
                area: "3,800 sq ft",
                location: "Bamenda, Northwest Cameroon",
                completion: "January 2024",
                style: "Traditional Cameroonian"
            },
            vrCompatible: true,
            vrVideo: "../videos/v3.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "18-22 minutes"
        },
        // Commercial Category - FIXED
        {
            id: 4,
            title: "Yaoundé Corporate Offices",
            category: ["commercial", "modern", "luxury"],
            description: "State-of-the-art corporate office space in Cameroon's capital.",
            scenes: [
                "../images/cop1.jpg",
                "../images/o1.jpg",
                "../images/office.jpg"
            ],
            roomSpecificImages: {
                conference: "../images/image4.jpg",
                lobby: "../images/loby1.jpg",
                workspace: "../images/cowork3.jpg"
            },
            details: {
                type: "Corporate Offices",
                area: "12,500 sq ft",
                location: "Centre Region, Yaoundé, Cameroon",
                completion: "October 2023",
                style: "Modern Corporate"
            },
            vrCompatible: true,
            vrVideo: "../videos/v4.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "25-30 minutes"
        },
        {
            id: 5,
            title: "Douala Luxury Boutique Hotel",
            category: ["commercial", "luxury"],
            description: "Five-star boutique hotel design with African contemporary aesthetics.",
            scenes: [
                "../images/3.jpg",
                "../images/8.jpg",
                "../images/10.jpg"
            ],
            roomSpecificImages: {
                lobby: "../images/loby2.jpg",
                suite: "../images/image4.jpg",
                restaurant: "../images/cafe.jpg"
            },
            details: {
                type: "Boutique Hotel",
                area: "25,000 sq ft",
                location: "Akwa, Douala, Cameroon",
                completion: "September 2023",
                style: "African Contemporary Luxury"
            },
            vrCompatible: true,
            vrVideo: "../videos/v5.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "30-35 minutes"
        },
        {
            id: 6,
            title: "Buea Tech Hub Workspace",
            category: ["commercial", "modern"],
            description: "Innovative co-working space designed for tech startups.",
            scenes: [
                "../images/o4.jpg",
                "../images/office1.jpg",
                "../images/office.jpg"
            ],
            roomSpecificImages: {
                workspace: "../images/des1.jpg",
                meeting: "../images/des.jpg",
                lounge: "../images/image1.jpg"
            },
            details: {
                type: "Tech Workspace",
                area: "8,500 sq ft",
                location: "Molyko, Buea, Cameroon",
                completion: "July 2023",
                style: "Modern Industrial"
            },
            vrCompatible: true,
            vrVideo: "../videos/v6.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "20-25 minutes"
        },
        // Luxury Category
        {
            id: 7,
            title: "Mount Cameroon Luxury Lodge",
            category: ["luxury", "residential"],
            description: "Exclusive mountain retreat with breathtaking views.",
            scenes: [
                "../images/mount1.jpg",
                "../images/t6.jpg",
                "../images/mount3.jpg"
            ],
            roomSpecificImages: {
                master: "../images/bedroom.jpg",
                dining: "../images/dining.jpg",
                patio: "../images/rooftop2.jpg"
            },
            details: {
                type: "Mountain Lodge",
                area: "5,500 sq ft",
                location: "Buea, Southwest Cameroon",
                completion: "May 2023",
                style: "Luxury Mountain Retreat"
            },
            vrCompatible: true,
            vrVideo: "../videos/v7.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "22-28 minutes"
        },
        {
            id: 8,
            title: "Limbé Oceanfront Estate",
            category: ["luxury", "residential"],
            description: "Ultimate luxury living with private beach access.",
            scenes: [
                "../images/image7.jpg",
                "../images/image8.jpg",
                "../images/l3.jpg"
            ],
            roomSpecificImages: {
                pool: "../images/pool.jpg",
                living: "../images/h1.jpg",
                bedroom: "../images/b3.jpg"
            },
            details: {
                type: "Oceanfront Estate",
                area: "6,800 sq ft",
                location: "Limbe, Southwest Cameroon",
                completion: "April 2023",
                style: "Ultra-Luxury Coastal"
            },
            vrCompatible: true,
            vrVideo: "../videos/v9.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "28-35 minutes"
        },
        {
            id: 9,
            title: "Yaoundé Presidential Suite",
            category: ["luxury", "commercial"],
            description: "Most luxurious hotel suite in Central Africa.",
            scenes: [
                "../images/livingroom.jpg",
                "../images/t6.jpg",
                "../images/13.jpg"
            ],
            roomSpecificImages: {
                suite: "../images/suite.jpg",
                bathroom: "../images/bath2.jpg",
                balcony: "../images/bal1.jpg"
            },
            details: {
                type: "Presidential Hotel Suite",
                area: "3,200 sq ft",
                location: "Yaoundé, Cameroon",
                completion: "February 2023",
                style: "Ultimate Luxury"
            },
            vrCompatible: true,
            vrVideo: "../videos/v8.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "25-30 minutes"
        },
        // Modern Category
        {
            id: 10,
            title: "Urban Loft Studio Douala",
            category: ["modern", "residential"],
            description: "Explore this sleek urban loft with industrial design elements.",
            scenes: [
                "../images/image3.jpg",
                "../images/loft3.jpg",
                "../images/11.jpg"
            ],
            roomSpecificImages: {
                kitchen: "../images/d2.jpg",
                bedroom: "../images/b5.jpg",
                bathroom: "../images/bath1.jpg"
            },
            details: {
                type: "Urban Loft",
                area: "1,800 sq ft",
                location: "Bonapriso, Douala, Cameroon",
                completion: "June 2023",
                style: "Industrial Modern"
            },
            vrCompatible: false,
            vrVideo: "../videos/v10.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "10-15 minutes"
        },
        {
            id: 11,
            title: "Minimalist Buea Apartment",
            category: ["modern", "residential", "luxury"],
            description: "Experience the serenity of Japanese minimalist design in this Buea apartment.",
            scenes: [
               "../images/l2.jpg",
                "../images/mono3.jpg",
                "../images/smarthome.jpg"
            ],
            roomSpecificImages: {
                kitchen: "../images/m3.jpg",
                bedroom: "../images/b3.jpg",
                bathroom: "../images/bath.jpg"
            },
            details: {
                type: "Modern Apartment",
                area: "2,200 sq ft",
                location: "Molyko, Buea, Cameroon",
                completion: "March 2023",
                style: "Japanese Minimalist"
            },
            vrCompatible: true,
            vrVideo: "../videos/v11.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "15-20 minutes"
        },
        {
            id: 12,
            title: "Contemporary Kribi Residence",
            category: ["modern", "residential"],
            description: "Modern beachside living with panoramic ocean views.",
            scenes: [
               "../images/houses.jpg",
                "../images/g4.jpg",
                "../images/b3.jpg"
            ],
            roomSpecificImages: {
                kitchen: "../images/d1.jpg",
                bedroom: "../images/b6.jpg",
                bathroom: "../images/bath1.jpg"
            },
            details: {
                type: "Beach Residence",
                area: "3,200 sq ft",
                location: "Kribi, South Cameroon",
                completion: "November 2023",
                style: "Contemporary Coastal"
            },
            vrCompatible: true,
            vrVideo: "../videos/v12.mp4",
            audioGuide: true,
            audioFile: "audio/audio.mp3",
            duration: "16-20 minutes"
        }
    ];
    
    // DOM Elements
    const toursContainer = document.getElementById('toursContainer');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const tourModal = document.getElementById('tourModal');
    const closeTourModal = document.querySelector('.close-tour-modal');
    const tourModalBody = document.querySelector('.tour-modal-body');
    const featuredTourContainer = document.getElementById('featuredTour');
    
    // Current tour state
    let currentTour = null;
    let currentSceneIndex = 0;
    let slideInterval = null;
    let autoSlideEnabled = true;
    let audioPlaying = false;
    let vrModeActive = false;
    
    // Helper function to get room icons
    function getRoomIcon(room) {
        const icons = {
            kitchen: 'utensils',
            bedroom: 'bed',
            bathroom: 'bath',
            living: 'couch',
            dining: 'utensils',
            pool: 'swimming-pool',
            lobby: 'door-open',
            conference: 'users',
            workspace: 'laptop',
            meeting: 'users',
            lounge: 'couch',
            master: 'crown',
            patio: 'sun',
            suite: 'door-closed',
            balcony: 'mountain',
            restaurant: 'utensils'
        };
        return icons[room] || 'door-open';
    }
    
    // Render tours - FIXED for commercial filter
    function renderTours(category = 'all') {
        if (!toursContainer) return;
        
        toursContainer.innerHTML = '';
        
        const filteredTours = category === 'all' 
            ? virtualTours 
            : virtualTours.filter(tour => tour.category.includes(category));
        
        if (filteredTours.length === 0) {
            toursContainer.innerHTML = '<p class="no-tours">No tours found for this category.</p>';
            return;
        }
        
        filteredTours.forEach(tour => {
            const tourCard = document.createElement('div');
            tourCard.className = 'tour-card';
            tourCard.setAttribute('data-id', tour.id);
            
            tourCard.innerHTML = `
                <div class="tour-card-image">
                    <div class="tour-card-slider">
                        ${tour.scenes.slice(0, 3).map((scene, index) => 
                            `<div class="tour-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${scene}" alt="${tour.title} - Scene ${index + 1}">
                            </div>`
                        ).join('')}
                    </div>
                    <div class="tour-card-slider-controls">
                        <button class="slider-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
                        <div class="slider-dots">
                            ${tour.scenes.slice(0, 3).map((_, index) => 
                                `<span class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
                            ).join('')}
                        </div>
                        <button class="slider-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    ${tour.vrCompatible ? '<span class="tour-card-badge">VR Compatible</span>' : ''}
                </div>
                <div class="tour-card-content">
                    <h3>${tour.title}</h3>
                    <p class="tour-card-description">${tour.description}</p>
                    <div class="tour-card-meta">
                        <span><i class="far fa-clock"></i> ${tour.duration}</span>
                        <span><i class="far fa-compass"></i> ${tour.scenes.length} scenes</span>
                    </div>
                    <button class="start-tour-btn" data-id="${tour.id}">
                        <i class="fas fa-play-circle"></i> Start Tour
                    </button>
                </div>
            `;
            
            toursContainer.appendChild(tourCard);
            
            // Add event listeners to card slider
            const cardSlider = tourCard.querySelector('.tour-card-slider');
            const cardSliderControls = tourCard.querySelector('.tour-card-slider-controls');
            const cardPrevBtn = tourCard.querySelector('.slider-prev');
            const cardNextBtn = tourCard.querySelector('.slider-next');
            const cardDots = tourCard.querySelectorAll('.slider-dot');
            
            let cardCurrentSlide = 0;
            const cardTotalSlides = Math.min(tour.scenes.length, 3);
            
            function showCardSlide(index) {
                const slides = tourCard.querySelectorAll('.tour-slide');
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
                
                cardDots.forEach(dot => dot.classList.remove('active'));
                cardDots[index].classList.add('active');
                
                cardCurrentSlide = index;
            }
            
            function nextCardSlide() {
                cardCurrentSlide = (cardCurrentSlide + 1) % cardTotalSlides;
                showCardSlide(cardCurrentSlide);
            }
            
            function prevCardSlide() {
                cardCurrentSlide = (cardCurrentSlide - 1 + cardTotalSlides) % cardTotalSlides;
                showCardSlide(cardCurrentSlide);
            }
            
            // Auto slide every 3 seconds
            let cardAutoSlide = setInterval(nextCardSlide, 3000);
            
            // Pause auto-slide on hover
            cardSlider.addEventListener('mouseenter', () => clearInterval(cardAutoSlide));
            cardSlider.addEventListener('mouseleave', () => {
                clearInterval(cardAutoSlide);
                cardAutoSlide = setInterval(nextCardSlide, 3000);
            });
            
            // Navigation controls
            cardPrevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                clearInterval(cardAutoSlide);
                prevCardSlide();
            });
            
            cardNextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                clearInterval(cardAutoSlide);
                nextCardSlide();
            });
            
            // Dot navigation
            cardDots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    clearInterval(cardAutoSlide);
                    const index = parseInt(dot.getAttribute('data-index'));
                    showCardSlide(index);
                });
            });
        });
        
        // Add event listeners to start tour buttons
        document.querySelectorAll('.start-tour-btn').forEach(button => {
            button.addEventListener('click', function() {
                const tourId = parseInt(this.getAttribute('data-id'));
                openTour(tourId);
            });
        });
    }
    
    // Open tour - UPDATED for VR and Audio
    function openTour(tourId) {
        currentTour = virtualTours.find(t => t.id === tourId);
        if (!currentTour) return;
        
        currentSceneIndex = 0;
        
        if (!tourModalBody) {
            console.error('Modal body element not found!');
            return;
        }
        
        tourModalBody.innerHTML = `
            <div class="tour-modal-viewer">
                <div class="tour-modal-navigation">
                    <button class="modal-prev-btn" ${currentTour.scenes.length <= 1 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="tour-modal-scene">
                        <div class="modal-slider-container">
                            ${currentTour.scenes.map((scene, index) => `
                                <div class="modal-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                                    <img src="${scene}" alt="${currentTour.title} - Scene ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <button class="modal-next-btn" ${currentTour.scenes.length <= 1 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="tour-modal-controls">
                    <div class="scene-indicator">
                        ${currentTour.scenes.map((_, index) => 
                            `<span class="scene-dot ${index === currentSceneIndex ? 'active' : ''}" 
                                   data-index="${index}"
                                   ${currentTour.scenes.length <= 1 ? 'style="display: none;"' : ''}></span>`
                        ).join('')}
                    </div>
                    <div class="modal-control-buttons">
                        <button class="modal-control-btn" id="modalAutoSlideBtn" title="Toggle Auto Slide">
                            <i class="fas fa-pause"></i>
                        </button>
                        <button class="modal-control-btn" id="modalFullscreenBtn" title="Fullscreen">
                            <i class="fas fa-expand"></i>
                        </button>
                        ${currentTour.vrCompatible && currentTour.vrVideo ? `
                        <button class="modal-control-btn" id="modalVrBtn" title="VR Mode">
                            <i class="fas fa-vr-cardboard"></i>
                        </button>
                        ` : ''}
                        ${currentTour.audioGuide ? `
                        <button class="modal-control-btn" id="modalAudioBtn" title="Audio Guide">
                            <i class="fas fa-volume-up"></i>
                        </button>
                        ` : ''}
                    </div>
                </div>
                <div class="tour-modal-info">
                    <h3>${currentTour.title}</h3>
                    <div class="tour-modal-details">
                        ${Object.entries(currentTour.details).map(([key, value]) => {
                            const label = key.charAt(0).toUpperCase() + key.slice(1);
                            return `
                            <div class="modal-detail-item">
                                <h4>${label}</h4>
                                <p>${value}</p>
                            </div>
                            `;
                        }).join('')}
                    </div>
                    <div class="tour-room-nav">
                        ${Object.keys(currentTour.roomSpecificImages || {}).map(room => `
                            <button class="room-btn" data-room="${room}">
                                <i class="fas fa-${getRoomIcon(room)}"></i> ${room.charAt(0).toUpperCase() + room.slice(1)}
                            </button>
                        `).join('')}
                    </div>
                    <div class="tour-scene-counter">
                        Scene ${currentSceneIndex + 1} of ${currentTour.scenes.length}
                    </div>
                </div>
                <div id="vrContainer" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000; z-index: 100;">
                    <video id="vrVideo" autoplay controls style="width: 100%; height: 100%; object-fit: contain; background: #000;">
                        <source src="${currentTour.vrVideo}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="vr-controls" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 10;">
                        <button class="btn btn-primary" id="exitVrBtn" style="padding: 10px 20px; background: rgba(0,0,0,0.8); color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;">
                            <i class="fas fa-times"></i> Exit VR Mode
                        </button>
                    </div>
                    <div id="videoError" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; z-index: 11;">
                        <p style="font-size: 18px; margin-bottom: 10px;">Video not available</p>
                        <p style="font-size: 14px; color: #999;">The video could not be loaded. Please try another tour.</p>
                    </div>
                </div>
                <audio id="tourAudio" loop>
                    <source src="${currentTour.audioFile}" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `;
        
        tourModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Start auto-slide
        startAutoSlide();
        
        // Add event listeners to modal controls
        setupTourModalControls();
        
        // Add room navigation functionality
        setupRoomNavigation();
    }
    
    // Setup room navigation
    function setupRoomNavigation() {
        const roomButtons = document.querySelectorAll('.room-btn');
        roomButtons.forEach(button => {
            button.addEventListener('click', function() {
                const room = this.getAttribute('data-room');
                showRoomImage(room);
            });
        });
    }
    
    // Show room-specific image - IMPROVED
    function showRoomImage(room) {
        if (!currentTour || !currentTour.roomSpecificImages || !currentTour.roomSpecificImages[room]) return;
        
        const roomImage = currentTour.roomSpecificImages[room];
        const modalSliderContainer = document.querySelector('.modal-slider-container');
        
        if (modalSliderContainer) {
            // Save current state
            const originalScenes = currentTour.scenes;
            const originalIndex = currentSceneIndex;
            
            // Show room image
            modalSliderContainer.innerHTML = `
                <div class="modal-slide active room-slide" data-index="0">
                    <img src="${roomImage}" alt="${currentTour.title} - ${room}">
                    <div class="room-overlay">
                        <h4>${room.charAt(0).toUpperCase() + room.slice(1)}</h4>
                        <p>Click anywhere or press ESC to return to tour</p>
                    </div>
                </div>
            `;
            
            // Hide scene dots
            document.querySelector('.scene-indicator').style.display = 'none';
            
            // Add click anywhere to return
            modalSliderContainer.addEventListener('click', function returnToTour() {
                // Restore original tour scenes
                modalSliderContainer.innerHTML = originalScenes.map((scene, index) => `
                    <div class="modal-slide ${index === originalIndex ? 'active' : ''}" data-index="${index}">
                        <img src="${scene}" alt="${currentTour.title} - Scene ${index + 1}">
                    </div>
                `).join('');
                
                // Show scene dots again
                document.querySelector('.scene-indicator').style.display = 'flex';
                
                // Update scene indicator
                currentSceneIndex = originalIndex;
                updateTourScene();
                
                // Remove the event listener
                modalSliderContainer.removeEventListener('click', returnToTour);
            });
            
            // Also return on ESC key
            const returnOnEsc = (e) => {
                if (e.key === 'Escape') {
                    modalSliderContainer.click();
                    document.removeEventListener('keydown', returnOnEsc);
                }
            };
            document.addEventListener('keydown', returnOnEsc);
        }
    }
    
    // Start auto slide
    function startAutoSlide() {
        if (!currentTour || currentTour.scenes.length <= 1) return;
        
        clearInterval(slideInterval);
        autoSlideEnabled = true;
        
        slideInterval = setInterval(() => {
            if (autoSlideEnabled && !vrModeActive) {
                navigateToScene(1);
            }
        }, 4000);
        
        const autoSlideBtn = document.getElementById('modalAutoSlideBtn');
        if (autoSlideBtn) {
            autoSlideBtn.innerHTML = '<i class="fas fa-pause"></i>';
            autoSlideBtn.title = "Pause Auto Slide";
        }
    }
    
    // Stop auto slide
    function stopAutoSlide() {
        clearInterval(slideInterval);
        autoSlideEnabled = false;
        
        const autoSlideBtn = document.getElementById('modalAutoSlideBtn');
        if (autoSlideBtn) {
            autoSlideBtn.innerHTML = '<i class="fas fa-play"></i>';
            autoSlideBtn.title = "Start Auto Slide";
        }
    }
    
    // Toggle auto slide
    function toggleAutoSlide() {
        if (autoSlideEnabled) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    }
    
    // Setup tour modal controls - UPDATED for VR and Audio
    function setupTourModalControls() {
        if (!currentTour) return;
        
        // Navigation buttons
        const prevBtn = document.querySelector('.modal-prev-btn');
        const nextBtn = document.querySelector('.modal-next-btn');
        const sceneDots = document.querySelectorAll('.scene-dot');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                navigateToScene(-1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                navigateToScene(1);
            });
        }
        
        // Scene dots
        sceneDots.forEach(dot => {
            dot.addEventListener('click', function() {
                stopAutoSlide();
                const index = parseInt(this.getAttribute('data-index'));
                if (index !== currentSceneIndex) {
                    currentSceneIndex = index;
                    updateTourScene();
                }
            });
        });
        
        // Control buttons
        const modalAutoSlideBtn = document.getElementById('modalAutoSlideBtn');
        const modalFullscreenBtn = document.getElementById('modalFullscreenBtn');
        const modalVrBtn = document.getElementById('modalVrBtn');
        const modalAudioBtn = document.getElementById('modalAudioBtn');
        
        if (modalAutoSlideBtn && currentTour.scenes.length > 1) {
            modalAutoSlideBtn.addEventListener('click', toggleAutoSlide);
        }
        
        if (modalFullscreenBtn) {
            modalFullscreenBtn.addEventListener('click', toggleFullscreen);
        }
        
        if (modalVrBtn && currentTour.vrVideo) {
            modalVrBtn.addEventListener('click', toggleVrMode);
        }
        
        if (modalAudioBtn && currentTour.audioGuide) {
            setupAudioControls();
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
        
        // Touch/swipe support for mobile
        setupSwipeSupport();
    }
    
    // Toggle VR Mode - IMPROVED
    function toggleVrMode() {
        const vrContainer = document.getElementById('vrContainer');
        const tourScene = document.querySelector('.tour-modal-scene');
        const vrVideo = document.getElementById('vrVideo');
        const modalVrBtn = document.getElementById('modalVrBtn');
        const tourModalViewer = document.querySelector('.tour-modal-viewer');
        const videoError = document.getElementById('videoError');
        
        if (!vrContainer || !tourScene) return;
        
        if (vrModeActive) {
            // Exit VR Mode
            if (vrVideo) {
                vrVideo.pause();
            }
            vrContainer.style.display = 'none';
            tourScene.style.display = 'block';
            if (tourModalViewer) {
                tourModalViewer.style.position = 'relative';
            }
            if (modalVrBtn) {
                modalVrBtn.innerHTML = '<i class="fas fa-vr-cardboard"></i>';
                modalVrBtn.title = "Enter VR Mode";
            }
            vrModeActive = false;
            
            // Restart auto slide if it was enabled
            if (autoSlideEnabled) {
                startAutoSlide();
            }
        } else {
            // Enter VR Mode
            stopAutoSlide(); // Stop auto slide in VR mode
            tourScene.style.display = 'none';
            if (tourModalViewer) {
                tourModalViewer.style.position = 'relative';
            }
            vrContainer.style.display = 'block';
            
            if (vrVideo && currentTour && currentTour.vrVideo) {
                // Reset error display
                if (videoError) {
                    videoError.style.display = 'none';
                }
                
                // Set src to ensure video loads
                const sourceElement = vrVideo.querySelector('source') || document.createElement('source');
                sourceElement.src = currentTour.vrVideo;
                sourceElement.type = 'video/mp4';
                if (!vrVideo.querySelector('source')) {
                    vrVideo.appendChild(sourceElement);
                }
                
                vrVideo.load();
                
                vrVideo.play().catch(e => {
                    console.log("Video autoplay prevented or error:", e);
                    // Show play button overlay
                    const playOverlay = document.createElement('div');
                    playOverlay.className = 'vr-play-overlay';
                    playOverlay.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); cursor: pointer; z-index: 9; display: flex; align-items: center; justify-content: center;';
                    playOverlay.innerHTML = `
                        <div class="vr-play-content" style="text-align: center; color: white;">
                            <i class="fas fa-play-circle" style="font-size: 3rem; margin-bottom: 10px; display: block;"></i>
                            <h3 style="margin: 10px 0; font-size: 18px;">Click to Play VR Video</h3>
                            <p style="margin: 0; font-size: 14px; color: #ccc;">Experience this tour in virtual reality</p>
                        </div>
                    `;
                    vrContainer.appendChild(playOverlay);
                    
                    playOverlay.addEventListener('click', (e) => {
                        e.stopPropagation();
                        vrVideo.play().catch(err => {
                            console.error("Video play error:", err);
                            if (videoError) {
                                videoError.style.display = 'block';
                            }
                        });
                        playOverlay.remove();
                    });
                });
                
                // Handle video errors
                vrVideo.onerror = function() {
                    console.error("Video loading error");
                    if (videoError) {
                        videoError.style.display = 'block';
                    }
                };
            }
            
            if (modalVrBtn) {
                modalVrBtn.innerHTML = '<i class="fas fa-times"></i>';
                modalVrBtn.title = "Exit VR Mode";
            }
            vrModeActive = true;
        }
        
        // Exit VR button
        const exitVrBtn = document.getElementById('exitVrBtn');
        if (exitVrBtn) {
            exitVrBtn.onclick = toggleVrMode;
        }
    }
    
    // Setup Audio Controls - IMPROVED
    function setupAudioControls() {
        const modalAudioBtn = document.getElementById('modalAudioBtn');
        const audioElement = document.getElementById('tourAudio');
        
        if (!modalAudioBtn || !audioElement) return;
        
        // Check if audio file exists
        audioElement.addEventListener('error', () => {
            console.error(`Audio file not found: ${currentTour.audioFile}`);
            modalAudioBtn.style.display = 'none';
            // Create a fallback audio guide using text-to-speech
            setupFallbackAudioGuide();
        });
        
        modalAudioBtn.addEventListener('click', () => {
            if (audioPlaying) {
                audioElement.pause();
                modalAudioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                modalAudioBtn.title = "Start Audio Guide";
                modalAudioBtn.classList.remove('playing');
                audioPlaying = false;
            } else {
                audioElement.play().catch(e => {
                    console.log("Audio play prevented:", e);
                    // Try with user interaction
                    audioElement.play().then(() => {
                        modalAudioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                        modalAudioBtn.title = "Stop Audio Guide";
                        modalAudioBtn.classList.add('playing');
                        audioPlaying = true;
                    }).catch(e2 => {
                        console.log("Audio play failed again:", e2);
                        alert('Please click the play button on the audio player to start the guide.');
                    });
                });
                modalAudioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                modalAudioBtn.title = "Stop Audio Guide";
                modalAudioBtn.classList.add('playing');
                audioPlaying = true;
            }
        });
        
        // Update audio element when play/pause
        audioElement.addEventListener('play', () => {
            audioPlaying = true;
            modalAudioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            modalAudioBtn.title = "Stop Audio Guide";
            modalAudioBtn.classList.add('playing');
        });
        
        audioElement.addEventListener('pause', () => {
            audioPlaying = false;
            modalAudioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            modalAudioBtn.title = "Start Audio Guide";
            modalAudioBtn.classList.remove('playing');
        });
    }
    
    // Fallback audio guide using text-to-speech
    function setupFallbackAudioGuide() {
        const modalAudioBtn = document.getElementById('modalAudioBtn');
        if (!modalAudioBtn) return;
        
        modalAudioBtn.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                const speech = new SpeechSynthesisUtterance();
                speech.text = `Welcome to ${currentTour.title}. This is a ${currentTour.details.type} located in ${currentTour.details.location}. The design style is ${currentTour.details.style}. Enjoy your virtual tour.`;
                speech.rate = 0.9;
                speech.pitch = 1;
                speech.volume = 1;
                
                if (audioPlaying) {
                    window.speechSynthesis.cancel();
                    modalAudioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                    modalAudioBtn.title = "Start Audio Guide";
                    modalAudioBtn.classList.remove('playing');
                    audioPlaying = false;
                } else {
                    window.speechSynthesis.speak(speech);
                    modalAudioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    modalAudioBtn.title = "Stop Audio Guide";
                    modalAudioBtn.classList.add('playing');
                    audioPlaying = true;
                }
            } else {
                alert('Audio guide is not available. Please check if the audio file exists at: ' + currentTour.audioFile);
            }
        });
    }
    
    // Setup swipe support
    function setupSwipeSupport() {
        const sliderContainer = document.querySelector('.tour-modal-scene');
        if (!sliderContainer) return;
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next
                navigateToScene(1);
            }
            
            if (touchEndX > touchStartX + 50) {
                // Swipe right - previous
                navigateToScene(-1);
            }
        }
    }
    
    // Navigate to scene
    function navigateToScene(direction) {
        if (!currentTour || currentTour.scenes.length <= 1 || vrModeActive) return;
        
        const oldIndex = currentSceneIndex;
        currentSceneIndex = (currentSceneIndex + direction + currentTour.scenes.length) % currentTour.scenes.length;
        
        // Animate slide transition
        const slides = document.querySelectorAll('.modal-slide');
        const sliderContainer = document.querySelector('.modal-slider-container');
        
        if (slides.length > 1 && sliderContainer) {
            // Add animation class
            sliderContainer.classList.add('sliding');
            
            // Update slides
            slides[oldIndex].classList.remove('active');
            slides[currentSceneIndex].classList.add('active');
            
            // Remove animation class after transition
            setTimeout(() => {
                sliderContainer.classList.remove('sliding');
            }, 500);
        }
        
        updateTourScene();
    }
    
    // Update tour scene
    function updateTourScene() {
        if (!currentTour) return;
        
        const sceneDots = document.querySelectorAll('.scene-dot');
        const sceneCounter = document.querySelector('.tour-scene-counter');
        const prevBtn = document.querySelector('.modal-prev-btn');
        const nextBtn = document.querySelector('.modal-next-btn');
        
        // Update active dot
        sceneDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSceneIndex);
        });
        
        // Update scene counter
        if (sceneCounter) {
            sceneCounter.textContent = `Scene ${currentSceneIndex + 1} of ${currentTour.scenes.length}`;
        }
        
        // Enable/disable navigation buttons for single scene tours
        if (prevBtn && nextBtn && currentTour.scenes.length <= 1) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        }
    }
    
    // Handle keyboard navigation
    function handleKeyboardNavigation(event) {
        if (!tourModal || tourModal.style.display !== 'block') return;
        
        switch(event.key) {
            case 'ArrowLeft':
                if (!vrModeActive) {
                    stopAutoSlide();
                    navigateToScene(-1);
                }
                event.preventDefault();
                break;
            case 'ArrowRight':
                if (!vrModeActive) {
                    stopAutoSlide();
                    navigateToScene(1);
                }
                event.preventDefault();
                break;
            case 'Escape':
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else if (vrModeActive) {
                    toggleVrMode();
                } else {
                    closeTourModal.click();
                }
                event.preventDefault();
                break;
            case ' ':
                // Spacebar toggles auto slide
                if (!vrModeActive) {
                    toggleAutoSlide();
                }
                event.preventDefault();
                break;
            case 'a':
            case 'A':
                // 'A' key toggles audio
                const modalAudioBtn = document.getElementById('modalAudioBtn');
                if (modalAudioBtn) modalAudioBtn.click();
                event.preventDefault();
                break;
            case 'v':
            case 'V':
                // 'V' key toggles VR mode
                const modalVrBtn = document.getElementById('modalVrBtn');
                if (modalVrBtn) modalVrBtn.click();
                event.preventDefault();
                break;
            case 'r':
            case 'R':
                // 'R' key shows room images
                const roomButtons = document.querySelectorAll('.room-btn');
                if (roomButtons.length > 0 && !vrModeActive) {
                    roomButtons[0].click();
                }
                event.preventDefault();
                break;
        }
    }
    
    // Toggle fullscreen
    function toggleFullscreen() {
        const modalViewer = document.querySelector('.tour-modal-viewer');
        if (!modalViewer) return;
        
        if (!document.fullscreenElement) {
            if (modalViewer.requestFullscreen) {
                modalViewer.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    // Initialize featured tour slider - UPDATED for hotspots
    function initFeaturedTourSlider() {
        if (!featuredTourContainer) return;
        
        const featuredTour = virtualTours[0]; // First tour is featured
        const tourScenes = featuredTour.scenes;
        let currentFeaturedIndex = 0;
        
        const activeScene = featuredTourContainer.querySelector('.active-scene');
        const prevBtn = featuredTourContainer.querySelector('.prev-btn');
        const nextBtn = featuredTourContainer.querySelector('.next-btn');
        const hotspots = featuredTourContainer.querySelectorAll('.hotspot');
        
        if (!activeScene || !prevBtn || !nextBtn) return;
        
        function showFeaturedScene(index) {
            activeScene.src = tourScenes[index];
            activeScene.alt = `${featuredTour.title} - Scene ${index + 1}`;
            currentFeaturedIndex = index;
        }
        
        function nextFeaturedScene() {
            currentFeaturedIndex = (currentFeaturedIndex + 1) % tourScenes.length;
            showFeaturedScene(currentFeaturedIndex);
        }
        
        function prevFeaturedScene() {
            currentFeaturedIndex = (currentFeaturedIndex - 1 + tourScenes.length) % tourScenes.length;
            showFeaturedScene(currentFeaturedIndex);
        }
        
        // Hotspots functionality - UPDATED to show images
        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', (e) => {
                e.stopPropagation();
                const target = hotspot.getAttribute('data-target');
                
                if (featuredTour.roomSpecificImages && featuredTour.roomSpecificImages[target]) {
                    // Show room-specific image
                    const roomImage = featuredTour.roomSpecificImages[target];
                    const originalSrc = activeScene.src;
                    
                    // Create overlay for room image
                    const overlay = document.createElement('div');
                    overlay.className = 'hotspot-overlay';
                    overlay.innerHTML = `
                        <div class="hotspot-content">
                            <img src="${roomImage}" alt="${target}">
                            <div class="hotspot-info">
                                <h4>${target.charAt(0).toUpperCase() + target.slice(1)}</h4>
                                <p>Part of ${featuredTour.title}</p>
                                <button class="btn btn-small" id="closeHotspot">Close</button>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(overlay);
                    
                    // Close overlay
                    document.getElementById('closeHotspot').addEventListener('click', () => {
                        overlay.remove();
                    });
                    
                    // Also close on ESC
                    const closeOnEsc = (e) => {
                        if (e.key === 'Escape') {
                            overlay.remove();
                            document.removeEventListener('keydown', closeOnEsc);
                        }
                    };
                    document.addEventListener('keydown', closeOnEsc);
                    
                    // Close on overlay click
                    overlay.addEventListener('click', (e) => {
                        if (e.target === overlay) {
                            overlay.remove();
                        }
                    });
                } else {
                    alert(`You clicked on ${target}. This would navigate to that specific area in a full tour.`);
                }
            });
        });
        
        // Auto slide for featured tour
        let featuredAutoSlide = setInterval(nextFeaturedScene, 5000);
        
        // Pause on hover
        featuredTourContainer.addEventListener('mouseenter', () => clearInterval(featuredAutoSlide));
        featuredTourContainer.addEventListener('mouseleave', () => {
            clearInterval(featuredAutoSlide);
            featuredAutoSlide = setInterval(nextFeaturedScene, 5000);
        });
        
        // Navigation buttons
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearInterval(featuredAutoSlide);
            prevFeaturedScene();
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearInterval(featuredAutoSlide);
            nextFeaturedScene();
        });
    }
    
    // Initialize tours page
    if (toursContainer) {
        // Remove loading message
        toursContainer.innerHTML = '';
        
        // Initial render
        renderTours();
        
        // Category filter buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter tours
                const category = this.getAttribute('data-category');
                renderTours(category);
            });
        });
    }
    
    // Initialize featured tour slider
    initFeaturedTourSlider();
    
    // Close tour modal
    if (closeTourModal) {
        closeTourModal.addEventListener('click', function() {
            tourModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Clean up
            stopAutoSlide();
            clearInterval(slideInterval);
            vrModeActive = false;
            
            // Stop audio if playing
            const audioElement = document.getElementById('tourAudio');
            if (audioElement) {
                audioElement.pause();
                audioElement.currentTime = 0;
                audioPlaying = false;
            }
            
            // Stop VR video if playing
            const vrVideo = document.getElementById('vrVideo');
            if (vrVideo) {
                vrVideo.pause();
                vrVideo.currentTime = 0;
            }
            
            // Cancel speech synthesis if active
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            
            document.removeEventListener('keydown', handleKeyboardNavigation);
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === tourModal) {
            closeTourModal.click();
        }
    });
    
    // Exit fullscreen when ESC is pressed
    document.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
            const modalViewer = document.querySelector('.tour-modal-viewer');
            if (modalViewer) {
                modalViewer.classList.remove('fullscreen');
            }
        }
    });
    
    // Featured tour controls
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const vrModeBtn = document.getElementById('vrModeBtn');
    const audioTourBtn = document.getElementById('audioTourBtn');
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const featuredTour = document.getElementById('featuredTour');
            if (featuredTour && featuredTour.requestFullscreen) {
                featuredTour.requestFullscreen();
            }
        });
    }
    
    if (vrModeBtn) {
        vrModeBtn.addEventListener('click', () => {
            alert('For full VR experience, please click on any tour and use the VR button in the modal.');
        });
    }
    
    if (audioTourBtn) {
        audioTourBtn.addEventListener('click', () => {
            alert('Audio guide available in individual tours. Click on any tour to start.');
        });
    }
    
    // Additional modal controls
    const vrSetupBtn = document.getElementById('vrSetupBtn');
    const vrSetupModal = document.getElementById('vrSetupModal');
    const audioDemoBtn = document.getElementById('audioDemoBtn');
    const audioDemoModal = document.getElementById('audioDemoModal');
    
    if (vrSetupBtn && vrSetupModal) {
        vrSetupBtn.addEventListener('click', () => {
            vrSetupModal.style.display = 'block';
        });
        
        vrSetupModal.querySelector('.close-modal').addEventListener('click', () => {
            vrSetupModal.style.display = 'none';
        });
    }
    
    if (audioDemoBtn && audioDemoModal) {
        audioDemoBtn.addEventListener('click', () => {
            audioDemoModal.style.display = 'block';
            initAudioPlayer();
        });
        
        audioDemoModal.querySelector('.close-audio-demo').addEventListener('click', () => {
            audioDemoModal.style.display = 'none';
            stopAudioPlayer();
        });
    }
    
    // Audio Player Functionality
    function initAudioPlayer() {
        const audioElement = document.getElementById('audioElement');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const progressFill = document.querySelector('.progress-fill');
        const progressContainer = document.querySelector('.progress-container');
        const currentTimeDisplay = document.getElementById('currentTime');
        const durationTimeDisplay = document.getElementById('durationTime');
        const volumeSlider = document.getElementById('volumeSlider');
        const muteBtn = document.getElementById('muteBtn');
        
        if (!audioElement) return;
        
        // Play/Pause functionality
        playPauseBtn.addEventListener('click', function() {
            if (audioElement.paused) {
                audioElement.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                playPauseBtn.classList.add('playing');
            } else {
                audioElement.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                playPauseBtn.classList.remove('playing');
            }
        });
        
        // Update progress bar
        audioElement.addEventListener('timeupdate', function() {
            if (audioElement.duration) {
                const progressPercent = (audioElement.currentTime / audioElement.duration) * 100;
                progressFill.style.width = progressPercent + '%';
                currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
            }
        });
        
        // Load metadata to get duration
        audioElement.addEventListener('loadedmetadata', function() {
            durationTimeDisplay.textContent = formatTime(audioElement.duration);
        });
        
        // Seek functionality
        progressContainer.addEventListener('click', function(e) {
            if (audioElement.duration) {
                const clickX = e.offsetX;
                const width = progressContainer.offsetWidth;
                const clickedTime = (clickX / width) * audioElement.duration;
                audioElement.currentTime = clickedTime;
            }
        });
        
        // Volume control
        volumeSlider.addEventListener('input', function() {
            audioElement.volume = this.value / 100;
            if (this.value == 0) {
                muteBtn.classList.add('muted');
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                muteBtn.classList.remove('muted');
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
        
        // Mute button
        muteBtn.addEventListener('click', function() {
            if (audioElement.volume > 0) {
                audioElement.volume = 0;
                volumeSlider.value = 0;
                muteBtn.classList.add('muted');
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                audioElement.volume = volumeSlider.value / 100;
                muteBtn.classList.remove('muted');
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
        
        // Reset on audio end
        audioElement.addEventListener('ended', function() {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playPauseBtn.classList.remove('playing');
            progressFill.style.width = '0%';
            currentTimeDisplay.textContent = '0:00';
            audioElement.currentTime = 0;
        });
    }
    
    function stopAudioPlayer() {
        const audioElement = document.getElementById('audioElement');
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
            if (playPauseBtn) {
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                playPauseBtn.classList.remove('playing');
            }
        }
    }
    
    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        const audioDemoModal = document.getElementById('audioDemoModal');
        if (event.target === audioDemoModal) {
            audioDemoModal.style.display = 'none';
            stopAudioPlayer();
        }
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});