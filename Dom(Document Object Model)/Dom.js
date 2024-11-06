/*
What is DOM?
1.when a web page is loaded, the browser creates a Document Object Model(DOM)of the page.
2.It include all the HTML files and CSS file and all other files.
3.We access the object in the DOM by console.dir("whatever you want object")
4. When we  doing dynamic changes in the web pages or manipulation then we use DOM is beneficial.
*/
// document.body.childNodes[3].innerText ="abcd";
// console.dir(document.body);

// let button = document.getElementById("heading");
// console.dir("myId");

// let headings = document.getElementsByClassName("Myclass");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);





//Query Selector

// let firstEl = document.querySelector("p"); //1st element
// console.dir(firstEl);

// let allE = document.querySelectorAll(".Myclass"); //all element
// console.log(allE);

// console.log(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir("div")

// let heading = document.querySelector("h1");
// console.dir(heading);


// Dom Part 2



// for div tag

// let div =document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// for p tag

// let div = document.querySelector("p");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

//another way
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));


// Access and modify the element in style.css

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "26px";
// div.innerText = "Hello!";


//insert Elements
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("p");
// div.after(newBtn);

//new heading(adding a new element)
// let newHeading = document.createElement("h1");
// newHeading.innerHTML ="<i>Hi,I am new!</i>";

// document.querySelector("body").prepend(newHeading);
// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

(function () {
    
    console.log("Original salary was " + salary);
    
    salary = "5000$";
    
    console.log("My New Salary " + salary);
})();

    



 