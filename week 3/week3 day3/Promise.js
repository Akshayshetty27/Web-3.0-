// promises in

// so far what did in this class
/* 
introduced to create and  use a class 
 we used some built in class  date  , Map 
 */

function operation(n) {
  return new Promise((res) => {
    if (n % 2 == 0) {
      res("success");
    }
  });
}
function res(s) {
  console.log(s);
}

operation(4).then(res);

let promise = new Promise((resolve, reject) => {
  if (4 % 2 == 1) {
    resolve(" success");
  } else {
    reject(" failure");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });
