// Dark Mode Toggle Functionality - CLEAN VERSION
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (!darkModeToggle) return;
    
    const body = document.body;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Function to set theme
    function setTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Initialize theme
    const initialIsDarkMode = currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches);
    setTheme(initialIsDarkMode);
    
    // Toggle on click
    darkModeToggle.addEventListener('click', function() {
        const isDarkMode = body.classList.contains('dark-mode');
        setTheme(!isDarkMode);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches);
        }
    });
});