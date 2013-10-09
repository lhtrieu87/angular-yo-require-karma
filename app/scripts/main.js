requirejs({
	"baseUrl": "scripts/",
	"paths": {
		"config": "config",
		"angular": "../bower_components/angular/angular",
		"ngResource": "../bower_components/angular-resource/angular-resource",
		"jquery": "../bower_components/jquery/jquery",
		"domReady": "../bower_components/requirejs-domready/domReady",
		"app": "app"
	},
	"shim": {
		"jquery": {
			"exports": "jquery"
		},
		"angular": {
			"deps": ["jquery"],
			"exports": "angular"
		},
		"ngResource": {
			"deps": ["angular"],
			exports: "ngResource"
		}
	},
	priority: ["angular"],
	urlArgs: "v=0.1"
}, ["angular", "domReady", "ngResource", 
	"jquery", "app", "config", "routes", 
	"services/services", "directives/directives", 
	"providers/providers", "filters/filters", 
	"controllers/controllers", "animations/animations"], function(angular, domReady) {
	domReady(function() {
		return angular.bootstrap(document, ["myApp"]);
	});
});
