define(["app", "config"], function(app, config) {
	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "scripts/partials/home.html"
		}).otherwise({
			redirectTo: '/'
		})
	}])
});
