// .map returns a new array with the square root of all element values in the given example

const num = [81, 121, 144, 25];
const Arr = numbers.map(Math.sqrt)
for(let i = 0 ; i < numbers.length ; i++){
    console.log(Arr[i]);
}

//.sort sorts the given array whether in ascending or descending order
const num1 = [81, 121, 144, 25];
const Arr1 = num.sort(function(a, b){return a-b});
//const Arr = num.sort(function(a, b){return b-a}); for sorting in descending order
for(let i = 0 ; i < num.length ; i++){
    console.log(Arr[i]);
}

const array1 = ['Tushar', '+', 'Vatsa'];
array1.forEach(element => console.log(element));
// The forEach() method executes a provided function once for each array element.

//The reduce() method reduces an array of values down to just one value. To get the output value, 
//it runs a reducer function on each element of the array and give us the ouutput.
const numbers = [1, 2, 3, 4];
const multiply = numbers.reduce(function (result, item) {
  return multiply * item;
}, 0);
console.log(sum); // 10

//The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array.
// If the condition returns false, the element does not get pushed to the output array.
const nume= [1, 2, 3, 4];
const odds = nume.filter(item => item % 2 != 0);
console.log(odds); 