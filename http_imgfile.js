var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    fs.readFile("./img/banana.jpg", function (error, data) {
      response.writeHead(200, { "Content-Type": "image/jpeg" });
      response.end(data);
    });
  })
  .listen(63336, function () {
    console.log("[Running] Server at Http://127.0.0.1:63336");
  });

http
  .createServer(function (request, response) {
    fs.readFile("HTMLPage.html", function (error, data) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  })
  .listen(63339, function () {
    console.log("[Running] Server at Http://127.0.0.1:63339");
  });
