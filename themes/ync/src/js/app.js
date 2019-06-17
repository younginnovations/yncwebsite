// Confetti moving bg
const bg = document.querySelector('.confetti');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

bg.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });

// Smooth Scrolling
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()
  
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})

// Download PDF
var link = document.createElement('a.download-profile');
link.href = url;
link.download = 'https://storage.googleapis.com/yipl-site/YNC/YandC-profile.pdf';
link.dispatchEvent(new MouseEvent('click'));
