console.log(" reading file in js ");

const fs = require("fs");

const a = fs.readFileSync("a.txt", "utf-8");
console.log(a);

setTimeout(() => {
  console.log(a);
}, 1800);
setTimeout(() => {
  console.log(" hello ");
}, 2000);

function abc(aaaa, b) {
  console.log(aaaa);
  b();
}

function b() {
  console.log("Hello");
}

abc("abba", b);

function add(a, b) {
  console.log(parseInt(a) + parseInt(b));
}

function sub(a, b) {
  console.log(parseInt(a) - parseInt(b));
}

function doOp(a, b, op) {
  console.log(" do operation ");
  op(a, b);
}

doOp(5, 6, add);
doOp("33", 5, sub);
