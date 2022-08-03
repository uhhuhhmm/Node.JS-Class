var express = require("express");
var session = require("express-session");

var app = express();

// session MiddleWare 설정
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);

app.use(function (req, res) {
  req.session.now = new Date().toUTCString();
  res.send(req.session);
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
