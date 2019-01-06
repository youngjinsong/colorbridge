/**
 * WeeklyDrawing
 * @constructor
 *
 * @REF https://apps.elfsight.com/panel/applications/instashow/
 */
function WeeklyDrawing(parent) {
  console.log('Loaded WeeklyDrawing');

  var loadCheckInterval = 300;
  var loadCheckInstance;

  /**
   * 플러그인 로드 체크.
   * @returns {boolean}
   */
  function checkLoadFeedPlugin(callback) {
    console.log('checkLoadFeedPlugin', arguments);

    if (loadCheckInstance) {
      clearTimeout(loadCheckInstance);
    }

    if ($('.eapps-instagram-feed-posts-item').length) {
      callback && callback();
    } else {
      loadCheckInstance = setTimeout(function() {
        checkLoadFeedPlugin(callback);
      }, loadCheckInterval);
    }
  }

  /**
   * 로드 후 처리
   */
  function loaded() {
    setTimeout(function() {
      $('a[href*="https://elfsight.com/"]').remove(); // 불필요 서드파티 로그 삭제
    }, 100);

    parent.loader.hide();
  }

  function init() {
    parent.loader.show();
    checkLoadFeedPlugin(loaded);
  }

  this.init = init;
}