import { displayCurrentWeather } from './displayManager';
import './style.css';
import { getWeatherData } from './weather';

// DOM selectors
const searchBox = document.querySelector('[data-search-box]');

searchBox.addEventListener('change', async () => {
  const weatherData = await getWeatherData(searchBox.value);
  displayCurrentWeather(weatherData);
  console.log(weatherData);
});
