#!/usr/bin/env node

const { logger } = require("@demasy/demasy-core");
const loggerLabel = "cli";

const demasy = require("../../cli/cmds/demasy.js");
const init = require("../../cli/cmds/init.js");
const config = require("../../cli/cmds/config.js");
const fndload = require("../../cli/cmds/fndload.js");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { exitProcess } = require("yargs");
const cli = require("../../../src/services/cli.js");
const {consoleConfig} =require("../../../src/config/console.js");

cli.log({level:'failure', message:"\n  *** Welcome to the Demasy CLI! *** \n" });


logger.log({
  label: "CLI",
  level: "debug",
  message: "start Demasy CLI!",
});

try {
  yargs(hideBin(process.argv))
    .epilog("Copyright (c) 2022 Demasy <www.demasy.io> \n")
    .check((argv, options) => {
     
      logger.log({
        label: "CLI",
        level: "debug",
        message: "start check",
      });

      const args = argv._;
      logger.log({
        label: "CLI",
        level: "debug",
        message: "args " + args,
      });

      logger.log({
        label: "CLI",
        level: "debug",
        message: "end check",
      });
      return true;
    })
    // .commandDir('../../cli/cmds')
    .command(demasy)
    .command(init)
    .command(config)
    .command(fndload)
    .options({
      help: { alias: "h", description: "Show help" },
      version: { alias: "v", description: "Show version number" },
    })
    .wrap(72)
    .parse();
} catch (err) {
  logger.log({
    label: loggerLabel,
    level: "error",
    message: "CLI " + err,
  });
  process.exit(1);
}

logger.log({
  label: "CLI",
  level: "debug",
  message: "end Demasy CLI!",
});
