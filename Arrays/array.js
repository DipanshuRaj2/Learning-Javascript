// basics of array

// let array = [97,82,75,64,36];
// console.log(array);
// console.log(array.length);

// let heroes =["Dipanshu", "chittu", "Nikhil", "vandana"];
// console.log(heroes);
// console.log(typeof(heroes));

//string is immutable whereas array is mutuble

//Looping in the Array
//for loop
// for(let idx = 0; idx<heroes.length; idx++){
//     console.log(heroes[idx]); 
// }

//for of 
// for(let hero of heroes){
//     console.log(hero);
// }


//another example 
// let cities =["delhi", "mumbai" ,"pune", "hyderbad","gurgaon"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let foodItems= ["Potato","brinjal","cauliflower","ladyFinger"];
// console.log(foodItems);
// foodItems.push("tomato"); //add from end
// console.log(foodItems);
// foodItems.pop(); // delete form the end
// console.log(foodItems);
// console.log(foodItems.toString());

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];
// let heroes =  marvelHeroes.concat(dcHeroes,indianHeroes);

// console.log(heroes);

// let marvelHeroes = ["thor", "spiderman", "ironman"];

// marvelHeroes.unshift("antman"); // add from front place
// console.log(marvelHeroes);


// let val = marvelHeroes.shift(); //remove element from end place.
// console.log("deleted" , val);
// console.log(marvelHeroes);

//slice method in array(add the element)
// let marvelHeroes = ["thor", "spiderman", "ironman","antman", "Dr.Strange"];
// console.log(marvelHeroes.slice(1,4)); //returns a piece of array
  
//splice method in array to delete,add the element
//add->arr.splice(2[kahan se], 2[kitna element add karna],ele 1,ele2);
//modify->arr.splice(2[kahan se], 0[element dalna hain], 1234[modify kardo] );

let arr = [1,2,3,4,5,6,7]  ;
// arr.splice(2, 2, 101, 102);
// console.log(arr); 
// arr.splice(4,0,1234);
// console.log(arr);

// arr.splice(3,1);//del(3[kahn se index] ,1 element delete kro)
arr.splice(3);
console.log(arr);
//splice method is very important;


