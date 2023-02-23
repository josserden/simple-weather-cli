import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')}: ${chalk.red(error)}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS')}: ${chalk.green(message)}`);
};

export const printHelp = () => {
  console.log(
    dedent`
    ${chalk.white.bgBlue.bold('HELP')}
    ${chalk.bold(dedent`without arguments - the program will show the weather for your current location
    -s [CITY] - set the city
    -t [API_KEY] - set the API key
    -h - to show help`)}
    `
  );
};
