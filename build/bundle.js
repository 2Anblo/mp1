/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

/* Your JS here. */
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".navbar__items a");
var navbar = document.querySelector(".navbar");
var track = document.querySelector(".about__carousel-track");
var images = document.querySelectorAll(".about__carousel-track img");
var leftButton = document.querySelector(".about__carousel-button--left");
var rightButton = document.querySelector(".about__carousel-button--right");
var modals = document.querySelectorAll(".modal");
var cards = document.querySelectorAll(".services__card");
var closeButtons = document.querySelectorAll(".modal__close");

// section indicator

function updateActiveSection() {
  var currentSection = "";
  var navbarBottom = navbar.getBoundingClientRect().bottom;
  sections.forEach(function (section) {
    var sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= navbarBottom) {
      currentSection = section.id;
    }
  });
  var atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
  if (atBottom && sections.length > 0) {
    currentSection = sections[sections.length - 1].id;
  }
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#".concat(currentSection));
  });
}
window.addEventListener("scroll", updateActiveSection);
window.addEventListener("resize", updateActiveSection);
navbar.addEventListener("transitionend", function (event) {
  if (event.target === navbar && event.propertyName === "height") {
    updateActiveSection();
  }
});
updateActiveSection();

// resize navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// carousel animation
var currentIndex = 0;
function updateCarousel(nextIndex) {
  if (currentIndex > 0) {
    track.classList.remove("about__carousel-track--slide-".concat(currentIndex));
  }
  currentIndex = nextIndex;
  if (currentIndex > 0) {
    track.classList.add("about__carousel-track--slide-".concat(currentIndex));
  }
}
rightButton.addEventListener("click", function () {
  updateCarousel((currentIndex + 1) % images.length);
});
leftButton.addEventListener("click", function () {
  updateCarousel((currentIndex - 1 + images.length) % images.length);
});

// modal interaction
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    var modalId = card.dataset.modal;
    var modal = document.getElementById(modalId);
    modal.classList.add("active");
  });
});
closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".modal").classList.remove("active");
  });
});
modals.forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
});

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/services_background.png */ "./assets/services_background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Your SCSS here. */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

header {
  top: 0;
  position: sticky;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.801);
  transition: height 300ms ease, padding 300ms ease, background-color 300ms ease;
}
.navbar__title {
  color: white;
  margin: 0 1rem;
  font-size: 24px;
  transition: font-size 300ms ease;
}
.navbar__items {
  display: flex;
  gap: 1rem;
  margin: 0 1rem;
  transition: gap 300ms ease;
}
.navbar__items a {
  text-decoration: none;
  color: #fafcff;
  font-size: 17px;
  transition: color 300ms ease, font-size 300ms ease;
}
.navbar__items a:hover {
  color: #b6bfc8;
  text-decoration: underline;
  transition-duration: 500ms;
}
.navbar__items a.active {
  color: cornflowerblue;
  -webkit-text-decoration: solid;
          text-decoration: solid;
  transition-duration: 500ms;
  font-style: italic;
}
.navbar.scrolled {
  height: 45px;
  padding: 0 0.8rem;
}
.navbar.scrolled .navbar__title {
  font-size: 20px;
}
.navbar.scrolled .navbar__items {
  gap: 0.8rem;
}
.navbar.scrolled .navbar__items a {
  font-size: 14px;
}

.hero {
  position: relative;
  min-height: 100vh;
  scroll-margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 0 8%;
}
.hero__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  z-index: -1;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: -1;
}
.hero__content {
  max-width: 600px;
  color: white;
}
.hero__content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}
.hero__content p {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.about {
  min-height: 100vh;
  padding: 5rem 8%;
  background-color: black;
  color: white;
  align-items: center;
}
.about__columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
.about__carousel {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 4rem;
  overflow: hidden;
}
.about__carousel-track {
  display: flex;
  transition: transform 500ms ease;
}
.about__carousel-track--slide-1 {
  transform: translateX(-100%);
}
.about__carousel-track--slide-2 {
  transform: translateX(-200%);
}
.about__carousel-track img {
  width: 100%;
  flex-shrink: 0;
  height: 450px;
  -o-object-fit: cover;
     object-fit: cover;
}
.about__carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.about__carousel-button--left {
  left: 0rem;
}
.about__carousel-button--right {
  right: 0rem;
}
.about__column h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.about__column p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.services {
  min-height: 100vh;
  padding: 5rem 8%;
  background-color: black;
  color: white;
}
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.services__card {
  position: relative;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
}
.services__card img {
  width: 100%;
  height: 300px;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
  transition: transform 300ms ease;
}
.services__card:hover img {
  transform: scale(1.05);
}
.services__card span {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  color: white;
  font-size: 1.05rem;
}

.contact {
  min-height: 100vh;
  padding: 5rem 8%;
  position: relative;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.contact__content {
  z-index: 1;
  position: relative;
  width: min(550px, 90%);
  padding: 3rem;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
.contact__content h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact__info a {
  color: white;
  text-decoration: none;
}
.contact__info a:hover {
  color: cornflowerblue;
}
.contact__item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.contact__label {
  width: 100px;
  color: #aaa;
  font-size: 0.85rem;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  z-index: 2000;
}
.modal.active {
  display: flex;
}
.modal__content {
  position: relative;
  width: min(600px, 90%);
  padding: 2rem;
  background: white;
  color: black;
  border-radius: 12px;
}
.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: none;
  font-size: 2rem;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 8%;
  background: black;
  color: white;
}
.footer__socials {
  display: flex;
  gap: 1.25rem;
}
.footer__socials a {
  color: white;
  font-size: 1.25rem;
  transition: color 400ms ease, transform 400ms ease;
}
.footer__socials a:hover {
  color: #8a8987;
  transform: translateY(-3px);
}

section:not(.hero) {
  scroll-margin-top: 45px;
}

.hero,
.about,
.services,
.contact {
  padding: clamp(2.5rem, 5vh, 5rem) max(5%, calc((100% - 1440px) / 2));
}

.hero {
  min-height: calc(100vh - 60px);
  isolation: isolate;
}
.hero__content {
  min-width: 0;
}
.hero__content h1 {
  font-size: clamp(2.75rem, 4vw, 4rem);
}
.hero__content p {
  font-size: clamp(1.15rem, 1.6vw, 1.5rem);
}

.about__columns {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.25rem, 2.5vw, 3rem);
}
.about__carousel {
  margin-bottom: clamp(1.5rem, 4vh, 4rem);
}
.about__carousel-track img {
  display: block;
  height: clamp(240px, 42vh, 450px);
}
.about__column h2 {
  font-size: clamp(1.5rem, 2.2vw, 2rem);
}

.services__grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2vw, 2rem);
}
.services__card img {
  height: clamp(220px, 23vw, 300px);
}

.contact__content {
  width: 100%;
  max-width: 550px;
  padding: clamp(1.5rem, 3vw, 3rem);
}
.contact__item > :last-child {
  min-width: 0;
  overflow-wrap: anywhere;
}

.modal {
  padding: 1rem;
}
.modal__content {
  width: 100%;
  max-width: 600px;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
}
.modal__content h2 {
  padding-right: 2rem;
}

.footer {
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 2rem max(5%, calc((100% - 1440px) / 2));
}

@media (max-width: 800px) {
  .about__columns {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .about__column h2 {
    margin-top: 0;
  }

  .services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 560px) {
  .services__grid {
    grid-template-columns: 1fr;
  }

  .services__card img {
    height: auto;
    aspect-ratio: 16/10;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* Your SCSS here. */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\nheader {\r\n    top: 0;\r\n    position: sticky;\r\n    z-index: 1000;\r\n}\r\n\r\n.navbar {\r\n\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n\r\n\r\n    width: 100%;\r\n    height: 60px;\r\n        \r\n    background-color: rgba(0, 0, 0, 0.801);\r\n\r\n    transition:\r\n        height 300ms ease,\r\n        padding 300ms ease,\r\n        background-color 300ms ease;\r\n\r\n    &__title{\r\n        color: white;\r\n        margin: 0 1rem;\r\n        font-size: 24px;\r\n\r\n        transition: font-size 300ms ease;\r\n    }\r\n\r\n    &__items{\r\n        display: flex;\r\n        gap: 1rem;\r\n        margin: 0 1rem;\r\n\r\n        transition: gap 300ms ease;\r\n\r\n\r\n        a{\r\n            text-decoration: none;\r\n            color: hsl(210, 100%, 99%);\r\n            font-size: 17px;\r\n\r\n            transition:\r\n                color 300ms ease,\r\n                font-size 300ms ease;\r\n\r\n            &:hover{\r\n                color: hsl(212, 14%, 75%);\r\n                text-decoration: underline;\r\n                transition-duration: 500ms;\r\n            }\r\n\r\n            &.active {\r\n                color: cornflowerblue;\r\n                text-decoration: solid;\r\n                transition-duration: 500ms;\r\n                font-style: italic;\r\n            }\r\n        }\r\n    }\r\n\r\n    &.scrolled {\r\n\r\n        height: 45px;\r\n        padding: 0 0.8rem;\r\n\r\n        .navbar__title {\r\n            font-size: 20px;\r\n        }\r\n\r\n        .navbar__items {    \r\n            gap: 0.8rem;\r\n            \r\n            a {\r\n                font-size: 14px;\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\n\r\n.hero{\r\n    position: relative;\r\n    min-height: 100vh ;\r\n    scroll-margin-top: 60px;\r\n\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n    text-align: center;\n\r\n    overflow: hidden;\r\n    padding: 0 8%;\r\n\r\n    &__video {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n\r\n        width: 100%;\r\n        height: 100%;\r\n\r\n        object-fit: cover;\r\n\r\n        z-index: -1;\r\n    }\r\n\r\n    &__overlay{\r\n        position: absolute;\r\n        inset: 0;\r\n\r\n        background: rgba(0, 0, 0, 0.2);\r\n\r\n        z-index: -1;\r\n    }\r\n\r\n    &__content {\n        max-width: 600px;\n\r\n        color: white;\r\n\r\n        h1 {\r\n            font-size: 4rem;\r\n            margin-bottom: 1rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 1.5rem;\r\n            margin: 0.5rem 0;\r\n        }\r\n    }\r\n}\r\n\r\n.about{\r\n    min-height: 100vh;\r\n    padding: 5rem 8%;\r\n\r\n    background-color: black;\r\n    color: white;\r\n\r\n    &__columns {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: 3rem;\r\n    }\r\n\r\n\r\n    align-items: center;\r\n\r\n    &__carousel {\r\n        position: relative;\r\n        width: 100%;\r\n        max-width: 1000px;\r\n\r\n        margin: 0 auto 4rem;\r\n        overflow: hidden;\r\n    }\r\n\r\n    &__carousel-track {\n        display: flex;\n        transition: transform 500ms ease;\n\n        &--slide-1 {\n            transform: translateX(-100%);\n        }\n\n        &--slide-2 {\n            transform: translateX(-200%);\n        }\n\n        img {\n            width: 100%;\r\n            flex-shrink: 0;\r\n\r\n            height: 450px;\r\n            object-fit: cover;\r\n        }\r\n    }\r\n\r\n    &__carousel-button {\r\n        position: absolute;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n\r\n        z-index: 2;\r\n\r\n        border: none;\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n        color: white;\r\n\r\n        font-size: 2rem;\r\n        padding: 0.5rem 1rem;\r\n\r\n        cursor: pointer;\r\n\r\n        &--left{\r\n            left: 0rem;\r\n        }\r\n\r\n        &--right{\r\n            right: 0rem;\r\n        }\r\n\r\n\r\n    }\r\n\r\n    &__column {\r\n        h2 {\r\n            font-size: 2rem;\r\n            margin-bottom: 1rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 1.1rem;\r\n            line-height: 1.6;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n.services{\r\n    min-height: 100vh;\r\n    padding: 5rem 8%;\r\n\r\n    background-color: black;\r\n    color: white;\r\n\r\n    &__grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        gap: 2rem;\r\n    }\r\n\r\n    &__card {\r\n        position: relative;\r\n        border: none;\r\n        padding: 0;\r\n\r\n        background: none;\r\n        cursor: pointer;\r\n\r\n        overflow: hidden;\r\n\r\n        img {\r\n            width: 100%;\r\n            height: 300px;\r\n\r\n            object-fit: cover;\r\n            display: block;\r\n\r\n            transition: transform 300ms ease;\r\n        }\r\n\r\n        &:hover img{\r\n            transform: scale(1.05);\r\n        }\r\n\r\n        span {\r\n            position: absolute;\r\n            left: 1rem;\r\n            bottom: 1rem;\r\n\r\n            color: white;\r\n            font-size: 1.05rem;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n.contact{\r\n    min-height: 100vh;\r\n    padding: 5rem 8%;\r\n\r\n    position: relative;\r\n\r\n    background-image: url(\"../assets/services_background.png\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n\r\n    color: white;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        inset: 0;\r\n\r\n        background: rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    &__content {\r\n        z-index: 1;\r\n        position: relative;\r\n\r\n        width: min(550px, 90%);\r\n        padding: 3rem;\r\n\r\n        background: rgba(0, 0, 0, 0.75);\r\n        border: 1px solid rgba(255,255,255,0.2);\r\n        border-radius: 16px;\r\n\r\n        h2 {\r\n            margin-top: 0;\r\n            margin-bottom: 2rem;\r\n\r\n            font-size: 2.5rem;\r\n            text-align: center;\r\n        }\r\n\r\n    }\r\n\r\n    &__info {\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        gap: 1rem;\r\n\r\n        a {\r\n            color: white;\r\n            text-decoration: none;\r\n\r\n            &:hover {\r\n                color: cornflowerblue;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 1rem;\r\n    }\r\n\r\n    &__label {\r\n        width: 100px;\r\n        color: #aaa;\r\n        font-size: 0.85rem;\r\n\r\n        flex-shrink: 0;\r\n        text-transform: uppercase;\r\n        letter-spacing: 0.1rem;\r\n    }\r\n\r\n\r\n}\r\n\r\n.modal {\r\n    position: fixed;\r\n    inset: 0;\r\n\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    background: rgba(0, 0, 0, 0.75);\r\n\r\n    z-index: 2000;\r\n\r\n    &.active {\r\n        display: flex;\r\n    }\r\n\r\n    &__content {\r\n        position: relative;\r\n\r\n        width: min(600px, 90%);\r\n        padding: 2rem;\r\n\r\n        background: white;\r\n        color: black;\r\n\r\n        border-radius: 12px;\r\n    }\r\n\r\n    &__close {\r\n        position: absolute;\r\n        top: 1rem;\r\n        right: 1rem;\r\n\r\n        border: none;\r\n        background: none;\r\n\r\n        font-size: 2rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    padding: 2rem 8%;\r\n    background: black;\r\n    color: white;\r\n\r\n    &__socials {\r\n        display: flex;\r\n        gap: 1.25rem;\r\n\r\n        a {\r\n            color: white;\r\n            font-size: 1.25rem;\r\n            transition: color 400ms ease,\r\n                    transform 400ms ease;\r\n            \r\n            &:hover {\r\n                color: rgb(138, 137, 135);\r\n                transform: translateY(-3px);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\nsection:not(.hero) {\r\n    scroll-margin-top: 45px;\r\n}\n// Fluid spacing keeps the layout comfortable from tablets to wide desktops.\n$page-width: 1440px;\n$tablet-width: 800px;\n\n.hero,\n.about,\n.services,\n.contact {\n    padding: clamp(2.5rem, 5vh, 5rem) max(5%, calc((100% - #{$page-width}) / 2));\n}\n\n.hero {\n    min-height: calc(100vh - 60px);\n    isolation: isolate;\n\n    &__content {\n        min-width: 0;\n\n        h1 {\n            font-size: clamp(2.75rem, 4vw, 4rem);\n        }\n\n        p {\n            font-size: clamp(1.15rem, 1.6vw, 1.5rem);\n        }\n    }\n}\n\n.about {\n    &__columns {\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n        gap: clamp(1.25rem, 2.5vw, 3rem);\n    }\n\n    &__carousel {\n        margin-bottom: clamp(1.5rem, 4vh, 4rem);\n    }\n\n    &__carousel-track img {\n        display: block;\n        height: clamp(240px, 42vh, 450px);\n    }\n\n    &__column h2 {\n        font-size: clamp(1.5rem, 2.2vw, 2rem);\n    }\n}\n\n.services {\n    &__grid {\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n        gap: clamp(1rem, 2vw, 2rem);\n    }\n\n    &__card img {\n        height: clamp(220px, 23vw, 300px);\n    }\n}\n\n.contact {\n    &__content {\n        width: 100%;\n        max-width: 550px;\n        padding: clamp(1.5rem, 3vw, 3rem);\n    }\n\n    &__item > :last-child {\n        min-width: 0;\n        overflow-wrap: anywhere;\n    }\n}\n\n.modal {\n    padding: 1rem;\n\n    &__content {\n        width: 100%;\n        max-width: 600px;\n        max-height: calc(100vh - 2rem);\n        overflow-y: auto;\n\n        h2 {\n            padding-right: 2rem;\n        }\n    }\n}\n\n.footer {\n    gap: 1.5rem;\n    flex-wrap: wrap;\n    padding: 2rem max(5%, calc((100% - #{$page-width}) / 2));\n}\n\n@media (max-width: $tablet-width) {\n    .about__columns {\n        grid-template-columns: 1fr;\n        gap: 1rem;\n    }\n\n    .about__column h2 {\n        margin-top: 0;\n    }\n\n    .services__grid {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n}\n\n@media (max-width: 560px) {\n    .services__grid {\n        grid-template-columns: 1fr;\n    }\n\n    .services__card img {\n        height: auto;\n        aspect-ratio: 16 / 10;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video.mp4 */ "./assets/video.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image1.png */ "./assets/image1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image2.png */ "./assets/image2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image3.png */ "./assets/image3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/service1.png */ "./assets/service1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/service2.png */ "./assets/service2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/service3.png */ "./assets/service3.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"utf-8\" />\r\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <link\r\n            rel=\"stylesheet\"\r\n            href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css\"\r\n        >\r\n        <title>MP1</title>\r\n    </head>\r\n    <body>\r\n        <header>\r\n            <nav class=\"navbar\">\r\n                <h1 class=\"navbar__title\">Taxi Driver</h1>\r\n                <div class=\"navbar__items\">\r\n                    <a href=\"#hero\">Home</a>\r\n                    <a href=\"#about\">About</a>\r\n                    <a href=\"#services\">Services</a>\r\n                    <a href=\"#contact\">Contact</a>\r\n                </div>\r\n            </nav>\r\n        </header>\r\n\r\n        <main>\r\n            <section id=\"hero\" class=\"hero\">\r\n                <video class=\"hero__video\" autoplay muted loop playsinline>\r\n                    <source src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"video/mp4\">\r\n                </video>\r\n\r\n                <div class=\"hero__overlay\"></div>\r\n\r\n                <div class=\"hero__content\">\r\n                    <h1>Taxi Driver</h1>\r\n                    <p>My name is Travis</p>\r\n                    <p>A taxi driver lives in NYC</p>\r\n                </div>\r\n            </section>\r\n            <section id=\"about\" class=\"about\">\r\n\r\n                <div class=\"about__carousel\">\r\n                    <button class=\"about__carousel-button about__carousel-button--left\">\r\n                        &#10094;\r\n                    </button>    \r\n                    <div class=\"about__carousel-track\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"About image 1\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"About image 2\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"About image 3\">\r\n                    </div>\r\n                    <button class=\"about__carousel-button about__carousel-button--right\">\r\n                        &#10095;\r\n                    </button>    \r\n                </div>\r\n\r\n                <div class=\"about__columns\">\r\n                    <div class=\"about__column\">\r\n                        <h2>Who I Am</h2>\r\n                        <p>\r\n                        My name is Travis Bickle. I’m a former Marine, now driving a cab in New York City.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"about__column\">\r\n                        <h2>Why I Drive</h2>\r\n                        <p>\r\n                        I have trouble sleeping, so I work long nights behind the wheel. The streets give me somewhere to go.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div class=\"about__column\">\r\n                        <h2>What I See</h2>\r\n                        <p>\r\n                        From my cab, I watch people come and go. I’m surrounded by a city full of life, but I still feel alone.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section id=\"services\" class=\"services\">\r\n                <div class=\"services__grid\">\r\n                    <button class=\"services__card\" data-modal=\"modal-1\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Service 1\">\r\n                        <span>Taxi Driver</span>\r\n                    </button>\r\n                    <button class=\"services__card\" data-modal=\"modal-2\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Service 2\">\r\n                        <span>Soldier / Killer</span>\r\n                    </button>\r\n                    <button class=\"services__card\" data-modal=\"modal-3\">\r\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Service 3\">\r\n                        <span>Voter</span>\r\n                    </button>\r\n                </div>\r\n            </section>\r\n            <section id=\"contact\" class=\"contact\">\r\n                <div class=\"contact__content\">\r\n                    <h2>Contact Me</h2>\r\n\r\n                    <div class=\"contact__info\">\r\n                        <div class=\"contact__item\">\r\n                            <span class=\"contact__label\">Phone</span>\r\n                            <a href=\"tel:1112223333\">111-222-3333</a>\r\n                        </div>\r\n\r\n                        <div class=\"contact__item\">\r\n                            <span class=\"contact__label\">Email</span>\r\n                            <a href=\"mailto:zhanboc2@illinois.edu\">\r\n                                zhanboc2@illinois.edu\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"contact__item\">\r\n                            <span class=\"contact__label\">Address</span>\r\n                            <span>123 Main Street, Champaign, IL</span>\r\n                        </div>\r\n\r\n                        <div class=\"contact__item\">\r\n                            <span class=\"contact__label\">Hours</span>\r\n                            <span>Mon–Sun, 8:00 AM–10:00 PM</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </main>\r\n\r\n        <!-- Modals -->\r\n        <div class=\"modal\" id=\"modal-1\">\r\n            <div class=\"modal__content\">\r\n                <button class=\"modal__close\">&times;</button>\r\n\r\n                <h2>Taxi Driver</h2>\r\n                <p>Through the windshield, I watch the city I cannot connect with.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal\" id=\"modal-2\">\r\n            <div class=\"modal__content\">\r\n                <button class=\"modal__close\">&times;</button>\r\n\r\n                <h2>Soldier / Killer</h2>\r\n                <p>I’m a former Marine, turning my isolation into a violent mission of my own.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal\" id=\"modal-3\">\r\n            <div class=\"modal__content\">\r\n                <button class=\"modal__close\">&times;</button>\r\n\r\n                <h2>Voter</h2>\r\n                <p>I find myself drawn into a presidential campaign, but belonging remains out of reach.</p>\r\n            </div>\r\n        </div>\r\n\r\n        <footer class=\"footer\">\r\n            <p>&copy; 2026 Zhanbo Chen. All rights reserved.</p>\r\n            <div class=\"footer__socials\">\r\n                <a href=\"https://github.com/2Anblo\"\r\n                target=\"_blank\"\r\n                rel=\"noopener noreferrer\"\r\n                aria-label=\"GitHub\">\r\n                <i class=\"fa-brands fa-github\"></i>\r\n                </a>\r\n\r\n                <a href=\"https://x.com/ZhanboChen210\"\r\n                target=\"_blank\"\r\n                rel=\"noopener noreferrer\"\r\n                aria-label=\"X / Twitter\">\r\n                <i class=\"fa-brands fa-x-twitter\"></i>\r\n                </a>\r\n            </div>\r\n        </footer>\r\n\r\n    </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./assets/video.mp4"
/*!**************************!*\
  !*** ./assets/video.mp4 ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fc5d15ad32f5397248b2.mp4";

/***/ },

/***/ "./assets/image1.png"
/*!***************************!*\
  !*** ./assets/image1.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "81e536d73005e2711db5.png";

/***/ },

/***/ "./assets/image2.png"
/*!***************************!*\
  !*** ./assets/image2.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "4bfef39274389faab54c.png";

/***/ },

/***/ "./assets/image3.png"
/*!***************************!*\
  !*** ./assets/image3.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d6babfece013b3cda7b1.png";

/***/ },

/***/ "./assets/service1.png"
/*!*****************************!*\
  !*** ./assets/service1.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fa77c9336914f631126b.png";

/***/ },

/***/ "./assets/service2.png"
/*!*****************************!*\
  !*** ./assets/service2.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d0e7d56489d999677b4a.png";

/***/ },

/***/ "./assets/service3.png"
/*!*****************************!*\
  !*** ./assets/service3.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7712ca4744eecb069fe1.png";

/***/ },

/***/ "./assets/services_background.png"
/*!****************************************!*\
  !*** ./assets/services_background.png ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "872881a0c6a559678d79.png";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map