const swiper = new Swiper(".swiper", {
    
  spaceBetween: 50,
  pagination: {
    el: ".slider-pagination-dots",
    bulletActiveClass: "slider-pagination-dot-active",
    bulletClass: "slider-pagination-dot",
    clickable: true,
  },
  breakpoints: {
    760: {
      slidesPerView: 2
    }
  },
});