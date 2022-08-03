var socketio = require("socket.io");
var fs = require("fs");
var http = require("http");

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

// on : 소켓 이벤트 발생(receive)
// emit : 소켓 이벤트 발생(send)

// 소켓서버 생성 및 실행
var io = socketio.listen(server);
io.sockets.on("connection", function (socket) {
  // 받는곳
  socket.on("receive", function (data) {
    console.log("Client Send Data :", data);
    // 보내는곳
    socket.emit("send", data);
  });
});
