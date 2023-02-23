#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log-service.js';
import { saveKeyValue } from './services/storage-service.js';

const saveApiKey = async (apiKey) => {
  if (!apiKey.length) {
    return printError('Please provide an API key');
  }

  try {
    await saveKeyValue('apiKey', apiKey);
    printSuccess('API key saved');
  } catch (error) {
    if (error.message === 'Unexpected token a in JSON at position 1') {
      return printError('Invalid file. Please delete the file and try again.');
    }

    printError(error.message);
  }
};

const init = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.s) {
    saveKeyValue('city', args.s);
  }

  if (args.t) {
    return saveApiKey(args.t);
  }
};

init();
