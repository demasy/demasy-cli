const { logger } = require("@demasy/demasy-core");
const loggerLabel = "cmd";

const command = "init [dir]";

exports.command = command;
exports.describe = "Create an empty repo with a project directory structure.";
exports.aliases = ["i"];

exports.builder = {
  dir: {
    default: ".",
  },
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
