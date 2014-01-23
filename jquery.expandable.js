/*!
 * jQuery Expandable Input Plugin v1.0
 * https://github.com/armmer1/expandable-input
 *
 * Copyright 2014, Nattawat Nonsung
 */


/**
* Use immediately Invoked Function Expression to
* - Prevent conflicting with other libary on alias $
* - Scode varaible to be private
*/
(function( $ ) {
  $.fn.expandable = function(options) {

		// Define default setting
		var settings = $.extend({
			width: 150,
			duration: 300
    }, options );

		var width = this.width();

		this.on("focus", function(){
			// $(this).css({width: settings.width});
			$(this).animate({
	      width: settings.width
	    }, settings.duration, function(){
	      // callback function
	    });
		});

		this.on("blur", function(){
			$(this).animate({
	      width: width
	    }, settings.duration, function(){
	      // callback function
	    });
		});

		if(settings.action && typeof(settings.action) == "function"){
			this.on('keypress', function(e) {
				if (e.which === 13) { // press enter
					settings.action($(this).val());
				}
			});
		}
		// Return jQuery so that it's chainable 
		return this;		
  };
 
}( jQuery ));