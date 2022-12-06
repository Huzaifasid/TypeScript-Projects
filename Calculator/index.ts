import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const stopIntro = async () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};
const intro = async () => {
  const introCal = chalkAnimation.rainbow("Welcome to Calculator App");
  await stopIntro();
  introCal.stop();
  console.log(` _____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
};
await intro();

const myCalculator = async () => {
  let input1 = await inquirer.prompt([
    {
      name: "number1",
      type: "number",
      message: "Enter First Value \n",
    },
  ]);
  let input2 = await inquirer.prompt([
    {
      name: "number2",
      type: "number",
      message: "Enter Second Value \n",
    },
  ]);
  let operations = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      choices: ["Addition", "Subtraction", "Multiplication", "Devision"],
      message: "Select Your Operator",
    },
  ]);
  let addition =
    operations.operator == "Addition" ? input1.number1 + input2.number2 : "";
  let subtraction =
    operations.operator == "Subtraction" ? input1.number1 - input2.number2 : "";
  let multiplication =
    operations.operator == "Multiplication"
      ? input1.number1 * input2.number2
      : "";
  let division =
    operations.operator == "Devision" ? input1.number1 / input2.number2 : "";

  if (operations.operator == "Addition") {
    console.log(chalk.redBright(addition));
  } else if (operations.operator == "Subtraction") {
    console.log(chalk.blueBright(subtraction));
  } else if (operations.operator == "Multiplication") {
    console.log(chalk.greenBright(multiplication));
  } else if (operations.operator == "Devision") {
    console.log(chalk.yellowBright(division));
  }
};

const continueAgain = async () => {
  do {
    await myCalculator();
    var playAgain = await inquirer.prompt([
      {
        name: "restart",
        type: "again",
        message: "Want to Continue? Press y or n !",
      },
    ]);
  } while (
    (await playAgain.restart) == "y" ||
    (await playAgain.restart) == "Y" ||
    (await playAgain.restart) == "yes" ||
    (await playAgain.restart) == "YES" ||
    (await playAgain.restart) == "Yes"
  );
  {
  }
};

continueAgain();
