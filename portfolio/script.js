// Mobile Navigation Toggle

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Navbar background on scroll with modern effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.4)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0%';
                setTimeout(() => {
                    skillProgress.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Form Submission - Send to WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Format message for WhatsApp
        const whatsappMessage = `Hello! I'm ${name}.\n\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number (with country code, remove leading 0)
        const whatsappNumber = '923113254286';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Show modern success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Opening WhatsApp...';
        button.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
        button.style.color = 'white';
        
        // Reset form and button after delay
        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    });
}

// Active section highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
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

// Add fade-in animation to elements on scroll with modern effects
const fadeElements = document.querySelectorAll('.project-card, .skill-card, .stat-item, .contact-item, .about-text');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.classList.add('animated');
            }, index * 50);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px) scale(0.95)';
    element.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    fadeObserver.observe(element);
});

// Add subtle parallax effect to hero section (disabled on mobile)
let parallaxEnabled = window.innerWidth > 768;
window.addEventListener('resize', () => {
    parallaxEnabled = window.innerWidth > 768;
});

if (parallaxEnabled) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.image-placeholder');
        if (heroImage && scrolled < window.innerHeight) {
            const parallaxValue = scrolled * 0.2;
            heroImage.style.transform = `translateY(${parallaxValue}px)`;
        }
    }, { passive: true });
}

// Smooth reveal animation for section titles
const sectionTitles = document.querySelectorAll('.section-title');
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

sectionTitles.forEach(title => {
    titleObserver.observe(title);
});

