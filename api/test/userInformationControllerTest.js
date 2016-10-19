var request = require("request");

var assert = require('assert');
var base_url = "http://localhost:3000/api/user/1"

describe("Hello World Server", function () {
    describe("GET /api/user/1", function () {
        it("returns status code 200", function () {
            request.get(base_url, function (error, response, body) {
                assert.equal(response.statusCode, 200);
            });
        });

        it("returns Hello World", function (done) {
            request.get(base_url, function (error, response, body) {
                assert.equal(body, "Hello World");
            });
        });
    });
});