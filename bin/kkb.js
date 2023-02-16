#!/usr/bin/env node
// console.log("CLI......521......嘿嘿嘿");

const program = require("commander");
const pak = require("../package.json");
const chalk = require("chalk");
const inquirer = require("inquirer");

program.version(pak.version);

program.option("-d, --debug", "我的调试", "默认值");

program
  .command("demo <word>")
  .description("输入样例")
  .action((word) => {
    console.log("word: ", chalk.yellow(word));
  });

program.command("ask").description("问题交互").action(getAge);

program
  .command("init <name>")
  .description("init project    ")
  .action(require("../lib/init"));

program.parse(process.argv);

async function getAge() {
  const question = [
    {
      type: "number", //type是交互的参数，这里选择输入类型
      name: "age", //name是这个问题用户输入结果的key，所有answer是一个对象
      message: "how old are you?", //这里是交互的问题
      default: "", //这个是问题答案的默认值，如果用户不输入则取该值
      validate: function (val) {
        console.log("val: ", val);
        const done = this.async();
        // Do async stuff
        if (!val) {
          // Pass the return value in the done callback
          done("you need to input age neccessarily");
          return;
        }
        // Pass the return value in the done callback
        done(null, true);
      },
    },
    {
      type: "confirm", //type是交互的参数，这里选择输入类型
      name: "sex", //name是这个问题用户输入结果的key，所有answer是一个对象
      message: "are you boy?", //这里是交互的问题
      default: "", //这个是问题答案的默认值，如果用户不输入则取该值
    },
    {
      type: "list", //type是交互的参数，这里选择输入类型
      name: "listChoose", //name是这个问题用户输入结果的key，所有answer是一个对象
      message: "list choose one?", //这里是交互的问题
      default: "", //这个是问题答案的默认值，如果用户不输入则取该值
      choices: ["list A", "list B", "list C"],
    },
    {
      type: "rawlist", //type是交互的参数，这里选择输入类型
      name: "rawlistChoose", //name是这个问题用户输入结果的key，所有answer是一个对象
      message: "rawlist choose one?", //这里是交互的问题
      default: "", //这个是问题答案的默认值，如果用户不输入则取该值
      choices: ["rawlist A", "rawlist B", "rawlist C"],
    },
  ];
  /** prompt会生成一个问题，同时在用户输入后对返回的promise进行决义，其参数是一个CLI执行过程中生成的输入聚合对象 */
  await inquirer.prompt(question).then((answer) => {
    console.log(`经过计算 answer: ${JSON.stringify(answer)}`);
  });
}
