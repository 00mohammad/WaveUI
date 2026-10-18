const destination = document.querySelector("#destination");
const journeyLinks = document.querySelectorAll("[data-open-destination]");
const closeDestinationButton = document.querySelector("[data-close-destination]");
const navToggle = document.querySelector("#nav-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

const openDestination = (event) => {
  if (event) event.preventDefault();
  if (!destination) return;
  destination.classList.remove("hidden");
  destination.classList.add("flex");
};

const closeDestination = () => {
  if (!destination) return;
  destination.classList.add("hidden");
  destination.classList.remove("flex");
};

journeyLinks.forEach((link) => {
  link.addEventListener("click", openDestination);
});

destination?.addEventListener("click", (event) => {
  if (event.target === destination) {
    closeDestination();
  }
});

closeDestinationButton?.addEventListener("click", closeDestination);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !destination?.classList.contains("hidden")) {
    closeDestination();
  }
});

navToggle?.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileMenu?.classList.toggle("hidden", isExpanded);
});

const swiperOptions = {
  loop: false,

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
