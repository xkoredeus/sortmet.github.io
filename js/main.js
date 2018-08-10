$(window).on('load', function (){
      //Главный слайдер
      $('.main-slider__inner').owlCarousel({
            nav: false,
            items: 1,
            loop: false,
            dots: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 10000
      });
      //Слайдер блока "Также покупают"
      $('.prod__inner').owlCarousel({
            nav: true,
            items: 4,
            loop: true,
            dots: false,
            margin:10,
            navText: ["<img src='img/slider__arrow-prev.png'>", "<img src='img/slider__arrow-next.png'>"],
      });
      //Слайдер с партнёрами
      $('.part__inner').owlCarousel({
            nav: true,
            items: 5,
            loop: false,
            dots: false,
            margin:10,
            navText: ["<img src='img/slider__arrow-prev.png'>", "<img src='img/slider__arrow-next.png'>"],
      });
      //Кнопка "Наверх"
      
      $('btn_to-top').click(function (e) {
      e.preventDefault();
      $('body, html').animate({
              scrollTop: 0
            }, "slow");
      });
});
