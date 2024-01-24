// function javaScript(){
//     console.log("Welcome to the world of JavaScript");
//     console.log("hello how are you");
// }
// javaScript();
// javaScript();

// function myFunction(msg , n) {
//     console.log(msg * n);

//error not a number
// }
// myFunction("I love Js",100);

//function of sum
// function sum(a , b){
//     // local varible
//     // console.log (`a+b = ${a +b}`);
//     s = a + b;
//     console.log(a);
//     return s;
// }
// let val =sum(3,4);
// console.log(val);

//Arrow function
//compact way of writing a function

//sum Arrow function
// const arrowSum =(a,b) =>{
//     console.log(a+b);
// }
// arrowSum(23 , 54);

//mutilply Arrow function
// const multi =(a , b)=>{
//     return (a*b);
// }

// console.log(multi(12, 9));

// const printHello = () =>{
//     console.log("hello");
// };
// printHello();

//callbackFunction : Here, it is a function to execute for each element to another function.
// for each loop 
// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

//call back (forEach) using arrowfunction

// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });

// print the city name 
// let arr = ["pune","delhi","mumbai"];
// arr.forEach((val, idx)=>{
//     console.log(val.toUpperCase(), idx);
// });   
 
// Map 
// Map generates new arr but forEach generates same array
// let nums = [67, 52, 39];
// let newArr = nums.map((val) => {
//     return val*val;
// });

// console.log(newArr);

// filter array use for perform some opertion
// let arr = [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val)=> {
//     return val % 2 === 0;
// });
// console.log(evenArr);

//Array reduced ()

// let arr = [1,2,3,4]; // current varible ke sath value store hota hain

//sum of array
// const output = arr.reduce((prev,curr) => {
//     return prev + curr;
// });
// console.log(output); // 10

// find maximum
let arr1 = [5,6,2,1,3];

const output = arr1.reduce((prev , curr)=> {
    return prev < curr ? prev : curr;
});
console.log(output);