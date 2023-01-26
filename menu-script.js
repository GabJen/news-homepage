const menuIcon = document.querySelector('.menu');
const responsiveMenu = document.querySelector('img + div');
const closeMenu = document.querySelector('.close-menu');

//ADD/REMOVE RESPONSIVE-MENU CLASS NAME

let windowWidth = window.innerWidth;

function toggleClass() {
    if(windowWidth < 1000) {
        responsiveMenu.classList = 'responsive-menu';
    } else {
        responsiveMenu.removeAttribute('class');
    }
}

toggleClass();

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    toggleClass()
});

// SCRIPT TO OPEN/CLOSE MOBILE-MENU

menuIcon.addEventListener('click', () => {
    responsiveMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
});




