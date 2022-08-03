const { resolveInclude } = require("ejs");
var express = require("express");

// 서버생성
var app = express();

// 브라우저에 따라 뜸
app.use(function (req, res) {
  let agent = req.header("User-Agent");

  if (agent.toLowerCase().match(/chrome/)) {
    res.send("<h1>Hello Chrome!!</h1>");
  } else {
    res.send("<h1>Hello Express!!</h1>");
  }
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
