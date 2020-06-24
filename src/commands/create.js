const logo = require("../logo.js");
const chalk = require("chalk");
const shell = require("shelljs");
const { prompt: question } = require("inquirer");
const { clone } = require("../clone.js");
const ora = require("ora");

module.exports = {
  command: "create <project-name>",
  description: "create your project",
  action: async (name) => {
    try {
      logo.print`Demeter`;

      let project_name = "";

      // the answer will be a json object.
      // the question name will be the object's key.
      // the answer for the question will be the value.
      // answer[name] = user's answer.
      let answerForName = await question([
        {
          name: "ok",
          message: `Can ${name} be used as the project name:`,
          type: "list",
          choices: ["ok", "no, i want to give another one."],
          default: "ok",
        },
      ]);

      if (answerForName.ok === "ok") {
        project_name = name;
      } else {
        let answerForNewName = await question([
          {
            name: "name",
            message: "Please input your new project name:",
            type: "input",
          },
        ]);
        project_name = answerForNewName.name;
      }

      let answer = await question([
        {
          name: "oidc",
          message: "Do you need to integrate oidc-client into you project: ",
          type: "list",
          choices: ["yes", "no"],
          default: "yes",
        },
      ]);

      let repo = "bey6/demeter-base";
      console.log(chalk.yellowBright(`🎯 prepare to clone ${repo}`));
      await clone(repo, project_name);

      console.log(chalk.yellowBright(`🎯 npm i @docimax/oidc --save`));

      if (answer.oidc === "yes") {
        const process = ora(`${chalk.cyanBright("installing...")}\r\n`);
        try {
          process.start();
          shell.cd(project_name);
          // 把 oidc-client 集成进来
          let execPromise = new Promise((resolve, reject) => {
            try {
              shell.exec(
                "npm i @docimax/oidc --save",
                (code, stdout, stderr) => {
                  // code: 0: success; 1: error; 126: not enough rights; 127: no script.
                  // stdout: standard output
                  // stderr: standard error
                  console.log(`${chalk.blueBright("info:")} ${stdout}`);
                  if (code === 0) resolve(stdout);
                  else reject(stderr);
                }
              );
            } catch (error) {
              reject(error);
            }
          });
          let res = await execPromise;
          console.log("");
          console.log(`\r\n✔️${chalk.greenBright(" ok.")}`);
        } catch (error) {
          console.log("");
          console.log(`\r\n❌${chalk.redBright(" fail to install.")}`);
        } finally {
          process.stop();
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(chalk.yellowBright("🎊 finished."));
    }
  },
};
