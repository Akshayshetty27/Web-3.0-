function subtract(a, b) {
 console.log(parseInt(a) - parseInt(b));
}

function add(a, b) {
  console.log((parseInt(a) + parseInt(b)));
}

function print(a, b, op) {
  console.log("hi from print");
  op(a,b);
}

print(  5, 4 , add);
