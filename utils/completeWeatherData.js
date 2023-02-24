/*
{
  coord: { lon: 30.7326, lat: 46.4775 },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 4.24,
    feels_like: -1.03,
    temp_min: 4.24,
    temp_max: 4.24,
    pressure: 1020,
    humidity: 73,
    sea_level: 1020,
    grnd_level: 1013
  },
  visibility: 10000,
  wind: { speed: 8.68, deg: 181, gust: 11.8 },
  clouds: { all: 100 },
  dt: 1677229735,
  sys: { country: 'UA', sunrise: 1677213998, sunset: 1677252866 },
  timezone: 7200,
  id: 698740,
  name: 'Odesa',
  cod: 200
}
*/

export const completeWeatherData = (weather) => {
  const currentIcon = weather.weather[0].icon;
  const currentTemp = weather.main.temp;
  const currentFeelsLike = weather.main.feels_like;
  const currentTempMin = weather.main.temp_min;
  const currentTempMax = weather.main.temp_max;
  const currentPressure = weather.main.pressure;
  const currentHumidity = weather.main.humidity;
  const currentWindSpeed = weather.wind.speed;
  const currentWindDeg = weather.wind.deg;
  const currentClouds = weather.clouds.all;

  return {
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
  };
};
