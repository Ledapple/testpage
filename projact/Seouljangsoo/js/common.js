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
    

    $('.ham').click(function(){
        $('.mgnb_wrap').animate({
            left: '0'
        });
    });

    $('.mgnb_close').click(function(){
        $('.mgnb_wrap').animate({
            left: '100%'
        });
    });

    /* mgnb */
    $('.mdepth2').hide();
    $('.mgnb > li').click(function(){
        $(this).children('.mdepth2').stop().slideDown();
        $(this).siblings().children('.mdepth2').stop().slideUp();
    });

    /* overview */
    $('#overview ul li:nth-child(1)').addClass('active');
    $('#overview ul li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active'); 
        /* 지정한 요소(li)는 active라는 클래스를 추가해주고 선택하지 않은 li의 형제요소(siblings)는 active를 제거해주어라 */
    });

    $('.ov_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        fade: true,
        dots: false,
        asNavFor: '.ov_list_btn'
    });
    $('.ov_list_btn').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.ov_list',
        focusOnSelect: true,
        infinite:true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            prevArrow : false,
            nextArrow : false,
            autoplay : false
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow : false,
            nextArrow : false,
            autoplay : false,
            centerMode: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow : false,
            nextArrow : false,
            autoplay : false
            }
            }
        ]
    });


    $(".drop_menu > li").click(function(){
        if($(this).find(".text_area").is(":visible")){
            $(this).find(".text_area").slideUp();
        }
        else{
            $(this).find(".text_area").slideDown();
        }
    })

    /* news */
    $('.news_list').slick({
        autoplay: true,
        vertical: true,
        arrows: false
    });

    // 맨위로가기 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });

    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
        return false;
    });
})