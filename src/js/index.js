import Swiper from 'swiper/bundle';

// Head Slider
const headslid = new Swiper('.js-headslider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
