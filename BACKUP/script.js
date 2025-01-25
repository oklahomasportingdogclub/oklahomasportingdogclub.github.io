// Add any interactive JavaScript here
console.log('Welcome to Jim Fehring\'s Personal Website!');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 82, 130, 0.95)';
    } else {
        navbar.style.background = 'var(--primary-color)';
    }
});

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.className = 'mobile-menu-toggle';
    burger.innerHTML = '&#9776;';
    document.querySelector('.navbar').insertBefore(burger, nav);

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.innerHTML = nav.classList.contains('active') ? '&#10006;' : '&#9776;';
    });
};

// Initialize mobile menu on load
window.addEventListener('load', createMobileMenu);

// Add animation to event cards
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.event-card, .membership-card').forEach(card => {
        observer.observe(card);
    });
};

// Initialize animations
window.addEventListener('load', observeElements);
