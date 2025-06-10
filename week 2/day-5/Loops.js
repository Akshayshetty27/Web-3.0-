console.log(" for loop ");
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("", i + j + 1);
  }
}

let k = 0;
let birds = [" crow ", " Piegon", " Sparow", " Eagle ", " Myna "];

console.log(" do while ");
while (k < birds.length) {
  console.log(birds[k++]);
}
