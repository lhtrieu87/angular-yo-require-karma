define(function() {
	function MainController($scope, galleryService) {
		$scope.uploadErrors = [];
		$scope.asyncMessage = [];
		$scope.progressWidth = {
			width: "100%"
		};
		$scope.queueFileCount = 0;
		$scope.galleryService = galleryService;
	}

	MainController.$inject = ['$scope', 'galleryService'];
	return MainController;
});
