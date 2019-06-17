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

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

var link = document.createElement('a.download-profile');
link.href = url;
link.download = 'https://storage.googleapis.com/yipl-site/YNC/YandC-profile.pdf';
link.dispatchEvent(new MouseEvent('click'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDM2NTlmZTkwMzA1YjJlMDM0ZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz9kOTVhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3RhaWx3aW5kLmNzcz8yMDgyIl0sIm5hbWVzIjpbImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1vdXNlWCIsImNsaWVudFgiLCJtb3VzZVkiLCJjbGllbnRZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCIkIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwidXJsIiwiZG93bmxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQSxJQUFNQSxLQUFLQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQVg7QUFDQSxJQUFNQyxjQUFjQyxPQUFPQyxVQUFQLEdBQW9CLENBQXhDO0FBQ0EsSUFBTUMsZUFBZUYsT0FBT0csV0FBUCxHQUFxQixDQUExQzs7QUFFQVAsR0FBR1EsZ0JBQUgsQ0FBb0IsV0FBcEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLE1BQU1DLFNBQVNELEVBQUVFLE9BQUYsR0FBWVIsV0FBM0I7QUFDQSxNQUFNUyxTQUFTSCxFQUFFSSxPQUFGLEdBQVlQLFlBQTNCOztBQUVBTixLQUFHYyxLQUFILENBQVNDLFNBQVQscUJBQXFDTCxNQUFyQyxZQUFrREUsTUFBbEQ7QUFDRCxDQUxEOztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQUksRUFBRSxjQUFGLEVBQWtCQyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFTUixDQUFULEVBQVk7QUFDeENBLElBQUVTLGNBQUY7O0FBRUFGLElBQUUsWUFBRixFQUFnQkcsT0FBaEIsQ0FDRTtBQUNFQyxlQUFXSixFQUFFQSxFQUFFLElBQUYsRUFBUUssSUFBUixDQUFhLE1BQWIsQ0FBRixFQUF3QkMsTUFBeEIsR0FBaUNDO0FBRDlDLEdBREYsRUFJRSxHQUpGLEVBS0UsUUFMRjtBQU9ELENBVkQ7O0FBWUEsSUFBSUMsT0FBT3ZCLFNBQVN3QixhQUFULENBQXVCLG9CQUF2QixDQUFYO0FBQ0FELEtBQUtFLElBQUwsR0FBWUMsR0FBWjtBQUNBSCxLQUFLSSxRQUFMLEdBQWdCLGdFQUFoQjtBQUNBSixLQUFLSyxhQUFMLENBQW1CLElBQUlDLFVBQUosQ0FBZSxPQUFmLENBQW5CLEU7Ozs7Ozs7QUNoQ0EseUM7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQzNjU5ZmU5MDMwNWIyZTAzNGU3IiwiY29uc3QgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmV0dGknKTtcbmNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggLyA1O1xuY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC8gNSA7XG5cbmJnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gIGNvbnN0IG1vdXNlWCA9IGUuY2xpZW50WCAvIHdpbmRvd1dpZHRoO1xuICBjb25zdCBtb3VzZVkgPSBlLmNsaWVudFkgLyB3aW5kb3dIZWlnaHQ7XG4gIFxuICBiZy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoLSR7bW91c2VYfSUsIC0ke21vdXNlWX0lLCAwKWA7XG59KTtcblxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbi8vICAgJChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoKTtcbi8vIH0pO1xuXG4vLyBjb25zdCB0aWx0ID0gJCgnLmpzLXRpbHQnKS50aWx0KCk7XG5cbiQoJ2FbaHJlZio9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgXG4gICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuICAgIHtcbiAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxuICAgIH0sXG4gICAgNTAwLFxuICAgICdsaW5lYXInXG4gIClcbn0pXG5cbnZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS5kb3dubG9hZC1wcm9maWxlJyk7XG5saW5rLmhyZWYgPSB1cmw7XG5saW5rLmRvd25sb2FkID0gJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS95aXBsLXNpdGUvWU5DL1lhbmRDLXByb2ZpbGUucGRmJztcbmxpbmsuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy90YWlsd2luZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=