var num = 780;// var allows variable to be availaible globally
function newFun(){
     num = 70 * 3;// As we already declared it as "var" we do not have to declare it again 
     console.log(num);
}
const n = 70;
// n = 80; if we use this part of code it will throw and error as const value cannot be changed once declared
console.log(n);
newFun();