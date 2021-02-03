import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper();

const photoSlider = new Swiper('.photo-slider', {

  loop: true,
  slideToClickedSlide: true,
  grabCursor: true,
  // slidesPerView: 4,


  mousewheel: {
    sensitivity: 1,
    eventsTarget: "photo-slider"
  },


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }


})

const cardsSlider = new Swiper('.cards-slider', {

  loop: true,
  // slideToClickedSlide: true,
  slidesPerView: 2.5,
  slidesPerView: 'auto',

  grabCursor: true,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: "cards-slider"
  },

})