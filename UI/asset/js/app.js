window.addEventListener("load", () => {
  const preloader = document.querySelector(".preload");
  setTimeout(() => {
    preloader.classList.add("preload-finish");
  }, 300);
});
