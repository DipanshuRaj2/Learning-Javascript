const student = { // student object 
    fullName: "Rahul Kumar",  //fullName = keypair , "Rahul Kumar= value"
    age: 20,     //age  = keypair , 20 = value
    cgpa: 8.2,
    isPass: true ,
};
//print the object of student
console.log(student["isPass"]);
console.log(student.age);
console.log(student.cgpa);

//if we want to increment the value of object

student["age"] = student["age"]+1;
student.cgpa =student.cgpa+1; // const object change is possible 

console.log(student.cgpa);

// const name = "Rahul"; //const variable main change not possible
// name = "sachin0";





