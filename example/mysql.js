var mysql = require("mysql");

var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "company",
  // port: 3333 포트번호 변경한 user는 써줘야함
});

// 위에 넣어도 됨
// client.query("USE company");

client.query(
  "insert into products (name, modelnumber, series) values (?,?,?)",
  ["Name", "model", "series"],
  function (error, result, fields) {}
);

client.query("select * from products", function (error, result, fields) {
  if (error) {
    console.log("쿼리문장 오류");
  } else {
    console.log(result);
  }
});
