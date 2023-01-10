#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
interface Anstype {
  words: string;
}

const stopIntro = async () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};
const intro = async () => {
  const introCal = chalkAnimation.rainbow(
    "Welcome to Huzaifa Word Counter App"
  );
  await stopIntro();
  introCal.stop();
};
await intro();
const answer: Anstype = await inquirer.prompt({
  type: "input",
  name: "words",
  message: "Enter Your Sentence! \n",
});
const { words } = answer;
if (words) {
  const splitting = words.trim().split(" ");
  const result = splitting.length;
  console.log(
    chalk.greenBright("Total Number Of Words In Your Sentence Is ") +
      chalk.redBright(result)
  );
} else {
  console.log(chalk.red("Please Enter Your Sentence!"));
}
