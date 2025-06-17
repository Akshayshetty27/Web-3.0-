function promise(resolve) {
  let c = 0;
  for (let i = 0; i < 100000; i++) {
    c += i;
  }
  console.log(c);

  resolve();
}

const p = new Promise(promise);

function callback() {
  console.log(" exectuion completed ");
}
p.then(callback);
