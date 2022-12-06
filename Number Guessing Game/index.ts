#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'
import chalk from "chalk";
let randomNum = Math.floor(Math.random() * 10);



const stopIntro = async () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};
const intro = async () => {
  const introCal = chalkAnimation.rainbow("Welcome to Number Guessing App");
  await stopIntro();
  introCal.stop();
};
await intro();

const guessNumFunc = async () => {
  try {
    let guessNum: { num: number } = await inquirer.prompt({
      name: "num",
      type: "number",
      message: "Guess The Number \n",
    });
    guessNum.num === randomNum
      ? console.log(chalk.redBright(`Congragulations! You Guess it right ${guessNum.num}`))
      : console.log(chalk.redBright(`You guess it wrong ${randomNum}`));
    return guessNum;
  } catch (error) {
    console.log(error);
  }
};


const startAgain = async ()=>{
do {
   await guessNumFunc();
     var playAgain = await inquirer.prompt({
      name: "restart",
      type: "input",
      message: "Wanna Play Again? Press y to Play Again ",
    });
}
while (
    (await playAgain.restart) == "y" ||
    (await playAgain.restart) == "Y" ||
    (await playAgain.restart) == "yes" ||
    (await playAgain.restart) == "YES" ||
    (await playAgain.restart) == "Yes"
  );

}


startAgain();