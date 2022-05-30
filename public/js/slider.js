const swiper = new Swiper('.wrapper-slider', {
    slideClass: 'slide',
    wrapperClass: 'slider-wp',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '#partner_next',
        prevEl: '#partner_prev'
    },
    breakpoints: {
        1000: {
            slidesPerView: 8,
        },
         600: {
            slidesPerView: 5
         }
    }
})

const swiper_cars = new Swiper('.container-slider', {
    slideClass: 'slide',
    wrapperClass: 'slider-wrapper',
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '#arrow_left',
        nextEl: '#arrow_right'
    }
})

const swiper_review = new Swiper('.reviews .wrapper-container', {
    slideClass: 'review',
    wrapperClass: 'wrapper-review',
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        800: {
            slidesPerView: 2.1,
        }
    }
})