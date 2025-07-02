let r = require("fs");

function read(filename) {
  r.readFile(filename,"utf-8", function (err, data) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") {
        total++;
      }
    }
    console.log(total);
  });
}


read("a.txt")