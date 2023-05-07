"use strict";
window.addEventListener('load', function() {
	AOS.init({
		easing: 'ease-in-out-sine'
	});
});

window.addEventListener('load', function() {




//------------------------------------------------------------------------------------
//								COUNT UP SCRIPT
//------------------------------------------------------------------------------------

var benefits_5col_counter = $('#benefits-5col-counter').waypoint({
	handler: function(direction) {
		$(this.element).find('.count-up-data').each(function(i, el){
			var endVal = el && Number.isInteger(el.textContent * 1) ? el.textContent * 1 : 100 ;
			$(el ).countup({endVal: endVal, options: { separator : ''}});
		});
        benefits_5col_counter[0].disable();
	},
	offset: '90%'
});


});
