angular.module('serenityNow')
    .service('SereneImagesService', function ($http, $q) {

        var giphySerenityNowRandomImageUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=seinfeld+serenity+now";

        this.fetchImage = function (personName) {
            var deferred = $q.defer();

            var url = giphySerenityNowRandomImageUrl;
            if (personName != '') {
                url += "+" + personName
            }

            $http({
                url: url,
                method: "GET"
            }).then(function successCallback(response) {
                    deferred.resolve({ status: 'success', imageUrl: response.data["data"]["image_url"] });
                }, function errorCallback(response) {
                    deferred.reject({ status: 'fail', errorMessage: "Something went wrong..." });
                }
            );
            return deferred.promise;
        };
    });