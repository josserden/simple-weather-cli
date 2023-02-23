import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const storagePath = join(homedir(), 'weather-cli.json');

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

const getData = async () => {
  let data = {};

  if (await isExist(storagePath)) {
    const file = await promises.readFile(storagePath);
    data = JSON.parse(file);
  }

  return data;
};

export const getKeyValue = async (key) => {
  const data = await getData();

  return data[key] ?? undefined;
};

export const saveKeyValue = async (key, value) => {
  const data = await getData();

  data[key] = value;

  await promises.writeFile(storagePath, JSON.stringify(data));

  return homedir();
};
