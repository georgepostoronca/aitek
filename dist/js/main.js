/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! custom-select */ "./node_modules/custom-select/build/index.js");
/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(custom_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-lightbox */ "./node_modules/simple-lightbox/src/simpleLightbox.js");
/* harmony import */ var simple_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_lightbox__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // let SimpleLightbox = window.SimpleLightbox;
// Custom Select

var customSelectAll = [].slice.call(document.querySelectorAll('.js-custom-select'));
customSelectAll.forEach(function (item) {
  var wrapCustomSelect = custom_select__WEBPACK_IMPORTED_MODULE_1___default()(item);
  console.log(wrapCustomSelect);

  if (wrapCustomSelect[0]) {
    wrapCustomSelect[0].select.addEventListener('change', function (e) {
      // console.log(e);
      if (e.target.dataset.changeNumber) {
        chabgeNumber(e.target);
      }
    });
  }
});

var chabgeNumber = function chabgeNumber(el) {
  try {
    var index = el.selectedIndex;
    var changeTel = document.querySelector(".js-change-phone");
    var phone = el.options[index].dataset.phone;
    changeTel.innerText = phone;
    changeTel.setAttribute("href", "tel:" + phone.split('').filter(function (e) {
      return e.trim().length;
    }).join(''));
  } catch (e) {
    console.log(e);
  }
};

var changeNumberLink = document.querySelector("[data-change-number]");

if (changeNumberLink) {
  chabgeNumber(changeNumberLink);
} // Head Slider


var headslid = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-headslider', {
  loop: true,
  pagination: {
    el: '.js-headslider-pagination',
    clickable: true
  }
}); // Fixed Scroll

var menuEl = document.querySelector(".js-menu");

if (menuEl) {
  document.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      menuEl.classList.add("--fixed");
    } else {
      menuEl.classList.remove("--fixed");
    }
  });
} // Open/Close Menu


var menuClose = document.querySelector(".js-menu-close");
var menuOpen = document.querySelector(".js-menu-open");
var menuElBlock = document.querySelector(".js-menu-el");

if (menuElBlock) {
  menuClose.addEventListener("click", function () {
    menuElBlock.classList.remove("--active");
    document.body.classList.remove("block-scroll");
  });
  menuOpen.addEventListener("click", function () {
    menuElBlock.classList.add("--active");
    document.body.classList.add("block-scroll");
  });
} // News Slider


var newsSlider = document.querySelector('.js-newsslider');

if (newsSlider) {
  var newsslid = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-newsslider', {
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
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
}

var sliderminEl = [].slice.call(document.querySelectorAll(".js-slidermin"));

if (sliderminEl) {
  sliderminEl.forEach(function (item) {
    var newsslid = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](item, {
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
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  });
}

var sliderminDetailEl = document.querySelector(".js-bdetail");

if (sliderminDetailEl) {
  var _Swiper;

  var newsslidDetailEl = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderminDetailEl, (_Swiper = {
    loop: false,
    slidesPerView: "auto"
  }, _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "spaceBetween", 15), _defineProperty(_Swiper, "breakpoints", {
    0: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15
    },
    480: {
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 15
    }
  }), _defineProperty(_Swiper, "navigation", {
    nextEl: '.js-bdetail-next',
    prevEl: '.js-bdetail-prev'
  }), _Swiper));
} // Simple Lightbox


var lightbox = new simple_lightbox__WEBPACK_IMPORTED_MODULE_2___default.a({
  // elements: '.js-lightbox .js-lightbox-link'
  elements: document.querySelectorAll('.js-lightbox .js-lightbox-link')
}); // let magnificLinks = [].slice.call(document.querySelectorAll(".js-magnific-link"));
// if(magnificLinks) {
//   magnificLinks.forEach(item => {
//     console.log(item)
//     let data = item.dataset.src;
//   })
// }
// Tab

var getSiblings = function getSiblings(e) {
  // for collecting siblings
  var siblings = []; // if no parent, return no sibling

  if (!e.parentNode) {
    return siblings;
  } // first child of the parent node


  var sibling = e.parentNode.firstChild; // collecting siblings

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

var tabBlock = [].slice.call(document.querySelectorAll(".js-tab"));
tabBlock.forEach(function (item) {
  var btns = [].slice.call(item.querySelectorAll(".js-tab-btn"));
  var contents = [].slice.call(item.querySelectorAll(".js-tab-content"));
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (b) {
      var index = btns.indexOf(btn);
      btns[index].classList.add("active");
      var siblingsBtn = getSiblings(btns[index]);
      siblingsBtn.forEach(function (item) {
        return item.classList.remove("active");
      });
      contents[index].classList.add("active");
      var siblingsContent = getSiblings(contents[index]);
      siblingsContent.forEach(function (item) {
        return item.classList.remove("active");
      });
    });
  });
}); // Scroll Start/End

function scrolled(o, type) {
  var direction = type ? o.scrollTop : o.scrollLeft;
  var size = type ? o.scrollHeight : o.scrollWidth;
  var bSize = type ? o.offsetHeight : o.offsetWidth;

  if (direction + bSize == size) {
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

window.scrolledFn = scrolled; // Tab ID

var tabIDItem = [].slice.call(document.querySelectorAll(".js-tab-id"));

if (tabIDItem) {
  setTimeout(function () {
    tabIDItem[0].click();
  }, 100);

  var contentToggle = function contentToggle(item, id) {
    var elContent = [].slice.call(document.querySelectorAll(".js-tab-id-content"));
    elContent.forEach(function (cnt) {
      console.log(cnt.id, item, id);
      cnt.id === id ? cnt.classList.add("active") : cnt.classList.remove("active");
    });
  };

  tabIDItem.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var id = item.dataset.tab;
      item.classList.add("active");
      var siblingsBtn = getSiblings(item);
      siblingsBtn.forEach(function (btn) {
        btn.classList.remove("active");
      });
      contentToggle(item, id);
    });
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map