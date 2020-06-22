const chalk = require('chalk');
const getNotes = require('./notes');
const log = console.log;

const inverseError = chalk.bold.inverse.red;

log(getNotes());

log(chalk.greenBright('Success!'));

log(inverseError('INVERTED ERR'));
