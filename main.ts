#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance =10000; //Dollar
let myPin = 12345;

let pinAnwers = await inquirer.prompt(
    [{
    name: "pin",
    message:"enter your pin",
    type:"number"
}]
);
if (pinAnwers.pin === myPin){
    console.log("correct pin code!!!!")

let operationAns= await inquirer.prompt(
    [
        {
            name: "operation",
            message:"please select the option",
            type:"list",
            choices:["withdraw","check balance"]
        
        }
    ]  
);
    console.log(operationAns);
    if(operationAns.operation==="withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"enteryour amount",
                    type:"number"


                }
            ]
        )
        myBalance -= amountAns.amount
        console.log("your remaining balance is:" + myBalance)
    }else if ( operationAns.operation ==="check balance"){
        console.log("your balance is :"+ myBalance)

    }

} else{ 
    console.log("incorrect pin number")
}
