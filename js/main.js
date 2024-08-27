// header toggle

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.fa-bars');
  const menu = document.querySelector('.menu ul');

  // Toggle menu visibility on click
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('showww');
  });

  // Ensure 'active' class is removed when the screen width is 768px or wider
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      menu.classList.remove('showww');
    }
  });
  // Remove 'active' class when clicking outside the menu
  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('showww');
    }
  });
});

// // mega menu toggle

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.megaMenubtn');
  const menu = document.querySelector('.megaMenu');

  menuToggle.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default link behavior
    menu.classList.toggle('shoow');
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('shoow');
    }
  });
});


// cart menu
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector('#card-menu');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Remove the dropdown item when the 'fa-xmark' icon is clicked
  dropdownMenu.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-xmark')) {
      const dropdownItem = event.target.closest('.dropdown-item');
      if (dropdownItem) {
        dropdownItem.remove();
      }
    }
  });
});


// swiper

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
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


// slider Range value 
var slider = document.getElementById("customRange1");
var output = document.getElementById("vallue-range");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

