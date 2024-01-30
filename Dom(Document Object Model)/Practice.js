// Create a H2 heading element with text -"Hello javaScript".Append "from Apna College students" to this text using JS.


// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna College students";


//2nd Question 

//create 3 divs with common class name -"box".Access them and add some unique text to each of them.


let divs = document.querySelectorAll(".Box");  //declare a divs
let idx = 1;

// first way 
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
 

//second way
// console.log(divs[0]);
// divs[0].innerText ="new unique value 1";

// console.log(divs[1]);
// divs[1].innerText ="new unique value 2";

// console.log(divs[2]);
// divs[2].innerText ="new unique value 3";
