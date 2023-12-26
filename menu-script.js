const menuIcons = document.querySelectorAll('.menu-icons');
const menu = document.querySelector('#menu');
const navItems = document.querySelectorAll('.nav-item');

function openCloseMenu(element) {
    element.forEach(e => {
        e.addEventListener('click', () => {
            menu.classList.toggle('responsive-menu');
        })
    })
}

openCloseMenu(menuIcons);
openCloseMenu(navItems);