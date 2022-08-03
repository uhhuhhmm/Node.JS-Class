var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    fs.readFile("HTMLPage.html", function (error, data) {
      response.writeHead(200, { "Context-type": "text/html" });
      response.end(data);
    });
  })
  .listen(63336, function () {
    console.log("[Running]Server at http://127.0.0.1:63336");
  });
