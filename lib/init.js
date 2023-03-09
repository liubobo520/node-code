const { promisify } = require("util");
const figlet = promisify(require("figlet"));

const clear = require("clear");
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");

const spawn = async (...args) => {
  const { spawn } = require("child_process");
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
    proc.on("error", (err) => {
      console.log("%c 123 err:", "color: #0e93e0;background: #aaefe5;", err);
    });
  });
};

module.exports = async (name) => {
  // 打印欢迎界面
  clear();
  console.log("init name: ", name);
  const data = await figlet("ACI Welcome");
  log(data);

  // clone 代码
  log(`biu biu biu  创建项目:  ${name}`);
  // https://github.com/su37josephxia/vue-sample
  await clone("github:su37josephxia/vue-sample", name);
  // https://gitlab.com/flippidippi/download-git-repo-fixture.git
  // await clone(
  //   "direct:https://gitlab.com/flippidippi/download-git-repo-fixture.git",
  //   "test",
  //   { clone: true }
  // );

  // 自动安装依赖
  log("安装依赖 ----------");
  // await spawn("npm", ["install"], { cwd: `./${name}`, shell: true });
  await spawn("yarn", [""], { cwd: `./${name}`, shell: true });
  log(`
    OK 安装完成：
    To get Start:
  ===========================
      cd ${name}
      npm run serve
  ===========================
    `);

  // 启动项目
  // await spawn("npm", ["run start"], { cwd: `./${name}`, shell: true });
};
