var fs = require("fs");

// 비동기처리
var text = fs.readFileSync("textfile.txt", "utf-8");
console.log(text);

// 동기처리 (동기 : 줄서는 순서대로)
fs.readFile("textfile.txt", "utf-8", function (error, data) {
  console.log(data);
});

// 만들고 data 넣고
var data = "Hello World...!";

fs.writeFile("TextSaveTest.txt", data, "utf-8", function (error) {
  console.log("write file async complete");
});

fs.writeFileSync("TextSaveWriteSyncTest.txt", data, "utf-8");
console.log("TextSaveWriteSyncTest complete");
