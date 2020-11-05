/**
 * PageHandler
 * @constructor
 */
function Bubbly() {
  var INTERVAL = 400;

  function bindEvent() {
    $('.bubbly').click(function () {
      var $this = $(this);

      $this.removeClass('animate').addClass('animate');
      setTimeout(function () {
        $this.removeClass('animate');
      }, INTERVAL);
    });
  }

  this.init = function () {
    bindEvent();
  };
}
