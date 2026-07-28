const swiper = new Swiper(".mySwiper", {
  loop: true,

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
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 45,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
  },
});
