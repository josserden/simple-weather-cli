import { MESSAGE } from '../helpers/message.js';
import { getWeather } from '../services/api-service.js';
import { printError } from '../services/log-service.js';

export const getForecast = async () => {
  try {
    const weather = await getWeather();
    return weather;
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
