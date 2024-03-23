#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number -Done
// user input for guessing number game -Done
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const userInput = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Enter Number Between 1-10"
    }
]);
if (userInput.userInput === randomNumber) {
    console.log("Congtratulations you Guessed a right number");
}
else {
    console.log("You Guessed a wrong number");
}
