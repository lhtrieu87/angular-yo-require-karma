requirejs({
	"baseUrl": "/base/app/scripts",
	"paths": {
		"config": "config",
		"angular": "../bower_components/angular/angular",
		"angularMocks": "../bower_components/angular-mocks/angular-mocks",
		"angularResource": "../bower_components/angular-resource/angular-resource",
		"jquery": "../bower_components/jquery/jquery",
		"domReady": "../bower_components/requirejs-domready/domReady",
		"unitTests": "../../test/spec",
		"mocks": "../../test/mocks"
	},
	"shim": {
		"jQuery": {
			"exports": "jquery"
		},
		"angular": {
			"deps": ["jquery"],
			"exports": "angular"
		},
		"angularResource": {
			deps: ["angular"]
		},
		"angularMocks": {
			deps: ["angularResource"]
		}
	},
	priority: ["angular"]
}, ["domReady", "unitTests/directives/focusSpec", "unitTests/controllers/mainControllerSpec", "unitTests/services/galleryServiceSpec"

], function(domReady) {
	domReady(function() {
		window.__karma__.start();
	})
});

//karma start karma.conf.js
