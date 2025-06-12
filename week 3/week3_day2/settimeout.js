console.log("hi");
function timout() {
  console.log(" hi from timout");
}

setTimeout(timout, 500);

console.log(" welocome to  settimeout js  file");
let c = 0;
for (let i = 0; i < 100000; i++) {
  c = c + 1;
}

console.log(c);

// how   execution works
/* 
   
   stack _  |-----------------------|
            |                       |                  webapps
            |-----------------------|                       |---------------------     after the  done by stack 
            |                       |                       |                           the  queuue task pushed to 
            |-----------------------|                       |                      |    stack 
            |                       |                       |
            |-----------------------?                       |                       |
            |       timout          |                       |
            |-----------------------|                       |                       |
            |      i<100000000      |                       |
            | ----------------------|                       |  --------------------                      |
            |           hi          |                       |it waits for specified time 
            /                       |                          and pushes to Queue  
            |-----------------------|                       |-----------------------|




*/
