/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/scripts/App.js":
/*!****************************!*\
  !*** ./app/scripts/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./app/styles/styles.css\");\n/* harmony import */ var _modules_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_smooth-scroll */ \"./app/scripts/modules/_smooth-scroll.js\");\n/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/_mobile-menu */ \"./app/scripts/modules/_mobile-menu.js\");\n\n\n\nnew _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n_modules_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__.smoothScrollTo();\n\n//# sourceURL=webpack://19-portfolio/./app/scripts/App.js?");

/***/ }),

/***/ "./app/scripts/modules/_mobile-menu.js":
/*!*********************************************!*\
  !*** ./app/scripts/modules/_mobile-menu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar MobileMenu = /*#__PURE__*/function () {\n  function MobileMenu() {\n    _classCallCheck(this, MobileMenu);\n    this.menuIcon = document.querySelector('.mobile-menu');\n    this.navBar = document.querySelector('.navbar');\n    this.events();\n  }\n  _createClass(MobileMenu, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n      this.menuIcon.addEventListener(\"click\", function () {\n        return _this.toggleTheMenu();\n      });\n    }\n  }, {\n    key: \"toggleTheMenu\",\n    value: function toggleTheMenu() {\n      this.navBar.classList.toggle(\"navbar--is-open\");\n      this.menuIcon.classList.toggle(\"mobile-menu__close-x\");\n    }\n  }]);\n  return MobileMenu;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);\n\n//# sourceURL=webpack://19-portfolio/./app/scripts/modules/_mobile-menu.js?");

/***/ }),

/***/ "./app/scripts/modules/_smooth-scroll.js":
/*!***********************************************!*\
  !*** ./app/scripts/modules/_smooth-scroll.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScrollTo\": () => (/* binding */ smoothScrollTo)\n/* harmony export */ });\nfunction smoothScrollTo(y, duration) {\n  // Store the initial scroll position (window.pageYOffset)\n  var start = window.pageYOffset;\n  // Store the starting time of the animation\n  var startTime = \"now\" in window.performance ? performance.now() : new Date().getTime();\n\n  // An easing function (easeInOutQuad) for smooth animation\n  var easeInOutQuad = function easeInOutQuad(t, b, c, d) {\n    t /= d / 2;\n    if (t < 1) return c / 2 * t * t + b;\n    t--;\n    return -c / 2 * (t * (t - 2) - 1) + b;\n  };\n\n  // The main animation function that updates the scroll position for each frame\n  var animation = function animation(currentTime) {\n    // Calculate the elapsed time since the animation started\n    var elapsedTime = currentTime - startTime;\n    // Calculate the next scroll position using the easing function\n    var nextY = easeInOutQuad(elapsedTime, start, y - start, duration);\n    // Update the scroll position\n    window.scrollTo(0, nextY);\n\n    // If the elapsed time is less than the specified duration, continue animating\n    if (elapsedTime < duration) {\n      requestAnimationFrame(animation);\n    }\n  };\n\n  // Start the animation by calling the animation function\n  requestAnimationFrame(animation);\n}\n\n// Select all links with a hash (e.g., #section) in the href attribute\nvar links = document.querySelectorAll('a[href^=\"#\"]');\n\n// For each link, add a click event listener\nlinks.forEach(function (link) {\n  link.addEventListener(\"click\", function (e) {\n    // Prevent the default behavior (jumping to the target section)\n    e.preventDefault();\n\n    // Find the target section using the href attribute of the link\n    var target = document.querySelector(link.getAttribute(\"href\"));\n    // Calculate the target position (200px above the target section)\n    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 200;\n\n    // Call the smoothScrollTo function with the target position and a duration of 1000ms (1 second)\n    smoothScrollTo(targetPosition, 1000);\n  });\n});\n\n//# sourceURL=webpack://19-portfolio/./app/scripts/modules/_smooth-scroll.js?");

/***/ }),

/***/ "./app/styles/styles.css":
/*!*******************************!*\
  !*** ./app/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://19-portfolio/./app/styles/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/scripts/App.js");
/******/ 	
/******/ })()
;