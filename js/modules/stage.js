define([
	"pumpkin"
],function(
	Pumpkin
){

	var Module = Pumpkin.Module.extend({
		_name: "stage",
		el: 'canvas',
		$el: false,
		active: false,
		topics: {
			"window.resize":"render"
			
		},
		events: {
			"click":"doStuff",
			"mousemove":"render"

		},
		init: function(){
			var that = this,
				$w = $(window);
			var holder = document.createElement(this.el);

			var ctx = holder.getContext('2d');
			this.sandbox.ctx = this.ctx = ctx;
			// bind window resize events 
			$(window).resize(function(e){
				that.updateDimensions(e);
			});

			this.$el = $(holder);

			this.$el.addClass('stage');

			this.bindEvents();

			this.sandbox.root.append(this.$el);

		},
		updateDimensions: _.debounce(function(e){
			var viewPortWidth = window.innerWidth,
   				viewPortHeight = window.innerHeight;

			this.$el.attr('width',viewPortWidth)
					.attr('height',viewPortHeight)
					.width(viewPortWidth)
					.height(viewPortHeight);

			this.channel.publish('window.resize',{width: viewPortWidth,height: viewPortHeight});

		},120),
		start: function(){
			this.active = true;
		},
		render: _.throttle(function(e){
			var ctx = this.ctx;
			if (!e) {
				return;
			};
			ctx.beginPath();
            ctx.moveTo(e.pageX,e.pageY);
            ctx.lineCap = "round";
            
            ctx.strokeStyle = "rgba(64,64,64,0.5)";
            ctx.lineWidth = 1;
            
            
            
            ctx.lineTo(10,10);
            
            ctx.stroke();
		},20),
		stop: function(){
			this.active = false;	
		},
		doStuff: function(e){
			//console.log(this,e);
		}
	});

	return Module;

});