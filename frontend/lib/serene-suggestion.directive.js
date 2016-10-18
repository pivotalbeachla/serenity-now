var templateUrl = require('./serene-suggestion.html');
require('./serene-images.service.js');

angular.module('serenityNow')
    .controller('SuggestionController', ['$scope', 'SereneImagesService', 'User',
        function ($scope, SereneImagesService, User) {
            this.suggestion = {
                user: User,
                date: new Date(),
                motivationalImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif"
            };

            this.personName = function () {
                return this.suggestion.user.name;
            };

            var init = function (controllerScope) {
                console.log("Feel serene...");
                var personName = controllerScope.personName();
                SereneImagesService.fetchImage(personName).then(function (promise) {
                    controllerScope.suggestion.motivationalImageUrl = promise["imageUrl"];
                })
            };

            init(this);

            $scope.$watch("sc.suggestion.user.name", function (newVal) {
                SereneImagesService.fetchImage(newVal).then(function (promise) {
                    $scope.sc.suggestion.motivationalImageUrl = promise["imageUrl"];
                })
            });

        }])
    .directive('snSuggestion', function () {
        return {
            templateUrl: templateUrl
        }
    });