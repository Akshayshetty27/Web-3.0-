function promisse(a, b) {
  if (parseInt(a) == parseInt(b)) return true;
}

let promise = new Promise((res, rej) => {});
{
  let a = 5;
  let b = 4;

  if (promisse(a, b)) res(a);
  else rej(a, b);
}

function res(n) {
  console.log(" it is a square");
  console.log(n * n);
}

function rej(a, b) {
  console.log("it is a rectangle ");
  console.log(a * b);
}
