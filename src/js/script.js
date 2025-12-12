// URL : toutes les pages; Interaction du menu burger du footer sur toutes les pages
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    body.classList.toggle('menu-open');
});



// URL: artistes.html; Carrousel
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



// URL: contact.html; Formulaire de contact
const contactForm = document.querySelector('.contact__form');
const confirmMsg = document.getElementById('confirmation-message');

if (contactForm && confirmMsg) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        confirmMsg.style.display = 'flex';

        confirmMsg.scrollIntoView({ behavior: 'smooth' });

        contactForm.reset();

        setTimeout(() => {
            confirmMsg.style.display = 'none';
        }, 3000);
    });
}


// URL: Toutes les pages; Interaction barre de recherche 
const searchBtn = document.getElementById('search-btn');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');

if (searchBtn && searchContainer) {
    searchBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Empêche la propagation du clic

        searchContainer.classList.toggle('active');

        // Focus sur l'input quand ouvert
        if (searchContainer.classList.contains('active')) {
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }
    });

    // Ferme la recherche si on clique ailleurs
    document.addEventListener('click', function (e) {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });

    // Empêche la fermeture si on clique dans l'input
    searchInput.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}

