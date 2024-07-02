$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#header').addClass('fix');
    } else {
      $('#header').removeClass('fix');
    }
  });

  $('.depth2').hide();
  $('.gnb > li').mouseenter(function () {
    $(this).find('.depth2').stop().slideDown();
  });
  $('.gnb > li').mouseleave(function () {
    $(this).find('.depth2').stop().slideUp();
  });

  $('.ham').click(function () {
    $('.mgnb_wrap').animate({
      left: '0',
    });
  });

  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').animate({
      left: '100%',
    });
  });

  /* mgnb */
  $('.mdepth2').hide();
  $('.mgnb > li').click(function () {
    $(this).children('.mdepth2').stop().slideDown();
    $(this).siblings().children('.mdepth2').stop().slideUp();
  });

  $('.mv').slick({
    autoplay: true,
    dots: true,
    fade: true,
  });

  $('.rz_img_list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '00px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.ov_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true,
    asNavFor: '.ov_list_btn',
  });
  $('.ov_list_btn').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.ov_list',
    focusOnSelect: true,
  });

  $('.product_img_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    asNavFor: '.product_menu_btn',
  });
  $('.product_menu_btn').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product_img_slide',
    focusOnSelect: true,
  });

  // 맨위로가기 버튼
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.gotop').fadeIn();
    } else {
      $('.gotop').fadeOut();
    }
  });

  $('.gotop').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
    return false;
  });
});
