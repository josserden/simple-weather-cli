import chalk from 'chalk';
import dedent from 'dedent-js';

import { MESSAGE } from '../helpers/message.js';
import { getWeather } from '../services/api-service.js';
import { printError } from '../services/log-service.js';
import { completeWeatherData } from './completeWeatherData.js';
import { printIcon } from './printIcon.js';

export const getForecast = async () => {
  try {
    const weather = await getWeather();
    const result = completeWeatherData(weather);

    const {
      currentIcon,
      currentTemp,
      currentFeelsLike,
      currentTempMin,
      currentTempMax,
      currentPressure,
      currentHumidity,
      currentWindSpeed,
      currentWindDeg,
      currentClouds,
    } = result;

    const icon = printIcon(currentIcon);
    const temp = chalk.cyan(`${currentTemp}°C`);
    const feelsLike = chalk.cyan(`${currentFeelsLike}°C`);
    const tempMin = chalk.cyan(`${currentTempMin}°C`);
    const tempMax = chalk.cyan(`${currentTempMax}°C`);
    const pressure = chalk.cyan(`${currentPressure} hPa`);
    const humidity = chalk.cyan(`${currentHumidity}%`);
    const windSpeed = chalk.cyan(`${currentWindSpeed} m/s`);
    const windDeg = chalk.cyan(`${currentWindDeg}°`);
    const clouds = chalk.cyan(`${currentClouds}%`);
    const city = chalk.yellow(result.currentCity);

    console.log(
      dedent(`
        ${chalk.underline.bold(city)}
        ${icon}  ${temp} (feels like ${feelsLike})
        ${MESSAGE.TEMPERATURE.MIN}: ${tempMin}
        ${MESSAGE.TEMPERATURE.MAX}: ${tempMax}
        ${MESSAGE.PRESSURE}: ${pressure}
        ${MESSAGE.HUMIDITY}: ${humidity}
        ${MESSAGE.WIND.SPEED}: ${windSpeed}
        ${MESSAGE.WIND.DEG}: ${windDeg}
        ${MESSAGE.CLOUDS}: ${clouds}
      `)
    );
  } catch (error) {
    if (error?.response?.status === 400) {
      return printError(MESSAGE.ERROR.INVALID_CITY);
    }

    if (error?.response?.status === 401) {
      return printError(MESSAGE.ERROR.INVALID_API_KEY);
    }

    if (error?.response?.status === 404) {
      return printError(MESSAGE.ERROR.NOT_FOUND);
    }

    printError(error.message);
  }
};
