#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log-service.js';

const init = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  // if (args.s) {
  //   console.log('Save city');
  // }

  // if (args.t) {
  //   console.log('Save token');
  // }
};

init();
