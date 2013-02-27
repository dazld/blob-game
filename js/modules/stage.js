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
			var holder = document.createElement(this.el);

			this.$el = $(holder);

			this.$el.addClass('lala');

			this.bindEvents();

			this.sandbox.root.append(this.$el);

		},
		start: function(){

		},
		doStuff: function(e){
			console.log(this,e);
		}
	});

	return Module;

});