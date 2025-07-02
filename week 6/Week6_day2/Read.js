let r = require("fs");
let path = require("path");

function read(filename) {
  r.readFile(filename, "utf-8", function (err, data) {
    let total = 0;
    let temp = "";
    for (let i = 0; i < data.length; i++) {
      temp += data[i];
      if (data[i] === " ") {
        console.log(temp);
        __dirname += temp;
        temp = "";
        total++;
      }
    }
    console.log(total);
    console.log("  " + __dirname);
  });
}

read("a.txt");
