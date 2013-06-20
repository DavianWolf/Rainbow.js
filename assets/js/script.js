$(function(){

	// Get example from url
	var demo = window.location.hash ? window.location.hash.replace('#','') : 'default';


	// Rainbow default settings
	var settings = {
		step : 8, // number of times a letter changes color
	 	fps  : 25, // frames per second
	 	pool : ['#95cb66', '#cfce67', '#d29568','#d06767', '#8275b4', '#679dcf'], // the color pool to choose from
	 	colorpicker : 'default', // the id of the colorpicker function ( 'default' or 'random' )
	 	animation : 'scroll', // text effect: 'scroll' or 'fixed'
	};

	switch (demo) {
		case 'example1':
			settings.colorpicker = 'random';
			break;
		case 'example2':
			settings.colorpicker = 'fluid';
			break;
		case 'example3':
			settings.animation = 'fixed';
			break;
		default :
			break;
	}


	// Example colorpicker function
	$.rainbow.AddColorpicker({
    	id: 'fluid',
    	func: function(pool,index) { return 'rgb(200,0,'+Math.min(index*12,255)+')'; }
    });



	$("#container").rainbow(settings);


});

