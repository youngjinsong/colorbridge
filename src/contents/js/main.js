/*!
 *
 * ColorBridge - main.js
 * @author ssongki (ssongki@gmail.com)
 *
 */
$(function() {
  this.loader = new Loader();
  var that = this;
  var pageHandler = new PageHandler(that);
  var weeklyDrawing = new WeeklyDrawing(that);
  var projects = new Projects(that);
  var $win = $(window);
  var $body = $('body');
  var $btnTop = null;

  /**
   * 스크롤 이동 합니다.
   * @param top
   * @param hasAnimation
   */
  function moveScrollTop(top, hasAnimation) {
    if (hasAnimation) {
      $("html, body").animate({
        scrollTop: top
      }, 500);
    } else {
      $win.scrollTop(top);
    }
  }

  /**
   * 스크롤 이벤트 핸들링
   */
  function onScroll() {
    var winTop = $win.scrollTop();

    // Scroll Top Button
    $btnTop[winTop > 600 ? 'addClass' : 'removeClass']('shown');
  }

  /**
   * Top 버튼 바인딩
   */
  function appendTopButton($target) {
    $target.append('<button id="btn-top" class="shown">TOP</button>');
    $btnTop = $('#btn-top');
    $btnTop.on('click', function() {
      moveScrollTop(0, true);
      $btnTop.removeClass('shown');
    });
  }

  /**
   * 스크롤 에니메이션 바인딩
   */
  function bindScrollReveal() {
    console.log('setScrollReveal');

    var SR = ScrollReveal({ reset: false });
    var v1 = document.querySelectorAll('.sa-v1');
    var v2 = document.querySelectorAll('.sa-v2');
    var v3 = document.querySelectorAll('.sa-v3');

    SR.reveal(v1, { delay: 100, distance: '30px' });
    SR.reveal(v2, { delay: 300, distance: '80px'});
    SR.reveal(v3, { delay: 500, distance: '100px'});
  }

  /**
   * 테마 변경
   * @param $target
   */
  function changeThema($target) {
    if ($target.attr('data-thema') === 'white') {
      $body.addClass('thema-white');
    } else {
      $body.removeClass('thema-white');
    }
  }

  /**
   * 푸터 연도 설정
   */
  function setYear($year) {
    $year.text(new Date().getFullYear());
  }

  /**
   * 페이지 비동기 로드 완료 후 처리
   * @param url
   */
  function onLoaded(url) {
    console.log('url', url);

    $body.removeClass('loaded');
    setTimeout(function() {
      $body.addClass('loaded');
    }, 10);

    if (url.match('weekly-drawing')) {
      weeklyDrawing.init();
      return false;
    } else if (url.match('projects')) {
      var isTwoDepth = false;
      var currentPage;

      if (url.match('/projects/')) {
        isTwoDepth = true;
        currentPage = url.split('/views/projects/')[1];
        currentPage = currentPage.split('.html')[0];

        moveScrollTop(0);
      }

      // 하단 페이지네이션
      projects.init({
        $appendTarget: $('.projects-list'),
        renderType: isTwoDepth ? "pagination" : "all",
        currentPage: currentPage
      });
    }

    changeThema($body.find('.projects-detail'));
    setTimeout(bindScrollReveal, 10);
    onScroll();
  }

  function init() {
    that.loader.append($body);
    setYear($('#year'));
    pageHandler.init();
    pageHandler.loaded = onLoaded;
    appendTopButton($body);
    $win.scroll(onScroll);
  }

  init();
});
