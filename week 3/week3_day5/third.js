function executor(resolve) {
  console.log("hi");
  resolve();
}

function createPromise() {
  return new Promise(executor);
}

const p = createPromise();

p.then(() => {
  console.log("successful promise");
});

p.catch(() => {
  console.log("the reject");
});
