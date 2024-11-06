let a = document.querySelector("body");
a.style.backgroundColor = "green";
console.log(a.style.backgroundColor = "green");

let b = document.querySelector("#btn");
let currMode = "green";
b.addEventListener("click", ()=>{
    if(currMode === "green"){
        currMode = "yellow";
        document.querySelector("body").style.backgroundColor = "yellow";
    }
    else{
        currMode = "red";
        document.querySelector("body").style.backgroundColor = "red";
    }
    console.log(currMode);
});
