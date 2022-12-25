#!/usr/bin/env node

import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError, printWeather} from "./services/log.services.js";
import {saveKeyValue, TOKEN_DICTIONARY, getKeyValue} from "./services/storage.service.js";
import {getIcon, getWeather} from "./services/api.services.js";

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

const saveCity = async (city) => {
    if(!city.length) {
        printError('Місто не передано');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('Місто збережено!');
    } catch (error) {
        printError(error.message);
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
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
        return printHelp();
    }

    if (args.s) {
        return saveCity(args.s);
    }

    if (args.t) {
        return saveToken(args.t)
    }
    return getForecast();
};

initCLI();