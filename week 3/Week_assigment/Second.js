// Promises

let p = new Promise(doreturnPromise);

function doreturnPromise(resolve) {
  console.log(" entered the   function ");

  setTimeout(() => {
    console.log(" entered the asynch block ");
    resolve();
  }, 3000);
}

function callback() {
  console.log(" the success messege ");
}
p.then(callback);
