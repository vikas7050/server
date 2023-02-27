import fs from "fs";

export const expensiveop = () => {
  let largeBuffer = new Buffer.from(""),
    i,
    anotherBuffer = new Buffer.from("a");
  // fs = require("fs");

  for (i = 0; i <= 100000; i++) {
    largeBuffer = Buffer.concat([largeBuffer, anotherBuffer]);
  }

  fs.writeFile("a.txt", largeBuffer, (a, b) => {
    console.log(a, b);
  });
};
