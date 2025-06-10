let arr = [
  "harkirath singh",
  {
    Name: " user ",
    age: 21,
    cities: ["Udupi", "Mangalore"],
  },
];

console.log(arr[0]);
console.log(arr[1].Name);
console.log(arr[1].age);
console.log(arr[1].cities[0]);
console.log(arr[1].cities[1]);

let users = [
  {
    name: "abc",
    age: 21,
    gender: "Male",
  },
  {
    name: "baccc",
    age: 16,
    gender: "Female",
  }
];

function can(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      console.log(users[i].name, "can vote");
    }
  }
}

can(users);
