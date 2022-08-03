var http = require("http");
var fs = require("fs");
var jade = require("jade");

http
  .createServer(function (req, res) {
    fs.readFile("jadePage.jade", "utf-8", function (error, data) {
      var fn = jade.compile(data); // compile html 변환하는 기능

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        fn({
          name: "Minion",
          description: "Banana",
        })
      );
    });
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
