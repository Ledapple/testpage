$(document).ready(function () {
  //스크롤트리거
  $(window).scroll(function () {
    $('.ani').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() * 0.5;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('ani');
      }
    });
  });

  // 맨위로가기 버튼
  $(window).scroll(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.gotop').fadeIn();
      } else {
        $('.gotop').fadeOut();
      }
    });
  });

  $('.gotop').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
    return false;
  });
});
