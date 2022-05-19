
$(document).ready(function () {
    //Modal
    $('[data-modal=menu]').on('click', function () {
        $('.sidebar, .sidebar_menu').fadeIn('slow');
    });
    $('.modal_close5').on('click', function () {
        $('.sidebar, .sidebar_menu').fadeOut('slow');
    });
    $('[data-modal=info1]').on('click', function () {
        $('.overlay1, #info1, .slide_img').fadeIn('slow');
    });
    $('.modal_close1').on('click', function () {
        $('.overlay1, #info1').fadeOut('slow');

    });

    $('[data-modal=info2]').on('click', function () {
        $('.overlay2, #info2').fadeIn('slow');
    });
    $('.modal_close2').on('click', function () {
        $('.overlay2, #info2').fadeOut('slow');

    });
    $('[data-modal=info3]').on('click', function () {
        $('.overlay3, #info3').fadeIn('slow');
    });
    $('.modal_close3').on('click', function () {
        $('.overlay3, #info3').fadeOut('slow');

    });
    $('[data-modal=info4]').on('click', function () {
        $('.overlay4, #info4').fadeIn('slow');
    });
    $('.modal_close4').on('click', function () {
        $('.overlay4, #info4').fadeOut('slow');

    });
    // $('.website_slider').slick('setPosition');
    //Slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        adaptiveHeight: true,
        fade: true,
        initialSlide: 0
    });
});
