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
// const bg = document.querySelector('.confetti');
// const windowWidth = window.innerWidth / 5;
// const windowHeight = window.innerHeight / 5 ;
//
// bg.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX / windowWidth;
//   const mouseY = e.clientY / windowHeight;
//
//   bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
// });

$(document).ready(function () {
  // Smooth Scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  // Download PDF
  var link = document.createElement('a.download-profile');
  // link.href = url;
  link.download = 'https://storage.googleapis.com/yipl-site/YNC/YandC-profile.pdf';
  link.dispatchEvent(new MouseEvent('click'));

  //Navigation active class
  $(function () {
    var path = location.pathname;
    $('header nav .menu-item').each(function () {
      if (this.href.includes(path.replace(/^\/+|\/+$/gm, ''))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E5YzM1MGZjN2Q2YzQzOGM2NmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz9kOTVhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3RhaWx3aW5kLmNzcz8yMDgyIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiYXR0ciIsIm9mZnNldCIsInRvcCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZWFjaCIsImhyZWYiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QjtBQUNBRixJQUFFLGNBQUYsRUFBa0JHLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQVNDLENBQVQsRUFBWTtBQUN4Q0EsTUFBRUMsY0FBRjs7QUFFQUwsTUFBRSxZQUFGLEVBQWdCTSxPQUFoQixDQUNFO0FBQ0VDLGlCQUFXUCxFQUFFQSxFQUFFLElBQUYsRUFBUVEsSUFBUixDQUFhLE1BQWIsQ0FBRixFQUF3QkMsTUFBeEIsR0FBaUNDO0FBRDlDLEtBREYsRUFJRSxHQUpGLEVBS0UsUUFMRjtBQU9ELEdBVkQ7O0FBWUE7QUFDQSxNQUFJQyxPQUFPVixTQUFTVyxhQUFULENBQXVCLG9CQUF2QixDQUFYO0FBQ0E7QUFDQUQsT0FBS0UsUUFBTCxHQUFnQixnRUFBaEI7QUFDQUYsT0FBS0csYUFBTCxDQUFtQixJQUFJQyxVQUFKLENBQWUsT0FBZixDQUFuQjs7QUFFQTtBQUNBZixJQUFFLFlBQVU7QUFDVixRQUFJZ0IsT0FBT0MsU0FBU0MsUUFBcEI7QUFDQWxCLE1BQUUsdUJBQUYsRUFBMkJtQixJQUEzQixDQUFnQyxZQUFVO0FBQ3hDLFVBQUksS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxLQUFLTSxPQUFMLENBQWEsYUFBYixFQUEyQixFQUEzQixDQUFuQixDQUFKLEVBQXdEO0FBQ3REdEIsVUFBRSxJQUFGLEVBQVF1QixRQUFSLENBQWlCLFFBQWpCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FQRDtBQVFELENBN0JELEU7Ozs7Ozs7QUNaQSx5Qzs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2E5YzM1MGZjN2Q2YzQzOGM2NmMiLCIvLyBDb25mZXR0aSBtb3ZpbmcgYmdcbi8vIGNvbnN0IGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZldHRpJyk7XG4vLyBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gNTtcbi8vIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDUgO1xuLy9cbi8vIGJnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4vLyAgIGNvbnN0IG1vdXNlWCA9IGUuY2xpZW50WCAvIHdpbmRvd1dpZHRoO1xuLy8gICBjb25zdCBtb3VzZVkgPSBlLmNsaWVudFkgLyB3aW5kb3dIZWlnaHQ7XG4vL1xuLy8gICBiZy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoLSR7bW91c2VYfSUsIC0ke21vdXNlWX0lLCAwKWA7XG4vLyB9KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBTbW9vdGggU2Nyb2xsaW5nXG4gICQoJ2FbaHJlZio9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuICAgICAge1xuICAgICAgICBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCxcbiAgICAgIH0sXG4gICAgICA1MDAsXG4gICAgICAnbGluZWFyJ1xuICAgIClcbiAgfSlcbiAgXG4gIC8vIERvd25sb2FkIFBERlxuICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EuZG93bmxvYWQtcHJvZmlsZScpO1xuICAvLyBsaW5rLmhyZWYgPSB1cmw7XG4gIGxpbmsuZG93bmxvYWQgPSAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3lpcGwtc2l0ZS9ZTkMvWWFuZEMtcHJvZmlsZS5wZGYnO1xuICBsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xuICBcbiAgLy9OYXZpZ2F0aW9uIGFjdGl2ZSBjbGFzc1xuICAkKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICAkKCdoZWFkZXIgbmF2IC5tZW51LWl0ZW0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBpZiAodGhpcy5ocmVmLmluY2x1ZGVzKHBhdGgucmVwbGFjZSgvXlxcLyt8XFwvKyQvZ20sJycpKSkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy90YWlsd2luZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=