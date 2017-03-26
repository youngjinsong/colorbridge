
	//qmenu
	
        $(function() {
            var offset = $("#qmenu").offset();
            var topPadding = 15;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#qmenu").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#qmenu").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });
