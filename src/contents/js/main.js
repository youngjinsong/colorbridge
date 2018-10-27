/*!
 *
 * ColorBridge - main.js
 * @author ssongki (ssongki@gmail.com)
 *
 */
$(function() {
  var $body = $('body');
  var $content = $('#content');
  var $menus = $('#menus');

  /**
   * 메뉴 활성화 처리
   * @param name
   */
  function setFocusMenu(name) {
    console.log('setFocusMenu', arguments);

    $menus.find('.selected').removeClass('selected');
    $menus.find('a[href*="' + name + '"]').addClass('selected');
    $('title').html('COLOR BRIDGE - ' + name.replace('-', ' '));
  }

  /**
   * 페이지 호출 처리
   * @param url
   */
  function getPage(url) {
    console.log('getPage', arguments);

    $.get(url, function(data) {
      $content.html(data);
    });
  }

  /**
   * 해쉬 변경에 따른 처리
   * @param hash
   */
  function handleHash(hash) {
    console.log('handleHash', arguments);

    if (hash) {
      var viewPath = '/views/' + hash + '.html';
      var menuName = hash.replace('views/', '').replace('.html', '');

      // 2depth path 처리
      if (menuName.match('/')) {
        menuName = menuName.split('/')[0];
      }
      
      setFocusMenu(menuName);
      getPage(viewPath);

    } else if (location.pathname === '/') {
      getPage('/views/home.html');
    } else {
      $('#bi').click();
    }
  }
  
  $(window).bind('hashchange', function() {
    var hash = location.hash.split('#')[1];
    handleHash(hash);
  });

  function init() {
    var hash = location.hash;
    hash = hash ? hash.split('#')[1] : null;
    handleHash(hash);
  }
  init();
});
