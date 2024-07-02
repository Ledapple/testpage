$(document).ready(function () {


    //스크롤트리거
    $(window).scroll(function () {
        $('.ani').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani');
            }
        });
    });



});