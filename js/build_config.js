({
	deps: ['main'],
	appDir: "../",
	name: 'main',
	
    baseUrl: "js",

    dir: "../../triplettt-build",
    //findNestedDependencies: true,
	uglify: true,
	paths: {
        "jquery":"vendor/jquery",
		"underscore":"vendor/underscore-min",
        "backbone":"vendor/backbone-min",
        "handlebars": "vendor/handlebars.min",
        "chosen":"vendor/chosen.jquery.min",
        "postal":"vendor/postal-0.8.2",
        "moment": "vendor/moment.min",
        "text":"vendor/text",
        "soundcloud":'//connect.soundcloud.com/sdk',
        "sc":"lib/sc"
		
	},
	 shim: {
	 	
        "chosen":['jquery'],
        "underscore": {
            exports: "_"
        },
         "backbone":{
            deps: ["underscore","jquery"],
            exports:"Backbone"
        },
        
        
        /*"soundcloud":{
            exports: "SC"
        },*/
        "sc":{
            deps:["soundcloud"],
            exports:"SC"
        },
        "pumpkin": {
            deps:["handlebars","sc","postal"],
            exports:"Pumpkin"
        }
        
    }
})