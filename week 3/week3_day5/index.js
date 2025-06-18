let p = returnpromise();

function returnpromise() {
  console.log(" promise invoking....");
  return new Promise(doasynch);
}

function doasynch(resolve) {
  setTimeout(() => {
    console.log("asynch  settimout is called ");
  }, 3000);
  resolve();
}

function callback() {
  console.log(" callback is called ");
}

p.then(callback);
