//program to add all digits upto specific digit
let num = prompt("Enter a number :");
let i = 0;
let ans = 0;
let upd = 0;
//While loops can be single-lined or contain multiple commands for a single condition.
while(i <= num){
    ans = ans + upd;
    upd++;
    i++;
}
console.log(ans);
//do-while loops gets executed at least once as the condition check is present in the end
let out = 0;
let j = 0;
do {
  out += j;
  j++;
}
while (j< 5);