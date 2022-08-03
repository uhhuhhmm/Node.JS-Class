var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Context-type": "text/html",
      "Set-Cookie": ["breakfast = banana", "dinner = ramen"],
    });
    res.end("<h1>" + req.headers.cookie + "</h1>");
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
