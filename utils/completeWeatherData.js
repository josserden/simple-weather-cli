export const completeWeatherData = (weather) => {
  const currentCity = weather.name;
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
    currentCity,
  };
};
