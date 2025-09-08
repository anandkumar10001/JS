    //Number
const score = 500
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance.toString().length);

const number = 123.42
// console.log(number.toPrecision(4));

const hundred = 1000000
// console.log(hundred.toLocaleString());
// console.log(hundred.toLocaleString('en-IN'));



    //Maths 
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(3.2));
// console.log(Math.min(3, 4, 5, 6));
// console.log(Math.max(3, 4, 5, 6));

console.log(Math.random());          //value always lie between 0 and 1
console.log((Math.random()*10) + 1); // value lie between 1 to 10 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)