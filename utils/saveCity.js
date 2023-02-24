import { CITY } from '../helpers/constants.js';
import { MESSAGE } from '../helpers/message.js';
import { printError, printSuccess } from '../services/log-service.js';
import { saveKeyValue } from '../services/storage-service.js';

export const saveCity = async (city) => {
  if (!city.length) {
    return printError(MESSAGE.ERROR.INVALID_CITY);
  }

  try {
    await saveKeyValue(CITY, city);
    printSuccess(MESSAGE.SUCCESS.CITY_SAVE);
  } catch (error) {
    if (error.message === MESSAGE.ERROR.UNEXPECTED_TOKEN) {
      return printError(MESSAGE.ERROR.UNEXPECTED_TOKEN);
    }

    printError(error.message);
  }
};
