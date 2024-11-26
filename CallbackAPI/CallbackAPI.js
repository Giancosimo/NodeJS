import { writeFile } from "node:fs";

const fileName = "text.txt";
const fileContent = "Hello, this is a text file created using fs.writeFile()!";

writeFile(fileName, fileContent, "utf8", (err) => {
  if (err) {
    console.log("Loading file crashed", err);
  } else {
    console.log(`File ${fileName} has been created successfully!`);
  }
});
