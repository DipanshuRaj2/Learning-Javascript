const url = "https://dog.ceo/api/breeds/image/random";

let a = fetch(url);
// console.log(a);

//1st way
// async function hello(){
//     let response = await(fetch(url));
//     console.log(response);
// }

// hello();

let b = async()=>{
    console.log("getting data ..... ");
    let res = await(fetch(url));
    console.log(res); 
}

b();