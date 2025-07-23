document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('#nosotros h2, #areas-practica h2, #contacto h2');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('Observed element:', entry.target, 'Is intersecting:', entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  targets.forEach((target) => {
    console.log('Observing element:', target);
    observer.observe(target);
  });
});
