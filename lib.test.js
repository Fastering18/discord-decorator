const parser = require("./lib.js");
var assert = require('assert');

/**
 * FIRST TEST
 */

console.log("~~~ TEST #1 ~~~");
let rawcmd = "test -c ninja --o devfurr.exe -h";
console.log("| input: \"", rawcmd, "\"", "|");

const hasil = parser.parse(rawcmd, {prefix:["--"]});

console.log("| isi: ", hasil, "|");
assert(hasil.c == "ninja", "c value returned unexpected value");
assert(hasil.o == "devfurr.exe", "o value returned unexpected value");
assert(hasil.h == true, "h value returned unexpected value");


/**
 * TEST #2 (Multispace testing)
 */
console.log("~~~ TEST #2 ~~~");
let rawcmd2 = "test -amogus sussy baka sugoma -sus --impostor yourself";
console.log("| input: \"", rawcmd2, "\"", "|");

const hasil2 = parser.parse(rawcmd2, {prefix:["--"], multiSpace: true});

console.log("| isi: ", hasil2, "|")
assert(hasil2.amogus == "sussy baka sugoma", "amogus value returned unexpected  (multispace)");

console.log("~~~ END ~~~")


console.log("\n=======================================")
console.log("\x1b[32m", "~~ Success asserting, test finished...", "\x1b[0m");