const swiper = new Swiper(".mySwiper", {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    // Mobile
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // Small Tablet
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    // Tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    // Laptop 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 45,
    },

    // Desktop
    1280: {
      slidesPerView: 3,
      spaceBetween: 45,
    },

    // Wide Desktop
    1440: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
