var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.method == "GET") {
      fs.readFile("HTMLPage2.html", function (error, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.method == "POST") {
      req.on("data", function (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>" + data + "</h1>");
      });
    }
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
