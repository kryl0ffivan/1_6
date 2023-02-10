let burgerCloser = document.querySelector('.burger-close');
let burgerOpen = document.querySelector('.burger');
let burgerMenu = document.querySelector('.menu-burger');

burgerOpen.addEventListener('click', function () {
  burgerMenu.classList.toggle('menu-burger--closer')
})