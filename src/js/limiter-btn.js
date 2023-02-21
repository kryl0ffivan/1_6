const limiterBtn = document.querySelector('.text__limiter-btn')
const limiterText = document.querySelector('.text')
const brandsLimiterBtn = document.querySelector('.brands__limiter-btn')
const swiperLimiterText = document.querySelector('.swiper-wrapper')
const technicLimiterBtn = document.querySelector('.technic__limiter-btn')
const technicLimiterText = document.querySelector('.technic__wrapper')
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
});
brandsLimiterBtn.addEventListener('click', function () {
  if (brandsLimiterBtn.firstChild.data == 'Показать все') {
    brandsLimiterBtn.innerText = 'Скрыть'
    brandsLimiterBtn.classList.remove('brands__limiter-btn')
    brandsLimiterBtn.classList.add('brands__limiter-btn--closer')
    swiperLimiterText.classList.remove('swiper-wrapper--height')
  } else {
    brandsLimiterBtn.classList.add('brands__limiter-btn')
    brandsLimiterBtn.classList.remove('brands__limiter-btn--closer')
    brandsLimiterBtn.innerText = 'Показать все'
    swiperLimiterText.classList.add('swiper-wrapper--height')
  }
});
technicLimiterBtn.addEventListener('click', function () {
  if (technicLimiterBtn.firstChild.data == 'Показать все') {
    technicLimiterBtn.innerText = 'Скрыть'
    technicLimiterBtn.classList.remove('technic__limiter-btn')
    technicLimiterBtn.classList.add('technic__limiter-btn--closer')
    technicLimiterText.classList.remove('swiper-wrapper--height')
  } else {
    technicLimiterBtn.classList.add('technic__limiter-btn')
    technicLimiterBtn.classList.remove('technic__limiter-btn--closer')
    technicLimiterBtn.innerText = 'Показать все'
    technicLimiterText.classList.add('swiper-wrapper--height')
  }
});

