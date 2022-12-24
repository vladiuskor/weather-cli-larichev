#!/usr/bin/env node

import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError} from "./services/log.services.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.services.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError('Токен не переданий');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен збережений!');
    } catch (error) {
        printError(error.message);
    }
}

const getForecast = async () => {
    try {
        const weather = await getWeather('ternopil');
        console.log(weather);

    } catch(error) {
        if(error?.response?.status === 404) {
            printError('Невірно вказане місто!');
        } else if (error?.response?.status === 401) {
            printError('Невірно вказано токен!');
        } else {
            printError(error.message);
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    }

    if (args.s) {
        // Save city
    }

    if (args.t) {
        return saveToken(args.t)
    }
    getForecast();
    //Output weather
};

initCLI();