window.addEventListener('load', () => {
  const preloader = document.querySelector('.preload');
  setTimeout(() => {
    preloader.classList.add('preload-finish');
  }, 300);
});

window.addEventListener('scroll', () => {
  const logoVal = document.querySelector('#brand-hdr h1');
  const mainNav = document.querySelector('header');
  const topNav = document.querySelector('.top-hdr');
  const searchContainer = document.querySelector('.search-container');
  if (window.pageYOffset > 20) {
    /* could be 0 as wll but starts after scrolling
    for 20px y(vertical -> downwards) */
    logoVal.style.height = '60px';
    mainNav.classList.add('hide');
    topNav.classList.remove('hide');
    topNav.classList.add('show');
    topNav.classList.add('bg-black');
    searchContainer.style.top = '30%';
  } else {
    mainNav.classList.remove('hide');
    topNav.classList.remove('show');
    topNav.classList.add('hide');
    searchContainer.style.top = '60%';
  }
});
