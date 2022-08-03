var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(302, { Location: "http://google.com" });
    res.end();
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
