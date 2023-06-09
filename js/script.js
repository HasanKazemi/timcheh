$(function () {
    // desktop mega menu
    $('.horizontal-list > li > a').hover(function () {
        $(this).next().delay(500).fadeIn();
    });
    $('.horizontal-list > li').mouseleave(function () {
        $('.horizontal-list > li > a').next().fadeOut();
    });

    $('.no-shadow').click(function () {
        $(this).css({
            'border': 'none',
            'box-shadow': 'none',
            'color': 'inherit',
            'background': 'inherit'
        });
    });
    $('.click-245').click(function () {
        $(this).css({
            'border': 'none',
            'box-shadow': 'none',
            'color': 'inherit',
            'background': '#f5f5f5'
        });
    });

    $('#phone-nav-button').click(function () {
        $('#phone-nav').show(300);
    });
    $('#phone-nav .fa-close').click(function () {
        $('#phone-nav').hide(300);
    });

    $('.show-more').click(function () {
        let more = $('#more');
        if (more.text() === 'بیشتر') {
            more.text('کمتر');
            $('#more-sign').removeClass('fa-chevron-down');
            $('#more-sign').addClass('fa-chevron-up');
        } else {
            more.text('بیشتر');
            $('#more-sign').removeClass('fa-chevron-up');
            $('#more-sign').addClass('fa-chevron-down');
        }
    });

    $(".owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items: 2,
                stagePadding: 30,
            },
            768: {
                items: 4
            }
        }
    });
});