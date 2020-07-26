$(document).ready(function () {
    var mySwiper = new Swiper('.sw-slider__container', {
        // Optional parameters
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
          nextEl: '.sw-slider__button-next',
          prevEl: '.sw-slider__button-prev',
        },
      });
      //arrows position
        var next = $('.sw-slider__button-next');
        var prev = $('.sw-slider__button-prev');
        // Margin-positioning for the left arrow 
        next.css('left', prev.width() + 15);
});