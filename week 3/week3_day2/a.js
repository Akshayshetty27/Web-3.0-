async function main(cb) {
  return new Promise((r) => {
    setTimeout(() => {
      cb();
      r();
    }, 1000);
  });
}

function r() {
  console.log(" r from asynch");
}

main(r);

let num = 2;

let pr = new Promise((resolve, reject) => {
  if (num % 2 == 1) {
    resolve(" it solved  it is odd ");
  } else {
    reject(" it is  even number ");
  }
});

pr.then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});
