import Swiper from 'swiper/bundle';
import customSelect from 'custom-select';
import SimpleLightbox from "simple-lightbox";
import IMask from './imask';
import Bouncer from './bouncer.polyfills.min';
import print from 'print-js';

import Plyr from 'plyr';
const player = new Plyr('#player');

const jquery = require("jquery");
const $ = require("jquery");
const jQuery = require("jquery");
window.jQuery = $;
const fancybox = require("@fancyapps/fancybox");
// const bouncer = require("bouncer.polyfills.min");


// Custom Select
let customSelectAll = [].slice.call(document.querySelectorAll('.js-custom-select'));
customSelectAll.forEach(item => {
  const wrapCustomSelect = customSelect(item);
  // console.log(wrapCustomSelect)
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
  autoplay: {
    delay: 4000,
  },
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
      },
      1400: {
        spaceBetween: 30,
      },
      1600: {
        spaceBetween: 70,
      },
      1800: {
        spaceBetween: 120,
      },
      2000: {
        spaceBetween: 170,
      },
      2200: {
        spaceBetween: 220,
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
        },
        1741: {
          slidesPerView: 4,
        },
        2188: {
          slidesPerView: 5,
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


let sliderminDetailEl = document.querySelector(".js-bdetail");
if(sliderminDetailEl) {
  const newsslidDetailEl = new Swiper(sliderminDetailEl, {
    loop: false,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 15,
    breakpoints: {
      0: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15
      },
      480: {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 15,
      }
    },
    navigation: {
      nextEl: '.js-bdetail-next',
      prevEl: '.js-bdetail-prev',
    }
  });
}


// Modal Slider
const setttingsSliderTop = {
  spaceBetween: 28,
  slidesPerView: 5,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoHeight: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 28,
    },
  }
};

const setttingsSliderBottom = {
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  thumbs: {
    swiper: galleryThumbs
  },
};
const galleryThumbs = new Swiper('.gallery-thumbs', setttingsSliderTop);
const galleryTop = new Swiper('.gallery-top', setttingsSliderBottom);

// parteners Slider
const sliderParteners = document.querySelector('.parteners-grid__slider');
const sliderPhotogallery = document.querySelector('.photogallery__swiper');
let sliderPartenersMobile = false;
let sliderPhotogalleryMobile = false;
let partenersSwiper;
let photogallerySwiper;
function mobileSlider() {
  if (sliderParteners) {
    if (window.innerWidth <= 762 && sliderPartenersMobile === false) {
      console.log('.photogallery__grid')
      partenersSwiper = new Swiper(sliderParteners, {
        spaceBetween: 28,
        slidesPerView: 2.3,
        loop: true,
        autoHeight: true,
        breakpoints: {
          0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
            // centeredSlides: true,
          },
          510: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
        }
      });
      sliderPartenersMobile = true
    }
    if (window.innerWidth > 762 && sliderPartenersMobile === true) {
      partenersSwiper.destroy();
      sliderPartenersMobile = false;
    }
  }
  if (sliderPhotogallery) {
    if (window.innerWidth <= 762 && sliderPhotogalleryMobile === false) {
      $('.photogallery__grid').removeClass('row')
      photogallerySwiper = new Swiper(sliderPhotogallery, {
        spaceBetween: 28,
        slidesPerView: 2.3,
        loop: true,
        // freeMode: true,
        autoHeight: true,
        breakpoints: {
          0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          510: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
        }
      });
      sliderPhotogalleryMobile = true
    }
    if (window.innerWidth > 762 && sliderPhotogalleryMobile === true) {
      photogallerySwiper.destroy();
      $('.photogallery__grid').addClass('row')
      sliderPhotogalleryMobile = false;
    }
  }
}
mobileSlider()
window.addEventListener('resize', () => {
  mobileSlider();
});


$.fancybox.defaults.backFocus = false;
$("[data-fancybox]").fancybox({
  afterShow: function( instance, slide ) {
    // console.log("show", galleryThumbs);
    galleryThumbs.destroy();
    galleryTop.destroy();

    let galleryThumbsReinit = new Swiper('.gallery-thumbs', setttingsSliderTop);
    new Swiper('.gallery-top', {
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      thumbs: {
        swiper: galleryThumbsReinit
      },
    });
  }
});

// Simple Lightbox
// let lightbox = new SimpleLightbox({
//   // elements: '.js-lightbox .js-lightbox-link'
//   elements: document.querySelectorAll('.js-lightbox .js-lightbox-link')
// });

// let lightbox2 = new SimpleLightbox({
//   // elements: '.js-lightbox .js-lightbox-link'
//   elements: document.querySelectorAll('.js-lightbox2 .js-lightbox-link')
// });
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


// Scroll Start/End
function scrolled(o, type) {
  var direction = type ? o.scrollTop : o.scrollLeft;
  var size = type ? o.scrollHeight : o.scrollWidth;
  let bSize = type ? o.offsetHeight : o.offsetWidth;

  if ((direction + bSize) == size) {
    o.parentNode.classList.add("end");
    o.parentNode.classList.remove("between");
    o.parentNode.classList.remove("start");
  } else {
    o.parentNode.classList.remove("end");
    o.parentNode.classList.add("between");
    o.parentNode.classList.remove("start");
  }

  if (direction == 0) {
    o.parentNode.classList.remove("end");
    o.parentNode.classList.remove("between");
    o.parentNode.classList.add("start");
  }

  return false;
}

window.scrolledFn = scrolled;


// scroll parteners off from start
$(document).ready(function() {
  if($('.more-parteners').length) {
    $('.more-parteners').on('click', function(e) {
      e.preventDefault();
      $('.parteners-grid__scroll').css({'overflow': 'auto', 'height': '493px'})
      $('.more-parteners').css({'display': 'none'})
    })
  }
})


// Tab ID
let tabIDItem = [].slice.call(document.querySelectorAll(".js-tab-id"));
if(tabIDItem.length) {
  setTimeout(() => {
    tabIDItem[0].click();
  }, 100);

  let contentToggle = (item, id) => {
    let elContent = [].slice.call(document.querySelectorAll(".js-tab-id-content"));

    elContent.forEach(cnt => {
      cnt.id === id ? cnt.classList.add("active") : cnt.classList.remove("active");
    })
  }

  tabIDItem.forEach(item => {
    item.addEventListener("click", (e) => {
      let id = item.dataset.tab;
      item.classList.add("active")

      let siblingsBtn = getSiblings(item);
      siblingsBtn.forEach(btn => {
        btn.classList.remove("active");
      });

      contentToggle(item, id);
    })
  })
}

// Vacancy Detail
// let btnVncyDetail = [].slice.call(document.querySelectorAll(".js-open-detail"));
// if(btnVncyDetail.length) {
//   const allDetail = [].slice.call(document.querySelectorAll(".js-vacancy-detail"));
//   const vcncyWrap = document.querySelector(".js-vacancy-wrap");
//   const vcncyClose = [].slice.call(document.querySelectorAll(".js-vacancy-detail-close"));
//   const head = document.querySelector(".menu");
//
//   vcncyClose.forEach(vc => {
//     vc.addEventListener("click", () => {
//       vcncyWrap.style.display = "block";
//       head.style.backgroundColor = "#ffffff";
//       head.style.transition = "0s";
//       head.classList.remove("--colored");
//
//       allDetail.forEach(i => {
//         i.classList.remove("active");
//       });
//     });
//   });
//
//   btnVncyDetail.forEach(item => {
//     item.addEventListener("click", (e) => {
//       let color = e.currentTarget.dataset.color;
//       let content = e.currentTarget.dataset.content;
//       let elId = document.getElementById(content);
//
//       elId.style.backgroundColor = color;
//       head.style.transition = "0s";
//       head.style.backgroundColor = color;
//       head.classList.add("--colored");
//
//       let elIdSiblings = allDetail.filter(s => {
//         if(s !== elId) return s;
//       });
//
//       vcncyWrap.style.display = "none";
//
//       elIdSiblings.forEach(i => {
//         i.classList.remove("active");
//       });
//
//       elId.classList.add("active");
//     });
//   });
// }

// Modal
// var modalTinyNoFooter = new tingle.modal({
//   closeLabel: "",
// });
//
// var btnModal = [].slice.call(document.querySelectorAll('.js-tingle-modal'));
// btnModal.forEach(item => {
//
//   item.addEventListener('click', function () {
//     let slider = item.dataset.slider;
//     let el = document.querySelector('.' + slider);
//
//     modalTinyNoFooter.setContent(el.outerHTML);
//     modalTinyNoFooter.open();
//
//     let close = modalTinyNoFooter.modal.querySelector(".js-modal-close");
//
//     if(close) {
//       close.addEventListener("click", function() {
//         modalTinyNoFooter.close();
//       });
//     }
//   });
// });



// IMask
let IMaskArr = [].slice.call(document.querySelectorAll('.js-input-phone'));
let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
IMaskArr.forEach(item => {
  let mask = IMask(item, maskOptions);
});



// Form Validation
document.addEventListener("DOMContentLoaded", function (event) {
  var validatorClass = document.querySelectorAll(".js-form-validator");
  if (validatorClass.length) {
    var bouncer = new Bouncer('.js-form-validator', {
      disableSubmit: true,
      fieldClass: 'error', // Applied to fields with errors
      errorClass: 'error-message', // Applied to the error message for invalid fields
      fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
      errorPrefix: 'bouncer-error_', // Prefix used for error message IDs
      patterns: {
        email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
        // password: /(?=.*\d)(?=.*[a-zа-яё|A-ZА-ЯЁ]).{8,}/,
        password: /[\d\w\W\D\d].{7,}/,
        tel: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        phone: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
      },
      customValidations: {
        valueMismatch: function (field) {
          // Look for a selector for a field to compare
          // If there isn't one, return false (no error)
          var selector = field.getAttribute('data-bouncer-match');
          if (!selector) return false;

          // Get the field to compare
          var otherField = field.form.querySelector(selector);
          if (!otherField) return false;

          // Compare the two field values
          // We use a negative comparison here because if they do match, the field validates
          // We want to return true for failures, which can be confusing
          return otherField.value !== field.value;

        }
      },
    });

    document.addEventListener('bouncerFormInvalid', function (event) {
      // console.log(event.detail.errors);
      window.scrollTo(0, event.target.offsetTop);
    }, false);

    document.addEventListener('bouncerFormValid', function (el) {
      try {
        var fn = el.target.dataset.submit;
        window[fn](el);
      } catch(e) {
        console.log("Form Submit Error!")
      }
    }, false);

    let arrinput = [].slice.apply(document.querySelectorAll("input[type='password']"));
    arrinput.forEach(function (input) {
      input.addEventListener("input", function () {
        check(this.value, this);
      });
    });
  }
});
