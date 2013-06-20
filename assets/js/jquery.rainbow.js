/**
 * @author David Van Gompel
 */
(function($) {

	$.extend({

		rainbow: new function() {

			var colorpickers = {};

			this.defaults = {
				step : 8, // number of times a letter changes color
	            fps  : 25, // frames per second
	            pool : ['#95cb66', '#cfce67', '#d29568','#d06767', '#8275b4', '#679dcf'], // the color pool to choose from
	            colorpicker : "default", // the id of the colorpicker function ( 'default' or 'random' )
	            animation : "scroll"
			};

			this.construct = function ( settings ) {
				return this.each(function () {
					// Declare variables
					var config, el, str, letters;
					// Blank config object
					this.config = {};
					// Load settings
					config = $.extend(this.config, $.rainbow.defaults, settings);

					el = $(this);

					str = el.text().split('');
					letters = []; // holds the positions of non-space characters

					for (var i=0; i<str.length; i++) {

					    var ch = str[i];

					    if (ch == " ") {
					        continue;
					    }

					    letters.push(i);
					}

					el.html(" ");


					(function shuffle(start) {

					    var i,
					        len = letters.length,
					        strCopy = str.slice(0);

					        if (start>len) {
					            return;
					        }

					        for (i=Math.max(start,0); i < len; i++){
					            if( i < start+config.step){
					                strCopy[letters[i]] = "<span style='color:" + colorpickers[config.colorpicker].func(config.pool,i) + "'>" + strCopy[letters[i]] + "</span>" ;
					            }
					            else if( config.animation == 'scroll' ) {
					                strCopy[letters[i]] = "";
					            }
					        }

					        el.html(strCopy.join(""));

					        setTimeout(function(){

					            shuffle(start+1);

					        },1000/config.fps);

					})(-config.step);

				})
			};

			this.AddColorpicker = function(colorpicker) {
				colorpickers[colorpicker.id] = colorpicker;
			}

		}

	})

	// extend plugin scope
    $.fn.extend({
    	rainbow: $.rainbow.construct
    });

    // make shortcut
    var rb = $.rainbow;

    rb.AddColorpicker({
    	id: "default",
    	func: function(pool,index) {
    		return pool[index%pool.length];
    	}
    });

    rb.AddColorpicker({
    	id: "random",
    	func: function(pool,index) {
    		return pool[Math.floor(Math.random()*pool.length)];
    	}
    });



})(jQuery);