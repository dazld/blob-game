require.config({
    deps: ["main"],
    urlArgs: "bust=v0",
    paths: {
        "underscore":"vendor/underscore-min",
        "backbone":"vendor/backbone-min",
        "handlebars": "vendor/handlebars.min",
        "postal":"vendor/postal-0.8.2",
        "text":"vendor/text",
        "pumpkin":"vendor/pumpkin",
        "pixi":"vendor/pixi"
        
    },
    map: {
        
    },
    shim: {
        
        "pixi":{
            deps: [],
            exports:"PIXI"
        },
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
    
});
