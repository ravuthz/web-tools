const program = require("commander");

program.version("1.0.0").description("A simple node-cli");

program
  .command("ytd")
  .requiredOption("-l, --link <link>", "A youtube video link or id")
  .option("-n, --name [name]", "Name of the downloaded file")
  .action((cmObj) => {
    let { link, name } = cmObj;
    console.log(link, name);
  });
program.parse(process.argv);
