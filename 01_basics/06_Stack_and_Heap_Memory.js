// Stack (Primitive Datatypes)
let myName = "Abhisehk"
let anotherName = myName
anotherName = "Anand"

console.log(myName);        //Abhisehk
console.log(anotherName);   //Anand


// Heap (Reference Datatypes)
let userOne = {
    email : "xyz@gmail.com",
    upi : "user@ypl"
}

let userTwo = userOne
userTwo.email = "abhisehk@gmail.com"
console.log(userOne.email);  //abhisehk@gmail.com
console.log(userTwo.email);  //abhisehk@gmail.com
