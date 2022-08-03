var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

// 뒤에 (); 붙으면 메소드 자동 호출
var DummyDB = (function () {
  var DummyDB = {};
  var storage = [];
  var count = 1;

  DummyDB.get = function (id) {
    if (id) {
      id = typeof id == "string" ? Number(id) : id;
      for (var i in storage) {
        if (storage[i].id == id) {
          return storage[i];
        }
      }
    } else {
      return storage;
    }
  };

  DummyDB.insert = function (data) {
    data.id = count++;
    storage.push(data);
    return data;
  };

  DummyDB.remove = function (id) {
    id = typeof id == "string" ? Number(id) : id;

    for (var i in storage) {
      if (storage[i].id == id) {
        storage.splice(i, 1);
        return true;
      }
      return false;
    }
  };

  return DummyDB;
})();

// 서버 생성
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// 라우터 MW Setting
app.get("/user", function (req, res) {
  res.send(DummyDB.get());
});

app.get("/user/:id", function (req, res) {
  res.send(DummyDB.get(req.params.id));
});

app.post("/user", function (req, res) {
  var name = req.body.name;
  var region = req.body.region;

  if (name && region) {
    res.send(
      DummyDB.insert({
        name: name,
        region: region,
      })
    );
  } else {
    throw new Error("error");
  }
});

app.put("/user/:id", function (req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var region = req.body.region;

  var item = DummyDB.get(id);
  item.name = name || item.name;
  item.region = region || item.region;

  res.send(item);
});

app.delete("/user/:id", function (req, res) {
  res.send(DummyDB.remove(req.params.id));
});

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});

// *Restful Web Service
// GET : /user 모든 사용자의 정보를 조회
// GET : /user/:id 메소드는 GET 방식으로 넘어오고 :id=특정 사용자 정보 조회
// POST : /user 사용자를 추가
// PUT : /user/:id 특정 사용자 정보 수정
// DELETE : /user/:id 특정 사용자 정보를 삭제
