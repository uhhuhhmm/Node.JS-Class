const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// GET방식으로 이동
app.get("/b", function (req, res) {
  res.send('<a href="/a">Go to A</a>');
});

// /index면 뜸
app.get("/index", function (req, res) {
  res.send("<h1>Index Page</h1>");
});

// /index가 아니면 뜸
app.all("*", function (req, res) {
  res.send("<h1>ERROR - Page Not Found</h1>");
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
