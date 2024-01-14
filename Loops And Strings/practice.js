// Q1 Print all even numbers from 0 to 100.
// for(let num=0; num<=100; num++){
//     if(num%2==0){
//         console.log("num :" ,num);
//     }
// }

// Q2 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

// let gameNum = 25; 
// let userNum = prompt("Guess the game number : ");

// while(userNum !=gameNum){
//     userNum =prompt("You entered wrong number. Guess again : ");
// }
// console.log("congratualtions, you entered the right number");


/*Qs1 Prompt the user to enter their full name. Generate a username for them based on the input.
start username with @, followed by their full name and ending with the fullname length.

eg : user name ="dipanshuraj", username should be "@dipanshuraj12"
*/

let userName = prompt("Enter the full name");
console.log("@"+userName+userName.length);

