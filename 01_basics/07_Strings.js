const name = "Abhishek"
const age = 18
// console.log(name + age + " Value");  /not use in this way (not recommended)

// console.log(`Hello my name is ${name} and my age is ${age}`); // Recommended this

//
const gameName = new String('abhishek-raj')
// console.log(gameName);  
// console.log(gameName[0]); 
// console.log(gameName[1]); 
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('b'));

//
// console.log(gameName.split('-'));

//
const newString = gameName.substring(0, 4)
// console.log(newString);     //abhi  - fourth is not included

//
const anotherString = gameName.slice(-9, 4)
// console.log(anotherString);

//
const userName = "     Abhishek      "
// console.log(userName);
// console.log(userName.trim());

//
const url = "https://abhisehk.com/ab%20ab"
console.log(url.replace('%20', '-'))
console.log(url.includes('ab'));