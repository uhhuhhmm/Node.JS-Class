var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
      fs.readFile("index.html", function (error, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (pathname == "/otherPage") {
      fs.readFile("otherPage.html", function (error, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
