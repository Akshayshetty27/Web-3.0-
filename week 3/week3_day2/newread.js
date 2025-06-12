let fs = require("fs");

async function read_init(read) {
  return new Promise((r, rej) => {
    setTimeout(() => {
      let b = read();
      console.log(b);
    }, 1000);
  });
}

function read() {
  try {
    let a = fs.readFileSync("a.js", "utf-8");
    return a;
  } catch (err) {
    throw new Error("Failed to read file or couldn't find the file");
  }
}
read_init(read)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
