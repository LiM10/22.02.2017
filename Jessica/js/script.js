$(document).ready(function () {

    var slider = $('.slider');
    slider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        smartSpeed: 1500,
        autoWidth: false,
        dots: false,
        nav: true,
        navText: ["<i id='slider-left' class='fa fa-angle-left' aria-hidden='true'></i>","<i id='slider-right' class='fa fa-angle-right' aria-hidden='true'></i>"]
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            600: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            1000: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            }
//        }
    });
});

$(document).ready(function () {

    var features = $('.images');
    features.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoWidth: false,
        dots: false,
        nav: true,
        navText: ["<i id='feature-left' class='fa fa-angle-left' aria-hidden='true'></i>","<i id='feature-right' class='fa fa-angle-right' aria-hidden='true'></i>"],
        margin: 20
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            600: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            1000: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            }
//        }
    });
});

$(document).ready(function () {

    var post = $('.post_images');
    post.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoWidth: false,
        dots: false,
        nav: true,
//        navText: ["<i id='feature-left' class='fa fa-angle-left' aria-hidden='true'></i>","<i id='feature-right' class='fa fa-angle-right' aria-hidden='true'></i>"],
        margin: 20
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            600: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            },
//            1000: {
//                items: 1,
//                nav: true,
//                dot: false,
//                loop: true
//            }
//        }
    });
});


