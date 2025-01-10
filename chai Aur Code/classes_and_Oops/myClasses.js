// // ES6: this features comes in ES6
// //classes and object

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;  
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User ("Dipanshu", "dipanshurajjmt2@gmail.com", `134`)
// console.log(user.encryptPassword());
// console.log(user.changeUsername());


//behind the scenes
function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const User = new user("hellop", "helloWorld@lpu.in", "123");
console.log(User.encryptPassword());
console.log(User.changeUsername());