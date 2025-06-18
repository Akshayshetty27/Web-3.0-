function fn(resolve) {
  resolve();
  console.log(" after resolve");
}

const p = new Promise(fn);

p.then(function () {
  console.log(" after promise ");
});
