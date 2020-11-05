/*!
 *
 * ColorBridge - main.js
 * @author ssongki (ssongki@gmail.com)
 *
 */
$(function () {
  this.loader = new Loader();
  this.utils = new Utils(that);
  var that = this;
  var utils = this.utils;
  var pageHandler = new PageHandler(that, {
    selfLoaderHandlePage: /weekly-drawing/,
  });
  var weeklyDrawing = new WeeklyDrawing(that);
  var projects = new Projects(that);
  var subpage = {
    remember: new Remember(),
    iportfolio: new Iportpolio(),
  };
  var $win = $(window);
  var $body = $('body');
  var $btnTop = null;
  var bubbly = new Bubbly();

  /**
   * 스크롤 이동 합니다.
   * @param top
   * @param hasAnimation
   */
  function moveScrollTop(top, hasAnimation) {
    if (hasAnimation) {
      $('html, body').animate(
        {
          scrollTop: top,
        },
        500
      );
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
    $target.append('<button id="btn-top">TOP</button>');
    $btnTop = $('#btn-top');
    $btnTop.on('click', function () {
      moveScrollTop(0, true);
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
    SR.reveal(v2, { delay: 200, distance: '60px' });
    SR.reveal(v3, { delay: 350, distance: '90px' });
  }

  /**
   * 컨텐츠 영역의 테마값을 기준으로 body 테마 변경
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
   * DOM 환경 설정
   */
  function setEnv() {
    $body.attr('data-os', utils.getOS().toLowerCase());
  }

  /**
   * projects 로드 처리
   * @param {*} url
   */
  function onLoadedProjects(url) {
    var isTwoDepth = false;
    var currentPage;

    if (url.match('/projects/')) {
      isTwoDepth = true;
      currentPage = url.split('/views/projects/')[1];
      currentPage = currentPage.split('.html')[0];
      moveScrollTop(0);

      // 하위 페이지 스크립트 초기화
      if (subpage[currentPage]) {
        subpage[currentPage].init();
      }
    }

    // 목록 스타일 처리를 위해 구분함
    if (!isTwoDepth) {
      if (url.match('home')) {
        $body.attr('data-page', 'home-projects-list');
      } else {
        $body.attr('data-page', 'projects-list');
      }
    }

    // 페이지네이션
    projects.init({
      $appendTarget: $('.projects-list'),
      renderType: isTwoDepth ? 'pagination' : 'all',
      currentPage: currentPage,
    });
  }

  /**
   * 페이지 비동기 로드 완료 후 처리
   * @param url
   */
  function onLoaded(url) {
    console.log('url', url);

    $body.removeClass('loaded');
    setTimeout(function () {
      $body.addClass('loaded');
    }, 10);

    if (url.match('home')) {
      onLoadedProjects(url);
    } else if (url.match('weekly-drawing')) {
      weeklyDrawing.init();
    } else if (url.match('projects')) {
      onLoadedProjects(url);
    }

    changeThema($body.find('[data-thema]'));
    setTimeout(bindScrollReveal, 200);
    onScroll();
  }

  function init() {
    setEnv();
    setYear($('#year'));
    that.loader.append($body);
    pageHandler.init();
    pageHandler.loaded = onLoaded;
    appendTopButton($body);
    $win.scroll(onScroll);
    bubbly.init();
  }

  init();
});
