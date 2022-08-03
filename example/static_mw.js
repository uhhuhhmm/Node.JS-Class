const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// STATIC 미들웨어
app.use(express.static(__dirname + "/public"));

app.use(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end('<img src = "/banana.jpg" width="100%" />');
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
