// .map returns a new array with the square root of all element values in the given example

const num = [81, 121, 144, 25];
const Arr = numbers.map(Math.sqrt)
for(let i = 0 ; i < numbers.length ; i++){
    console.log(Arr[i]);
}

//.sort sorts the given array whether in ascending or descending order
const num = [81, 121, 144, 25];
const Arr = num.sort(function(a, b){return a-b});
//const Arr = num.sort(function(a, b){return b-a}); for sorting in descending order
for(let i = 0 ; i < num.length ; i++){
    console.log(Arr[i]);
}