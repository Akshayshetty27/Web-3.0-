function setTimoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" hello");
      resolve()
    }, ms);
  });
}

function callback() {
  console.log(" resolved");
}
setTimoutPromisified(1000).then(callback);
