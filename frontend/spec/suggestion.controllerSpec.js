describe('SuggestionController', function () {
    var $scope, controller;
    beforeEach(module('serenityNow'));
    var imageDeferred;

    beforeEach(inject(function ($rootScope, $controller, $q, SereneImagesService) {
        $scope = $rootScope.$new();
        imageDeferred = $q.defer();
        spyOn(SereneImagesService, 'fetchImage').and.returnValue(imageDeferred.promise);
        controller = $controller('SuggestionController', {
            $scope: $scope,
            SereneImagesService: SereneImagesService,
            User: 'irrelevant'
        });
    }));

    it('should have an initial loading spinner image url', function () {
        expect(controller.suggestion.motivationalImageUrl).toBeDefined();
    });

    describe('when user name changes', function () {
        it('should fetch a new image', function () {
            var expectedImageUrl = 'http://www.example.com/image.gif';

            $scope.sc = {suggestion: {user: {name: 'Kramer'}}};
            imageDeferred.resolve({ imageUrl: expectedImageUrl });
            $scope.$digest();

            expect($scope.sc.suggestion.motivationalImageUrl).toEqual(expectedImageUrl);
        });
    });
});