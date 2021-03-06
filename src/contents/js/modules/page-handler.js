/**
 * PageHandler
 * @constructor
 */
function PageHandler(parent, options) {
  console.log('Loaded PageHandler');

  var that = this;
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
    $('title').html('COLOR BRIDGE - ' + name.replace('-', ' ').toUpperCase());
  }

  /**
   * 바디에 data-page 속성 추가
   * @param {*} name
   */
  function setPageNameToBody(name) {
    console.log('setPageNameToBody', arguments);
    $body.attr('data-page', name);
  }

  /**
   * 동적으로 호출하는 페이지를 GA 트레킹한다.
   * @param page
   */
  function sendGA(page) {
    if (page.match('home')) {
      return false;
    }
    ga('send', 'pageview', { page: page });
    console.log('sendGA', page);
  }

  /**
   * 페이지 호출 처리
   * @param url
   */
  function getPage(url) {
    console.log('getPage', arguments);

    $.get(url, function (data) {
      $content.html(data);
      that.loaded(url);
      hideLoaderPending(url, 200);
      sendGA(url.split('/views/')[1].replace('.html', ''));
    });
  }

  /**
   * 페이지가 시각적으로 부드럽게 전환되도록 로더를 일정시간 노출후 제거한다.
   * @param url
   * @param timeout
   */
  function hideLoaderPending(url, timeout) {
    // 위클리 드로잉은 자체 로더 컨트롤
    if (!url.match(options.selfLoaderHandlePage)) {
      setTimeout(function () {
        parent.loader.hide();
      }, timeout);
    }
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

      // replace era to morlymom
      if (viewPath.match(/era/)) {
        location.hash = 'projects/morlymom';
        return false;
      }

      getPage(viewPath);
      setFocusMenu(menuName);
      setPageNameToBody(menuName);
    } else if (location.pathname === '/') {
      getPage('/views/home.html');
      setFocusMenu('home');
      setPageNameToBody('home');
    } else {
      $('#bi').click();
    }

    parent.loader.show();
  }

  /**
   * 해쉬 변경을 감지 한다.
   */
  function bindHashChange() {
    $(window).bind('hashchange', function () {
      var hash = location.hash.split('#')[1];
      handleHash(hash);
    });
  }

  /**
   * 페이지가 로드된후 호출될 콜백 함수.
   * @param url
   */
  function loaded(url) {
    console.log('Need page loaded function', url);
  }

  function init() {
    var hash = location.hash;
    hash = hash ? hash.split('#')[1] : null;
    handleHash(hash);
    bindHashChange();
  }

  this.init = init;
  this.loaded = loaded;
}
