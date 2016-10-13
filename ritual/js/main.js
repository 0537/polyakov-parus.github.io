// ;$(document).ready(function() {
//
// $('a[href^="#"]').click(function(){
//         var el = $(this).attr('href');
//         $('html,body').animate({
//             scrollTop: $(el).offset().top - 70}, 1000);
//         return false;
// });
//
// });
//
//
var header = new Headhesive ('.main-contacts');

$(document).ready(function() {
	$('.mobile button').click(function() {
	  $(this).toggleClass('expanded close').siblings('.mobile-navigation').slideToggle();
	});

	$('.range-carousel.owl-carousel, .transport.owl-carousel').owlCarousel({
	    margin: 7,
	    loop: false,
	    items: 2,
	    nav: true,
	    navText: ['<i></i>','<i></i>']
	});
});

$(function(){
	$('.number, .number-cont').mask('+7 (999) 999-99-99');
})

//What do i need: Make button which will toggle down unordered list

var $servBtn = $('.service-el');
var $servUl = $('.service-ul');
$servBtn.click(function(event){
	event.preventDefault();
	$(this).next().slideToggle(400);
})
