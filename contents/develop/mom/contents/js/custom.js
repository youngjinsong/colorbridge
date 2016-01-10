/*!------------------------------------------------------------ *
 * momtalk.js
 * First Updated: 2015.04.27
 * Last Updated: 2016.01.05
 * Author: youngjin song
 * ------------------------------------------------------------ */

$(document).ready(function() {
	var $body = $('body')
		, $this = $(this)
		, $btnTop = $('#top')
		, $careerContent = $('.career-content');
		
	/* menuToggle */
	$("#navtoggle").toggle(function() {
    $("header nav ul").addClass( "show" );
	  }, function() {
	    $("header nav ul").removeClass( "show" );
	  }
	);
	
	/* top */
  $btnTop.on('click', function() {
    $body.add($('html')).animate({
      scrollTop: 0
    }, 500);
    
    $btnTop.removeClass('shown');
  });
  
	/* acoodian team */
	$careerContent.css('display','none');
	$('.career-list:first').addClass("selected");
	
	$('.career-list').click(function() {
		if ($('.career-content', this).css('display') == 'none') {
			$careerContent.slideUp();
			$('.career-content', this).slideDown();
		} else if ($('.career-content', this).css('display') == 'block') {
			$('.career-content', this).slideUp();
		}
  });
  
  /* ie7 download */
 	var agt = navigator.userAgent.toLowerCase();
 	var trident = navigator.userAgent.match(/Trident\/(\d)/i);
	if (trident == null) {
		if (agt.indexOf("msie") != -1) {
			window.location.href("./old-browser.html");
		}
	}
	
});