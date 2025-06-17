//   look back   of previous class
let fs = require("fs");

function readtheFile(sendvalu) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    sendvalu(data);
  });
}
const p = readFile("a.txt");
function readFile(filename) {
  return new Promise(readtheFile);
}
function callback(contents) {
  console.log(contents);
}

p.then(callback);
