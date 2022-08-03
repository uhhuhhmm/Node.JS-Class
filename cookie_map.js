var http = require("http");

http
  .createServer(function (req, res) {
    if (req.headers.cookie) {
      var cookie = req.headers.cookie.split(";").map(function (element) {
        var el = element.split("=");
        return {
          key: el[0],
          value: el[1],
        };
      });
      res.end("<h1>" + JSON.stringify(cookie) + "</h1>");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": ["last=M", "first=Minion"],
      });
      res.end("<h1>Cookie</h1>");
    }
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });
