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

// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .download-card, .pricing-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add click tracking for download buttons (placeholder for analytics)
document.querySelectorAll('.download-btn, .btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Placeholder for download tracking
        console.log('Download initiated for:', e.target.textContent);
        
        // You can add actual download logic or analytics tracking here
        // For now, we'll just prevent the default action since these are placeholder links
        if (e.target.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Download functionality would be implemented here. This is a demo.');
        }
    });
});

// Add some dynamic security shield animation
document.addEventListener('DOMContentLoaded', () => {
    const shield = document.querySelector('.security-shield');
    if (shield) {
        setInterval(() => {
            shield.style.boxShadow = `0 0 ${Math.random() * 50 + 20}px rgba(247, 147, 26, 0.3)`;
        }, 2000);
    }
});

// Simple mobile menu toggle (if needed later)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const activeElements = document.querySelectorAll('.active');
        activeElements.forEach(el => el.classList.remove('active'));
    }
});

// Performance optimization: Lazy load images when we add them
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
