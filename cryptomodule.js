var crypto = require("crypto");

var key = "아무도 알지 못하는 나만의 비밀 키";
var input = "PASSWORD";

// 암호화
var cipher = crypto.createCipher("aes192", key);
cipher.update(input, "utf-8", "base64");
var chiperedOutput = cipher.final("base64");

// 암호화 해제
var dicipher = crypto.createDecipher("aes192", key);
dicipher.update(chiperedOutput, "base64", "utf-8");
var decipheredOutput = dicipher.final("utf-8");

console.log("원래 문자열 : " + input);
console.log("암호화 : " + chiperedOutput);
console.log("암호화 해제 : " + decipheredOutput);
