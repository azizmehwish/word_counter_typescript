#!/user/bin/env node
import inquirer from "inquirer"

let user_ans =await inquirer.prompt([{
    type:"input",
    name:"words",
    message:"please enter your sentence"
}])
let words_count =user_ans.words.trim().split(" ").length
console.log(`your sentence has ${words_count} words`)