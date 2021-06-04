const parser = require("./lib.js");
var assert = require('assert');

let rawcmd = "test -c ninja --o devfurr.exe -h";
console.log("input: \"", rawcmd, "\"");

const hasil = parser.parse(rawcmd, {prefix:["--"]});

console.log("isi: ", hasil);
assert(hasil.c == "ninja", "c value returned unexpected value");
assert(hasil.o == "devfurr.exe", "o value returned unexpected value");
assert(hasil.h == true, "h value returned unexpected value");

console.log("\n=======================================")
console.log("\x1b[32m", "~~ Success asserting, test finished...", "\x1b[0m");