var express = require("express");
var router = express.Router();

var app = express();

router.get("/index", function (req, res) {
  res.send("<h1>Index PageA</h1>");
});

exports.router = router;
