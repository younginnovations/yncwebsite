/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/***/ (function(module, exports) {

var bg = document.querySelector('.confetti');
var windowWidth = window.innerWidth / 5;
var windowHeight = window.innerHeight / 5;

bg.addEventListener('mousemove', function (e) {
  var mouseX = e.clientX / windowWidth;
  var mouseY = e.clientY / windowHeight;

  bg.style.transform = 'translate3d(-' + mouseX + '%, -' + mouseY + '%, 0)';
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

// const tilt = $('.js-tilt').tilt();

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.section-projects').scrollIntoView({
  behavior: 'smooth'
});

/***/ }),

/***/ "./src/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/tailwind.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/js/app.js");
__webpack_require__("./src/sass/app.scss");
module.exports = __webpack_require__("./src/sass/tailwind.css");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDhlYzE2OTVhNjY2Y2I0MzBjMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz9kOTVhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3RhaWx3aW5kLmNzcz8yMDgyIl0sIm5hbWVzIjpbImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1vdXNlWCIsImNsaWVudFgiLCJtb3VzZVkiLCJjbGllbnRZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzY3JvbGwiLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxCeSIsInNjcm9sbEludG9WaWV3Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBLElBQU1BLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWDtBQUNBLElBQU1DLGNBQWNDLE9BQU9DLFVBQVAsR0FBb0IsQ0FBeEM7QUFDQSxJQUFNQyxlQUFlRixPQUFPRyxXQUFQLEdBQXFCLENBQTFDOztBQUVBUCxHQUFHUSxnQkFBSCxDQUFvQixXQUFwQixFQUFpQyxVQUFDQyxDQUFELEVBQU87QUFDdEMsTUFBTUMsU0FBU0QsRUFBRUUsT0FBRixHQUFZUixXQUEzQjtBQUNBLE1BQU1TLFNBQVNILEVBQUVJLE9BQUYsR0FBWVAsWUFBM0I7O0FBRUFOLEtBQUdjLEtBQUgsQ0FBU0MsU0FBVCxxQkFBcUNMLE1BQXJDLFlBQWtERSxNQUFsRDtBQUNELENBTEQ7O0FBT0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQVIsT0FBT1ksTUFBUCxDQUFjO0FBQ1pDLE9BQUssSUFETztBQUVaQyxRQUFNLENBRk07QUFHWkMsWUFBVTtBQUhFLENBQWQ7O0FBTUE7QUFDQWYsT0FBT2dCLFFBQVAsQ0FBZ0I7QUFDZEgsT0FBSyxHQURTLEVBQ0o7QUFDVkMsUUFBTSxDQUZRO0FBR2RDLFlBQVU7QUFISSxDQUFoQjs7QUFNQTtBQUNBbEIsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENtQixjQUE1QyxDQUEyRDtBQUN6REYsWUFBVTtBQUQrQyxDQUEzRCxFOzs7Ozs7O0FDakNBLHlDOzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0OGVjMTY5NWE2NjZjYjQzMGMzNSIsImNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZldHRpJyk7XG5jb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gNTtcbmNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDUgO1xuXG5iZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICBjb25zdCBtb3VzZVggPSBlLmNsaWVudFggLyB3aW5kb3dXaWR0aDtcbiAgY29uc3QgbW91c2VZID0gZS5jbGllbnRZIC8gd2luZG93SGVpZ2h0O1xuICBcbiAgYmcuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKC0ke21vdXNlWH0lLCAtJHttb3VzZVl9JSwgMClgO1xufSk7XG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4vLyAgICQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKCk7XG4vLyB9KTtcblxuLy8gY29uc3QgdGlsdCA9ICQoJy5qcy10aWx0JykudGlsdCgpO1xuXG4vLyBTY3JvbGwgdG8gc3BlY2lmaWMgdmFsdWVzXG4vLyBzY3JvbGxUbyBpcyB0aGUgc2FtZVxud2luZG93LnNjcm9sbCh7XG4gIHRvcDogMjUwMCxcbiAgbGVmdDogMCxcbiAgYmVoYXZpb3I6ICdzbW9vdGgnXG59KTtcblxuLy8gU2Nyb2xsIGNlcnRhaW4gYW1vdW50cyBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbndpbmRvdy5zY3JvbGxCeSh7XG4gIHRvcDogMTAwLCAvLyBjb3VsZCBiZSBuZWdhdGl2ZSB2YWx1ZVxuICBsZWZ0OiAwLFxuICBiZWhhdmlvcjogJ3Ntb290aCdcbn0pO1xuXG4vLyBTY3JvbGwgdG8gYSBjZXJ0YWluIGVsZW1lbnRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXByb2plY3RzJykuc2Nyb2xsSW50b1ZpZXcoe1xuICBiZWhhdmlvcjogJ3Ntb290aCdcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9