require([
	"pumpkin",
	//modules
	"modules/stage"
],function(
	Pumpkin,
	Stage
){

	var App = Pumpkin.App.extend({
		modules: {
			stage: Stage
		},
		topics: {
			"api.debug" : "debug",
			
			"module.start":"startModule",
            "*.*":"debug"
            /*"api.validUser":"setUser",*/
            
		},
		start: function(options){
			this.sandbox.root = $(options.root);
			this.default_module = options.default_module || "stage";

			for(var m in this.modules){
				this.sandbox.module_channel.publish('init',{module:m})
			}

		},
		startModule: function(data){

			if (data && data.module === 'default') {
				data.module = this.default_module;
			};


			this.sandbox.module_channel.publish('start',data);
		},
		debug: function(data, incoming){
			var data = data || ' |  no data';
			console.log(incoming.topic,data);
		}
	});

	var app = new App();

	app.start({
		root:"#app"
	});

	window.app = app;

});