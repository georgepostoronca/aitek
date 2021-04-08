import Swiper from 'swiper/bundle';
import customSelect from 'custom-select';
import SimpleLightbox from "simple-lightbox";
// let SimpleLightbox = window.SimpleLightbox;

// Custom Select
let customSelectAll = [].slice.call(document.querySelectorAll('.js-custom-select'));
customSelectAll.forEach(item => {
  const wrapCustomSelect = customSelect(item);
  console.log(wrapCustomSelect)
  if(wrapCustomSelect[0]) {
    wrapCustomSelect[0].select.addEventListener('change', (e) => {
      // console.log(e);
      if(e.target.dataset.changeNumber) {
        chabgeNumber(e.target);
      }
    });
  }
});

const chabgeNumber = (el) => {
  try {
    let index = el.selectedIndex;
    let changeTel = document.querySelector(".js-change-phone");
    let phone = el.options[index].dataset.phone;

    changeTel.innerText = phone;
    changeTel.setAttribute("href", "tel:" + phone.split('').filter(e => e.trim().length).join(''));
  } catch(e) {
    console.log(e);
  }
}

const changeNumberLink = document.querySelector("[data-change-number]");
if(changeNumberLink) {
  chabgeNumber(changeNumberLink);
}


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
if(menuEl) {
  document.addEventListener("scroll", function() {
    if(window.scrollY > 10) {
      menuEl.classList.add("--fixed")
    } else {
      menuEl.classList.remove("--fixed")
    }
  });
}

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
let newsSlider = document.querySelector('.js-newsslider');
if(newsSlider) {
  const newsslid = new Swiper('.js-newsslider', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        loop: true,
        slidesPerView: 1.15,
        spaceBetween: 13
      },

      370: {
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
}

let sliderminEl = [].slice.call(document.querySelectorAll(".js-slidermin"));
if(sliderminEl) {
  sliderminEl.forEach(item => {
    const newsslid = new Swiper(item, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        0: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 0
        },

        370: {
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
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
}


// Simple Lightbox
let lightbox = new SimpleLightbox({
  // elements: '.js-lightbox .js-lightbox-link'
  elements: document.querySelectorAll('.js-lightbox .js-lightbox-link')
});
// let magnificLinks = [].slice.call(document.querySelectorAll(".js-magnific-link"));
// if(magnificLinks) {
//   magnificLinks.forEach(item => {
//     console.log(item)
//     let data = item.dataset.src;
//   })
// }



// Tab
let getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if(!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling  = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

let tabBlock = [].slice.call(document.querySelectorAll(".js-tab"));
tabBlock.forEach(item => {
  let btns = [].slice.call(item.querySelectorAll(".js-tab-btn"));
  let contents = [].slice.call(item.querySelectorAll(".js-tab-content"));

  btns.forEach(btn => {
    btn.addEventListener("click", (b) => {
      let index = btns.indexOf(btn);

      btns[index].classList.add("active");
      let siblingsBtn = getSiblings(btns[index]);
      siblingsBtn.forEach(item => item.classList.remove("active"));

      contents[index].classList.add("active");
      let siblingsContent = getSiblings(contents[index]);
      siblingsContent.forEach(item => item.classList.remove("active"));
    })
  })
});
