jQuery(document).ready(function($) {
	var $header 		= $("header#branding"); // what we want to show/hide
	var headerHeight 	= $header.height()*2;
	var scrollDir 		= "down"; // we'll switch our scroll direction to show/hide header
	var $firstMod 		= $('#work'); // where this first module is depends on if we want our header to show or hide

	$(window).bind('scroll', function(e) {
		var windowTop 		= $(window).scrollTop();

		if ( windowTop > $firstMod.offset().top-headerHeight && scrollDir == 'down' ) {
			scrollDir = 'up';
			$header.stop().animate({top: 0}, 300);
		} if ( windowTop < $firstMod.offset().top-headerHeight && scrollDir == 'up' ) {
			scrollDir = 'down';
			$header.stop().animate({top: -100}, 300);
		}

	});
});