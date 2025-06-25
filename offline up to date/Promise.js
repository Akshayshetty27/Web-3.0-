// Callback hell

function setPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

setPromisified(1000).then(() => {
  console.log("Promise resolved");
});
