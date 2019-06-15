const navTrigger = document.querySelector('.nav-trigger');
const sideNav = document.querySelector('.side-nav');

navTrigger.addEventListener('click', () => {
    sideNav.classList.toggle('visible');
});