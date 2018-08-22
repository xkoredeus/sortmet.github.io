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

      ///// Карточка товара

      //Левый блок навигации
      $('.left__nav .sub').hide();
      $('.left__nav span').click(function() {
      $(this).toggleClass('active');
      $(this).parent().find('.sub').toggleClass('active').slideToggle('slow');
      return false;
      });
      //Tabs
      $(document).ready(function () {
      $(".tab-content__item").hide();
      $(".tabs__container div.tab-content__item:first-child").show();
          $('ul.tabs__list > li').click(function () {
              if (!($(this).hasClass('active'))) {
                  var thisLi = $(this);
                  var numLi = thisLi.index();
                  thisLi.addClass('active').siblings().removeClass('active');
                  thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
              }
          });
      });
      //Слайдер "Подобные товары компании"
      $('.card__similar').owlCarousel({
            nav: true,
            items: 4,
            loop: true,
            dots: false,
            margin:10,
            navText: ["<img src='img/slider__arrow-prev.png'>", "<img src='img/slider__arrow-next.png'>"],
      });
      //Слайдер "Мы рекомендуем"
      $('.card__recommended').owlCarousel({
            nav: true,
            items: 4,
            loop: true,
            dots: false,
            margin:10,
            navText: ["<img src='img/slider__arrow-prev.png'>", "<img src='img/slider__arrow-next.png'>"],
      });
      //Слайдер "Вы просматривали"
      $('.card__seen').owlCarousel({
            nav: true,
            items: 4,
            loop: false,
            dots: false,
            margin:10,
            navText: ["<img src='img/slider__arrow-prev.png'>", "<img src='img/slider__arrow-next.png'>"],
      });
      
});
