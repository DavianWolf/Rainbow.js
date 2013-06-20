Rainbow.js
==========

A text effect jquery plugin (tested with jQuery 1.6.3)

## Usage

```html
<p id="#container">This an awesome rainbow text</p>

<script src="jquery.js"></script>
<script src="jquery.rainbow.js"></script>
<script>
    $("#container").rainbow();
</script>
```


## Examples

- [Default settings](http://rainbow.truecolor.be)
- [Random colors](http://rainbow.truecolor.be/#example1)
- [Transition colors](http://rainbow.truecolor.be/#example2)
- [Fixed text](http://rainbow.truecolor.be/#example3)


## Website using rainbow

- [TrueColor Homepage](http://www.truecolor.be)


## Documentation


### Options


#### step
- Type: 'integer'
- Default: '8'
- descriptions: number of times a letter changes color
- example: ```step:8```

#### fps
- Type: 'integer'
- Default: '25'
- descriptions: frames per second
- example: ```fps:25```

#### pool
- Type: 'array'
- Default: ['#95cb66', '#cfce67', '#d29568','#d06767', '#8275b4', '#679dcf']
- descriptions: the color pool to choose from
- example: ```pool:[red,blue,yellow]```

#### colorpicker
- Type: 'string'
- Default: 'default'
- descriptions: the id of the colorpicker function ( 'default' or 'random' )
- example: ```colorpicker:'default'```

#### animation
- Type: 'string'
- Default: 'scroll'
- descriptions: animation for the text ( 'scroll' or 'fixed' )
- example: ```animation:'scroll'```


### Custom colorpicker

You can create custom colorpicker functions, e.g.:

```html
<script>
	$.rainbow.AddColorpicker({
    	id: 'fluid',
    	func: function(pool,index) { return 'rgb(200,0,'+Math.min(index*12,255)+')'; }
    });

    $("#container").rainbow({
    	colorpicker : 'fluid'
    });
</script>
```
