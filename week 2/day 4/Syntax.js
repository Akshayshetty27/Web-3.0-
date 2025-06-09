// Syntaax  of the javvascript
const name = "John";
console.log(name);

const age = 12;
console.log(age);

var isStuden = true;
if (isStuden) {
  console.log(name, "is ", " a Studemt");
}

// var , let  , const   ( types of declaring  )

let isStudent = true;
const FirstName = "Akshay";

// array
// lets you aggregate   data type
let count = 0;
let users = ["raman", " preethi", " sans ", "Samp"];

while (count < 4) {
  console.log(
    " hello ",
    users[Math.floor(Math.random(0, users.length - 1) * 10)]
  );
  count++;
}

function greet(name) {
  console.log(" hello ", name);
}

greet("aksh");
greet("kirat ");

function sum(num, num2) {
  console.log(Number(num) + Number(num2));
}

sum(3, 4);
sum(1, 10);
