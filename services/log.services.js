import chalk from 'chalk';
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметрів - вивід погоди
        -s [CITY] для встановлення міста
        -h для виводу допомоги
        -t [API_KEY] для збереження токену
        `
    )
}

export {
    printError,
    printSuccess,
    printHelp
}