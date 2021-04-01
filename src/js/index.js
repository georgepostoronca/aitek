import Swiper from 'swiper/bundle';
import customSelect from 'custom-select';

// Custom Select
customSelect(document.querySelector('.js-custom-select'));

// Head Slider
const headslid = new Swiper('.js-headslider', {
  loop: true,
  pagination: {
    el: '.js-headslider-pagination',
    clickable: true
  }
});

// Fixed Scroll
const menuEl = document.querySelector(".js-menu");
document.addEventListener("scroll", function() {
  if(window.scrollY > 10) {
    menuEl.classList.add("--fixed")
  } else {
    menuEl.classList.remove("--fixed")
  }
});

// Open/Close Menu
const menuClose = document.querySelector(".js-menu-close");
const menuOpen = document.querySelector(".js-menu-open");
const menuElBlock = document.querySelector(".js-menu-el");

if(menuElBlock) {
  menuClose.addEventListener("click", function() {
    menuElBlock.classList.remove("--active");
    document.body.classList.remove("block-scroll");
  });

  menuOpen.addEventListener("click", function() {
    menuElBlock.classList.add("--active");
    document.body.classList.add("block-scroll");
  })
}

// News Slider
const newsslid = new Swiper('.js-newsslider', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1.3,
      spaceBetween: 13
    },
    600: {
      loop: true,
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});
