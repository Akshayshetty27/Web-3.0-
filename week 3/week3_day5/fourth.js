function rejectedpromise() {
  return new Promise((dosynch, reject) => {
    console.log(" in the    main function ");
    reject(" rejected promise ");
  });
}

rejectedpromise()
  .then((resolve) => {
    console.log(" successful  promise ");
  })
  .catch(reject);

function reject() {
  console.log(" rejected the promise ");
}
