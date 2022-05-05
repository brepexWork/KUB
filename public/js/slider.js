const swiper = new Swiper('.wrapper-slider', {
    slideClass: 'slide',
    wrapperClass: 'slider-wp',
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
         600: {
            slidesPerView: 2
         }
    }
})