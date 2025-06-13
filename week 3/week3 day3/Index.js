const date = new Date();
function dates() {
  console.log(date.getFullYear());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getTime());
}

dates();

const map = new Map();
map.set("name", "Akshay");
map.set("age", 21);
console.log("name : ", map.get("name"), "age : ", map.get("age"));
