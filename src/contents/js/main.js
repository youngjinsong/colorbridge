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

  function init() {
    that.loader.append($('#layout-wrap'));

    pageHandler.init();
    pageHandler.loaded = function(url) {
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
        }

        portfolio.init({
          $appendTarget: $('.portfolio-list'),
          renderType: isTwoDepth ? "pagination" : "all",
          currentPage: currentPage
        });
      }
    };
  }

  init();
});
