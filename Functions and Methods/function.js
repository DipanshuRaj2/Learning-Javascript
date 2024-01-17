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
const arrowSum =(a,b) =>{
    console.log(a+b);
}
arrowSum(23 , 54);

//mutilply Arrow function
const multi =(a , b)=>{
    return (a*b);
}

console.log(multi(12, 9));

const printHello = () =>{
    console.log("hello");
};
printHello();