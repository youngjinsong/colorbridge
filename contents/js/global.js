/**
 * @author youngjin song
 * ColorBridge.js
 * Last Updated: 2017.2.26
 */
$(document).ready(function() {

	var $body = $('body')
		, $this = $(this)
		,	$btnTop = $('#top')
		, $content = $('#content');


	// sticky header
	$(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if (winTop >= 30){
      $body.addClass("sticky-header");
    } else {
      $body.removeClass("sticky-header");
    }
  });

	// mobile Nav
	$('#hamburger-nav').on('click',function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});

  /* top */
	$(window).on('scroll', function() {
		if ( $this.scrollTop() < 600 ) {
			$btnTop.removeClass('shown');
		} else {
			$btnTop.addClass('shown');
		}
	});

  $btnTop.on('click', function() {
    $body.add($('html')).animate({
      scrollTop: 0
    }, 500);

    $btnTop.removeClass('shown');
  });

  /* ie7 download */
 	var agt = navigator.userAgent.toLowerCase();
 	var trident = navigator.userAgent.match(/Trident\/(\d)/i);
	if (trident == null) {
		if (agt.indexOf("msie") != -1) {
			window.location.href("./oldbrowser.html");
		}
	}

	/* ajax hash for content section */
	var currentHash = null; // hashchange 이벤트에 중복으로 ajax 요청하는것을 막기 위해 비교값 선언
	$('body').on('click', 'nav a, .navigation', function() {
		var $this = $(this);
		var url = $this.attr('href');
		var menuName = url.replace('views/', '').replace('.html', '');

		// menu selected
		$('nav .selected').removeClass('selected');
		$('nav a[href*="' + menuName + '"]').addClass('selected'); // for slide link selection
		$('.nav-overlay.open').removeClass('open');
		$('.button_container').removeClass('active');

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

		if (!currentHash || currentHash != hash) {
			$('#nav-' + hash).click();
		}
	});

	function init() {
		var hash = location.hash;
		if (hash) {
			hash = hash.split('#')[1];
			$('#nav-' + hash).click();
		} else {
			$('#nav-home').click();
		}
	}
	init();
});
