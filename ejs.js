var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

http
  .createServer(function (req, res) {
    fs.readFile("ejsPage.ejs", "utf-8", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(ejs.render(data, { name: "Minions", description: "Banana" }));
    });
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
