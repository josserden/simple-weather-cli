import { API_KEY } from '../helpers/constants.js';
import { MESSAGE } from '../helpers/message.js';
import { printError, printSuccess } from '../services/log-service.js';
import { saveKeyValue } from '../services/storage-service.js';

export const saveApiKey = async (apiKey) => {
  if (!apiKey.length) {
    return printError(MESSAGE.ERROR.INVALID_API_KEY);
  }

  try {
    await saveKeyValue(API_KEY, apiKey);
    printSuccess(MESSAGE.SUCCESS.API_SAVE);
  } catch (error) {
    if (error.message === MESSAGE.ERROR.UNEXPECTED_TOKEN) {
      return printError(MESSAGE.ERROR.INVALID_FILE);
    }

    printError(error.message);
  }
};
