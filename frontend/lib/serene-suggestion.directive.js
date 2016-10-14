var templateUrl = require('./serene-suggestion.html');
require('./serene-images.service.js');

angular.module('serenityNow')
    .controller('SuggestionController', ['$scope', 'SereneImagesService',
        function ($scope, SereneImagesService) {
            this.suggestion = {
                personName: "George",
                day: "Mondays",
                motivationalImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif"
            };

            var init = function(controllerScope) {
                console.log("Feel serene...");
                SereneImagesService.fetchImage().then(function (promise) {
                    console.log("SuggestionController initializer");
                    controllerScope.suggestion.motivationalImageUrl = promise["imageUrl"];
                })
            };

            init(this);
        }])
    .directive('snSuggestion', function () {
        return {
            templateUrl: templateUrl
        }
    });