const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// router middleware 만드는 법
let routerA = express.Router();
let routerB = express.Router();

routerA.get("/index", function (req, res) {
  res.send("<h1>RouterA Page</h1><a href='/b/index'>B</a>");
});

routerB.get("/index", function (req, res) {
  res.send("<h1>RouterB Page</h1><a href='/a/index'>A</a>");
});

app.use("/a", routerA);
app.use("/b", routerB);

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
