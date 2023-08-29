// console.log("hello world");
// we can use arrays and functions within object
// Object syntax
// use to save data 
// let object ={
//     key1: "key1",
//     key2: "key2",
// }

// let sudentone = {
//     name: "Shahbaz",
//     age: "32",
//     rollnumber: 112211,
//     isTeacer: true
// }



// let a = "shahbaz"
// a = "tahir"


import { Sum } from "./add.js";
import { sub } from "./substract.js";
import { dev } from "./devide.js";
import { multi } from "./multiply.js";
import inquirer from "inquirer";

const num1 = await inquirer.prompt({
    message: "enter first num",
    type: "number",
    name: "firstnum"
})

const num2 = await inquirer.prompt({
    message: "enter second num",
    type: "number",
    name: "secondnum"
})

let resultsum = Sum(num1.firstnum, num2.secondnum);
let resultsub = sub(num1.firstnum, num2.secondnum);
let resultdev = dev(num1.firstnum, num2.secondnum);
let resultmulti = multi(num1.firstnum, num2.secondnum);
console.log("The result of sum is " + resultsum);
console.log("The result of subtraction is " + resultsub);
console.log("The result of division is " + resultdev);
console.log("The result of multiplication is " + resultmulti);