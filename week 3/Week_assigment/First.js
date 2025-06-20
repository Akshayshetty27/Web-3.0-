// creating a function   (  Synchronous  )
//  function    definition
function sayHello(name, greet) {
  console.log(greet + " " + name);
}

//   function  calling

let arr = [" good morning", " good afternoon ", "good Night"];

sayHello("akshay", arr[Math.floor(Math.random(0, 3) * 3 + 1)]);

sayHello("arun joel ", arr[Math.floor(Math.random(0, 3) * 3 + 1)]);

sayHello("sudeep ", arr[Math.floor(Math.random(0, 3) * 3 + 1)]);

// for (i = 0; i < 10; i++) {
//   console.log(Math.random(0, 3));
//   console.log(Math.floor(Math.random(0, 4) * 3 + 1));
// }
