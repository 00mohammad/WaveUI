const swiper = new Swiper(".mySwiper", {
<<<<<<< HEAD
  loop: false,
  centeredSlides: false,
=======
  loop: true,

>>>>>>> 4a476ec (Implement mobile-first Swiper layout (tablet pending))
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
<<<<<<< HEAD
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

=======
>>>>>>> 4a476ec (Implement mobile-first Swiper layout (tablet pending))
    768: {
      slidesPerView: 2,
      spaceBetween: 45,
    },

    1024: {
      slidesPerView: 3,
<<<<<<< HEAD
      spaceBetween: 90,
=======
      spaceBetween: 45,
>>>>>>> 4a476ec (Implement mobile-first Swiper layout (tablet pending))
    },
  },
});
