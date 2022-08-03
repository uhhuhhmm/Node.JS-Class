var express = require("express");
var cookieParser = require("cookie-parser");

// 서버생성
var app = express();

// 쿠키 미들웨어 설정
app.use(cookieParser());

app.get("/getCookie", function (req, res) {
  res.send(req.cookies);
});

app.get("/setCookie", function (req, res) {
  // 쿠키를 생성합니다.
  res.cookie("string", "cookie", {
    maxAge: 6000,
    secure: true, // http 전송이 안됨, https 전송됨
  });
  res.cookie("json", {
    name: "cookie",
    property: "delicious",
  });
  // 응답합니다.
  res.redirect("/getCookie");
});

app.listen(63336, function () {
  console.log("[Running] Server http://127.0.0.1:63336");
});
