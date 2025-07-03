const fs = require("fs");
const { Command } = require("commander");

const program = new Command();
console.log(__dirname);
program
  .name("counter")
  .description("CLI to count number of lines in a file")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "File to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err.message);
      } else {
        const lines = data.split(" ").length;
        console.log(`There are ${lines} lines in the file.`);
      }
    });
  });

program.parse();
