$(document).ready(function(){
						   $(".submenu").fadeTo("slow", 0.3); // This sets the opacity of the thumbs to fade down to 30% when the page loads
						   $(".submenu").hover(function(){
						   $(this).fadeTo("slow", 1.0); // This should set the opacity to 100% on hover
						   },function(){
						   $(this).fadeTo("slow", 0.3); // This should set the opacity back to 30% on mouseout
						   });
						   });

$(document).ready(function(){
						   $("footer").fadeTo("slow", 0.8); // This sets the opacity of the thumbs to fade down to 30% when the page loads
						   $("footer").hover(function(){
						   $(this).fadeTo("slow", 1.0); // This should set the opacity to 100% on hover
						   },function(){
						   $(this).fadeTo("slow", 0.5); // This should set the opacity back to 30% on mouseout
							   	});
						   });

$(document).ready(function(){
						   $(".fade").fadeTo("slow", 0.5); // This sets the opacity of the thumbs to fade down to 30% when the page loads
						   $(".fade").hover(function(){
						   $(this).fadeTo("slow", 1.0); // This should set the opacity to 100% on hover
						   },function(){
						   $(this).fadeTo("slow", 0.3); // This should set the opacity back to 30% on mouseout
							   	});
						   });