var http = require("http");
var fs = require("fs");
var socketio = require("socket.io");

var server = http
  .createServer(function (req, res) {
    fs.readFile("socketio.html", function (error, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(63336, function () {
    console.log("[Running] Server at http://127.0.0.1:63336");
  });

// 소켓서버 생성 및 실행
var io = socketio.listen(server);

var id = 0;

io.sockets.on("connection", function (socket) {
  id = socket.id;

  socket.on("receive", function (data) {
    // public 통신
    // io.sockets.emit("send", data);

    // broadcast
    // socket.broadcast.emit("send", data);
    console.log(id);

    io.sockets.to(id).emit("send", data);
  });
});
