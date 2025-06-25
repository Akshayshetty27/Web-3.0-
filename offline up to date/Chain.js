// Promise chaining

function setPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

setPromisified(3000)
  .then(() => {
    console.log(" hi");
    return setPromisified(5000);
  })
  .then(() => {
    console.log(" hello");
    return setPromisified(2000);
  })
  .then(() => {
    console.log(" bi");
  });
