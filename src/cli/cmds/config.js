const { logger } = require("@demasy/demasy-core");
const loggerLabel = "cmd";

const command = "config";

exports.command = command;
exports.describe = "Set CLI configuration before using this APP.";
exports.aliases = ["cfg", "c"];

exports.builder = {
  // database: {
  //   default: "cool",
  // },
  // batman: {
  //   default: "sad",
  // },
};

exports.handler = function (argv) {
  try {
    throw `"The [${command}] command is not configured in this CLI version.`;
  } catch (error) {
    logger.log({ label: loggerLabel, level: "error", message: "" + error });
    process.exit(1);
  }
};

const color = {
  red: "\x1b[31m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
  green: "\x1b[32m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
  cyan: "\x1b[36m%s\x1b[0m",
};
