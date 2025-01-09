// //object literals
// const user = {
//     username: "Dipanshu",
//     login : 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(this.username);
//         console.log(this);
//     }
// }
// console.log(user.getUserDetails());
// console.log(this);

function user2(username, login, signedIn){
    this.username = username,
    this.login = login,
    this.signedIn = signedIn;

    function user3(username, login){
        this.username = username,
        this.login = login;
    }
    this.user3 = new user3('chittu', 3);
}

const user = new user2('Dipanshu', 9, true);
const userq = new userq('Dom', 10, false);
console.log(userq);
//new => new object is created 
//new => new keyword ke through constructor called hota hain 
//new => constructor is called 