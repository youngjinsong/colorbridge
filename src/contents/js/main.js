/*!
 *
 * ColorBridge - main.js
 * @author ssongki (ssongki@gmail.com)
 *
 */
$(function() {
  var that = this;
  that.loader = new Loader();

  var pageHandler = new PageHandler();
  var weeklyDrawing = new WeeklyDrawing(that);
  var portfolio = new Portfolio(that);
  var $win = $(window);
  var $body = $('body');

  /**
   * 스크롤 상단 이동
   */
  function moveScrollTop() {
    return $win.scrollTop(0);
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
   * 페이지 비동기 로드 완료 후 처리
   * @param url
   */
  function onLoaded(url) {
    console.log('url', url);

    that.loader.hide();
    $body.removeClass('loaded');
    setTimeout(function() {
      $body.addClass('loaded');
    }, 10);

    if (url.match('weekly-drawing')) {
      weeklyDrawing.init();
    } else if (url.match('portfolio')) {
      var isTwoDepth = false;
      var currentPage;

      if (url.match('/portfolio/')) {
        isTwoDepth = true;
        currentPage = url.split('/views/portfolio/')[1];
        currentPage = currentPage.split('.html')[0];

        moveScrollTop();
      }

      // 하단 페이지네이션
      portfolio.init({
        $appendTarget: $('.portfolio-list'),
        renderType: isTwoDepth ? "pagination" : "all",
        currentPage: currentPage
      });
    }

    changeThema($body.find('.portfolio-details'));
  }

  function init() {
    that.loader.append($body);

    pageHandler.init();
    pageHandler.loaded = onLoaded;
  }

  init();
});
