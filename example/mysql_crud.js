// 모듈을 추출합니다.
var express = require("express");
var ejs = require("ejs");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();

// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "company",
});

app.use(bodyParser.urlencoded({ extended: false }));

// 서버 실행
app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});

// Router MiddleWare
// 라우터를 실행
app.get("/", function (req, res) {
  // 파일을 읽음
  fs.readFile("mysql_crud.html", "utf-8", function (error, data) {
    // 데이터베이스 쿼리를 실행
    client.query("select * from products", function (error, results) {
      // 응답
      res.send(ejs.render(data, { data: results }));
    });
  });
});

app.get("/delete/:id", function (req, res) {
  client.query("delete from products where id = ?", [req.params.id], function () {
    res.redirect("/");
  });
});

app.get("/insert", function (req, res) {
  fs.readFile("mysql_crud_insert.html", "utf-8", function (error, data) {
    res.send(data);
  });
});

app.post("/insert", function (req, res) {
  var body = req.body;
  client.query(
    "insert into products (name, modelnumber, series) values(?,?,?)",
    [body.name, body.modelnumber, body.series],
    function () {
      res.redirect("/");
    }
  );
});

app.get("/edit/:id", function (req, res) {
  fs.readFile("mysql_crud_edit.html", "utf-8", function (error, data) {
    client.query("select * from products where id = ?", [req.params.id], function (error, results) {
      res.send(ejs.render(data, { data: results[0] }));
    });
  });
});

app.post("/edit/:id", function (req, res) {
  var body = req.body;
  client.query(
    "update products set name=?, modelnumber=?, series=? where id = ?",
    [body.name, body.modelnumber, body.series, req.params.id],
    function () {
      res.redirect("/");
    }
  );
});
