function PromiseFn(resolve) {
  setTimeout(() => {
    let c = 0;
    for (i = 0; i < 10000; i++) {
      c = c + i;
    }
    console.log(c);
  }, 3000);
  resolve("hi there ");
}

const p = new Promise(PromiseFn);

function callback(str) {
  console.log(str);
}

p.then(callback);
