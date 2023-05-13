"use strict";

 $(window).on('load', function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow", function() {
		AOS.init({
			easing: 'ease-in-out-sine'
		});
});
	$("#preloader .clock").fadeOut();
});

window.addEventListener('load', function() {

	$("#popup-text-social").modal("show");
	
	//countdown-timer
	setTimeout(function () {
		$("#popup-text-social").modal("show");
	}, 3);
	//countdown-timer-end
	
	
	});