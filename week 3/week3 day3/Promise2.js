function promisecallbac(resolve) {
  setTimeout(resolve, 3000);
}

promisecallbac(() => {
  console.log("hi from promise 1");
});

function settimpurpromisified() {
  return new Promise(promisecallbac);
}

// settimpurpromisified();

function random() {
  console.log("hello");
}
function pr() {
  console.log("ok");
}

let p = new Promise(random);
console.log(p);

p.then(random).then(settimpurpromisified);

console.log(p);
