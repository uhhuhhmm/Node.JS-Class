var socketio = require("socket.io");
var express = require("express");
var http = require("http");
var fs = require("fs");

var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

var app = express();
var server = http.createServer(app);

app.get("/", function (req, res, next) {
  fs.readFile("movie.html", function (error, data) {
    res.send(data.toString());
  });
});

app.get("/seats", function (req, res, next) {
  res.send(seats);
});

server.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});

// socket server 연결
var io = socketio.listen(server);

io.sockets.on("connection", function (socket) {
  socket.on("reserve", function (data) {
    seats[data.y][data.x] = 2;
    io.sockets.emit("reserve", data);
  });

  socket.on("cancel", function (data) {
    seats[data.y][data.x] = 1;
    io.sockets.emit("cancel", data);
  });
});

// io.sockets.on("connection", function (socket) {
//   socket.on("cancel", function () {
//     var seats = [
//       [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//       [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
//     ];
//     io.sockets.emit("cancel");
//   });
// });

// 0: 좌석 표시 없는 자리
// 1: 예약 전 좌석 표시
// 2: 예약 후 좌석 표시
