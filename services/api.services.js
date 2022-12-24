import https from 'https';
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);

    if(!token) {
        throw new Error('Не заданий ключ API, введіть його через команду -t [API_KEY]');
    }

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');

    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'ua');
    url.searchParams.append('units', 'metric');

    https.get(url, (response) => {
        let res = '';

        response.on('data', (chunk) => {
            res += chunk;
        });

        response.on('end', () => {
            console.log(res);
        });
    });
};

export {
    getWeather
};