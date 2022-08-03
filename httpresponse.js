require("http")
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Response 2022</h1>");
  })
  .listen(63336, function () {
    console.log("Server Running at http://127.0.1:63336");
  });
