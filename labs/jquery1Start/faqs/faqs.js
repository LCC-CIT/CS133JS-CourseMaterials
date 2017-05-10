$(document).ready(function() {
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().show();
		    // $(this).next("div").addClass("open");
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().hide();
	        // $(this).next("div").removeClass("open");
	    }
    ); // end toggle
}); // end ready
