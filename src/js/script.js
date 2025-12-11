const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
});

// Vérifier si le carrousel existe sur cette page
const carousel = document.querySelector('.carousel');

if (carousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Événement mousedown (souris enfoncée)
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    // Événement mouseleave (souris sort du carrousel)
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    // Événement mouseup (souris relâchée)
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    // Événement mousemove (déplacement de la souris)
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Support tactile mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - carousel.offsetLeft;
        touchScrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - touchStartX) * 2;
        carousel.scrollLeft = touchScrollLeft - walk;
    });
} else {
    // Le carrousel n'existe pas sur cette page, on ne fait rien
    console.log('Pas de carrousel sur cette page');
}
