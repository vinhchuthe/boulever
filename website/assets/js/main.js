$.noConflict();
jQuery(document).ready(function ($) {
    const swiper1 = new Swiper('#slider1', {
        // Optional parameters
        lazy: true,
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});