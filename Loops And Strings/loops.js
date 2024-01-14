//loop print n times
// for(let i = 1; i<=5; i++){
//     console.log("Apna College");
// }

//calculate sum of 1 to 5
// let sum = 0;

// for(let i= 1; i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);


//loops in JS
//infinite Loop: A loop that never ends
// for(let i = 1; i>=0; i++){
//     console.log("i" , i);
// }

//while loop
// let i = 1;
// while(i<=5){
//     console.log("apna college");
//     i++;
// }
 
// do while
// let i = 20;
// do{
//     console.log("Apna College");
//     i++;
// }
// while(i <= 30);


// for of loop

// let count = 0;
// let string = "JavaScript";
// for(let i of string){
//     console.log("i = ",i);
//     count++;
// }
// console.log(count);

//for in loop 

let student ={
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,

};

for(let key in student){
    console.log("key=", key, " value=",student[key]);
}


