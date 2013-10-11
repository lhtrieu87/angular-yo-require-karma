define(["app", "config"], function(app, config) {
	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/partials/home.html"
		}).otherwise({
			redirectTo: '/'
		})
	}])
});
