angular.module('serenityNow').controller('landingCtrl', function($scope) {
  var title = "When xyour blood pressure gets too high say: 'Serenity now!'";

  $scope.title = title;
  $scope.getTitle = function() {
    return title;
  };
});