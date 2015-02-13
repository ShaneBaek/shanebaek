$(function() {

	$(".smiley-face").click(function(event) {
		$(".shane").toggleClass("smile-change-color");
		$(this).toggleClass("smile-change-face");
		event.preventDefault();
	});

	// $(window).resize(function(){
	// 	var bottom_wrap_height = $('.bottom-wrap').height();
	// 	$('.top-wrap').css({marginBottom: bottom_wrap_height });
	// });
});