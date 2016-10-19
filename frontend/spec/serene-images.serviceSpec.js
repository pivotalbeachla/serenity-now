describe('SereneImagesService', function () {
    var $httpBackend, gifRequestHandler;
    var subject;

    beforeEach(module('serenityNow'));

    var baseUrlRegEx = /http:\/\/api.giphy.com\/v1\/gifs\/random\?api_key=dc6zaTOxFJmzC&tag=seinfeld\+serenity\+now/;
    var baseUrl = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=seinfeld+serenity+now";
    var gifUrl = "http://example.com/12345.gif";


    beforeEach(inject(function ($injector, _$httpBackend_, SereneImagesService) {
        $httpBackend = _$httpBackend_;
        gifRequestHandler = $httpBackend.when('GET', baseUrlRegEx).respond({data: {image_url: gifUrl}});

        $rootScope = $injector.get('$rootScope');
        subject = SereneImagesService;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe(".fetchImage", function () {
        describe('without a user', function () {
            it('should GET a gif without user filter', function () {
                $httpBackend.expectGET(baseUrl);
                subject.fetchImage('');
                $httpBackend.flush();
            });
        });

        describe('with a user', function () {
            it('should GET a gif with user filter', function () {
                $httpBackend.expectGET(baseUrl + "+George");
                subject.fetchImage('George');
                $httpBackend.flush();
            });
        });

        it('should return a promise with an image url', function () {
            subject.fetchImage('irrelevant-to-this-test').then(function (promise) {
                expect(promise['imageUrl']).toBe(gifUrl);
            });
            $httpBackend.flush();
        });
    });
});