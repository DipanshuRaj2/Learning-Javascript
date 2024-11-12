//asynchronous and synchronous
// let a = () => {
//     console.log("hello_world");
// }
// setTimeout(a, 4000);

// setTimeout(() => {
//     console.log("blonde");
// }, 4000);

// console.log("abe bsdk");

//callback function\


// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack(a, b);
// }

// calculator(2, 5, sum);
// calculator(1, 2, (a,b) =>{
//     console.log(a+b);
// }); 

// function getData(dataId){
   //     console.log("data", dataId);
   // }
   
   // getData(12);
   // let getData1 = (c) =>{
      //     console.log("data", c);
      // }


//setTimeout function ... asynchronous program

// function getData(dataId){
//    setTimeout(() =>{
//       console.log("data", dataId);
//    }, 2000);
// }

// function getData1(dataId){
//    setTimeout(() =>{
//       console.log("data", dataId);
//    }, 2500);
// }

// getData(1);
// getData1(2);
// getData(3);


//promises in javascript
//promises 3 types 
//pending , resolve , rejected
// let promise = new Promise((resolve, reject) => {
//    console.log("hello world");
//    resolve("suceess item deliered"); //fullfilled
//    reject("Some error Message");// it show in the console rejected error messsage
// })


// function getData(dataID) {
//    return new Promise((resolve, reject) =>{
//       setTimeout(() =>{
//          // console.log("data", dataID);
      
//          // reject("error hai bro");
//       },5000);
//    });
// }

// getData(4);

// promise data should be store in the then keyword use see example
// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//       console.log("I am a Promise");
//       reject("error fucked UP!");
//       // resolve("success");
//    });
// };


// let promise = getPromise();
// promise.then((res) =>{
//    console.log("promise fullfilled", res);
// });

// promise.catch((err)=>{
//    console.log("rejected", err);
// })

//promise chaining

// function asyncfunction(){
//    return new Promise((resolve, reject) =>{
//       setTimeout(()=>{
//          console.log("some data1");
//          resolve("success");
//       }, 3000);
//    });
// }

// function asyncfunction1(){
//    return new Promise((resolve, resject) =>{
//       setTimeout(() =>{
//          console.log("some data 2");
//          resolve("success1");
//       }, 3000);
//    });
// }

// console.log("fetching data");
// let a = asyncfunction();
// a.then((res)=>{
//    console.log(res);
//    console.log("You got the corrected Output");
// })

// console.log("fetching data2");
// let b = asyncfunction1();

// b.then((res)=>{
//    console.log("You got the corrected Output",res);
// })


//important part 
// function asyncfunction(){
//    return new Promise(function(resolve, reject){
//       setTimeout(() =>{
//          console.log("some data 1");
//          resolve("success");
//       }, 4000);
//    });
// }


// console.log("fetching data1....");
// asyncfunction().then((res) => {
//    console.log("fetching data2....");
//    asyncfunction().then(() =>{});
// });



//(async - await)
//whenever we use any function which is name as async they always return promises
// async function hello(){
//    console.log("hello world");
// }
// hello();

// function api(){
//    return new Promise(function(resolve, reject){
//       setTimeout(()=>{
//          console.log("Delhi Weather");
//          resolve(200);
//       }, 2000);
//    });
// }
// async function weatherData(){
//    await(api());
//    await(api());
// }

// weatherData();

// it is easy code as compare to previous so we use it often
function getData(dataId){
   return new Promise(function(resolve, reject){
      setTimeout(()=>{
         console.log("data: ", dataId);
         resolve("sucess");
      }, 2000);
   });
}
async function hello(){
   await(getData(2));
   await(getData(3));
}
hello();