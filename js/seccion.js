document.addEventListener('DOMContentLoaded', function() {

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