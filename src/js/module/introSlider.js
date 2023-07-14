import Swiper from 'swiper/bundle';

const introSlider = new Swiper('.intro__swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,
  //сколько слайдов проматываем
  slidesPerGroup: 1,
  slideToClickedSlide: true,
 
  // If we need pagination
  pagination: {
    el: 'intro__pagination',
    clickable: true,
    type: "bullets",
    // type: "fraction",
    // type:"progressbar",
    // type:"custom"
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

export default introSlider;