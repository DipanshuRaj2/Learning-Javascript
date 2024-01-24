//1. Create a function using the "function " keyword that takes a String as an argument & returns the number of vowels in the string.

// function countVowels(str){
//     let count = 0;
//     for(let i = 0; i<str.length; i++){ //for(let char of str)
//         if(str [i]=== 'a' ||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' || str[i] === 'u')
//             count++;
//     }
//     return count;
// }

// console.log(countVowels("dipanshu"));

//2. Create a function using the " Arrow function " keyword that takes a String as an argument & returns the number of vowels in the string.
// same question(array function)
// const vowelCount = str => {
//     let count = 0;
//     for (let char of str) {

//         if (char === 'a' ||
//             char === 'e' || 
//             char === 'i' || 
//             char === 'o' || 
//             char === 'u')
//             count++;
//     }
//     return count;
// };
// console.log(vowelCount("dipanshu"));


//3 .For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [2,3,4,5,6];
// nums.forEach((num) => {
//     console.log(num * num);

// });
//  or
// let calcSquare = (num) => {
//     console.log(num*num);
// }
// nums.forEach(calcSquare);

//Qs We are given array of marks of students. Filter out of the marks of student that marked 90.

// let marks = [97,64,32,49,99,96,86];
// let toppers = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(toppers);

//Qs Take a number n as a input from user.Create an array of numbers from 1 to n.
//use the reduced method to calculate sum all number in the array.
//use the reduced method product of all numbers in the array.

let n = prompt("Enter the number ");

let arr = [];
for(let i = 1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

// 1st part
let sum = arr.reduce((pre,curr)=>{
    return pre + curr;
});
console.log("sum = "+sum);

// 2nd part

let factorial = arr.reduce((pre,curr)=>{
    return pre * curr;
});
console.log("factorial = "+factorial);