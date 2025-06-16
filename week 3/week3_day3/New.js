const fs = require("fs");

function readfile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

const p = readfile("a.txt");

p.then((contents) => {
  console.log(contents);
}).catch((err) => {
  console.error("Error reading file:", err);
});
