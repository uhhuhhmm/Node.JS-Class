var http = require("http");

var server = http.createServer();

server.listen(63336, function () {
  console.log("Server Running at http://127.0.1:63336");
});

var test = function () {
  server.close();
};

setTimeout(test, 10000);
