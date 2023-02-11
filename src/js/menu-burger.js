
const btnMenu = document.querySelector('.burger')
const menu = document.querySelector('.menu-burger')
const btnCloser = document.querySelector('.burger-close')
const mainSect = document.querySelector('.main-section')
const toggleMenu = function () {
  menu.classList.add('menu-burger--open')
  menu.classList.remove('menu-burger--closer')
  mainSect.classList.add('opacity')
}
const closer = function (){
    menu.classList.remove('menu-burger--open')
    menu.classList.add('menu-burger--closer')
    mainSect.classList.remove('opacity')
    
}

btnMenu.addEventListener('click', function (e) {
  e.stopPropagation()
  toggleMenu()
})

document.addEventListener('click', function (e) {
  const target = e.target
  const its_menu = target == menu || menu.contains(target)
  const its_btnMenu = target == btnMenu
  const menu_is_active = menu.classList.contains('menu-burger--open')
  

 if  (!its_menu && !its_btnMenu && menu_is_active) {
    closer()
  }
})

btnCloser.addEventListener('click', function(){
  closer()
})