var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});



// for animation 

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.opac');
  
    function checkVisibility() {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate__animated', el.getAttribute('data-animation'));
          el.classList.remove('opac');
        }
      });
    }
  
    window.onscroll = checkVisibility;
    checkVisibility();  // Check visibility on load in case some elements are already in view
  });
  