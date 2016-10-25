var header = new Headhesive('.main-contacts');

$(document).ready(function() {
    $('.mobile button').click(function() {
        $(this).toggleClass('expanded close').siblings('.mobile-navigation').slideToggle();
    });

    $('.range-carousel.owl-carousel, .transport.owl-carousel').owlCarousel({
        margin: 7,
        loop: false,
        items: 2,
        nav: true,
        navText: ['<i></i>', '<i></i>']
    });
});

$(function() {
    $('.number, .number-cont').mask('+7 (999) 999-99-99');
})

//What do i need: Make button which will toggle down unordered list

var $servBtn = $('.service-el, .serv-more-el');
var $servUl = $('.service-ul');
$servBtn.click(function(event) {
    $(this).next().slideToggle(400);
    return false;
});
