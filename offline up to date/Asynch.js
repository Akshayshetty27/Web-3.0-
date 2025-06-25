function setPromisified(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

async function solve() {
  await setPromisified(1000);
  console.log(" hello");

  await setPromisified(2000);
  console.log(" hii");

  await setPromisified(5000);
  console.log(" bi");
}

solve();
