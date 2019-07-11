window.jQuery = require('jquery')

import CursorEffect from "../js/cursor-effect/cursor";

import AOS from 'aos';
import Rellax from 'rellax'
import simpleParallax from 'simple-parallax-js'

import 'aos/dist/aos.css'; // You can also use <link> for styles

if (document.querySelector(".cursor-effect")) {
  const cursorEffect = new CursorEffect();
}

var image = document.getElementsByClassName('effect-img');
new simpleParallax(image, {
  scale: 1.4,
  delay: 1,
  transition: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
});

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
  
  //
  $('.contact-btn a').on('click', function(){
    $('.hire-us').css({"background-color": "rgba(129,28,248,0.2)", "transition": "all 0.25s"});
    $('.contact-section').addClass('is-active');
  });
  
  $('.close').on('click', function(){
    $('.hire-us').css({'background-color': 'transparent', "transition": "all 0.25s"});
    $('.contact-section').removeClass('is-active');
  });
  
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
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  
  if (scroll >= 150) {
    $(".animation").addClass("is-active");
  } else {
    $(".animation").removeClass("is-active");
  }
});

if ($(window).width() > 768) {
  $('body').removeClass('animation');
}
