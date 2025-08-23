const expect = require('chai').expect;
const request = require("request");

describe("Cat App Tests", function () {
    const url = "http://localhost:3000/api/cats";

    // Test Case 1: This test will log the server's actual response.
    it("should connect to the server and log the response", function(done) {
        request(url, function (error, response, body) {
            // This section will print the server's response to terminal.
            console.log("\n\n--- DEBUG INFO ---");
            console.log("Error:", error);
            console.log("Status Code:", response ? response.statusCode : 'No Response Object');
            console.log("Body:", body);
            console.log("--------------------\n\n");

            // This is a simple check to ensure a connection was made.
            expect(error).to.be.null;
            done();
        });
    });

    // Test Case 2: Checks if the GET route is sending back an HTML page.
    it("returns content type text/html for GET route", function(done) {
        request(url, function (error, response, body) {
            expect(response.headers['content-type']).to.include('text/html');
            done();
        });
    });

    // Test Case 3: Checks if the POST route correctly returns a 404 Not Found error.
    it("returns status 404 for POST route", function(done) {
        request.post({ url: url, form: {} }, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

    // Test Case 4: Checks if a non-existent route also returns a 404 Not Found error.
    it("returns status 404 for a non-existent route", function(done) {
        request("http://localhost:3000/a-random-route", function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});