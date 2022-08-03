var express = require("express");
var fs = require("fs");
var multipart = require("connect-multiparty");

// 서버 생성
var app = express();

// multipart 미들웨어 설정
app.use(multipart({ uploadDir: __dirname + "/multipart" }));

app.get("/", function (req, res) {
  fs.readFile("upload_mw.html", function (error, data) {
    res.send(data.toString());
  });
});

app.post("/", function (req, res) {
  // console.log(req.body);
  // console.log(req.files);

  var comment = req.body.comment;
  var imgFile = req.files.image;

  if (imgFile) {
    var name = imgFile.name;
    var path = imgFile.path;
    var type = imgFile.type;

    if (type.indexOf("image") != -1) {
      var outputPath = __dirname + "/multipart/" + Date.now() + "_" + name;
      fs.rename(path, outputPath, function (error) {
        res.redirect("/");
      });
    } else {
      fs.unlink(path, function (error) {
        res.sendStatus(400);
      });
    }
  } else {
    res.sendStatus(404);
  }
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
