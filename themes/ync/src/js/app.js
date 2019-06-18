// Confetti moving bg
// const bg = document.querySelector('.confetti');
// const windowWidth = window.innerWidth / 5;
// const windowHeight = window.innerHeight / 5;
//
// if (bg) {
//   bg.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX / windowWidth;
//     const mouseY = e.clientY / windowHeight;
//
//     bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
//   });
// }

import Macy from "macy";

var macyInstance = Macy({
  // See below for all available options.
  container: '#macy-container',
  trueOrder: false,
  waitForImages: false,
  margin: 80,
  columns: 2,
  breakAt: {
    940: 2,
    400: 1
  }
});

$(document).ready(function () {
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
  
  //Projects Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      }
    }
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
    var burger = document.querySelector('.burger-container'),
      header = document.querySelector('.header');
    
    burger.onclick = function() {
      header.classList.toggle('menu-opened');
    }
  }());
  
});
