const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = function() {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle('active');
};
