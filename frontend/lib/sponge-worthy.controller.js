angular.module('serenityNow')
    .controller('SpongeWorthyController', ['$scope', 'User', function ($scope, User) {
            $scope.user = User;
        }]);