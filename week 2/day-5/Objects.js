console.log(" Objects in JS ");

let user = {
  name: " akshay",
  age: 21,
  gender: "male",
};

console.log(
  " user name : ",
  user.name,
  " age :",
  user.age,
  " user gender :",
  user.gender
);

let user1 = {
  uname: "arun joel ",
  uage: 22,
  ugender: "male",
};

function greet(user1) {
  if (user1.ugender == "male") {
    console.log("hello Mr ", user1.uname, " age :", user1.uage);
  } else {
    console.log("hello Ms ", user1.uname, " age :", user1.uage);
  }
}

let user2 = {
  uname: "Mahima",
  uage: 22,
  ugender: "female",
};
greet(user1);
greet(user2);
