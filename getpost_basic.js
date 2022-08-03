var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    // if (req.method == "GET") {
    //   console.log("GET 요청입니다.");
    // } else if (req.method == "POST") {
    //   console.log("POST 요청입니다.");
    // }
    var query = url.parse(req.url, true).query;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>" + JSON.stringify(query) + "</h1>");
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
