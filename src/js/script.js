const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
});

// Sélectionner le carrousel et toutes les cards
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card__carousel');

// Variables pour le scroll tactile/souris
let isDown = false;
let startX;
let scrollLeft;

// Événement souris enfoncée
carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.style.cursor = 'grabbing';
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

// Événement souris relâchée
carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

// Événement déplacement de la souris
carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Vitesse de scroll
    carousel.scrollLeft = scrollLeft - walk;
});

// Ajouter un curseur grab
carousel.style.cursor = 'grab';
