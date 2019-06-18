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

// Confetti moving bg
var bg = document.querySelector('.confetti');
var windowWidth = window.innerWidth / 5;
var windowHeight = window.innerHeight / 5;

if (bg) {
  bg.addEventListener('mousemove', function (e) {
    var mouseX = e.clientX / windowWidth;
    var mouseY = e.clientY / windowHeight;

    bg.style.transform = 'translate3d(-' + mouseX + '%, -' + mouseY + '%, 0)';
  });
}

$(document).ready(function () {
  // Smooth Scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true
  });

  // Download PDF
  var link = document.createElement('a.download-profile');
  // link.href = url;
  link.download = 'https://storage.googleapis.com/yipl-site/YNC/YandC-profile.pdf';
  link.dispatchEvent(new MouseEvent('click'));

  //Navigation active class
  $(function () {
    var path = location.pathname.replace(/^\/+|\/+$/gm, '');

    $('header nav .menu-item').each(function () {
      if (path !== '' && this.href.includes(path)) {
        $(this).addClass('active');
      }
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWFjYjQxNGZjZTJkYmFjMDYxNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz9kOTVhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3RhaWx3aW5kLmNzcz8yMDgyIl0sIm5hbWVzIjpbImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1vdXNlWCIsImNsaWVudFgiLCJtb3VzZVkiLCJjbGllbnRZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCIkIiwicmVhZHkiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImF0dHIiLCJvZmZzZXQiLCJ0b3AiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwibG9vcCIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwibGF6eUxvYWQiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiZGlzcGF0Y2hFdmVudCIsIk1vdXNlRXZlbnQiLCJwYXRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJlYWNoIiwiaHJlZiIsImluY2x1ZGVzIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSxJQUFNQSxLQUFLQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQVg7QUFDQSxJQUFNQyxjQUFjQyxPQUFPQyxVQUFQLEdBQW9CLENBQXhDO0FBQ0EsSUFBTUMsZUFBZUYsT0FBT0csV0FBUCxHQUFxQixDQUExQzs7QUFFQSxJQUFJUCxFQUFKLEVBQVE7QUFDTkEsS0FBR1EsZ0JBQUgsQ0FBb0IsV0FBcEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RDLFFBQU1DLFNBQVNELEVBQUVFLE9BQUYsR0FBWVIsV0FBM0I7QUFDQSxRQUFNUyxTQUFTSCxFQUFFSSxPQUFGLEdBQVlQLFlBQTNCOztBQUVBTixPQUFHYyxLQUFILENBQVNDLFNBQVQscUJBQXFDTCxNQUFyQyxZQUFrREUsTUFBbEQ7QUFDRCxHQUxEO0FBTUQ7O0FBRURJLEVBQUVmLFFBQUYsRUFBWWdCLEtBQVosQ0FBa0IsWUFBWTtBQUM1QjtBQUNBRCxJQUFFLGNBQUYsRUFBa0JFLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQVVULENBQVYsRUFBYTtBQUN6Q0EsTUFBRVUsY0FBRjs7QUFFQUgsTUFBRSxZQUFGLEVBQWdCSSxPQUFoQixDQUNFO0FBQ0VDLGlCQUFXTCxFQUFFQSxFQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLE1BQWIsQ0FBRixFQUF3QkMsTUFBeEIsR0FBaUNDO0FBRDlDLEtBREYsRUFJRSxHQUpGLEVBS0UsUUFMRjtBQU9ELEdBVkQ7O0FBWUFSLElBQUUsZUFBRixFQUFtQlMsV0FBbkIsQ0FBK0I7QUFDN0JDLFdBQU8sQ0FEc0I7QUFFN0JDLFVBQU0sSUFGdUI7QUFHN0JDLGNBQVUsSUFIbUI7QUFJN0JDLHFCQUFpQixJQUpZO0FBSzdCQyx3QkFBb0IsSUFMUztBQU03QkMsY0FBUztBQU5vQixHQUEvQjs7QUFTQTtBQUNBLE1BQUlDLE9BQU8vQixTQUFTZ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBWDtBQUNBO0FBQ0FELE9BQUtFLFFBQUwsR0FBZ0IsZ0VBQWhCO0FBQ0FGLE9BQUtHLGFBQUwsQ0FBbUIsSUFBSUMsVUFBSixDQUFlLE9BQWYsQ0FBbkI7O0FBRUE7QUFDQXBCLElBQUUsWUFBWTtBQUNaLFFBQUlxQixPQUFPQyxTQUFTQyxRQUFULENBQWtCQyxPQUFsQixDQUEwQixhQUExQixFQUF5QyxFQUF6QyxDQUFYOztBQUVBeEIsTUFBRSx1QkFBRixFQUEyQnlCLElBQTNCLENBQWdDLFlBQVk7QUFDMUMsVUFBSUosU0FBUyxFQUFULElBQWUsS0FBS0ssSUFBTCxDQUFVQyxRQUFWLENBQW1CTixJQUFuQixDQUFuQixFQUE2QztBQUMzQ3JCLFVBQUUsSUFBRixFQUFRNEIsUUFBUixDQUFpQixRQUFqQjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBUkQ7QUFTRCxDQXZDRCxFOzs7Ozs7O0FDZEEseUM7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFhY2I0MTRmY2UyZGJhYzA2MTY3IiwiLy8gQ29uZmV0dGkgbW92aW5nIGJnXG5jb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25mZXR0aScpO1xuY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDU7XG5jb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyA1O1xuXG5pZiAoYmcpIHtcbiAgYmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICBjb25zdCBtb3VzZVggPSBlLmNsaWVudFggLyB3aW5kb3dXaWR0aDtcbiAgICBjb25zdCBtb3VzZVkgPSBlLmNsaWVudFkgLyB3aW5kb3dIZWlnaHQ7XG4gICAgXG4gICAgYmcuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKC0ke21vdXNlWH0lLCAtJHttb3VzZVl9JSwgMClgO1xuICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBTbW9vdGggU2Nyb2xsaW5nXG4gICQoJ2FbaHJlZio9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG4gICAgICB7XG4gICAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxuICAgICAgfSxcbiAgICAgIDUwMCxcbiAgICAgICdsaW5lYXInXG4gICAgKTtcbiAgfSk7XG4gIFxuICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgIGl0ZW1zOiAzLFxuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxuICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICBsYXp5TG9hZDp0cnVlLFxuICB9KTtcbiAgXG4gIC8vIERvd25sb2FkIFBERlxuICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EuZG93bmxvYWQtcHJvZmlsZScpO1xuICAvLyBsaW5rLmhyZWYgPSB1cmw7XG4gIGxpbmsuZG93bmxvYWQgPSAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3lpcGwtc2l0ZS9ZTkMvWWFuZEMtcHJvZmlsZS5wZGYnO1xuICBsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xuICBcbiAgLy9OYXZpZ2F0aW9uIGFjdGl2ZSBjbGFzc1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8rfFxcLyskL2dtLCAnJyk7XG4gICAgXG4gICAgJCgnaGVhZGVyIG5hdiAubWVudS1pdGVtJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocGF0aCAhPT0gJycgJiYgdGhpcy5ocmVmLmluY2x1ZGVzKHBhdGgpKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9