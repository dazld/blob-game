define([
	"pumpkin",
	"pixi",
	"lib/utils"
],function(
	Pumpkin,
	glmatrix,
	utils
){

	
	"use strict";

	var Module = Pumpkin.Module.extend({
		_name: "stage",
		el: 'canvas',
		$el: false,
		active: false,
		frame: false, // where to hold ref for RAF
		topics: {
			"window.resize":"render"
			
		},
		events: {
			"mousedown":"doStuff"
			/*"mousemove":"render"*/

		},
		init: function(){
			var that = this,
				$w = $(window);
			
			this.sandbox.stage = new PIXI.Stage();
			this.sandbox.renderer = PIXI.autoDetectRenderer();

			this.el = this.sandbox.renderer.view;

			// bind window resize events 
			$w.on('resize orientationchange',function(e){
				that.updateDimensions(e);
			}).trigger('resize');

			this.$el = $(this.el);
			this.$el.addClass('stage');
			this.bindEvents();
			this.sandbox.root.append(this.$el);

		},
		updateDimensions: _.debounce(function(e){
			if (this.frame) {
				cancelAnimationFrame(this.frame);	
			};
			
			var viewPortWidth = window.innerWidth,
   				viewPortHeight = window.innerHeight;

   			var dims = {};

   			dims.w = viewPortWidth;
   			dims.h = viewPortHeight;

   			if (this.sandbox.dims) {
   				
   				var olddims = this.sandbox.dims;

   				if (olddims.w === dims.w && olddims.h === dims.h) {
   					return;
   				};
   			};

   			this.sandbox.dims = dims;
   			this.sandbox.renderer.resize(dims.w,dims.h);

   			this.el.width = dims.w;
   			this.el.height = dims.h;

			this.$el.attr('width',viewPortWidth)
					.attr('height',viewPortHeight)
					.width(viewPortWidth)
					.height(viewPortHeight);

			this.channel.publish('window.resize',{width: viewPortWidth,height: viewPortHeight});
			
		},120),
		start: function(){
			this.active = true;
		},
		render: function(e){

			this.sandbox.stats.update();
			this.sandbox.renderer.render(this.sandbox.stage);
			this.channel.publish('game.render');
			this.frame = requestAnimFrame($.proxy(this.render,this));
		},
		stop: function(){
			this.active = false;	
		},
		doStuff: function(e){
			var x = e.offsetX,
				y = e.offsetY;

			this.channel.publish('game.clicked',{x:x,y:y});
			e.preventDefault();

		}
	});

	return Module;

});