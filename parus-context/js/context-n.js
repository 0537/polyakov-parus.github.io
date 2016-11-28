$(document).ready(function() {

    var $startScene = $('.start-scene').parallax();

    var $configScene = $('.config-scene').parallax();

    var $controlScene = $('.control-scene').parallax();

    $('.jukov-controller').mouseover(function () {
      $('.the-sleeping-eye-of-jukov').css('opacity', '1');
      setTimeout(function () {
        $('.the-sleeping-eye-of-jukov').css('opacity', '0');
      },100 );
      return false;
    });



    var screenWidth = $(window).width();

    if (screenWidth > 992) {
      var s = skrollr.init();
    }

    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.context-control').offset().top - 300;

        if (topPos < topScrolled) {
            $('.jet-wrapper').removeClass('left-jet-hide');
            $('.jet-wrapper').removeClass('right-jet-hide');
            setTimeout(function () {
              $('.jet-wrapper').css('transition', '.3s');
            }, 2000);
            setTimeout(function () {
              $('.jet-wrapper').css('transition', '.2s');
            }, 2100);
            setTimeout(function () {
              $('.jet-wrapper').css('transition', '.1s');
            }, 2200);
            setTimeout(function () {
              $('.jet-wrapper').css('transition', 'auto');
            }, 2300);
        }
    });

    // $('.turn-left').mouseover(function () {
    //     $('.joystick').addClass('rotateLeft');
    //     setTimeout(function () {
    //         $('.cockpit-wrapper').addClass('rotateLeft');
    //         $('.blick-1').css('transform', 'translate(100px, 100px);');
    //     }, 500);
    // });
    //
    // $('.turn-left').mouseout(function () {
    //     $('.joystick').removeClass('rotateLeft');
    //     setTimeout(function () {
    //       $('.cockpit-wrapper').removeClass('rotateLeft');
    //     }, 500);
    // });
    //
    // $('.turn-right').mouseover(function () {
    //     $('.joystick').addClass('rotateRight');
    //     setTimeout(function () {
    //         $('.cockpit-wrapper').addClass('rotateRight');
    //     }, 500);
    // });
    //
    // $('.turn-right').mouseout(function () {
    //     $('.joystick').removeClass('rotateRight');
    //     setTimeout(function () {
    //         $('.cockpit-wrapper').removeClass('rotateRight');
    //     }, 500);
    // });


    // КАСТОМНЫЙ СКРОЛЛБАР С ПЕРВОЙ СЕКЦИИ
    $(".seo-start .description").mCustomScrollbar();


    // КАСТОМНЫЙ СЕЛЕКТ С ПЕРВОЙ СЕКЦИИ
    var li = $('.seo-start .selected'),
        liNotFirst = $('.seo-start .select li:not(:first-of-type)'),
        liValue = $('.seo-start .value');

    li.click(function() {
        $.each(liNotFirst, function(index) {
            setTimeout(function() {
                liNotFirst.eq(index).slideToggle();
            }, (50 * index));
        });
    });

    liNotFirst.click(function() {
        liValue.text($(this).text());
        $.each(liNotFirst, function(index) {
            setTimeout(function() {
                liNotFirst.eq(index).slideToggle();
            }, (50 * index));
        });
    });


    // АНИМАЦИЯ НА СТР. "ОПРЕДЕЛЕНИЕ ЦЕЛЕЙ И ЗАДАЧ"
    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.context-targets').offset().top,
            circleOne = $('.point:first-child .red-circle'),
            circleTwo = $('.point:nth-child(2) .red-circle'),
            circleThree = $('.point:nth-child(3) .red-circle'),
            circleFour = $('.point:last-child .red-circle'),
            textOne = $('.point:first-child .red-text'),
            textTwo = $('.point:nth-child(2) .red-text'),
            textThree = $('.point:nth-child(3) .red-text'),
            textFour = $('.point:last-child .red-text');

        if (topPos < topScrolled) {
            $('.redline').css('width', '1000px');

            circleOne.css('transform', 'scale(1)');
            textOne.css({
                'left': '0',
                'opacity': '1'
            });

            setTimeout(function() {
                circleTwo.css('transform', 'scale(1)');
                textTwo.css({
                    'left': '0',
                    'opacity': '1'
                });
            }, 600);

            setTimeout(function() {
                circleThree.css('transform', 'scale(1)');
                textThree.css({
                    'left': '0',
                    'opacity': '1'
                });
            }, 1200);

            setTimeout(function() {
                circleFour.css('transform', 'scale(1.6)');
                textFour.css({
                    'left': '0',
                    'opacity': '1'
                });
            }, 1800);

            setTimeout(function() {
                $('.flag').css({
                    'transform': 'translateX(0)'
                });
            }, 2200);
        }
    });

    $(window).scroll(function() {
        var topScrolled = $(window).scrollTop(),
            topPos = $('.context-price').offset().top;

        if (topPos - 300 < topScrolled) {
            $('.form-price').css('opacity', '1');
        }
    });


    $('.photo-cont').mouseover(function () {
        $('.desc').css('opacity', '0');
    });

    $('.photo-cont').mouseout(function () {
        $('.desc').css('opacity', '1');
    });

    $('.cont-1').mouseover(function () {

        $('.desc:first-child').css('opacity', '1');

        setTimeout(function(){
            $('.cont-2').css('left', '100px');
            $('.cont-3').css('left', '100px');
            $('.cont-4').css('left', '100px');
        }, 300);

    });

    $('.cont-2').mouseover(function () {

        $('.desc:nth-child(2)').css('opacity', '1');

        setTimeout(function(){
            $('.cont-1').css('left', '-100px');
            $('.cont-3').css('left', '100px');
            $('.cont-4').css('left', '100px');
        }, 300);

    });

    $('.cont-3').mouseover(function () {

        $('.desc:nth-child(3)').css('opacity', '1');

        setTimeout(function(){
            $('.cont-1').css('left', '-100px');
            $('.cont-2').css('left', '-100px');
            $('.cont-4').css('left', '100px');
        }, 300);

    });

    $('.cont-4').mouseover(function () {

        $('.desc:last-child').css('opacity', '1');

        setTimeout(function(){
            $('.cont-1').css('left', '-100px');
            $('.cont-2').css('left', '-100px');
            $('.cont-3').css('left', '-100px');
        }, 300);

    });

    $('.photo-cont').mouseout(function () {

        setTimeout(function(){
            $('.cont-1').css('left', '0');
            $('.cont-2').css('left', '0');
            $('.cont-3').css('left', '0');
            $('.cont-4').css('left', '0');
        }, 300);

    });



    // CHROME SMOOTH SCROLL
    // try {
    //     $.browserSelector();
    //     if ($("html").hasClass("chrome")) {
    //         $.smoothScroll();
    //     }
    // } catch (err) {
    //
    // };
    //
    // $("img, a").on("dragstart", function(event) {
    //     event.preventDefault();
    // });
});
