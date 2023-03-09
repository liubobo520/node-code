const path = require("path");
const fs = require("fs");

const handleReadFile = () => {
  const filePath = path.join(__dirname, "article.txt");
  console.log("filePath: ", filePath);
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log("handleReadFile err:", err);
    }
    console.log("data: ", data);
    const newArr = [];
    data.split(" ").forEach((el) => {
      el && newArr.push(el?.replace(":", "=") + ";");
    });
    const newStr = newArr.join("\r\n");
    handleWriteFile(newStr);
  });
};

const handleWriteFile = (data) => {
  const targetPath = "./article/inner";
  console.log("handleWriteFile targetPath", targetPath);
  fs.stat(targetPath, async (err, stats) => {
    console.log("%c  stats:", "color: #0e93e0;background: #aaefe5;", stats);
    if (err) {
      // 此处要注意死循环调用
      return await fs.mkdir(targetPath, { recursive: true }, (err) => {
        if (err) throw err;
        handleWriteFile(data);
      });
    }
    await fs.writeFile(targetPath + "/bbb.txt", data, function (err, data) {
      if (err) {
        console.log("err:", err);
      }
      console.log("写入成功");
    });
  });
};
handleReadFile();
