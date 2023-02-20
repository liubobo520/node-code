// # Node.js 从命令行接收参数
// //node app.js name=joe aaa=123
// process.argv.forEach((val, index) => {
//   console.log("forEach::: ", `${index}: ${val}`);
// });

// const args = process.argv.slice(2);
// console.log("args", args);

// // node app.js --name=joe --aaa=123
// const args1 = require("minimist")(process.argv.slice(2));
// console.log("args1.name:", args1["name"]);

// # 使用 Node.js 输出到命令行
// const x = "x";
// const y = "y";
// console.log(x, y);
// console.log("我的%s已经%d岁", "猫", 2.2);
// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象
// console.log("%o", Number);

// setTimeout(() => {
//   console.clear();
// }, 2000);

// const x1 = 1;
// const y1 = 2;
// const z = 3;
// console.count("x1 的值为 " + x1 + " 且已经检查了几次？");
// console.count("x1 的值为 " + x1 + " 且已经检查了几次？");
// console.count("y1 的值为 " + y1 + " 且已经检查了几次？");

// const oranges = ["橙子", "橙子", "橙子"];
// const apples = ["苹果"];
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// apples.forEach((fruit) => {
//   console.count(fruit);
// });

// 打印函数的调用堆栈踪迹
// const function2 = () => console.trace();
// const function1 = () => function2();
// function1();

// 可以使用 time() 和 timeEnd() 轻松地计算函数运行所需的时间
// const doSomething = () => console.log("测试");
// const measureDoingSomething = () => {
//   console.time("timers()");
//   //做点事，并测量所需的时间。
//   doSomething();
//   console.timeEnd("timers()");
// };
// measureDoingSomething();

// console.log("\x1b[33m%s\x1b[0m", "你好");

// const chalk = require("chalk");
// console.log(chalk.yellow("你好，李焕英"));

// 创建进度条
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 500);
