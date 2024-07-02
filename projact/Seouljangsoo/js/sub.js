$(document).ready(function(){

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });

    $('.depth2').hide();
    $('.gnb > li').mouseenter(function(){
        $(this).find('.depth2').stop().slideDown();
    });
    $('.gnb > li').mouseleave(function(){
        $(this).find('.depth2').stop().slideUp();
    });
    
})