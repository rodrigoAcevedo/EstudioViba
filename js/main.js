// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Bootstrap carousel
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    // Force Bootstrap carousel initialization
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      wrap: true,
      keyboard: true,
      pause: 'hover'
    });
  }

  // Scroll suave para anclas internas (por si Bootstrap no lo maneja por defecto)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Navbar transparencia dinámica al hacer scroll (opcional)
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
});
