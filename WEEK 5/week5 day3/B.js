function setTimoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" hello");
      resolve();
    }, ms);
  });
}

function callback() {
  console.log(" resolved");
  setTimeout((resolve) => {
    console.log(" hi");
    resolve();
  }, 2000);
}
setTimoutPromisified(1000).then(callback);
