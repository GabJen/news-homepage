const menuIcons = document.querySelectorAll('.menu-icons');
const menu = document.querySelector('#menu');

menuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        menu.classList.toggle('responsive-menu')
    })
});

