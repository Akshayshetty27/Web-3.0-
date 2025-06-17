function promise() {
  console.log(" entered the promise call");
  return new Promise(a);
}

function b() {
  console.log(" entered the  b function");
  a();
}


function a(resolve) {
  setTimeout(() => {
    console.log(" asynch  function set timout called ");
  }, 3000);

  resolve();
}

let p = promise();

function callback() {
  console.log("  enteered the call back  block ");
}
p.then(callback);
