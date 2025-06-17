function readtheFile(resoleve) {
  console.log("readfile called");
  setTimeout(function () {
    console.log("  callback  based  settimout  called ");
    resoleve();
  }, 3000);
}

function settimoutPromisified(filename) {
  console.log(" settimout promisified is called");
  return new Promise(readtheFile);
}

const p = settimoutPromisified();

function callback() {
  console.log(" timer is done");
}
p.then(callback);
