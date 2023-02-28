const modalFeedback = document.querySelector('.modal-feedback')
const modalCall = document.querySelector('.modal-call')
const closeFeedback = document.querySelector('.close-feedback')
const closeCall = document.querySelector('.close-call')
const openFeedback = document.querySelectorAll('.chat')
const openCall = document.querySelectorAll('.call')
const menu = document.querySelector('.menu-burger')
const mainSect = document.querySelector('.main-section')
const funOpenCall = function (){
  modalCall.classList.remove('modal-closer')
  modalCall.classList.add('modal--open')
  closeCall.classList.add('modal-top__close--right')
  mainSect.classList.add('opacity')
  menu.classList.add('opacity')
}
const funCloseCall = function (){
    modalCall.classList.add('modal-closer')
    modalCall.classList.remove('modal--open')
    closeCall.classList.remove('modal-top__close--right')
    mainSect.classList.remove('opacity')
    menu.classList.remove('opacity')
}
const funOpenFeedback = function(){
  modalFeedback.classList.add('modal--open')
  modalFeedback.classList.remove('modal-closer')
  closeFeedback.classList.add('modal-top__close--right')
  mainSect.classList.add('opacity')
  menu.classList.add('opacity')
}
const funCloseFeedback = function () {
    modalFeedback.classList.add('modal-closer')
    modalFeedback.classList.remove('modal--open')
    closeFeedback.classList.remove('modal-top__close--right')
    mainSect.classList.remove('opacity')
    menu.classList.remove('opacity')
}

openCall[0].addEventListener('click', function(){
funOpenCall()
});
openCall[1].addEventListener('click', function () {
funOpenCall()
});

closeCall.addEventListener('click',function(){
funCloseCall()

});
openFeedback[0].addEventListener('click', function () {
funOpenFeedback()
});
openFeedback[1].addEventListener('click', function () {
funOpenFeedback()
})
closeFeedback.addEventListener('click', function () {
funCloseFeedback()
});
