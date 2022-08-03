const EventEmitter = require("events");
exports.timer = new EventEmitter();

setInterval(function () {
  exports.timer.emit("banana");
}, 1000);
