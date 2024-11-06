// document.body.style.background = "black";

// let heading = document.getElementById("heading"); // when it is used by id then we document.getELementById('heading_Name')

// let a = document.getElementsByClassName("heading");
// console.dir(a);
// console.log(a);

// let a = document.querySelector(".hello").innerText;
// let b =  a + "  from apna College"

// console.log(b);

// let c = document.querySelectorAll(".box");
// // c[0].innerText = "Miss You All 1";
// // c[1].innerText = "Give Me Job 2";
// // c[2].innerText = "Ok Bro 3";
// // let b = document.querySelector("#myID");
// // console.log(b);
// let i = 0
// for(a of c){
//     console.log(`a  innerText ${i}`);
//     i++;
// }

// dom part 2

// console.log(a);

// let b = a.getAttribute("class");
// console.log(b); 
// let c = a.setAttribute("kalu","newClass");

// let a = document.querySelector("div");
// console.log(a);

// a = a.getAttribute("id");
// console.log(a);

// let a = document.querySelector("div");
// console.log(a);
// a.setAttribute("id", "newId");
// console.log(a);

//style access

// let a = document.querySelector("div");

// // console.log(a);
// a.style.backgroundColor = "green";
// a.style.borderColor = "red";
// a.style.textDecorationColor = "blue";
// a.style.fontSize = "24px";
// a.innerText = "Hello World";

//create button

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn.innerText);

// let a = document.querySelector("p");
// a.after(newBtn); //a.before(newBtn) //a.append ... //a.prepend ...

// // vvi point create a heading tag without html use the javascript feature
// //create heading tag
// let h1 = document.createElement("Hi");
// h1.innerHTML = "<i>Hi, I am Dipanshu Raj</i>";
// document.querySelector("body").prepend(h1);
// h1.style.fontSize = "24px";
// h1.style.backgroundColor = "red";


// //delete any tag 
// h1.remove();
// newBtn.remove();

// let s = document.querySelector("p");

// s.remove();

//practice questions of javascript doing tomorrow
//create a button
// let a = document.createElement("button");
// a.innerText = "click me!";
// a.style.color = "white";
// a.style.background = "red";

// document.querySelector("body").prepend(a);
// //Q2

// let b = document.querySelector("p")
// console.log("b");

// // b.setAttribute("class", "newClass");
// b.classList.add("newClass");


//event in JavaScript
// we acheive the event handler by 3 way
//(1)
//inline handling
//a. In HTML file we use inline on attributes of any of tag
//b. draw back it would be bulky
//ex <button onclick = "console.log('button was cliked')">click me</button>


//(2).
// JS node.event = () =>{} (function see the below code)
//drawback in one only event is called
// let a = document.querySelector("#btn1");

// a.onclick = (e) => {
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
//     console.log("button was clicked");
//     let b = 25;
//     b++;
//     console.log(b);
// }

// let b = document.querySelector(".div1");
// b.onmouseover = () => {
//     console.log("You are inside on div");
// }

// let c = document.querySelector("#btn2");
// c.ondblclick = () => {
//     console.log("you click on me 2 times");
// }

//(3)
// event lister = use for catch mulitple event
// node.addEventListener(event, callback(handler));
//callback is a type of function that it pass the argument as a function
//means in lame language function inside a function (which passes as argument)


// let a = document.querySelector("#btn1");

// a.addEventListener("click", () =>{
//     console.log("button was clicked -handler1");
// } );

// a.addEventListener("click", () =>{
//     console.log("button was clicked -handler2");
// } );

// const handler3 = () => {
//     console.log("button was clicked - handler3");
// }
// a.addEventListener("click", handler3);

// a.addEventListener("click", () =>{
//     console.log("button was clicked -handler4");
// });

// a.removeEventListener("click", handler3);

//lets do some practice question
//creata a toggle button that chnages to screen to dark mode when clicked and light - mode when clicked again


// let a = document.querySelector("#btn");

// let currMode = "white"; //dark
// a.addEventListener("click",() => {
//     if(currMode === "white"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else if(currMode === "dark"){
//         currMode = "white";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

//lets do it buddy for fun -- toggling
let a = document.querySelector("#btn");
let currMode = "white"; //dark
a.addEventListener("click",() => {
    if(currMode === "white"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else if(currMode === "dark"){
        currMode = "green";
        document.querySelector("body").style.backgroundColor = "green";
    }
    else if(currMode === "green"){
        currMode = "yellow";
        document.querySelector("body").style.backgroundColor= "yellow";
    }
    else if(currMode === "yellow"){
        currMode = "red";
        document.querySelector("body").style.backgroundColor = "red";
    }
    else if(currMode === "red"){
        currMode = "white";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});


