setTimeout(() => {
  console.log("hello");
  setTimeout(() => {
    console.log("hi");

    setTimeout(() => {
      console.log("bi");
    }, 3000);
  }, 2000);
}, 1000);

function sayhello() {
  console.log("hello");
  setTimeout(sayhi, 1000);
}

function sayhi() {
  console.log(" hi ");
  setTimeout(saybi, 3000);
}

function saybi() {
  console.log(" bi ");
}

setTimeout(sayhello, 10000);
