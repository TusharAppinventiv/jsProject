//This code is explaining how Javascript is Single Threaded, Non - Blocking, Dynamic Typed, Event driven
let a = "Tushar";
let b = 24;
let c = "Vatsa"
console.log(a);
setTimeout(() => {
  console.log(b);
}, 1500);
console.log(c);