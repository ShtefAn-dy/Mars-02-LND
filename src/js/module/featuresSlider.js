import Swiper from 'swiper/bundle';

const featuresSlider = new Swiper('.features__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 4,
  //сколько слайдов проматываем
  slidesPerGroup: 1,
  slideToClickedSlide: true,

  // If we need pagination
  pagination: {
    el: '.features__pagination',
    clickable: true,
    type: "bullets",
    // type: "fraction",
    // type:"progressbar",
    // type:"custom"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    776: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      // slidesPerView: 4,
      enabled: false,
    },
  },

  // on: {
  //   resize: function () {
  //     swiper.changeDirection(getDirection());
  //   },
  // },

});

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//   return direction;
// }






export default featuresSlider;