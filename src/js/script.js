const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
});
