function displayCurrentWeather(currentWeather) {
  const currentTemp = document.querySelector('[data-current-temp]');
  const currentHumidity = document.querySelector('[data-current-humidity]');
  const currentWind = document.querySelector('[data-current-wind]');
  const currentIcon = document.querySelector('[data-current-icon]');
  const currentCondition = document.querySelector('[data-current-condition]');
  currentTemp.textContent = currentWeather.current.temp_c + 'C';
  currentHumidity.textContent = currentWeather.current.humidity;
  currentWind.textContent = currentWeather.current.wind_kph;
  currentCondition.textContent = currentWeather.current.condition.text;
  currentIcon.src = currentWeather.current.condition.icon;
}

export { displayCurrentWeather };
