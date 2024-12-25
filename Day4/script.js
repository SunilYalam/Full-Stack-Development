// script.js

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Scroll reveal
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

// Typed.js
const typed = new Typed('.anime', {
    strings: ['Full Stack Developer', 'AI/ML Enthusiast', 'YouTuber - SdaiTech Skills'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Email sending functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    fetch('https://your-backend-url/send-email', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert('Email sent successfully!');
    })
    .catch(error => {
        alert('There was an error sending your email.');
    });
});
