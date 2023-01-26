const menuIcon = document.querySelector('.menu');
const responsiveMenu = document.querySelector('img + div');
const closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    responsiveMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
})