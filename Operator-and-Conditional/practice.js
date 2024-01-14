//Let's practice 
//Qs1 Get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5 or not.

// prompt("hello"); //show message take input message;
/*
let num = prompt("enter a number");
if(num%5===0){
    console.log(num, "is a multiple of 5");
}
else{
    console.log(num, "is NOT a multiple of 5");
}

*/
/*Qs2 Write a code which can give grades to students according to their scores:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

let num = prompt("Enter the number");

if(80<=num&&num<=100){
    console.log(num, "A");
}
else if(70<=num&&num<=89){
    console.log(num, "B");
}
else if(60<=num&&num<=69){
    console.log(num, "C");
}
else if(50<=num&&num<=59){
    console.log(num, "B");
}
else {
    console.log(num, "F");
}