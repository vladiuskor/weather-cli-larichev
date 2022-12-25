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

const printWeather = (result, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода у місті ${result.name}
        ${icon}  ${result.weather[0].description}
        Температура: ${result.main.temp} (відчувається як ${result.main.feels_like})
        Вологість: ${result.main.humidity}%
        швидкість вітру: ${result.wind.speed}
        `
    )
}

export {
    printError,
    printSuccess,
    printHelp,
    printWeather
}