//conversions and operations

let age=18;
console.log(typeof(age)); //number



let score="18";
console.log(typeof(score)); //string



let value=Number(score); //convert to number
console.log(typeof(value)); //number


let check="33abc";  //mixture of number and string
let checkconvert=Number(check); //convert 
console.log(typeof(checkconvert)); //print number but this is mixture of number & string
console.log(checkconvert) //NaN - not a number



// if value = null then return zero
// if value = undefined then return undefined



//boolean 
let islogin=1;
let typeislogin=Boolean(islogin); // convert 
console.log(typeof(typeislogin)); //boolean
console.log(typeislogin);//true


//1= true        0=false
//for empty string " " = return false
//for non-empty string "javascript" = return true




//string
let name=234;
let typestring=String(name)
console.log(typestring); //print 234
console.log(typeof(typestring)); //print string
