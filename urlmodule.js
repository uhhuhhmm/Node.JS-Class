var url = require("url");
var querystring = require("querystring");

var parseObject = url.parse("http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160");
console.log(parseObject);
console.log(querystring.parse(parseObject.query));
