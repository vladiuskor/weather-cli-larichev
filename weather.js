#!/usr/bin/env node

import {getArgs} from './helpers/args.js';
import {printHelp, printSuccess, printError} from "./services/log.services.js";
import {saveKeyValue} from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Токен збережений!');
    } catch (error) {
        printError(error.message);
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

    //Output weather
};

initCLI();