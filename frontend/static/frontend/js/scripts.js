// frontend/static/frontend/js/scripts.js

// Add any JavaScript you need for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
