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

let items =[250,645,300,900,50];
let applyOffer =0;
// for(let i = 0; i<items.length; i++){
//     applyOffer = items[i] - items[i]/10;
//     console.log(applyOffer);
// }
let i= 0
for(let val of items){
    let offer =  val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer =${items[i]}`);

    i++
}
