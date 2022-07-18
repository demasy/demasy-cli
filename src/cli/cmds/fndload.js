const { logger } = require("@demasy/demasy-core");
const cli = require("../../../src/services/cli.js");

const loggerLabel = "fndload";

const command = 'fndload <action> <type> <app> <lang> <object> [objects..]';

exports.command = command;

// exports.aliases = ["fnd", "aol"];
exports.describe =
  "Migrate Oracle application object library (AOL) components between instances.";

exports.builder = (yargs) => {

  logger.log({ label: loggerLabel, level: "debug",message: "start builder" });

  yargs
    .positional("action", {
      type: "string",
      describe: "fndload",
      choices: ["download", "Upload", "d", "u"],
    })
    .positional("type", {
      type: "string",
      describe: "type",
      choices: ["message", "lookup"],
    })
    .positional("app", {
      type: "string",
      alias: "appl",
      default: "xxd",
      describe: "Oracle application short name",
      conflicts: "xx",
      implies: "",
      normalize: "",
      coerce: (app) => {
        app = app.toLowerCase();
        return app;
      },
    })
    .positional("lang", {
      type: "string",
      default: "us",
      describe: "Oracle application language",
    });

  logger.log({ label: loggerLabel, level: "debug", message: "end builder" });
};

exports.handler = (argv) => {
  logger.log({ label: loggerLabel, level: "debug", message: "start handler" });
  
  if (
    (argv.action != null,
    argv.action != "download" &&
      argv.action != "d" &&
      argv.action != "upload" &&
      argv.action != "u")
  ) {
    var action = argv.action;
    if (action == undefined) {
      action = "empty";
    }

    console.error(
      "\x1b[31m",
      "[",
      "action=>",
      action,
      "]",
      'You should choose the correct action! ["download","upload"]'
    );
    process.exit(1);
  }

  // if (argv.action != "upload" ) {
  //   console.error(
  //     "[","action=>",
  //     argv.action,
  //     "]",
  //     "You should be choose correct action!"
  //   );
  //   process.exit(1);
  // }

  // if (argv.action != "download") {
  //   throw new Error("NOT download");
  // }

  logger.log({
    label: loggerLabel,
    level: "debug",
    message: "action: " + argv.action,
  });
  logger.log({
    label: loggerLabel,
    level: "debug",
    message: "type: " + argv.type,
  });
  logger.log({
    label: loggerLabel,
    level: "debug",
    message: "app: " + argv.app,
  });
  logger.log({
    label: loggerLabel,
    level: "debug",
    message: "lang: " + argv.lang,
  });
  logger.log({
    label: loggerLabel,
    level: "debug",
    message: "object: " + argv.object,
  });

  cli.log({level: "prompt", message:" \n Output:" });
  // console.log(" --------------------------");

  cli.log({level: "text", message:" --------------------------" });

  // console.log(" Success:");
  cli.log({level: "text", message:" Success:" });

  if (argv.action == "download" || argv.action == "d") {
    // console.log(
    //   color.green,
    //   "   - [am_" + argv.object + "_" + argv.lang + "] has been downloaded"
    // );

    cli.log({level: "success", message: "   - [am_" + argv.object + "_" + argv.lang + "] has been downloaded" });

  }
  if (argv.action == "upload" || argv.action == "u") {
    logger.log({
      label: loggerLabel,
      level: "info",
      message:
        "  - [am_" + argv.object + "_" + argv.lang + "] has been uploaded.",
    });

    // console.log(
    //   color.green,
    //   "   - [am_" + argv.object + "_" + argv.lang + "] has been uploaded"
    // );

    cli.log({level: "success", message:"   - [am_" + argv.object + "_" + argv.lang + "] has been uploaded" });
  }

  cli.log({level: "text", message:" Errors:" });
  cli.log({level: "failure", message: "   No Errors" });
  cli.log({level: "text", message: "\n ------------- Ended ------------- \n" });

  logger.log({ label: loggerLabel, level: "debug", message: "End Handler" });
};

const color = {
  red: "\x1b[31m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
  green: "\x1b[32m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
  cyan: "\x1b[36m%s\x1b[0m",
};
