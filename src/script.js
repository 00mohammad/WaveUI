const swiperOptions = {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 20,

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 45,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 45,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
};

// Destinations Slider

new Swiper(".destinationsSwiper", {
  ...swiperOptions,

  pagination: {
    el: ".destinationsSwiper .swiper-pagination",
    clickable: true,
  },
});

// Testimonials Slider

new Swiper(".testimonialSwiper", {
  ...swiperOptions,

  pagination: {
    el: ".testimonialSwiper .swiper-pagination",
    clickable: true,
  },
});