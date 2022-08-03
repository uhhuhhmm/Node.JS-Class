const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// params
app.get("/page/:id", function (req, res) {
  let name = req.params.id;

  res.send("<h1>" + name + "</h1>");
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
