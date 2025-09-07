const userId = 10001
let userName = "Abhishek Raj"
var accountPassword = 65564 // Perfer not to use var because of issue in block scope and functional scope
accountCity = "Motihari"  //not use this
let accountState; // not define yet

console.table([userId, userName, accountPassword, accountCity, accountState]);

// userId = 735 not allowed
userName = "Anand"
accountPassword = 734859
accountCity = "Patna"

console.log(userId);
console.table([userId, userName, accountPassword, accountCity, accountState]);


