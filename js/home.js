$(document).ready(function () {

  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.5,
        spaceBetween: 40
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-prev1',
      prevEl: '.swiper-next1',
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-prev2',
      prevEl: '.swiper-next2',
    },
  });

  window.addEventListener('scroll', function () {
    const navbar = $("#navbar");
    const navbarlink = $(".navbar-nav");
    const regform = $("#register-form");
    const regbtn = $("#register-form button");
    if (window.scrollY > 75) {
      navbar[0].classList.add('normal-nav');
      navbar[0].classList.remove('bg-transparent');

      navbarlink[0].classList.add('navbar-normal');
      regform[0].classList.add('secondary-menu');

      regbtn[0].classList.add('btn-outline-dark');
      regbtn[0].classList.remove('btn-outline-light');
    } else {
      navbar[0].classList.add('bg-transparent');
      navbar[0].classList.remove('normal-nav');

      navbarlink[0].classList.remove('navbar-normal');
      regform[0].classList.remove('secondary-menu');

      regbtn[0].classList.add('btn-outline-light');
      regbtn[0].classList.remove('btn-outline-dark');
    }
  });

})
