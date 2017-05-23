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

	// mouseover text descriptions for projects
	$('.text').hide().removeClass('text').addClass('text-js');
	$('.thumb').hover(function(){
    	$(this).find('.text-js').fadeToggle();
	});
})(jQuery);