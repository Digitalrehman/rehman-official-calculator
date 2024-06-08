#! /usr/bin/env node
import inquirer from "inquirer";
const userAnswer = await inquirer.prompt([
    {
        message: "Enetr your First Number",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Enetr your Second Number",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select your operator to the perform task",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (userAnswer.operator === "Addition") {
    console.log(`${"Your answer is"} ${userAnswer.FirstNumber + userAnswer.SecondNumber}`);
}
else if (userAnswer.operator === "Subtraction") {
    console.log(`${"Your answer is"} ${userAnswer.FirstNumber - userAnswer.SecondNumber}`);
}
else if (userAnswer.operator === "Multiplication") {
    console.log(`${"Your answer is"} ${userAnswer.FirstNumber * userAnswer.SecondNumber}`);
}
else if (userAnswer.operator === "Division") {
    console.log(`${"Your answer is"} ${userAnswer.FirstNumber / userAnswer.SecondNumber}`);
}
else {
    console.log("Please enter the valid numver");
}
