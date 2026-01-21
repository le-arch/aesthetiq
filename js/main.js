// main.js - Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navClose = document.querySelector('.nav-close');
    const navOverlay = document.querySelector('.nav-overlay');
    
    // Open sidebar
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navMenu) navMenu.classList.add('active');
            if (navOverlay) navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Toggle icons
            const menuIcon = this.querySelector('.menu-icon');
            const closeIcon = this.querySelector('.close-icon');
            if (menuIcon && closeIcon) {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        });
    }
    
    // Close sidebar with close button
    if (navClose) {
        navClose.addEventListener('click', function() {
            closeNavigation();
        });
    }
    
    // Close sidebar with overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            closeNavigation();
        });
    }
    
    // Function to close navigation
    function closeNavigation() {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (navOverlay) {
            navOverlay.classList.remove('active');
        }
        document.body.style.overflow = 'auto';
        
        // Toggle icons back
        if (mobileToggle) {
            const menuIcon = mobileToggle.querySelector('.menu-icon');
            const closeIcon = mobileToggle.querySelector('.close-icon');
            if (menuIcon && closeIcon) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        }
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNavigation();
        });
    });
    
    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeNavigation();
        }
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission (for all newsletter forms)
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}! You'll receive updates and exclusive offers.`);
                this.reset();
            }
        });
    });
});