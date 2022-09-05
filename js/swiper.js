window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#teamSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '#teamSliderNext',
          prevEl: '#teamSliderPrev',
        },
        slidesPerView: 5,
        spaceBetween: 50,
        breakpoints: {
            // when window width is >= 1440px
            300:{
              slidesPerView: 1,
            },
            600:{
              slidesPerView: 2,
            },
            1000:{
              slidesPerView: 3,
              spaceBetween: 10
            },
            1300:{
              slidesPerView: 4,
              spaceBetween: 50
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 50
            },
        }
    });
});