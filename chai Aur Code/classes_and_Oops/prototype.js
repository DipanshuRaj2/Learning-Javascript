let myName  = 'Dipanshu      ';
let nickName = '  chittu    ';
// myName = myName.trim();
console.log(myName.trim().length);
console.log(myName.trim().length);

//here is the problem that we use trim() method 2 times.
//but i want to use my own function and use removing exta spaces this is the task;



let myHeroes = ["thor","spiderman"];
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.dipanshu = function(){
    console.log(`Dipanshu is present in all object`);
}
Array.prototype.heyDipanshu = function(){
    console.log(`Dipanshu say hello`);
}

// heroPower.dipanshu();
// myHeroes.dipanshu();
// myHeroes.heyDipanshu();

//inheritance
const user ={
    name : "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TaSupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, TaSupport)


let anotherName = "chaiAurCode      "
String.prototypeOf.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)

}

anotherName.trueLength();