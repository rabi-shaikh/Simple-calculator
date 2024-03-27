#! user/bin/env node 
let prompt = require  (`prompt-sync`) ()
let n1 = parseInt( prompt("Enter your First Number"))
let n2 = parseInt( prompt("Enter your Second Number"))
let operator = ( prompt("Enter your 1st Operator (+,-,*,/"))
if (operator == "+"){
    console.log(` ${n1} $ {operator} $ {n2} = ${n1+n2} `)
}
    else  if(operator == "-"){
        console.log (`${n1} ${operator} ${n2} = ${n1-n2}`)
    }
    else if (operator == "*"){
        console.log (`${n1} ${operator} ${n2}= ${n1*n2}`)
    }
    else if (operator == "/"){
        console.log (`${n1} ${operator} ${n2} = ${n1/n2}`)
    }
    else ("Enter Correct Operator")
      export{}
