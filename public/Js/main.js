document.addEventListener('DOMContentLoaded', (event)=>{

  let navbarFixed = document.querySelector('#navbar');
  console.log(navbarFixed);
  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    const lastPosition = window.scrollY
    if (lastPosition > 20) {
      navbar.classList.add('change')
    } else if (navbar.classList.contains('change')) {
      navbar.classList.remove('change')
    } else {
      navbar.classList.remove('change')
    }
  })
  


    const backToTopButton = document.querySelector("#back-to-top-btn");

    window.addEventListener("scroll", scrollFunction);
    
    function scrollFunction() {
      if (window.pageYOffset > 300) { // Show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")) {
          backToTopButton.classList.remove("btnExit");
          backToTopButton.classList.add("btnEntrance");
          backToTopButton.style.display = "block";
        }
      }
      else { // Hide backToTopButton
        if(backToTopButton.classList.contains("btnEntrance")) {
          backToTopButton.classList.remove("btnEntrance");
          backToTopButton.classList.add("btnExit");
          setTimeout(function() {
            backToTopButton.style.display = "none";
          }, 250);
        }
      }
    }
    
    backToTopButton.addEventListener("click", smoothScrollBackToTop);
    
    // function backToTop() {
    //   window.scrollTo(0, 0);
    // }
    
    function smoothScrollBackToTop() {
      const targetPosition = 0;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 750;
      let start = null;
      
      window.requestAnimationFrame(step);
    
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };



   
   
//#################################TABS PANEL###########################
// function onTabClick(event) {
//   let activeTabs = document.querySelectorAll('.active');
  
//   activeTabs.forEach(function(tab) {
//     tab.className = tab.className.replace('active', '');
//   });
  
//   // activate new tab and panel
//   event.target.parentElement.className += ' active';
//   document.getElementById(event.target.href.split('#')[1]).className += ' active';
// }

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);
  
  

  



$('.launch-modal').on('click', function(e){
  e.preventDefault();
  $( '#' + $(this).data('modal-id') ).modal();
});
})