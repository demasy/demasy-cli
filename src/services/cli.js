const config = require("config");
const winston = require("winston");
const { createLogger } = require("winston");
// const {consoleConfig} =require("../config/cli.js");

const cliLevels = {
  levels: {
    print: 0,
    prompt:0,
    text:0,
    info: 0,
    success: 0,
    failure: 0
  },
  colors: {
    print: 'white',
    prompt: 'bold black',
    text: 'black',
    info: 'yellow',
    success: 'green',
    failure:'red'

    // print: process.env.LOG_CLI_PRINT_COLOR || config.get('demasy.cli.console.levels.color.print'),
    // prompt: process.env.LOG_CLI_PROMPT_COLOR || config.get('demasy.cli.console.levels.color.prompt'),
    // text: process.env.LOG_CLI_PROMPT_COLOR || config.get('demasy.cli.console.levels.color.text'),
    // info: process.env.LOG_CLI_INFO_COLOR || config.get('demasy.cli.console.levels.color.info'),
    // success: process.env.LOG_CLI_SUCCESS_COLOR || config.get('demasy.cli.console.levels.color.success'),
    // failure: process.env.LOG_CLI_FAILURE_COLOR || config.get('demasy.cli.console.levels.color.failure')
  },
};

winston.addColors(cliLevels.colors);

const cliformat = winston.format.combine(
  winston.format.printf((log) => `${log.message}`)
);

module.exports = createLogger({
  levels: cliLevels.levels,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        cliformat,
        winston.format.colorize({ all: true })
      ),
    }),
  ],
  exitOnError: false,
  silent: false,
});


