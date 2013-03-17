define([
	"backbone",
	"postal"
],function(Backbone,postal){

	var R = Backbone.Router.extend({
		channel: postal.channel('app'),
		routes: {
			"":"index"

			
			
		},
		index: function(){
			this.channel.publish('module.start',{
				module:'default'
			});
		}
		

	});

	return R;
});