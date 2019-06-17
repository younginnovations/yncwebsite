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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Confetti moving bg
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

// Smooth Scrolling
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

var numCols = 2;
var colHeights = Array(numCols).fill(0);
var container = document.getElementById('masonry-with-columns');
Array.from(container.children).forEach(function (child, i) {
  var order = i % numCols;
  child.style.order = order;
  colHeights[order] += parseFloat(child.clientHeight);
});
container.style.height = Math.max.apply(Math, _toConsumableArray(colHeights)) + 'px';

// Download PDF
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODZjZDZkMTIxYjhiNjAzYWJjNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9hcHAuc2Nzcz9kOTVhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3RhaWx3aW5kLmNzcz8yMDgyIl0sIm5hbWVzIjpbImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1vdXNlWCIsImNsaWVudFgiLCJtb3VzZVkiLCJjbGllbnRZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCIkIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJhdHRyIiwib2Zmc2V0IiwidG9wIiwibnVtQ29scyIsImNvbEhlaWdodHMiLCJBcnJheSIsImZpbGwiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImZyb20iLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImkiLCJvcmRlciIsInBhcnNlRmxvYXQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwibWF4IiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwidXJsIiwiZG93bmxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBTUEsS0FBS0MsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFYO0FBQ0EsSUFBTUMsY0FBY0MsT0FBT0MsVUFBUCxHQUFvQixDQUF4QztBQUNBLElBQU1DLGVBQWVGLE9BQU9HLFdBQVAsR0FBcUIsQ0FBMUM7O0FBRUFQLEdBQUdRLGdCQUFILENBQW9CLFdBQXBCLEVBQWlDLFVBQUNDLENBQUQsRUFBTztBQUN0QyxNQUFNQyxTQUFTRCxFQUFFRSxPQUFGLEdBQVlSLFdBQTNCO0FBQ0EsTUFBTVMsU0FBU0gsRUFBRUksT0FBRixHQUFZUCxZQUEzQjs7QUFFQU4sS0FBR2MsS0FBSCxDQUFTQyxTQUFULHFCQUFxQ0wsTUFBckMsWUFBa0RFLE1BQWxEO0FBQ0QsQ0FMRDs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUksRUFBRSxjQUFGLEVBQWtCQyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFTUixDQUFULEVBQVk7QUFDeENBLElBQUVTLGNBQUY7O0FBRUFGLElBQUUsWUFBRixFQUFnQkcsT0FBaEIsQ0FDRTtBQUNFQyxlQUFXSixFQUFFQSxFQUFFLElBQUYsRUFBUUssSUFBUixDQUFhLE1BQWIsQ0FBRixFQUF3QkMsTUFBeEIsR0FBaUNDO0FBRDlDLEdBREYsRUFJRSxHQUpGLEVBS0UsUUFMRjtBQU9ELENBVkQ7O0FBWUEsSUFBTUMsVUFBVSxDQUFoQjtBQUNBLElBQU1DLGFBQWFDLE1BQU1GLE9BQU4sRUFBZUcsSUFBZixDQUFvQixDQUFwQixDQUFuQjtBQUNBLElBQU1DLFlBQVkzQixTQUFTNEIsY0FBVCxDQUF3QixzQkFBeEIsQ0FBbEI7QUFDQUgsTUFBTUksSUFBTixDQUFXRixVQUFVRyxRQUFyQixFQUErQkMsT0FBL0IsQ0FBdUMsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDbkQsTUFBTUMsUUFBUUQsSUFBSVYsT0FBbEI7QUFDQVMsUUFBTW5CLEtBQU4sQ0FBWXFCLEtBQVosR0FBb0JBLEtBQXBCO0FBQ0FWLGFBQVdVLEtBQVgsS0FBcUJDLFdBQVdILE1BQU1JLFlBQWpCLENBQXJCO0FBQ0QsQ0FKRDtBQUtBVCxVQUFVZCxLQUFWLENBQWdCd0IsTUFBaEIsR0FBeUJDLEtBQUtDLEdBQUwsZ0NBQVlmLFVBQVosS0FBMEIsSUFBbkQ7O0FBRUE7QUFDQSxJQUFJZ0IsT0FBT3hDLFNBQVN5QyxhQUFULENBQXVCLG9CQUF2QixDQUFYO0FBQ0FELEtBQUtFLElBQUwsR0FBWUMsR0FBWjtBQUNBSCxLQUFLSSxRQUFMLEdBQWdCLGdFQUFoQjtBQUNBSixLQUFLSyxhQUFMLENBQW1CLElBQUlDLFVBQUosQ0FBZSxPQUFmLENBQW5CLEU7Ozs7Ozs7QUMzQ0EseUM7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2Y2Q2ZDEyMWI4YjYwM2FiYzc1IiwiLy8gQ29uZmV0dGkgbW92aW5nIGJnXG5jb25zdCBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25mZXR0aScpO1xuY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDU7XG5jb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyA1IDtcblxuYmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgY29uc3QgbW91c2VYID0gZS5jbGllbnRYIC8gd2luZG93V2lkdGg7XG4gIGNvbnN0IG1vdXNlWSA9IGUuY2xpZW50WSAvIHdpbmRvd0hlaWdodDtcbiAgXG4gIGJnLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgtJHttb3VzZVh9JSwgLSR7bW91c2VZfSUsIDApYDtcbn0pO1xuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuLy8gICAkKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCgpO1xuLy8gfSk7XG5cbi8vIFNtb290aCBTY3JvbGxpbmdcbiQoJ2FbaHJlZio9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgXG4gICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuICAgIHtcbiAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wLFxuICAgIH0sXG4gICAgNTAwLFxuICAgICdsaW5lYXInXG4gIClcbn0pXG5cbmNvbnN0IG51bUNvbHMgPSAyO1xuY29uc3QgY29sSGVpZ2h0cyA9IEFycmF5KG51bUNvbHMpLmZpbGwoMCk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzb25yeS13aXRoLWNvbHVtbnMnKTtcbkFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuICBjb25zdCBvcmRlciA9IGkgJSBudW1Db2xzO1xuICBjaGlsZC5zdHlsZS5vcmRlciA9IG9yZGVyO1xuICBjb2xIZWlnaHRzW29yZGVyXSArPSBwYXJzZUZsb2F0KGNoaWxkLmNsaWVudEhlaWdodCk7XG59KVxuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KC4uLmNvbEhlaWdodHMpICsgJ3B4JztcblxuLy8gRG93bmxvYWQgUERGXG52YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EuZG93bmxvYWQtcHJvZmlsZScpO1xubGluay5ocmVmID0gdXJsO1xubGluay5kb3dubG9hZCA9ICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20veWlwbC1zaXRlL1lOQy9ZYW5kQy1wcm9maWxlLnBkZic7XG5saW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvdGFpbHdpbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zYXNzL3RhaWx3aW5kLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9