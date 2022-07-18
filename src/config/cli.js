const config = require('config');

module.exports.consoleConfig = {
    print: process.env.LOG_CLI_PRINT_COLOR || config.get('demasy.cli.console.levels.color.print'),
    prompt: process.env.LOG_CLI_PROMPT_COLOR || config.get('demasy.cli.console.levels.color.prompt'),
    text: process.env.LOG_CLI_PROMPT_COLOR || config.get('demasy.cli.console.levels.color.text'),
    info: process.env.LOG_CLI_INFO_COLOR || config.get('demasy.cli.console.levels.color.info'),
    success: process.env.LOG_CLI_SUCCESS_COLOR || config.get('demasy.cli.console.levels.color.success'),
    failure: process.env.LOG_CLI_FAILURE_COLOR || config.get('demasy.cli.console.levels.color.failure')
  };

  // module.exports.consoleSettingConfig = {
  //   print: process.env.LOG_CLI_PRINT_COLOR || config.get('demasy.cli.console.setting.exitOnError'),
  //   prompt: process.env.LOG_CLI_PROMPT_COLOR || config.get('demasy.cli.console.setting.silent') 
  // };
