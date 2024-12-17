// const promiseOne = new Promise(function(resolve, reject){
//     // do in async task
//     // db calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     }, 1000);
// }
// );

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     }, 2000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThird = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     resolve({username: "chai", email: "chai@example.com"});
//     },1000)
// });

// promiseThird.then(function(user){
//     console.log(user);
// })

// const promiseFourth = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// })

// const username = promiseFourth.then((user) =>{
//     console.log(user);
//     return user.username;
// }).then((username) =>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })

// console.log(username);



//revision
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 1");
        resolve(); 
    }, 1000);
})
// resolve is used with then keyword
//resolved is directly connect with then keyword
promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
     }, 1000);
}).then(function(){
    console.log("Async 2 is resolved");
})

//3rd promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){

        resolve({username: "chai", email: "dipanshurajjmt2@gmail.com"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// fourth promise

const fouthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Dipanshu", password: "123"})
        } else{
            reject("Error: Something went wrong");
        }
   }, 1000);
})

fouthPromise
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{console.log("Promise either reolved or rejected")});


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"});
        } else{
            reject("Error: Js went wrong");
        }
    },1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
   catch(error){
    console.log(error);
   }
}
consumePromiseFive();

// async function getAllUsers(){
//    try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json();
//     console.log(data);
//    }
//    catch(error){
//     console.log("E: ", error);
//    }
// }
// getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//previously xmlHttprequest is using (drawbacks: it heavily depends on web)
//Now after 2022 fetch() is used.(successor of xmlHttprequest)