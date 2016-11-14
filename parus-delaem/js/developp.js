$(document).ready(function() {

    // ПАРАЛЛАКС ИНИЦИАЛИЗАЦИЯ
    var screenWidth = $(window).width();

    if (screenWidth > 992) {
      var s = skrollr.init();
    }


    // СЛАЙДЕР С РАБОТАМИ
    $(".dev-work #slider").owlCarousel({
        items: 1,
        itemsDesktop: [1199,1],
        itemsDesktopSmall: [979,1],
        itemsTablet: [768,1],
        pagination: false
    });

    $(".dev-work .slide-next").click(function(){
        $(".dev-work #slider").trigger('owl.next');
    });

    $(".dev-work .slide-prev").click(function(){
        $(".dev-work #slider").trigger('owl.prev');
    });


    // КАСТОМНЫЙ СКРОЛЛБАР С ПЕРВОЙ СЕКЦИИ
    $(".dev-start .description").mCustomScrollbar();


    // КАСТОМНЫЙ СЕЛЕКТ С ПЕРВОЙ СЕКЦИИ
    var li = $('.dev-start .selected'),
        liNotFirst = $('.dev-start .select li:not(:first-of-type)'),
        liValue = $('.dev-start .value');

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
            topPos = $('.dev-targets').offset().top,
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


    // АНИМАЦИЯ НА СТР. "ПРОЕКТИРОВАНИЕ В ДЕТАЛЯХ"
    $(window).scroll(function() {

        var topScrolled = $(window).scrollTop(),
            topPos1 = $('.dev-projects').offset().top,
            st = $(this).scrollTop(),
            protImgOne = $('.prot-img-1'),
            protImgTwo = $('.prot-img-2'),
            protImgThree = $('.prot-img-3');

        if (topPos1 < topScrolled) {

          if (window.matchMedia("(max-width: 1280px)").matches) {
            protImgThree.css('transform', 'translateY(0)');

            setTimeout(function() {
                protImgOne.css('transform', 'translateY(150px)');
            }, 400);

            setTimeout(function() {
                protImgTwo.css('transform', 'translateY(100px)');
            }, 800);

            setTimeout(function() {
                $('.rullers').css('opacity', '1');
                $('.rullers:first-child').css('top', '130px');
            }, 1000);

            setTimeout(function() {
                $('.rullers-left').css('left', '-425px');
            }, 1200);
          } else {
            protImgThree.css('transform', 'translateY(0)');

            setTimeout(function() {
                protImgOne.css('transform', 'translateY(150px)');
            }, 400);

            setTimeout(function() {
                protImgTwo.css('transform', 'translateY(100px)');
            }, 800);

            setTimeout(function() {
                $('.rullers').css('opacity', '1');
                $('.rullers:first-child').css('top', '130px');
            }, 1000);

            setTimeout(function() {
                $('.rullers-left').css('left', '-425px');
            }, 1200);
          }

        }
    });


    // АНИМАЦИЯ НА СТР. "ДИЗАЙН"
    $(window).scroll(function() {

        var topScrolled = $(window).scrollTop(),
            topPos2 = $('.dev-design').offset().top;

        if (topPos2 < topScrolled) {
            var st = $(this).scrollTop();
            psWindow = $('.ps-window');
            psWindow.css('transform', 'translateY(0)');
        }
    });


    // АНИМАЦИЯ НА СТР. "ВЕРСТКА И РАЗРАБОТКА"
    $(window).scroll(function() {

        var topScrolled = $(window).scrollTop(),
            topPos3 = $('.dev-dev').offset().top;

        if (topPos3 < topScrolled) {
            var st = $(this).scrollTop(),
                HtmlCss = $('.dev-dev .html-css'),
                VertPanel1 = $('.dev-dev .vert-panel-1'),
                HorPanel = $('.dev-dev .hor-panel'),
                Bird1 = $('.dev-dev .bird-1'),
                Bird = $('.dev-dev .bird'),
                Prot = $('.dev-dev .prot'),
                Code = $('.dev-dev .code'),
                ScreenLine = $('.dev-dev .screen-line'),
                Screen = $('.dev-dev .screen'),
                PsScreen = $('.dev-dev .ps-screen');

            HtmlCss.css('transform', 'translate(480px, -180px)');
            VertPanel1.css('transform', 'translate(360px, -260px)');
            HorPanel.css('transform', 'translate(180px, -110px)');
            Bird1.css('transform', 'translate(265px, -475px)');
            Bird.css('transform', 'translate(-280px, 200px)');
            Prot.css('transform', 'translate(-280px, 120px)');
            Code.css('transform', 'translate(-180px, 180px)');
            ScreenLine.css('transform', 'translate(-55px, 95px)'); //переделать
            Screen.css('transform', 'translate(-100px, 60px)');
            PsScreen.css('transform', 'translate(320px, -170px)');
        }
    });


    // CHROME SMOOTH SCROLL
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});
