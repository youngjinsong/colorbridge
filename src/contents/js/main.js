/*!
 *
 * ColorBridge - main.js
 * @author ssongki (ssongki@gmail.com)
 *
 */
$(function() {
  var $body = $('body');
  var $content = $('#content');
  var currentHash = null; // hashchange 이벤트에 중복으로 ajax 요청하는것을 막기 위해 비교값 선언

  $body.on('click', '#menus a', function() {
    var $this = $(this);
    var url = $this.attr('href');
    var menuName = url.replace('views/', '').replace('.html', '');

    // menu selected
    $('#menus .selected').removeClass('selected');
    $('#menus a[href*="' + menuName + '"]').addClass('selected'); // for slide link selection
    // $('.nav-overlay.open').removeClass('open');
    // $('.button_container').removeClass('active');

    $.get(url, function(data) {
      $content.html(data);

      currentHash = menuName;
      location.hash = currentHash;
      $('title').html('colorbridge - ' + menuName.replace('-', ' '));
    });

    return false;
  });

  $(window).bind('hashchange', function() {
    var hash = location.hash.split('#')[1];

    if (!currentHash || currentHash !== hash) {
      $('#menus a[href*="' + hash + '"]').click();
    }
  });

  function init() {
    var hash = location.hash;

    if (hash) {
      hash = hash.split('#')[1];
      $('#menus a[href*="' + hash + '"]').click();
    } else {
      $('#bi').click();
    }
  }
  init();
});
