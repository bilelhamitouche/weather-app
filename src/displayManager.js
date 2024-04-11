function displayCurrentWeather(weatherData) {
  const temperature = document.querySelector('[data-temperature]');
  const condition = document.querySelector('[data-condition]');
  const conditionImage = document.querySelector('[data-condition-image]');
  condition.textContent = weatherData.current.condition.text;
  temperature.textContent = weatherData.current.temp_c + '°C';
  conditionImage.src = weatherData.current.condition.icon;
}

function displayLocationAndTime(weatherData) {
  const city = document.querySelector('[data-city]');
  const country = document.querySelector('[data-country]');
  const time = document.querySelector('[data-time]');
  city.textContent = weatherData.location.name;
  time.textContent = new Date(
    weatherData.location.localtime,
  ).toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
  country.textContent = weatherData.location.country;
}

function displaySunriseSunset(weatherData) {
  const sunrise = document.querySelector('[data-sunrise]');
  const sunset = document.querySelector('[data-sunset]');
  sunrise.textContent = weatherData.forecast.forecastday[0].astro.sunrise;
  sunset.textContent = weatherData.forecast.forecastday[0].astro.sunset;
}

function displayOverview(weatherData) {
  const windSpeed = document.querySelector('[data-wind-speed]');
  const pressure = document.querySelector('[data-pressure]');
  const rainChance = document.querySelector('[data-rain-chance]');
  const uvIndex = document.querySelector('[data-uv-index]');
  windSpeed.textContent = weatherData.current.wind_kph + ' km/h';
  pressure.textContent = weatherData.current.pressure_in + ' in';
  rainChance.textContent =
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain + '%';
  uvIndex.textContent = weatherData.current.uv;
}

function displayForecast(weatherData) {
  const tomorrowHeader = document.querySelector('[data-tomorrow-header]');
  const tomorrowTemperature = document.querySelector(
    '[data-tomorrow-temperature]',
  );
  const tomorrowImage = document.querySelector('[data-tomorrow-image]');
  const afterTomorrowHeader = document.querySelector(
    '[data-aftertomorrow-header]',
  );
  const afterTomorrowTemperature = document.querySelector(
    '[data-aftertomorrow-temperature]',
  );
  const afterTomorrowImage = document.querySelector(
    '[data-aftertomorrow-image]',
  );
  tomorrowHeader.textContent = new Date(
    weatherData.forecast.forecastday[1].date,
  ).toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  afterTomorrowHeader.textContent = new Date(
    weatherData.forecast.forecastday[2].date,
  ).toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  tomorrowImage.src = weatherData.forecast.forecastday[1].day.condition.icon;
  afterTomorrowImage.src =
    weatherData.forecast.forecastday[2].day.condition.icon;
  tomorrowTemperature.textContent =
    weatherData.forecast.forecastday[1].day.avgtemp_c + '°C';
  afterTomorrowTemperature.textContent =
    weatherData.forecast.forecastday[2].day.avgtemp_c + '°C';
}

export {
  displayCurrentWeather,
  displayLocationAndTime,
  displaySunriseSunset,
  displayOverview,
  displayForecast,
};
