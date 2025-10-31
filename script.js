// DOM Elements
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navList = document.querySelector('.nav-list');
const contactForm = document.getElementById('contact-form');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-item, .stat-item, .cert-item, .testimonial-card, .coverage-content');
    animatedElements.forEach(el => observer.observe(el));
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 7) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }
        e.target.value = value;
    });
}

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const isTime = target.includes('/');
        const isPlus = target.includes('+');
        
        if (!isPercentage && !isTime) {
            const numericValue = parseInt(target.replace('+', ''));
            let current = 0;
            const increment = numericValue / 50;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current) + (isPlus ? '+' : '');
                }
            }, 40);
        }
    });
}

// Run stats animation when hero stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Navbar active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - header.offsetHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation for service cards
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Error handling for form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name') || formData.get('name').length < 2) {
        errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('Por favor, insira um e-mail válido');
    }
    
    if (!formData.get('service')) {
        errors.push('Por favor, selecione um serviço');
    }
    
    if (!formData.get('message') || formData.get('message').length < 10) {
        errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }
    
    return errors;
}

// Enhanced form submission with validation
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        alert('Por favor, corrija os seguintes erros:\n' + errors.join('\n'));
        return;
    }
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    submitButton.style.background = '#6b7280';
    
    // Simulate API call
    setTimeout(() => {
        const success = Math.random() > 0.1; // 90% success rate
        
        if (success) {
            alert('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        } else {
            alert('❌ Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.');
        }
        
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.background = '';
    }, 2000);
});

// Testimonials carousel (auto-rotation)
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    if (testimonialCards.length > 0) {
        // Add fade effect to testimonials
        testimonialCards.forEach((card, index) => {
            if (index !== 0) {
                card.style.opacity = '0.7';
                card.style.transform = 'scale(0.95)';
            }
        });
        
        const rotateTestimonials = () => {
            // Reset all cards
            testimonialCards.forEach(card => {
                card.style.opacity = '0.7';
                card.style.transform = 'scale(0.95)';
                card.style.transition = 'all 0.5s ease';
            });
            
            // Highlight current testimonial
            testimonialCards[currentTestimonial].style.opacity = '1';
            testimonialCards[currentTestimonial].style.transform = 'scale(1)';
            
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        };
        
        // Auto-rotate every 4 seconds
        setInterval(rotateTestimonials, 4000);
    }
});

// Enhanced mobile menu functionality
mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (mobileMenuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && navList.classList.contains('active')) {
        navList.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});
