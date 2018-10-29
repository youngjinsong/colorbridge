/*!
 *
 * ColorBridge - main.js
 * @author ssongki (ssongki@gmail.com)
 *
 */
$(function() {
  var that = this;
  var pageHandler = new PageHandler();
  var weeklyDrawing = new WeeklyDrawing(that);

  this.loader = {
    append: function($target) {
      console.log('loader', $target);

      $target.append([
        '<div class="loader-wrap">',
          ' <div class="loader">Loading...</div>',
        '</div>'
      ].join('\n'));
    },
    show: function() {
      $('.loader-wrap').show();
    },
    hide: function() {
      $('.loader-wrap').hide();
    }
  };

  function init() {
    that.loader.append($('#layout-wrap'));

    pageHandler.init();
    pageHandler.loaded = function(url) {
      that.loader.hide();

      if (url.match('weekly-drawing')) {
        weeklyDrawing.init();
      }
    };
  }
  init();
});
