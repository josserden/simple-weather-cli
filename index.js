#!/usr/bin/env node

import { getArgs } from './helpers/args.js';

const init = () => {
  const args = getArgs(process.argv);
  console.log(args);

  // if (args.h) {
  //   console.log('Help');
  // }

  // if (args.s) {
  //   console.log('Save city');
  // }

  // if (args.t) {
  //   console.log('Save token');
  // }
};

init();
