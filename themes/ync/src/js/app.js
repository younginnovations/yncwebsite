window.jQuery = require('jquery')

import CursorEffect from "../js/cursor-effect/cursor";

import AOS from 'aos';
import Rellax from 'rellax'
import 'aos/dist/aos.css'; // You can also use <link> for styles

if (document.querySelector(".cursor-effect")) {
  const cursorEffect = new CursorEffect();
}

// import Macy from "macy";

$(document).ready(function () {
  // Also can pass in optional settings block
  let rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  
  AOS.init();
  
  // Smooth Scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
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
  
  //Responsive Menu
  (function(){
    let burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onclick = function() {
      header.classList.toggle('menu-opened');
    }
  }());
  
  // Macy({
  //   // See below for all available options.
  //   container: '#macy-container',
  //   mobileFirst: true,
  //   trueOrder: false,
  //   waitForImages: false,
  //   margin: 80,
  //   columns: 2,
  //   breakAt: {
  //     768: 2,
  //     320: 1
  //   }
  // });
});
