let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

document.querySelector('.header .navbar').onclick = () => {
    navbar.classList.remove('active');
}