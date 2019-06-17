const navTrigger = document.querySelector('.nav-trigger');
const sideNav = document.querySelector('.side-nav');
const soldDiv = document.querySelector('.main-content__sold');
const markDiv = document.querySelector('.list-icons__sp:nth-of-type(2)')
//const hideShow = document.querySelector('.main-content__cc');
const load = document.querySelectorAll('.main-content__lintin-wrapper');

navTrigger.addEventListener('click', () => {
    sideNav.classList.toggle('visible');
});

// load.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert('hello');
//     console.log('hello again');

//     const hide = document.querySelector('.main-content__sold span');
//     hide.classList.add(hide);

//     //soldDiv.classList.add(hide);
// })

markDiv.addEventListener('click', (e) => {
    e.preventDefault();
    alert('hello');

    soldDiv.classList.remove('hide');
})