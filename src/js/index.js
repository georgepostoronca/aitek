import Swiper from 'swiper/bundle';

// Head Slider
const headslid = new Swiper('.js-headslider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// Fixed Scroll
const menuEl = document.querySelector(".js-menu");
console.log(menuEl)
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
