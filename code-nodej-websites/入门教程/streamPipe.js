const Stream = require("stream");

const readableStream = new Stream.Readable({
  read() {},
});
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log("_write::: ", chunk.toString());
  next();
};

readableStream.on("readable", () => {
  console.log("readable:::", readableStream.read().toString());
});

readableStream.pipe(writableStream);

readableStream.push("hi!");
readableStream.push("ho!");
setTimeout(() => {
  readableStream.push("ho!");
}, 1000);

try {
  console.log(123123);
} catch (err) {
  console.log("err: ", err);
}

// console.log("process", process);
