function settimoutPromisified() {
  return new Promise(doaynchop);
}

function doaynchop(resolve) {
  console.log(" doasync called");
  setTimeout(resolve, 3000);
}

let p = settimoutPromisified();

function callback() {
  console.log(" resolve called through callback ");
}
p.then(callback);
