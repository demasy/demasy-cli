const { logger } = require("@demasy/demasy-core");
const loggerLabel = "demasy";

const color = {
  red: "\x1b[31m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
  green: "\x1b[32m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
  cyan: "\x1b[36m%s\x1b[0m",
};

const command = ["demasy", "$0", "*"];

exports.command = command;

// exports.command = "$0";
exports.describe = "";
exports.builder = {
  about: {},
};

exports.handler = function (argv) {
  console.log(color.yellow, "  ------------------------------------");
  console.log(color.yellow, " | ***         Demasy CLI!        *** |");
  console.log(color.yellow, " ------------------------------------");
  console.log(color.yellow, " |       - By: Ahmed El-Demasy -      |");
  console.log(color.yellow, " |        *** www.demasy.io ***       |");
  console.log(color.yellow, " |      *** founder@demasy.io ***     |");
  console.log(color.yellow, "  ------------------------------------");
  console.log("\n");

  try {
    throw `You should enter the correct command! please use the help to learn more about [${argv.$0}] CLI.`;
  } catch (error) {
    logger.log({
      label: loggerLabel,
      level: "notice",
      message: `Your Command> [${argv.$0}] <${argv._}>`,
    });
    logger.log({
      label: loggerLabel,
      level: "notice",
      message: `CLI command syntax> "<${argv.$0}> <command name> [optional]" `,
    });
    logger.log({
      label: loggerLabel,
      level: "notice",
      message: `Use the help command to learn more about [demasy] CLI commands > "${argv.$0} -help"`,
    });
    logger.log({ label: loggerLabel, level: "error", message: "" + error });
  }

  process.exit(1);
};
