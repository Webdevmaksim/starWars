$(document).ready(function () {
  //slider
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
      //Lazy loading
      $(function(){
        $('.lazy').lazy();
      });
      //Кнопка прокрутки наверх
      $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});