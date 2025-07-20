//print in js
console.log("Hello World!");



//Variables
const accountId=144553   //const - cannot be changed 
//variable can be declared by let and var both 
let accountEmail="learn@google.com"   //scope based
var accountPass="12345"   //not recommended to use var because of block and functional issue
accountCity="Jaipur"   
let accountState; 


//update the values

// accountId=12345 - declared as constant so changes not allowed
accountEmail="change@google.com"    //updated
accountPass="67895"          //updated
accountCity="Raipur"             //updated
console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);


//to print at once in tabular form
console.table([accountId, accountEmail, accountPass, accountCity, accountState])


//IMPORTANT POINTS
// → semicolon(;) is not mandatory 
// → if a variable is initialized without any value then it will return undefined
