$(document).ready(function() {
    $('.call').click(function(event) { // лoвим клик
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('.popup').css('display', 'block'); // убирaем у мoдaльнoгo oкнa display: none;
        $('.overlay').css('display', 'block'); // убирaем у мoдaльнoгo oкнa display: none;

        $('.overlay, .popup').animate({
            opacity: 1
        }, 300); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });

    // popup close
    $('.overlay, .close-button').click(function() {
        $('.popup, .overlay')
            .animate({
                    opacity: 0
                }, 300,
                function() {
                    $(this).css('display', 'none');
                }
            );
    });
});

$("a[href='#projects']").mPageScroll2id();
$('.hvr-sweep-to-right').click(function() {
    $(this).blur();
    /*
    if (this.hasClass('.hvr-sweep-to-right:hover')) {
      $(this).css('color', 'black');
    };
    */
});

$(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    dots: true
});



var $navBtn = $('.navBtn');
var $nav = $('.toggle-nav');
var $navIcon = $('.navBtn i');

$navBtn.click(function(event) {
    event.preventDefault();
    $navIcon.toggleClass('clicked');
    $nav.slideToggle('fast');
});


var $phoneTrig = $('.phones');

$phoneTrig.click(function() {
    $('.phones-wrp').slideToggle(200);
});


function initMap() {
    var myLatLng = {
        lat: 53.1965766,
        lng: 50.2199358

        //53.1965766
        //50.2199358
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng,
        //  scrollwheel: false,
        //  draggable: false
    });

    var gIcon = {
        url: 'img/map-marker.png'
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: gIcon
    });


    var styles = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#a5dbf1"
        }, {
            "visibility": "on"
        }]
    }];

    map.setOptions({
        styles: styles
    });
    var iconBase = '../img/map-marker.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: iconBase
    });
}

$(function() {
    $('.number').mask('+7 (999) 999-99-99');
});
