const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// 미들웨어
// request 이벤트 리스너
// Client요청 받아 처리 작업
// use()

// 기본
app.use(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Express</h1>");
});

// app.get("/favicon.ico", (req, res) => res.status(204));

// app.use(function (req, res, next) {
//   req.number = 52;
//   res.number = 274;
//   next();
// });

// app.use(function (req, res, next) {
//   res.send("<h1>" + req.number + ": " + res.number + "</h1>");
// });

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
