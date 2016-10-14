angular.module('serenityNow')
    .service('SereneImagesService', function ($http, $q) {

        var deferred = $q.defer();
        var giphySerenityNowRandomImageUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=seinfeld+serenity+now";

        this.fetchImage = function () {
            $http({
                url: giphySerenityNowRandomImageUrl,
                method: "GET"
            }).then(function successCallback(response) {
                console.log("Success");
                    deferred.resolve({ status: 'success', imageUrl: response.data["data"]["image_url"] });
                }, function errorCallback(response) {
                    deferred.reject({ status: 'fail', errorMessage: "Something went wrong..." });
                }
            );
            return deferred.promise;
        };
    });