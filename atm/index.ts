#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

interface optionType {
  atmPin: number;
  accountType: string;
  transactionType: string;
  amount: number;
}

const stopIntro = async () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};
const intro = async () => {
  const introCal = chalkAnimation.rainbow("Welcome to Huzaifa ATM");
  await stopIntro();
  introCal.stop();
  console.log("Enter 4 digit PIN ");
};
await intro();

const answers: optionType = await inquirer.prompt([
  {
    type: "number",
    name: "atmPin",
    message: "Please Enter You PIN: ",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],
    message: "Select Transaction Type: ",
    when(answers) {
      const pinLength = answers.atmPin.toString().length;
      if (pinLength == 4) {
        return answers.atmPin;
      } else {
        console.log("Please Enter Only 4 digits PIN ");
      }
    },
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", "WithDraw"],
    message: "Select Transaction Type: ",
    when(answers) {
      return answers.accountType;
    },
  },
  {
    type: "list",
    name: "amount",
    choices: [1000, 2000, 5000, 10000],
    message: "Select Amount ",
    when(answers) {
      return answers.transactionType == "Fast Cash";
    },
  },
  {
    type: "number",
    name: "amount",
    message: "Enter Amount ",
    when(answers) {
      return answers.transactionType == "WithDraw";
    },
  },
]);

const pinLength = answers.atmPin.toString().length;

if (answers.atmPin && pinLength == 4) {
  const accountBal = Math.floor(Math.random() * 10000);
  const userAmount = answers.amount;
  if (accountBal >= userAmount) {
    const remainingBal = accountBal - userAmount;
    console.log(
      chalk.blue(`You have Succesfully Withdraw Your Amount of ${userAmount}`)
    );
    console.log(chalk.greenBright(`Your Remaining Balance is ${remainingBal}`));
  } else {
    console.log(chalk.red(`You Have Insufficient Balance of  ${accountBal}`));
  }
}
