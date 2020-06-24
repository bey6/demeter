const figlet = require("figlet");
const chalk = require("chalk");

module.exports.print = function (msg) {
  console.log(
    chalk.greenBright(
      figlet.textSync(
        msg,
        {
          font: "Larry 3D 2",
          horizontalLayout: "default",
          verticalLayout: "default",
        },
        (err, data) => {
          if (err) {
            console.dir(err);
            return;
          }
          console.log(data);
        }
      )
    )
  );
};
