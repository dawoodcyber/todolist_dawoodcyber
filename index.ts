#! /usr/bin/env node
import inquirer from "inquirer"
let list:string[]=[];
let flag= true;
console.log("\n\tTODO LIST");

while(flag != false)
{
let todo= await inquirer.prompt([
    {
        name:"do",
        type:"input",
        message:"What do you want to add?"
    },
    {
        name:"addDo",
        type:"confirm",
        message:"Do you want to add More?",
        default:false
        }
])
flag = todo.addDo;
list.push(todo.do);
console.log(list);
}
