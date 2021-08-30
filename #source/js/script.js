/*
$(".header-menu__link").click(function (e) {
   e.preventDefault();
   $(".header-menu__link").removeClass('active');
   $(this).addClass('active');
})

*/
let swiper3 = new Swiper(".section-container", {
   slidesPerView: 1,
   mousewheel: {
      sensitivity: 10,
   }
});

let swiper1 = new Swiper(".main-slider", {
   observer: true,
   observerParents: true,
   slidesPerView: 1,
   speed: 800,
   loop: true,
   pagination: {
      el: '.main-slider__fraction',
      type: 'fraction',

      formatFractionCurrent: function (number) {
         return ('0' + number).slice(-2);
      },

      renderFraction: function (currentClass) {
         return '<span class="' + currentClass + '"></span>';
      }
   }
});

const swiperPrev = document.querySelector('.controls-slider__prev');
const swiperNext = document.querySelector('.controls-slider__next');

swiperPrev.addEventListener('click', () => {
   swiper1.slidePrev();
});
swiperNext.addEventListener('click', () => {
   swiper1.slideNext();
});

let swiper2 = new Swiper(".info-slider", {
   effect: "cube",
   grabCursor: true,
   cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },
   slidesPerView: 1,
   speed: 800,
   loop: true,
   spaceBetween: 50,
});

swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;





