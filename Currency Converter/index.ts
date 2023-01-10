#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
interface conditon {
  from: "PKR" | "EURO" | "USD";
  to: "PKR" | "EURO" | "USD";
  amount: number;
}
const conversion = {
  PKR: {
    USD: 0.0044,
    EURO: 0.0041,
    PKR: 1,
  },
  USD: {
    PKR: 227.17,
    EURO: 0.93,
    USD: 1,
  },
  EURO: {
    PKR: 243.79,
    USD: 1.07,
    EURO: 1,
  },
};

const stopIntro = async () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};
const intro = async () => {
  const introCal = chalkAnimation.rainbow(
    "Welcome to Huzaifa Currency Converter App"
  );
  await stopIntro();
  introCal.stop();
};
await intro();

const answer: conditon = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    choices: ["PKR", "EURO", "USD"],
    message: "Select Your Current Currency! ",
  },
  {
    type: "list",
    name: "to",
    choices: ["PKR", "EURO", "USD"],
    message: "Select Conversion Currency! ",
  },
  {
    type: "number",
    name: "amount",
    message: "Enter Amount You Want To Convert! ",
  },
]);

const { from, to, amount } = answer;
if (from && to && amount) {
  const result = conversion[from][to] * amount;
  console.log(
    chalk.green(`Your Converted Value from ${from} to ${to} is ${result}`)
  );
} else {
  console.log(chalk.redBright("Invalid Value"));
}
