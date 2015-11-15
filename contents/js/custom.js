/**
 * @author youngjin song
 * ColorBridge.js
 * Last Updated: 2015.9.28
 */
$(document).ready(function() {
	var $body = $('body')
		, $developList = $('#develop-list')
		, $this = $(this)
		,	$btnTop = $('#top')
		, $overLay = $('.overlay')
		, $navIcon = $('#menutoggle')
		, $mobileNav = $('#topnav ul');
	
	/* mobile toggle */
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
  
  /* ie7 download */
 	var agt = navigator.userAgent.toLowerCase();
 	var trident = navigator.userAgent.match(/Trident\/(\d)/i);
	if (trident == null) {
		if (agt.indexOf("msie") != -1) {
			window.location.href("./oldbrowser.html");
		}
	}
});