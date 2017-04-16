$(function(){
	$('.pop-up').on('click', function(e){
		e.preventDefault();
		e.stopPropagation(); 
		//console.log('e', e);
	});	
	
	// modal - 컨벤션 이용
	var $dialogWrap = $('.dialog-wrap')
    , $dialog;
  
  $.fn.dialog = $.dialog = function() {
   $(this).click(function() {
    	var exceptionState = exception()
    		, youTubAddr = $(this).attr('data-youtubeSrc')
    		, popupBox = $(this);
    	//console.log(youTubAddr);
			if ( exceptionState === 'mobile') { 
				if ($(this).find('img').hasClass('mvideo')) { // m video 있는 지 검사
					var motherArticle = $(this).parent().parent().parent()
					  , iframe = $('<iframe src='+ youTubAddr +'/>');
					  
					if (motherArticle.hasClass('selected')) {// 선택된 상태,  
						motherArticle.removeClass('selected'); // 선택한 애를 지우자 클릭한 애의 부모
						motherArticle.next().empty(); //추가시킨 div
						motherArticle.next().hide();
					} else {
						$('article.main-content').removeClass('selected'); // 선택한 전부
						motherArticle.addClass('selected');
						$('div.frameWrapper').empty(); // 추가시킨 div
						$('div.frameWrapper').hide(); 
						motherArticle.next().append(iframe);
						motherArticle.next().slideDown(300);
					}					
					
				} else {
					//$(this).find('iframe').remove(); 
					var iframe = $('<iframe src='+ youTubAddr +'/>');
					$(this).find('img').hide().next(); //.addClass('txtMobe-loaction-change')
					$(this).prepend(iframe);
					$(this).unbind('click');
				}
								
				/*
				$.get($(this).attr('data-href'), function(res) {
	        (!$dialogWrap.length) && $.dialog.create();
	        $dialogWrap.show().find('.dialog-content').html(res);
	        $dialogWrap.find('.dialog-content iframe').attr('src', youTubAddr);
	      });
	      */ 
				return false;
				
			} else { //pc, tablet 일때
		  		$.get($(this).attr('data-href'), function(res) { //res = exam.html
	        (!$dialogWrap.length) && $.dialog.create(); // 없으면 만들어라
	         
	        $dialogWrap.show().find('.dialog-content').html(res);
	        $dialogWrap.find('.dialog-content iframe').attr('src', youTubAddr);
	       	$.dialog.center();
	      }); 
	      return false;
			}	
    });
  }
   
  $.dialog.create = function() {
    $dialogWrap = $([
      '<div class="dialog-wrap">',
        '<div class="dialog-overlay"></div>',
        '<div class="dialog">',
          '<button type="button" class="dialog-close close">×</button>',
          '<div class="dialog-content"></div>',
        '</div>',
      '</div>'
    ].join('\n')).appendTo('body');
  }
 
  $.dialog.center = function() {
    $dialog = $dialogWrap.find('.dialog');
    $dialog.css({
      left: ($(window).width()- $dialog.width()) / 2
    });
  }
 
  $.dialog.close = function() {
    $dialogWrap.find('.dialog-content').empty();
    ($.browser.msie) ? $dialogWrap.hide() : $dialogWrap.fadeOut(100);
  }
 
  $('.dialog-wrap .close').on('click', function() {
    $.dialog.close();
  });
 
  $(window).resize(function() { 
    if($dialogWrap.css('display') == 'block') {
      $.dialog.center();
    }
  });
   
  // ESC keydown dialog Close 
  $(document).keydown(function(e) {
    if($dialogWrap.css('display') == 'block') {
      (e.keyCode == 27) && $.dialog.close();
    }
  });
  
  $('#gnb li a').on('click', function() {
  	$(this).css('background' , '#fff');
  });
     
  // USE dialog
  $('.pop-up').dialog();

	// [모든 페이지 a 링크 기본 속성  동작 안하게 ]
	$('.no-action').on('click', function(){
		return false;
	});
    
  // [idx] phone moving
	$('.move-phone').addClass('addMove');		
		
	// [blog] mobile nav 
	$('#categori p').on('click', function(){
		$('#categori').addClass('cateSelected');
		$('#cate-nav').slideToggle();
		$('#categori p').toggleClass('active');
	});				
		
	/* blog json */
	$.ajaxSetup ({ 
		error: function(xhr, textStatus, errorThrown) {
			//console.log('error : ' + textStatus);
		}
	});
	
	function request() {  
		var requestURL = 'js/board.json';
			$.getJSON(requestURL, function(data) {
				getData(data);
			});		
	}
	
	function getData(data) {		
		var listBoard	= data.listBoard
			, list 			= listBoard.list
			, str 			= '';
			
		$('#main-content').empty();
		/*
		$.each(list, function(i,list) {			
			$('#main-content').append([
				'<h3>' + list.title +  '</h3>' +
					'<ul id="' + list.listId + '">' +
						'<li><a href="' + list.item[i].link + '">' + list.item[i].boardList + '</a></li>' +
						'<li><a href="' + list.item[i].link + '">' + list.item[i].boardList + '</a></li>' +
						'<li><a href="' + list.item[i].link + '">' + list.item[i].boardList + '</a></li>' +
						'<li><a href="' + list.item[i].link + '">' + list.item[i].boardList + '</a></li>' +
						'<li><a href="' + list.item[i].link + '">' + list.item[i].boardList + '</a></li>' +
					'</ul>'
			].join('\n'));			
		});
		*/
		for ( var i = 0; i < list.length; i++) {
			str += '<h3>' + list[i].title + '</h3>' + '<ul id="' + list[i].listId + '">';
			for ( var j = 0; j < list[i].item.length; j++) {
				str += '<li><a href="' + list[i].item[j].link + '">' + list[i].item[j].boardList + '</a></li>';
			}
			str += '</ul>';
		} 
			$('#main-content').html(str);
	} 
	
	if (window.location.pathname.match(/blog.html/g)) {
		request();		
	}
	
	/* 예외 처리 (blog 페이지, 다운로드 페이지 )*/
	$('.btn-download ,#btn-apk-down a').on('click', function(){
		var exceptionState = exception();

		if ( exceptionState === 'mobile' || exceptionState === 'tablet') {
			alert('태블릿, 모바일은 사용할 수 없습니다.\npc화면을 이용해 주세요 ');
			return false;
		}
	});		
	
	function faqAll(){
		var faqWrap     = $('#faq-wrap')
			, faqWrapHeight
			, faqHeight   = faqWrap.outerHeight()
			, quickHeight = $('#faq-quick').outerHeight()
			, quickOffset = $('#faq-quick').offset();	
			
		function faqAco () {
			$('#question dd').addClass('hide');
				$(document).on('click', 'dl#question dt', function(e) {
					var $dt  = $(this)
						, dtId = $dt.attr('id');	
									
					if ($dt.hasClass('selected')) { // dt 선택된 상태, 다른 dt 클릭 
						$dt.removeClass('selected');
						$dt.next().hide(); 
						$('html, body').animate({ scrollTop: faqWrap.offset().top - 10 }, 500);
					} else { 
						$('#question dt').removeClass('selected'); // dt 선택안 된 상태,   
						$dt.addClass('selected');
						$dt.next().slideDown(500).siblings('#question dd').hide();
						setTimeout (function(){
							window.location.hash = '#' + dtId;	
						}, 200);
						//console.log( $dt.offset().top );							
						return false;
					}												 
				});
		}	
		faqAco(); 
		
		// [faq] text-quick menu effect
		if (window.location.pathname.match(/faq.html/g)) {
			
				$("img.lazy").lazyload();
				$("img.lazy").show().lazyload();
				$("img.lazy").lazyload({ threshold : 0 });
				
				$("img.lazy").lazyload({ 
			    event : "click"
				});	
				
				$("img.lazy").lazyload({ 
				    effect : "fadeIn"
				});
				
				$("img.lazy").lazyload({ 
				    failure_limit : 10
				});
				
				$("img:below-the-fold").lazyload({
		        event : "sporty"
		    });
			
				$(window).bind("load", function() { 
				    var timeout = setTimeout(function() {$("img.lazy").trigger("sporty")}, 5000);
				}); 
				
				$("img.lazy").lazyload({ 
				    skip_invisible : false
				});
			
			var exceptionState = exception();		
			
			if ( exceptionState === 'mobile' || exceptionState === 'tablet') { // 걸렸다면 = 모바일
				//alert('모바일이네요');
				return false; 
			} else { // pc
				$(window).scroll(function(){
					faqMove();
				});
			}
		}
		
		function faqMove() {
			if ($(window).scrollTop() > quickOffset.top) { // 스크롤이 faq영역에 들어온 순간 이벤트  탐
				if ($(window).scrollTop() - quickOffset.top + quickHeight < faqWrap.outerHeight()) { // 브라우저의 스크롤탑 - 퀵오프셋탑 + 퀵의 높이가 패크랩의 높이보다 작을때
					$('#faq-quick').css({ 'margin-top' : $(window).scrollTop() - quickOffset.top }); // 촤 상단에  있는 상태. 항상 top 0 포지션을 유지하며 이동한다.
				} else {
					return false;
				}
			} else { 
				$('#faq-quick').css({	'margin-top' : 0 }); 
			}
		}
	}
	faqAll();						
				
	function exception() {
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPod|iPad/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

 	if ( isMobile.any()) { 
 		//alert(navigator.userAgent);
		if (navigator.userAgent.match(/Mobile/i)) {  // 모바일인지 검사
			if (navigator.userAgent.match(/iPad/i)) { // 타블릿인지 검사
				//alert('타블렛1'); 
				return 'tablet'; 
			} else {
				//alert('모바일1'); 
				return 'mobile'; 
			}		
		} else {
			//alert('타블렛2'); 
			return 'tablet';
		}		
	} else {
		//alert(navigator.userAgent); 
	  return 'pc'; 
	} 						
}			
		
				
				
});