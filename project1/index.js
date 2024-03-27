"use strict";
// // // // let a = 20
// // // // let b = 30
// // // // let sum = a + b 
// // // // console.log(sum) // 50
Object.defineProperty(exports, "__esModule", { value: true });
//import { arr } from "./data"
// // // function sum(a,b){
// // //     return a+b
// // // }
// // // console.log(sum(50,30))
// // // // 
// // function funcnname(){
// //     return "Rabi"
// // }
// // funcnname()
// // let name1:string = funcnname()
// // console.log("Name is "+name1);
// function Firstname(){
// let total = 5+5
// return total 
// }
// let  name:string = Firstname()
// console.log("The value of Name is :"+name)
// function Myname(){
//     value = 4-1
//     return value 
// }
//  let Myname1:string = Myname
//  console.log(Myname1)
//  let arrowfunction =() : string =>{
//     let data =  "Hello World";
//     return data 
// }
// arrowfunction()
// console.log( arrowfunction())
// let arrowfunction = () =>{
//     let finalunit = 5-5 ;
//     return finalunit
// } ;
// arrowfunction()
// console.log(arrowfunction());
// let newfunctoin = ()=>{
//     return 4+4
// }
// let result = newfunctoin()
// console.log(result)
//ARGUMENTS AND PARAMETERS 
// let sum = ( val1 : number, val2 :number)=>{
// console.log(val1)
// console.log(val2)
// }
// sum(5,5)
// if else practice
// let userName: string | number | boolean =  "Bilal" ; 
// userName = "Bilal" ;
// userName = 123 ; 
// userName = true ; 
// let practice about module 
//  import { func , Newfunc } from "./service";
// func()
// Newfunc("Rabi")
// var prompt = require('prompt-sync')();
// let n1 = prompt ("please Enter your number");
// let n2 = prompt ("please Enter your second number");
// let operator = prompt ("enter your operator  + - * /");
// if (operator == "+"){
// console.log("The answer is", (Number(n1)+ Number(n2)));
// }
// else if (operator == "-"){
//     console.log("The answer is", (Number(n1)- Number(n2)));
//     }
//     else if (operator == "*"){
//         console.log("The answer is", (Number(n1)* Number(n2)));
//         }
//         else if (operator == "/"){
//             console.log("The answer is", (Number(n1)/ Number(n2)));
//             }
// lets practice for loop
// let n1:number = 2;
// for (let  i:number = 1; i <= 10; i++) {
//     console.log(`${n1} * ${i} = ${n1*i}`);
//     if(n1*i == 10 ){
//         break
//     }
// }
// let  n1 = 2
// for( let i:number = 1 ; i<=10; i++){
//     let ans = (n1*i)
//     console.log(n1 + " " + "*" + " " + i + "=" + ans );
// }
// // lets Make * Payramid
// let prompt = require ( `prompt-sync` ) ();
// let n:number= parseInt(prompt ("how many rows you required "))
// let a:string = ""
// for(let i = 1 ; i<=n ; i++){
//   for(let j = 1 ; j <= i ; j ++ ){
//     a+="*";
//   }
//   a +="/n"
// }
// console.log(a)
// export{}
// LETS PRACTICE SLICE AND SPLICE ARRAY
// let arr:string []= ["rashid", "rohail", "saleem", "asghar"];
// let newArr :string [] = arr.slice(1,3);
// console.log(newArr);
// console.log(arr);
// let arr:string [] = ["rashid", "rohail", "saleem", "asghar" ]
// let deletedarr,[] = arr.splice(1, 2, "ali" , "Rabi");
// console.log(deletedarr);
// console.log(arr);
// Lets Make a Calculator 
// let prompt = require  (`prompt-sync`)();
// let n1 = parseInt(prompt(("Enter first number")));
// let n2 = parseInt(prompt(("Enter Second number")));
// let operator = (prompt(("Enter first Operator (+,-,*,/)")));
// if(operator == "+"){
//     console.log(`${n1} ${operator} ${n2}= ${n1+n2}`);
// }else if(operator=="-")
//     console.log(`${n1} $ {operator} $ {n2} = ${n1 - n2}`);
//     else if(operator=="*")
//     console.log(`${n1} $ {operator} $ {n2} = ${n1 * n2}`);
//     else if(operator=="/")
//     console.log(`${n1} $ {operator} $ {n2} = ${n1 / n2}`);
// else console.log("Invalid Operator")
// export{}
// console.log (`hellow ${Name} would your like to learn python today`);
// let name:string = "Rabi"
// console.log (name.toLowerCase())
// console.log(name.toUpperCase());
// console.log(name);
// let name:string = "Rabi"
// console.log (`once ${name},"said nikhal bhaly"`);
//Task 09 on Dated 15/03/24
// let name:string =  "  \t  Rabi  \n  "   
// console.log ("before striping", name )
// console.log ("after striping", name.trim())
// let n1:number = 2+6
// let n2:number = 10-2
// let n3:number = 2*4
// let n4:number = 16/2
// console.log("ADDITION OF  VARIABLE IS EQUAL TO ", n1)
// console.log(" SUBTRACTOIN OF  VARIABLE IS EQUAL TO ", n2)
// console.log("MULTIPLICATOIN OF  VARIABLE IS EQUAL TO ", n3)
// console.log("DEVISION  OF  VARIABLE IS EQUAL TO ", n4)
// console.log(5+3);
// console.log(4+4);
// console.log(6+2);
// console.log(1+7);
// let faviorateNum:number = 25
// let massage :string = `My farioate number is ${faviorateNum}`
// console.log(massage);
// let val:string []= [ "Rabi","Sami","Subhan"];
// for(let i=0 ; i<val.length; i++){
//     console.log(val[i])
// let promt = require("prompt-sync");
// let n1  = Number(prompt("enter the first number"));
// let n2 = Number(prompt( "enter the second number"));
// let n3 = Number(prompt("Enter Your Desire Operator"));
// let operator =  (promt(["addition","subtractoin","multiplicatoin","devision"]));
// if( operator === "Additoin"){
//     console.log( "Your Answer is ", n1 + n2  )
// }
// else if (operator ==="subtractoin") {
//     console.log( "Your Answer is ", n1 - n2  )
// }
// else if (operator==="multiplicatoin") {
//     console.log( "Your Answer is ", n1 * n2  )
// }
// else if ( operator === "devisoin"){
//     console.log( "Your Answer is ", n1 / n2  )
// }
// else ( console.log("Invalid Input "))
// export{}
let prompt = require(`prompt-sync`)();
let n1 = parseInt(prompt("Enter your First Number"));
let n2 = parseInt(prompt("Enter your Second Number"));
let operator = (prompt("Enter your 1st Operator (+,-,*,/"));
if (operator == "+") {
    console.log(` ${n1} $ {operator} $ {n2} = ${n1 + n2} `);
}
else if (operator == "-") {
    console.log(`${n1} ${operator} ${n2} = ${n1 - n2}`);
}
else if (operator == "*") {
    console.log(`${n1} ${operator} ${n2}= ${n1 * n2}`);
}
else if (operator == "/") {
    console.log(`${n1} ${operator} ${n2} = ${n1 / n2}`);
}
else
    ("Enter Correct Operator");
