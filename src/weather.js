async function getWeatherData(city) {
  try {
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=4f0c6beb03e5414988d32546241603&q=${city}&days=3`,
      { mode: 'cors' },
    );
    const jsonWeatherData = await weatherData.json();
    return jsonWeatherData;
  } catch (err) {
    alert(err);
  }
}

function getTempCelcius(currentWeather) {
  return currentWeather.temp_c;
}

function getTempFarenheit(currentWeather) {
  return currentWeather.temp_f;
}

export { getWeatherData, getTempCelcius, getTempFarenheit };
