$(document).ready(function () {
  //slider
    var mySwiper = new Swiper('.sw-slider__container', {
        // Optional parameters
        loop: true,
        //breakpoints
        breakpoints: {
          
          0: {
            slidesPerView: 1,
          },
          
          700: {
            slidesPerView: 2,
            // spaceBetween: 10
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 5
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },
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

    //Tabs set up
    $(function() {

      let tab = $('a[data-toggle="tab"]');

      tab.on('click', function(){
        event.preventDefault();
        $('.nav__item').removeClass('nav__item--active');
        $(this).toggleClass('nav__item--active');

        let tagret = $(this).attr('href');
        $('.content').removeClass('content__active');
        $(tagret).toggleClass('content__active');
      });
    });
});