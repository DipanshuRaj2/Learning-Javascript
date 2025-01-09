// function multipliby5(num){
//     return num*5;
// }
// multipliby5.power = 2;
// console.log(multipliby5(5));
// console.log(multipliby5.power);
// console.log(multipliby5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
//This keyword is used for current context of an object
//This keyword means jisne bulaye uske pass jao.
createUser.prototype.increment = function(){
    score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25);
const tea = createUser("Tea", 250);

chai.printMe();
console.log(tea);