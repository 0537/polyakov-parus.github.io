$(document).ready(function() {

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        $('.present-img').css ({
            'transform' : "translate(0%, -" + st/50 + "%"
        });
    });

    // popup
    $('.lang-on').click(function(event) {
        event.preventDefault();
        $('.popup-lang').css({
            'display': 'flex',
            'display': '-webkit-flex'
        });
        $('.blur-wrapper').css({
            'filter': 'blur(30px)',
            '-webkit-filter': 'blur(30px)'
        });
        $('.blur-wrapper').css({
            'position': 'fixed',
            'width': '100%',
            'margin': '0 auto'
        });
    });

    // popup close
    $('.popup-lang, .lang li').click(function() {
        $('.popup-lang').css('display', 'none');
        $('.blur-wrapper').css({
            'filter': 'none',
            '-webkit-filter': 'none'
        });
        $('.blur-wrapper').css({
            'position': 'relative',
            'margin': '0'
        });
    });

    // close lang panel
    $('.lang-off').click(function() {
        $('.lang').css('display', 'none');
    })

    $('.cash-wrapper--carousel').parallax({
        imageSrc: 'img/wp-carousel.jpg',
        speed: 0.4
    });
    $('.cash-wrapper--magazines').parallax({
        imageSrc: 'img/wp-magazines.jpg',
        speed: 0.4
    });

    $('.cash-wrapper--hotnews').parallax({
        imageSrc: 'img/wp-hotnews.jpg',
        speed: 0.4
    });

    $('.cash-wrapper--blogapp').parallax({
        imageSrc: 'img/wp-blogapp.jpg',
        speed: 0.4
    });


    // carousels

    $('#carousel-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('#nativator-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('#magazines-slider-1').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    setTimeout(function() {
        $('#magazines-slider-2').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
    }, 200)
    setTimeout(function() {
        $('#magazines-slider-3').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
    }, 600)

    $('#blogapp-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $(".next").click(function() {
        $('#nativator-slider').trigger('next.owl.carousel');
        $('#carousel-slider').trigger('next.owl.carousel');
        $('#magazines-slider-1').trigger('next.owl.carousel');
        $('#blogapp-slider').trigger('next.owl.carousel');
        setTimeout(function() {
            $('#magazines-slider-2').trigger('next.owl.carousel');
        }, 200)
        setTimeout(function() {
            $('#magazines-slider-3').trigger('next.owl.carousel');
        }, 400)
    });
    $(".prev").click(function() {
        $('#nativator-slider').trigger('prev.owl.carousel');
        $('#carousel-slider').trigger('prev.owl.carousel');
        $('#magazines-slider-1').trigger('prev.owl.carousel');
        $('#blogapp-slider').trigger('prev.owl.carousel');
        setTimeout(function() {
            $('#magazines-slider-2').trigger('prev.owl.carousel');
        }, 200)
        setTimeout(function() {
            $('#magazines-slider-3').trigger('prev.owl.carousel');
        }, 400)
    });

    // chrome Smooth Scroll
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
