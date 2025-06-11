const fs = require("fs");
function read(des, data) {
  console.log(data);
}
let content = fs.readFile("a.txt", "utf-8", read);

console.log(content);

let content2 = fs.readFile("a.txt", "utf-8", read);

console.log(content2);
