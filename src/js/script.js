// Menu hamburger
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
});

// URL: artistes.html - Carrousel
const carouselEl = document.getElementById('carousel');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

if (carouselEl && prev && next) {
    prev.onclick = function () {
        carouselEl.scrollLeft -= 300;
    };

    next.onclick = function () {
        carouselEl.scrollLeft += 300;
    };
}
