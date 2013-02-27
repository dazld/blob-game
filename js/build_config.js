({
	deps: ['main'],
	appDir: "../",
	name: 'main',
	
    baseUrl: "js",

    dir: "../../game-build",
    //findNestedDependencies: true,
	uglify: true,
	paths: {
        "jquery":"vendor/jquery",
		"underscore":"vendor/underscore-min",
        "backbone":"vendor/backbone-min",
        "handlebars": "vendor/handlebars.min",
       
        "postal":"vendor/postal-0.8.2",
       
        "text":"vendor/text"
       
		
	},
	 shim: {
	 	
       
        "underscore": {
            exports: "_"
        },
         "backbone":{
            deps: ["underscore","jquery"],
            exports:"Backbone"
        },
        
        
       
        "pumpkin": {
            deps:["handlebars","backbone","postal"],
            exports:"Pumpkin"
        }
        
    }
})