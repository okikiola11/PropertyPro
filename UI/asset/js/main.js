const navTrigger = document.querySelector('.nav-trigger');
const sideNav = document.querySelector('.side-nav');
// const markDiv = document.querySelector('.list-icons__sp:nth-of-type(2)');
// const load = document.querySelectorAll('.main-content__lintin-wrapper');

navTrigger.addEventListener('click', () => {
  sideNav.classList.toggle('visible');
});

// markDiv.addEventListener('click', e => {
//   e.preventDefault();
//   soldDiv.classList.remove('hide');
// });
