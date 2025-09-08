let myDate = new Date()
// console.log(typeof myDate);     //Objects
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let createdDate = new Date(2024, 0, 23)     //months started from 0 in js
// console.log(createdDate.toDateString());

let secondCreatedDate = new Date(2024, 0, 23, 5, 3)   
// console.log(secondCreatedDate.toLocaleString());

let thirdCreatedDate = new Date("01-13-2001")     //in this type months started from 1
// console.log(thirdCreatedDate.toDateString());


let timesStamp = Date.now()
// console.log(timesStamp);
// console.log(thirdCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log([`Today date is ${newDate.getDate()} and day is ${newDate.getDay()}`]);

let secondDate = newDate.toLocaleString('default',{
    weekday: "long",
    day:"numeric"
})
console.log(secondDate);
