import axios from 'axios';
import { API_KEY, CITY } from '../helpers/constants.js';
import { getKeyValue } from './storage-service.js';

export const getWeather = async () => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = process.env.API_KEY ?? (await getKeyValue(API_KEY));
  const city = process.env.CITY ?? (await getKeyValue(CITY));

  if (!apiKey) {
    throw new Error('Please set the API key. Use -t [API_KEY]');
  }

  const { data } = await axios.get(baseUrl, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',
    },
  });

  console.log(data);

  return data;
};
