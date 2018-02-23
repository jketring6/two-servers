var http = require("http");

var PORTone = 7000;

var PORTtwo = 7500;

function goodRequest(request, response) {
	// console.log(Object.keys(request));
	// console.log("URL: " + request.url)
	// console.log(("Method: " + request.method))
	
	response.end("You have a beautiful soul!");
}


function badRequest(request, response) {
	
	response.end("Your breathe stinks!");
}

var serverOne = http.createServer(goodRequest);

var serverTwo = http.createServer(badRequest);

serverOne.listen(PORTone, function() {

	console.log("Server listening on: http://localhost:" + PORTone);
});

serverTwo.listen(PORTtwo, function() {

	console.log("Server listening on: http://localhost:" + PORTtwo);
})