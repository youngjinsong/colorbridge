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
   * 페이지 비동기 로드 완료 후 처리
   * @param url
   */
  function onLoaded(url) {
    console.log('url', url);
    that.loader.hide();

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

      portfolio.init({
        $appendTarget: $('.portfolio-list'),
        renderType: isTwoDepth ? "pagination" : "all",
        currentPage: currentPage
      });
    }
  }

  function init() {
    that.loader.append($body);

    pageHandler.init();
    pageHandler.loaded = onLoaded;
  }

  init();
});
