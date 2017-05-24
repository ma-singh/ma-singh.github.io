/* ===== JAVASCRIPT/JQUERY FILE FOR PORTFOLIO PROJECT ===== */
(function($){
	console.log('page loaded');

	var project = $('#project-list a');

	// open projects in new tab
	project.on('click', function(e){
		e.preventDefault();
		console.log('clicked!');
		var url = $(this).attr('href');
    	window.open(url, '_blank');
	});
})(jQuery);
