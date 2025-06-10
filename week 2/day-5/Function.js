console.log("  assignment 1");
function sum(a, b) {
  let totalsm = a + b;
  return totalsm;
}

let ans = sum(4, 5);

console.log(ans);

let ans2 = sum(10, 12);
console.log(ans2);

let ans3 = sum("akshay", 45);
console.log(ans3);

console.log("  assignment 2");

let name = "bhuvan";
let age = 18;

function can_vote(name, age) {
  if (Number(age) >= 18) {
    console.log(name, "can vote  ");
  } else {
    console.log(name, " cannot  vote ");
  }
}

can_vote(name, age);
can_vote("amaran" , 13);
