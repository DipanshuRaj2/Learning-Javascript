//Q1 For a given array with marks of student ->[85,97,44,37,76,60]
//Find the average marks of the entire class.
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let i = 0; i<marks.length; i++){
//         sum = sum +marks[i];
// }
// console.log(sum);
// console.log(`Average marks of the class:${sum/marks.length} `);

//Q2 For a given array with prices of 5 items -> [250,645,300,900,50]
//All items have an offer of 10% OFF on them.Change the array to store final price after applying offer.

// let items =[250,645,300,900,50];
// let applyOffer =0;
// for(let i = 0; i<items.length; i++){
//     applyOffer = items[i] - items[i]/10;
//     console.log(applyOffer);
// }

// another loop
// let i= 0
// for(let val of items){
//     let offer =  val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer =${items[i]}`);

//     i++
// }

//Q2 Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

//a. Remove the first company from the array
//b. Remove Uber & Add Ola in its place
//c. Add Amazon at the end

let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//a. Remove the first company from the array
// companies.shift();
// console.log(companies);

//b. Remove Uber & Add Ola in its place
companies.splice(2 ,2,"Ola", "nikhil");
console.log(companies);

//c. Add Amazon at the end

// companies.push("Amazon");
// console.log(companies);