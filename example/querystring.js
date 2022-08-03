const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// 쿼리스트링
var express = require("express");

var app = express();

app.use(function (req, res, next) {
  let name = req.query.name;
  let region = req.query.region;

  res.send("<h1>" + name + "-" + region + "</h1>");
});

app.listen(63336, function () {
  console.log("Server Running at http://127.0.0.1:63336");
});
