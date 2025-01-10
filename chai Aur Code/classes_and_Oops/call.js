function setUserName(username){
    //complrx db calls
    this.username = username;
    console.log("SetUsername");
}

function createUser(username, email, password){
    setUserName.call(this, username);
    // this.username = username;
    this.email = email;
    this.password = password;  
} 

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);