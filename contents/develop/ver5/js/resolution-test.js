function adjustStyle(width) {
    width = parseInt(width);
    if (width < 480) {
    	 $("#size-stylesheet").attr("href", "css/iphone.css");
    } else if ((width >= 480) && (width < 640)) {
        $("#size-stylesheet").attr("href", "css/galaxy.css");
    } else if ((width >= 640) && (width < 800)) {
        $("#size-stylesheet").attr("href", "css/narrow.css");
    } else {
       $("#size-stylesheet").attr("href", "css/wide.css"); 
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});