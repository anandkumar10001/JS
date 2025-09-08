//Array
const myArr = [1, 2, 3, 4, 5]
const heros = ["Shaktiman", "Anand", "Deol"]
const newArr = new Array(4, 3, 2, 6)
// console.log(myArr[0]);
// console.log(heros);
// console.log(newArr);

// Array Methods
// myArr.push(4)  //adding new value
// console.log(myArr);

// newArr.pop()   //removing last value
// console.log(newArr);

// myArr.unshift(9)    //adding value to first
// console.log(myArr);

// myArr.shift()          //removing first value
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));


const oldArr = myArr.join()
// console.log(myArr);
// console.log(typeof myArr);
// console.log(oldArr);
// console.log(typeof oldArr);

    //slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)      // slice include last value
console.log(myn1);
console.log("B",  myArr);

const myn2 = myArr.splice(1, 3) //splice manipulate the original arr and also inducle last value
console.log("C", myArr);
console.log(myn2);


