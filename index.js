#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log-service.js';
import { getForecast } from './utils/getWeather.js';
import { saveApiKey } from './utils/saveApiKey.js';
import { saveCity } from './utils/saveCity.js';

const init = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveApiKey(args.t);
  }

  getForecast();
};

init();
