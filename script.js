// main.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Initialize MagicScroll for each project slider
    new MagicScroll({
        container: '#project1-slider', // Apply MagicScroll to Project 1
        scrollbar: true, // Optional: Add a scrollbar
        autoplay: true, // Optional: Auto-scroll enabled
        interval: 3000, // Time between image scroll (in ms)
        loop: true, // Optional: Infinite loop
        arrows: true, // Optional: Add navigation arrows
        dots: true // Optional: Add navigation dots
    });

    new MagicScroll({
        container: '#project2-slider', // Apply MagicScroll to Project 2
        scrollbar: true,
        autoplay: true,
        interval: 3000,
        loop: true,
        arrows: true,
        dots: true
    });

    new MagicScroll({
        container: '#project3-slider', // Apply MagicScroll to Project 3
        scrollbar: true,
        autoplay: true,
        interval: 3000,
        loop: true,
        arrows: true,
        dots: true
    });
});
