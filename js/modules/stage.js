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

		},
		events: {
			"click":"doStuff"

		},
		init: function(){
			var that = this,
				$w = $(window);
			var holder = document.createElement(this.el);

			var ctx = holder.getContext('2d');
			this.sandbox.ctx = ctx;
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

			this.$el.width(viewPortWidth)
					.height(viewPortHeight);
		},66),
		start: function(){
			this.active = true;
		},
		render: function(){

		},
		stop: function(){
			this.active = false;	
		},
		doStuff: function(e){
			console.log(this,e);
		}
	});

	return Module;

});