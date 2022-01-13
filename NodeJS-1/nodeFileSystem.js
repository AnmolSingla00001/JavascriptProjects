// How to read files
console.log("Practicing Node FileSystem");
const fs = require("fs");

console.log("Invoking the readFile");

fs.readFile("./files/nodeNotes.txt", "utf8", function (error, data) {
  console.log(data);
});

console.log("File1 might have been read");

const data2 = fs.readFileSync("./files/smallTxtFile", "utf8");
console.log(data2);
console.log("File2 has certainly been read");
