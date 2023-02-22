// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`你叫什么名字? `, (answer) => {
//   console.log(`answer ${answer}!`);
//   readline.close();
// });

// const inquirer = require("inquirer");

// var questions = [
//   {
//     type: "input",
//     name: "name",
//     message: "你叫什么名字?",
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   console.log(`你好 ${answers["name"]}!`);
// });

const { jackInfo } = require("./car");
const { lisaInfo } = require("./car");
console.log("jackInfo", jackInfo);
jackInfo.name = "aaaa";
console.log("jackInfo", jackInfo);
console.log("lisaInfo", lisaInfo);
