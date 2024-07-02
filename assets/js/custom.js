$(document).ready(function () {
  function clickEffect(e) {
    var d = document.createElement('div');
    d.className = 'clickEffect';
    d.style.top = e.clientY + 'px';
    d.style.left = e.clientX + 'px';
    document.body.appendChild(d);
    d.addEventListener(
      'animationend',
      function () {
        d.parentElement.removeChild(d);
      }.bind(this)
    );
  }
  document.addEventListener('click', clickEffect);
});

/* 요소 선택 후 선택 요소에 클래스 기입 나머지 선택 요소는 클래스 삭제 */
// $(document).ready(function(){
//     $('.gnb > li').click(function(){
//         $(this).addClass('clicked').siblings().removeClass('clicked');
//     })
// })

/* 스크롤 시 메뉴 효과 */

first = $('#first').position().top - 100;
web = $('#web').position().top - 300;
graphic = $('#graphic').position().top - 500;
epilogue = $('#epilogue').position().top - 700;

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll < web) {
    $('#menu-first').addClass('clicked');
    $('#menu-web').removeClass('clicked');
  } else if (web <= scroll && scroll < graphic) {
    $('#menu-first').removeClass('clicked');
    $('#menu-web').addClass('clicked');
    $('#menu-graphic').removeClass('clicked');
  } else if (graphic <= scroll && scroll < epilogue) {
    $('#menu-web').removeClass('clicked');
    $('#menu-graphic').addClass('clicked');
    $('#menu-epilogue').removeClass('clicked');
  } else if (epilogue <= scroll) {
    $('#menu-graphic').removeClass('clicked');
    $('#menu-epilogue').addClass('clicked');
  }
  if (scroll < 100) {
    $('#menu-first').removeClass('clicked');
  }
});
