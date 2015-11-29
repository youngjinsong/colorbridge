/**
 * @author youngjin song
 * ColorBridge.js
 * Last Updated: 2015.11.27
 */
$(document).ready(function() {
	var $body = $('body')
		, $developList = $('#develop-list')
		, $this = $(this)
		,	$btnTop = $('#top')
		, $overLay = $('.overlay')
		, $navIcon = $('#menutoggle')
		, $mobileNav = $('#topnav ul');

	// sticky header 
	$(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if (winTop >= 30){
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });

	// mobile nav
	$('#toggle').click(function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});
	
	// mobile toggle
	$navIcon.toggle(function() {
		$navIcon.addClass('hamburger');
    $mobileNav.addClass( 'show' );
    $overLay.css('display','block');
    $body.addClass('overlay');
	}, function() {
			$navIcon.removeClass('hamburger');
	    $mobileNav.removeClass( 'show' );
	    $overLay.css('display', 'none');
	    $body.removeClass('overlay');
	  }
	);
	$overLay.on('click', function() {
		$navIcon.removeClass('hamburger');
		$mobileNav.removeClass( 'show' );
		$overLay.css('display','none');
		$body.removeClass( 'overlay' );
	});
	
	$('.commingSoon').on('click', function(event) {
		alert('오픈 준비중 입니다.');
		event.preventDefault();
	});
	
	/* footer */
	// $('#ft-icon-info').on('click', function() {
		// $('#ft-icon-info').css('display', 'none');
		// $('#ft-iconlist').css('display', 'block');
	// });
	
  // $(window).resize(function() {
  	// if ($developList.height() > $(window).height()) {
		  // $developList.css({
		    // //marginTop: ($(window).height() - $('#develop-list').height()) / 2
		  // });
  	// }
  // });
  
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
  
  /* ie version check after redirect */
	if (document.all && document.documentMode && 8 === document.documentMode) {
    alert('익스플로러를 최신 버전으로 업데이트 해주세요');
    window.location.href("./oldbrowser.html");
	}
});