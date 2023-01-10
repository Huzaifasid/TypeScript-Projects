#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let todos = [];
let loop = true;
const stopIntro = async () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
const intro = async () => {
    const introCal = chalkAnimation.rainbow("Welcome to Huzaifa TODO App");
    await stopIntro();
    introCal.stop();
};
await intro();
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "Add Your Todo Please! \n",
        },
        {
            type: "confirm",
            name: "TodoMore",
            message: "Wanna add another todo? ",
            default: false,
        },
    ]);
    const { Todo, TodoMore } = answers;
    loop = TodoMore;
    Todo
        ? todos.push(Todo)
        : console.log(chalk.red("Kindly Add at least one todo"));
}
if (todos.length > 0) {
    console.log(chalk.blueBright("Your Todo List! "));
    todos.forEach((val) => {
        console.log(chalk.greenBright(val));
    });
}
