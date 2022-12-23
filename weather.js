#!/usr/bin/env node

import {getArgs} from './helpers/args.js';
import {printHelp} from "./services/log.services.js";
const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    }

    if (args.s) {
        // Save city
    }

    if (args.t) {
        // Save token
    }

    //Output weather
};

initCLI();