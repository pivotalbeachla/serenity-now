describe('landingCtrl', function() {
	beforeEach(module('serenityNow'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('$scope.title', function() {
		it('should really work now', function() {
			var $scope = {};
			var controller = $controller('landingCtrl', { $scope: $scope });
			expect($scope.getTitle()).toEqual("When your blood pressure gets too high say: 'Serenity now!'");
		});
	});
});
