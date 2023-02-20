const limiterBtn = document.querySelector('.text__limiter-btn')
const limiterText = document.querySelector('.text')
limiterBtn.addEventListener('click', function(){
  if (limiterBtn.firstChild.data =='Читать далее'){
    limiterBtn.innerText = 'Скрыть'
    limiterBtn.classList.remove('text__limiter-btn')
    limiterBtn.classList.add('text__limiter-btn--closer')
    limiterText.classList.remove('text--height')
  }
  else {
      limiterBtn.classList.add('text__limiter-btn')
      limiterBtn.classList.remove('text__limiter-btn--closer')
      limiterBtn.innerText = 'Читать далее'
      limiterText.classList.add('text--height')

  }
})
