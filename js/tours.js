
// Virtual Tours JavaScript - Functions Only

// Global variables
let currentTour = null;
let currentSceneIndex = 0;
let slideInterval = null;
let autoSlideEnabled = true;
let audioPlaying = false;
let vrModeActive = false;

// DOM Elements (will be initialized in DOMContentLoaded)
let toursContainer;
let categoryButtons;
let tourModal;
let closeTourModal;
let tourModalBody;
let featuredTourContainer;

document.addEventListener('DOMContentLoaded', function() {
    console.log('Tours.js loaded - Data available:', window.virtualTours ? 'Yes' : 'No');
    
    // Initialize DOM elements
    toursContainer = document.getElementById('toursContainer');
    categoryButtons = document.querySelectorAll('.category-btn');
    tourModal = document.getElementById('tourModal');
    closeTourModal = document.querySelector('.close-tour-modal');
    tourModalBody = document.querySelector('.tour-modal-body');
    featuredTourContainer = document.getElementById('featuredTour');
    
    // Initialize tours page
    if (toursContainer) {
        console.log('Initializing tours container');
        
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
            closeTourModalHandler();
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
            const featuredTourElement = document.getElementById('featuredTour');
            if (featuredTourElement && featuredTourElement.requestFullscreen) {
                featuredTourElement.requestFullscreen();
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
        
        const closeVrModal = vrSetupModal.querySelector('.close-modal');
        if (closeVrModal) {
            closeVrModal.addEventListener('click', () => {
                vrSetupModal.style.display = 'none';
            });
        }
    }
    
    if (audioDemoBtn && audioDemoModal) {
        audioDemoBtn.addEventListener('click', () => {
            audioDemoModal.style.display = 'block';
            initAudioPlayer();
        });
        
        const closeAudioDemo = audioDemoModal.querySelector('.close-audio-demo');
        if (closeAudioDemo) {
            closeAudioDemo.addEventListener('click', () => {
                audioDemoModal.style.display = 'none';
                stopAudioPlayer();
            });
        }
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        const audioDemoModalElement = document.getElementById('audioDemoModal');
        if (event.target === audioDemoModalElement) {
            audioDemoModalElement.style.display = 'none';
            stopAudioPlayer();
        }
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Add event listeners for footer tour links
    document.querySelectorAll('.footer-tours a[data-tour-id]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tourId = parseInt(this.getAttribute('data-tour-id'));
            if (tourId) {
                openTour(tourId);
            }
        });
    });
});

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

// Helper function to fix relative paths
function fixPath(path) {
    // If path already has ../, keep it
    if (path.startsWith('../')) {
        return path;
    }
    // If path starts with images/, videos/, or audio/, add ../
    if (path.startsWith('images/') || path.startsWith('videos/') || path.startsWith('audio/')) {
        return '../' + path;
    }
    // Otherwise, assume it's a relative path and keep as is
    return path;
}

// Render tours
function renderTours(category = 'all') {
    if (!toursContainer) return;
    
    toursContainer.innerHTML = '';
    
    // Use global virtualTours data from HTML
    const filteredTours = category === 'all' 
        ? window.virtualTours 
        : window.virtualTours.filter(tour => tour.category.includes(category));
    
    if (filteredTours.length === 0) {
        toursContainer.innerHTML = '<p class="no-tours">No tours found for this category.</p>';
        return;
    }
    
    filteredTours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.setAttribute('data-id', tour.id);
        
        // Fix image paths for display
        const displayScenes = tour.scenes.map(scene => fixPath(scene));
        
        tourCard.innerHTML = `
            <div class="tour-card-image">
                <div class="tour-card-slider">
                    ${displayScenes.slice(0, 3).map((scene, index) => 
                        `<div class="tour-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <img src="${scene}" alt="${tour.title} - Scene ${index + 1}" loading="lazy" onerror="this.src='images/placeholder.jpg'; this.alt='Image not available';">
                        </div>`
                    ).join('')}
                </div>
                <div class="tour-card-slider-controls">
                    <button class="slider-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
                    <div class="slider-dots">
                        ${displayScenes.slice(0, 3).map((_, index) => 
                            `<span class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
                        ).join('')}
                    </div>
                    <button class="slider-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
                </div>
                ${tour.vrCompatible ? '<span class="tour-card-badge">VR Compatible</span>' : ''}
                ${tour.audioGuide ? '<span class="tour-card-badge audio-badge">Audio Guide</span>' : ''}
            </div>
            <div class="tour-card-content">
                <h3>${tour.title}</h3>
                <p class="tour-card-description">${tour.description}</p>
                <div class="tour-card-meta">
                    <span><i class="far fa-clock"></i> ${tour.duration}</span>
                    <span><i class="far fa-compass"></i> ${tour.scenes.length} scenes</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${tour.details.location.split(',')[0]}</span>
                </div>
                <button class="start-tour-btn" data-id="${tour.id}">
                    <i class="fas fa-play-circle"></i> Start Tour
                </button>
            </div>
        `;
        
        toursContainer.appendChild(tourCard);
        
        // Add event listeners to card slider
        setupTourCardSlider(tourCard, tour, displayScenes);
    });
    
    // Add event listeners to start tour buttons
    document.querySelectorAll('.start-tour-btn').forEach(button => {
        button.addEventListener('click', function() {
            const tourId = parseInt(this.getAttribute('data-id'));
            openTour(tourId);
        });
    });
}

// Setup tour card slider
function setupTourCardSlider(tourCard, tour, displayScenes) {
    const cardPrevBtn = tourCard.querySelector('.slider-prev');
    const cardNextBtn = tourCard.querySelector('.slider-next');
    const cardDots = tourCard.querySelectorAll('.slider-dot');
    const cardSlider = tourCard.querySelector('.tour-card-slider');
    
    let cardCurrentSlide = 0;
    const cardTotalSlides = Math.min(displayScenes.length, 3);
    
    function showCardSlide(index) {
        const slides = tourCard.querySelectorAll('.tour-slide');
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        
        cardDots.forEach(dot => dot.classList.remove('active'));
        if (cardDots[index]) {
            cardDots[index].classList.add('active');
        }
        
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
    cardSlider.addEventListener('mouseenter', () => {
        clearInterval(cardAutoSlide);
    });
    
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
}

// Open tour
function openTour(tourId) {
    console.log('Opening tour:', tourId);
    currentTour = window.virtualTours.find(t => t.id === tourId);
    if (!currentTour) {
        console.error('Tour not found:', tourId);
        return;
    }
    
    currentSceneIndex = 0;
    
    if (!tourModalBody) {
        console.error('Modal body element not found!');
        return;
    }
    
    // Fix all paths for this tour
    const fixedScenes = currentTour.scenes.map(scene => fixPath(scene));
    const fixedRoomImages = {};
    if (currentTour.roomSpecificImages) {
        for (const [room, path] of Object.entries(currentTour.roomSpecificImages)) {
            fixedRoomImages[room] = fixPath(path);
        }
    }
    const fixedVrVideo = currentTour.vrVideo ? fixPath(currentTour.vrVideo) : '';
    const fixedAudioFile = currentTour.audioFile ? fixPath(currentTour.audioFile) : '';
    
    tourModalBody.innerHTML = `
        <div class="tour-modal-viewer">
            <div class="tour-modal-navigation">
                <button class="modal-prev-btn" ${currentTour.scenes.length <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="tour-modal-scene">
                    <div class="modal-slider-container">
                        ${fixedScenes.map((scene, index) => `
                            <div class="modal-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${scene}" alt="${currentTour.title} - Scene ${index + 1}" loading="eager" onerror="this.src='../images/placeholder.jpg'; this.alt='Image not available'; console.error('Failed to load image:', '${scene}')">
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
                    ${fixedScenes.map((_, index) => 
                        `<span class="scene-dot ${index === currentSceneIndex ? 'active' : ''}" 
                               data-index="${index}"
                               ${fixedScenes.length <= 1 ? 'style="display: none;"' : ''}></span>`
                    ).join('')}
                </div>
                <div class="modal-control-buttons">
                    <button class="modal-control-btn" id="modalAutoSlideBtn" title="Toggle Auto Slide">
                        <i class="fas fa-pause"></i>
                    </button>
                    <button class="modal-control-btn" id="modalFullscreenBtn" title="Fullscreen">
                        <i class="fas fa-expand"></i>
                    </button>
                    ${currentTour.vrCompatible && fixedVrVideo ? `
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
                ${Object.keys(fixedRoomImages).length > 0 ? `
                <div class="tour-room-nav">
                    ${Object.keys(fixedRoomImages).map(room => `
                        <button class="room-btn" data-room="${room}">
                            <i class="fas fa-${getRoomIcon(room)}"></i> ${room.charAt(0).toUpperCase() + room.slice(1)}
                        </button>
                    `).join('')}
                </div>
                ` : ''}
                <div class="tour-scene-counter">
                    Scene ${currentSceneIndex + 1} of ${fixedScenes.length}
                </div>
            </div>
            ${currentTour.vrCompatible && fixedVrVideo ? `
            <div id="vrContainer" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000; z-index: 100;">
                <video id="vrVideo" controls style="width: 100%; height: 100%; object-fit: contain; background: #000;">
                    <source src="${fixedVrVideo}" type="video/mp4">
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
            ` : ''}
            ${currentTour.audioGuide ? `
            <audio id="tourAudio" preload="auto">
                <source src="${fixedAudioFile}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
            ` : ''}
        </div>
    `;
    
    // Store fixed paths for later use
    currentTour.fixedScenes = fixedScenes;
    currentTour.fixedRoomImages = fixedRoomImages;
    currentTour.fixedVrVideo = fixedVrVideo;
    currentTour.fixedAudioFile = fixedAudioFile;
    
    tourModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Preload images
    preloadImages(fixedScenes);
    
    // Start auto-slide
    startAutoSlide();
    
    // Add event listeners to modal controls
    setupTourModalControls();
    
    // Add room navigation functionality
    if (Object.keys(fixedRoomImages).length > 0) {
        setupRoomNavigation();
    }
}

// Preload images for better performance
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
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

// Show room-specific image
function showRoomImage(room) {
    if (!currentTour || !currentTour.fixedRoomImages || !currentTour.fixedRoomImages[room]) return;
    
    const roomImage = currentTour.fixedRoomImages[room];
    const modalSliderContainer = document.querySelector('.modal-slider-container');
    
    if (modalSliderContainer) {
        // Save current state
        const originalScenes = currentTour.fixedScenes;
        const originalIndex = currentSceneIndex;
        
        // Show room image
        modalSliderContainer.innerHTML = `
            <div class="modal-slide active room-slide" data-index="0">
                <img src="${roomImage}" alt="${currentTour.title} - ${room}" onerror="this.src='../images/placeholder.jpg'; this.alt='Image not available'">
                <div class="room-overlay">
                    <h4>${room.charAt(0).toUpperCase() + room.slice(1)}</h4>
                    <p>Click anywhere or press ESC to return to tour</p>
                </div>
            </div>
        `;
        
        // Hide scene dots
        const sceneIndicator = document.querySelector('.scene-indicator');
        if (sceneIndicator) {
            sceneIndicator.style.display = 'none';
        }
        
        // Update scene counter
        const sceneCounter = document.querySelector('.tour-scene-counter');
        if (sceneCounter) {
            sceneCounter.textContent = `${room.charAt(0).toUpperCase() + room.slice(1)} - Detailed View`;
        }
        
        // Add click anywhere to return
        function returnToTour() {
            // Restore original tour scenes
            modalSliderContainer.innerHTML = originalScenes.map((scene, index) => `
                <div class="modal-slide ${index === originalIndex ? 'active' : ''}" data-index="${index}">
                    <img src="${scene}" alt="${currentTour.title} - Scene ${index + 1}">
                </div>
            `).join('');
            
            // Show scene dots again
            if (sceneIndicator) {
                sceneIndicator.style.display = 'flex';
            }
            
            // Update scene indicator
            currentSceneIndex = originalIndex;
            updateTourScene();
            
            // Remove the event listener
            modalSliderContainer.removeEventListener('click', returnToTour);
        }
        
        modalSliderContainer.addEventListener('click', returnToTour);
        
        // Also return on ESC key
        function returnOnEsc(e) {
            if (e.key === 'Escape') {
                modalSliderContainer.click();
                document.removeEventListener('keydown', returnOnEsc);
            }
        }
        document.addEventListener('keydown', returnOnEsc);
    }
}

// Start auto slide
function startAutoSlide() {
    if (!currentTour || !currentTour.fixedScenes || currentTour.fixedScenes.length <= 1) return;
    
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

// Setup tour modal controls
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
    
    if (modalAutoSlideBtn && currentTour.fixedScenes.length > 1) {
        modalAutoSlideBtn.addEventListener('click', toggleAutoSlide);
    }
    
    if (modalFullscreenBtn) {
        modalFullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    if (modalVrBtn && currentTour.fixedVrVideo) {
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

// Toggle VR Mode
function toggleVrMode() {
    const vrContainer = document.getElementById('vrContainer');
    const tourScene = document.querySelector('.tour-modal-scene');
    
    if (!vrContainer || !tourScene) return;
    
    if (vrModeActive) {
        // Exit VR Mode
        exitVrMode();
    } else {
        // Enter VR Mode
        enterVrMode();
    }
}

function exitVrMode() {
    const vrContainer = document.getElementById('vrContainer');
    const tourScene = document.querySelector('.tour-modal-scene');
    const vrVideo = document.getElementById('vrVideo');
    const modalVrBtn = document.getElementById('modalVrBtn');
    
    if (vrVideo) {
        vrVideo.pause();
        vrVideo.currentTime = 0;
    }
    if (vrContainer) vrContainer.style.display = 'none';
    if (tourScene) tourScene.style.display = 'block';
    if (modalVrBtn) {
        modalVrBtn.innerHTML = '<i class="fas fa-vr-cardboard"></i>';
        modalVrBtn.title = "Enter VR Mode";
    }
    vrModeActive = false;
    
    // Restart auto slide if it was enabled
    if (autoSlideEnabled) {
        startAutoSlide();
    }
}

function enterVrMode() {
    const vrContainer = document.getElementById('vrContainer');
    const tourScene = document.querySelector('.tour-modal-scene');
    const vrVideo = document.getElementById('vrVideo');
    const modalVrBtn = document.getElementById('modalVrBtn');
    const videoError = document.getElementById('videoError');
    
    if (!vrContainer || !tourScene) return;
    
    stopAutoSlide(); // Stop auto slide in VR mode
    if (tourScene) tourScene.style.display = 'none';
    if (vrContainer) vrContainer.style.display = 'block';
    
    if (vrVideo && currentTour && currentTour.fixedVrVideo) {
        // Reset error display
        if (videoError) {
            videoError.style.display = 'none';
        }
        
        // Set src to ensure video loads
        const sourceElement = vrVideo.querySelector('source') || document.createElement('source');
        sourceElement.src = currentTour.fixedVrVideo;
        sourceElement.type = 'video/mp4';
        if (!vrVideo.querySelector('source')) {
            vrVideo.appendChild(sourceElement);
        }
        
        vrVideo.load();
        
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
    
    // Exit VR button
    const exitVrBtn = document.getElementById('exitVrBtn');
    if (exitVrBtn) {
        exitVrBtn.onclick = toggleVrMode;
    }
}

// Setup Audio Controls
function setupAudioControls() {
    const modalAudioBtn = document.getElementById('modalAudioBtn');
    const audioElement = document.getElementById('tourAudio');
    
    if (!modalAudioBtn || !audioElement) return;
    
    // Check if audio file exists
    audioElement.addEventListener('error', () => {
        console.error(`Audio file not found: ${currentTour.fixedAudioFile}`);
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
            // Try to play audio
            const playPromise = audioElement.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Audio started playing successfully
                    modalAudioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    modalAudioBtn.title = "Stop Audio Guide";
                    modalAudioBtn.classList.add('playing');
                    audioPlaying = true;
                }).catch(error => {
                    console.log("Audio play prevented:", error);
                    // Show user-friendly message
                    const audioErrorMsg = document.createElement('div');
                    audioErrorMsg.className = 'audio-error-message';
                    audioErrorMsg.style.cssText = 'position: absolute; top: 10px; right: 10px; background: rgba(255, 0, 0, 0.8); color: white; padding: 10px 15px; border-radius: 5px; z-index: 1000; font-size: 14px; max-width: 300px;';
                    audioErrorMsg.innerHTML = `
                        <p style="margin: 0 0 5px 0;"><i class="fas fa-exclamation-triangle"></i> Audio playback blocked</p>
                        <p style="margin: 0; font-size: 12px;">Click the play button on the audio player to start</p>
                    `;
                    
                    const modalViewer = document.querySelector('.tour-modal-viewer');
                    if (modalViewer) {
                        modalViewer.appendChild(audioErrorMsg);
                        
                        // Remove message after 5 seconds
                        setTimeout(() => {
                            if (audioErrorMsg.parentNode) {
                                audioErrorMsg.remove();
                            }
                        }, 5000);
                    }
                });
            }
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
    
    // Add audio ended event
    audioElement.addEventListener('ended', () => {
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
                
                // When speech ends, update button state
                speech.onend = () => {
                    audioPlaying = false;
                    modalAudioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                    modalAudioBtn.title = "Start Audio Guide";
                    modalAudioBtn.classList.remove('playing');
                };
            }
        } else {
            // Create a visual guide instead
            const visualGuide = document.createElement('div');
            visualGuide.className = 'visual-audio-guide';
            visualGuide.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.9); color: white; padding: 20px; border-radius: 10px; text-align: center; z-index: 1000; max-width: 400px;';
            visualGuide.innerHTML = `
                <h3 style="margin: 0 0 10px 0;">Audio Guide Content</h3>
                <p style="margin: 0 0 10px 0;">Welcome to ${currentTour.title}.</p>
                <p style="margin: 0 0 10px 0;">This is a ${currentTour.details.type} located in ${currentTour.details.location}.</p>
                <p style="margin: 0 0 15px 0;">The design style is ${currentTour.details.style}.</p>
                <button class="btn btn-small" id="closeVisualGuide" style="padding: 8px 16px; background: #333; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Close
                </button>
            `;
            
            const modalViewer = document.querySelector('.tour-modal-viewer');
            if (modalViewer) {
                modalViewer.appendChild(visualGuide);
                
                document.getElementById('closeVisualGuide').addEventListener('click', () => {
                    visualGuide.remove();
                });
            }
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
    if (!currentTour || !currentTour.fixedScenes || currentTour.fixedScenes.length <= 1 || vrModeActive) return;
    
    const oldIndex = currentSceneIndex;
    currentSceneIndex = (currentSceneIndex + direction + currentTour.fixedScenes.length) % currentTour.fixedScenes.length;
    
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
        sceneCounter.textContent = `Scene ${currentSceneIndex + 1} of ${currentTour.fixedScenes.length}`;
    }
    
    // Enable/disable navigation buttons for single scene tours
    if (prevBtn && nextBtn && currentTour.fixedScenes.length <= 1) {
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

// Initialize featured tour slider
function initFeaturedTourSlider() {
    if (!featuredTourContainer) return;
    
    // Check if we have tours data
    if (!window.virtualTours || window.virtualTours.length === 0) {
        console.warn('No tours data available for featured tour');
        return;
    }
    
    const featuredTour = window.virtualTours[0]; // First tour is featured
    const tourScenes = featuredTour.scenes.map(scene => fixPath(scene));
    let currentFeaturedIndex = 0;
    
    const activeScene = featuredTourContainer.querySelector('.active-scene');
    const prevBtn = featuredTourContainer.querySelector('.prev-btn');
    const nextBtn = featuredTourContainer.querySelector('.next-btn');
    const hotspots = featuredTourContainer.querySelectorAll('.hotspot');
    
    if (!activeScene || !prevBtn || !nextBtn) return;
    
    // Set initial scene
    if (tourScenes.length > 0) {
        activeScene.src = tourScenes[0];
        activeScene.alt = `${featuredTour.title} - Scene 1`;
    }
    
    function showFeaturedScene(index) {
        if (tourScenes.length === 0) return;
        activeScene.src = tourScenes[index];
        activeScene.alt = `${featuredTour.title} - Scene ${index + 1}`;
        currentFeaturedIndex = index;
    }
    
    function nextFeaturedScene() {
        if (tourScenes.length === 0) return;
        currentFeaturedIndex = (currentFeaturedIndex + 1) % tourScenes.length;
        showFeaturedScene(currentFeaturedIndex);
    }
    
    function prevFeaturedScene() {
        if (tourScenes.length === 0) return;
        currentFeaturedIndex = (currentFeaturedIndex - 1 + tourScenes.length) % tourScenes.length;
        showFeaturedScene(currentFeaturedIndex);
    }
    
    // Hotspots functionality
    if (hotspots.length > 0 && featuredTour.roomSpecificImages) {
        const fixedRoomImages = {};
        for (const [room, path] of Object.entries(featuredTour.roomSpecificImages)) {
            fixedRoomImages[room] = fixPath(path);
        }
        
        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', (e) => {
                e.stopPropagation();
                const target = hotspot.getAttribute('data-target');
                
                if (fixedRoomImages && fixedRoomImages[target]) {
                    // Show room-specific image
                    const roomImage = fixedRoomImages[target];
                    
                    // Create overlay for room image
                    const overlay = document.createElement('div');
                    overlay.className = 'hotspot-overlay';
                    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; justify-content: center; align-items: center;';
                    overlay.innerHTML = `
                        <div class="hotspot-content" style="max-width: 90%; max-height: 90%; text-align: center;">
                            <img src="${roomImage}" alt="${target}" style="max-width: 100%; max-height: 70vh; border-radius: 10px; onerror="this.src='../images/placeholder.jpg'">
                            <div class="hotspot-info" style="color: white; margin-top: 20px;">
                                <h4 style="margin: 10px 0; font-size: 24px;">${target.charAt(0).toUpperCase() + target.slice(1)}</h4>
                                <p style="margin: 10px 0; color: #ccc;">Part of ${featuredTour.title}</p>
                                <button class="btn btn-small" id="closeHotspot" style="padding: 10px 20px; background: #333; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                                    Close
                                </button>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(overlay);
                    
                    // Close overlay
                    const closeHotspotBtn = document.getElementById('closeHotspot');
                    if (closeHotspotBtn) {
                        closeHotspotBtn.addEventListener('click', () => {
                            overlay.remove();
                        });
                    }
                    
                    // Also close on ESC
                    function closeOnEsc(e) {
                        if (e.key === 'Escape') {
                            overlay.remove();
                            document.removeEventListener('keydown', closeOnEsc);
                        }
                    }
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
    }
    
    // Auto slide for featured tour (only if there are multiple scenes)
    if (tourScenes.length > 1) {
        let featuredAutoSlide = setInterval(nextFeaturedScene, 5000);
        
        // Pause on hover
        featuredTourContainer.addEventListener('mouseenter', () => {
            clearInterval(featuredAutoSlide);
        });
        
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
    } else {
        // Hide navigation buttons if only one scene
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

// Close tour modal handler
function closeTourModalHandler() {
    if (!tourModal) return;
    
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
    
    // Reset current tour
    currentTour = null;
    currentSceneIndex = 0;
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
    
    // Fix audio path
    const sourceElement = audioElement.querySelector('source');
    if (sourceElement && sourceElement.src) {
        sourceElement.src = fixPath(sourceElement.src);
        audioElement.load();
    }
    
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play().then(() => {
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                playPauseBtn.classList.add('playing');
            }).catch(error => {
                console.log("Audio play prevented:", error);
                alert('Please click the play button on the audio player to start playback.');
            });
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
            if (progressFill) {
                progressFill.style.width = progressPercent + '%';
            }
            if (currentTimeDisplay) {
                currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
            }
        }
    });
    
    // Load metadata to get duration
    audioElement.addEventListener('loadedmetadata', function() {
        if (durationTimeDisplay) {
            durationTimeDisplay.textContent = formatTime(audioElement.duration);
        }
    });
    
    // Seek functionality
    if (progressContainer) {
        progressContainer.addEventListener('click', function(e) {
            if (audioElement.duration) {
                const clickX = e.offsetX;
                const width = progressContainer.offsetWidth;
                const clickedTime = (clickX / width) * audioElement.duration;
                audioElement.currentTime = clickedTime;
            }
        });
    }
    
    // Volume control
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            audioElement.volume = this.value / 100;
            if (this.value == 0) {
                if (muteBtn) {
                    muteBtn.classList.add('muted');
                    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                }
            } else {
                if (muteBtn) {
                    muteBtn.classList.remove('muted');
                    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            }
        });
    }
    
    // Mute button
    if (muteBtn) {
        muteBtn.addEventListener('click', function() {
            if (audioElement.volume > 0) {
                audioElement.volume = 0;
                if (volumeSlider) volumeSlider.value = 0;
                muteBtn.classList.add('muted');
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                audioElement.volume = volumeSlider ? volumeSlider.value / 100 : 1;
                muteBtn.classList.remove('muted');
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
    }
    
    // Reset on audio end
    audioElement.addEventListener('ended', function() {
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playPauseBtn.classList.remove('playing');
        }
        if (progressFill) {
            progressFill.style.width = '0%';
        }
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent = '0:00';
        }
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
