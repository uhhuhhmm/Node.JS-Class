var express = require("express");
var app = express();

app.use("/a", require("./routerA").router);
// app.use("/b", require("./routerB").router);
// app.use("/c", require("./routerC").router);

app.listen(63336, function () {
  console.log("[Running] Server at http://127.0.0.1:63336");
});
