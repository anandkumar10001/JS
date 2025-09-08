    //Primitive Datatypes
// Number 
let age = 18
let score = 100.8
console.log(typeof age);
console.log(typeof score);

//String
let name = "Abhishek"
console.log(typeof name);

// Boolean
let isLoggedIn = false
console.log(typeof isLoggedIn);

// undefined
let state;
console.log(typeof state);

// null // typesof is object
let outSideTemp = null
console.log(typeof outSideTemp);

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

// BigInt
const bigNumber = 7788687868732847n
console.log(typeof bigNumber);


    // Non-primitive or reference Datatypes
// Array //types of objects
const heros = ["shaktiman", "Anand", "monkeyman"]
console.log(heros);
console.log(typeof heros); 

// Objects
let obj = {
    userName : "Abhisehk",
    age : 18
}
console.log(obj);
console.log(typeof obj);

// functions
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
