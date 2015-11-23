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
		
	
	// mobile nav
	$('#toggle').click(function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	});
	
	// // top nav 
	// // Create a clone of the menu, right next to original.
// $('.topnav').addClass('sticky').clone().insertAfter('.topnav').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('sticky').hide();
// 
// scrollIntervalID = setInterval(stickIt, 10);
// 
// 
// function stickIt() {
// 
  // var orgElementPos = $('.sticky').offset();
  // orgElementTop = orgElementPos.top;               
// 
  // if ($(window).scrollTop() >= (orgElementTop)) {
    // // scrolled past the original position; now only show the cloned, sticky element.
// 
    // // Cloned element should always have same left position and width as original element.     
    // orgElement = $('.sticky');
    // coordsOrgElement = orgElement.offset();
    // leftOrgElement = coordsOrgElement.left;  
    // widthOrgElement = orgElement.css('width');
    // $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    // $('.sticky').css('visibility','hidden');
  // } else {
    // // not scrolled past the menu; only show the original menu.
    // $('.cloned').hide();
    // $('.sticky').css('visibility','visible');
  // }
// }
	
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