console.log("Input output ");
// just refresh
function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

let s = sum(4, 5);
console.log(s);

let d = sum("3", 5);
console.log(d);

function sum(n) {
  let sum = 0;
  for (let i = 0; i < parseInt(n); i++) {
    sum += i;
  }
  return sum;
}

function sm(n)
{
    return n*(n+1);
}
let dd=sum(8);
console.log(dd);

let ddd= sm(10);
console.log(ddd);
