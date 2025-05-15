const myCarouselElement = document.querySelector('#mainCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1000
})

const myOtherCarouselElement = document.querySelector('#otherCarousel');
const otherCarousel = new bootstrap.Carousel(myOtherCarouselElement, {
  interval: 2000
})


  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('mainCarousel');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    
    // Añadir estilos necesarios - IMPORTANTE: linear para ambas transiciones
    const style = document.createElement('style');
    style.textContent = `
      .carousel-inner {
        transition-timing-function: linear !important;
      }
      .carousel-item {
        transition: transform 0.6s linear !important;
        background-attachment: local !important;
        background-position: center center;
        background-size: cover !important;
      }
    `;
    document.head.appendChild(style);
    
    // Configurar eventos del carrusel
    carousel.addEventListener('slide.bs.carousel', function(event) {
      const direction = event.direction; // 'left' o 'right'
      const activeItem = carousel.querySelector('.carousel-item.active');
      const nextItem = carouselItems[event.to];
      
      // Preparamos valores iniciales
      if (direction === 'left') {
        activeItem.style.backgroundPosition = '0vw center';
        nextItem.style.backgroundPosition = '100vw center';
      } else {
        activeItem.style.backgroundPosition = '0vw center';
        nextItem.style.backgroundPosition = '-100vw center';
      }
      
      // Forzar sincronización
      void activeItem.offsetWidth;
      
      // Animación
      const duration = 600; // 0.6s en ms
      const startTime = Date.now();
      
      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentPos = progress * 100; // 0 a 100
        
        if (direction === 'left') {
          if (activeItem) activeItem.style.backgroundPosition = `${currentPos}vw center`;
          if (nextItem) nextItem.style.backgroundPosition = `${currentPos - 100}vw center`;
        } else {
          if (activeItem) activeItem.style.backgroundPosition = `${-currentPos}vw center`;
          if (nextItem) nextItem.style.backgroundPosition = `${-currentPos + 100}vw center`;
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      
      animate();
    });
    
    // Resetear posiciones al finalizar
    carousel.addEventListener('slid.bs.carousel', function() {
      carouselItems.forEach(item => {
        item.style.backgroundPosition = 'center center';
      });
    });


    const links = document.querySelectorAll('.typing-link');

    links.forEach(link => {
      const text = link.getAttribute('data-text');
      const ghost = document.createElement('span');
      ghost.textContent = text;
      ghost.style.visibility = 'hidden';
      ghost.style.position = 'absolute';
      ghost.style.font = window.getComputedStyle(link).font;
      document.body.appendChild(ghost);
      link.style.minWidth = `${ghost.getBoundingClientRect().width + 20}px`;
      document.body.removeChild(ghost);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const link = entry.target;
          link.classList.add('visible', 'typing', 'animated');

          const fullText = link.getAttribute('data-text');
          let i = 0;

          const typingEffect = setInterval(() => {
            if (i < fullText.length) {
              link.textContent = fullText.substring(0, i + 1);
              i++;
            } else {
              clearInterval(typingEffect);
              link.classList.remove('typing');
            }
          }, 100);
          observer.unobserve(link);
        }
      });

  }, {
    threshold: 0.5
  });

  links.forEach(link => {
    observer.observe(link);
  });

const body = document.body;

  body.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const footerRect = footer.getBoundingClientRect();
    const isFooterVisible = footerRect.top <= window.innerHeight;

    if (isFooterVisible) {
      console.log("Footer visible (vía scroll en body)");
      body.classList.add('at-bottom');
    } else {
      body.classList.remove('at-bottom');
    }
  });

});

