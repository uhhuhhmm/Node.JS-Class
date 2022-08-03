var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var fs = require("fs");

// 서버 생성
var app = express();

// 쿠키 미들웨어 설정
app.use(cookieParser());

// body parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  if (req.cookies.auth) {
    res.send("<h1>Login Success</h1>");
  } else {
    res.redirect("/login");
  }
});

app.get("/login", function (req, res) {
  fs.readFile("login.html", function (error, data) {
    res.send(data.toString());
  });
});

app.post("/login", function (req, res) {
  let login = req.body.login;
  let password = req.body.password;

  console.log(login, password);
  console.log(req.body);

  if (login == "admin" && password == "123") {
    res.cookie("auth", true);
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
