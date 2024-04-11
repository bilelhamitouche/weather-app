import {
  displayCurrentWeather,
  displayForecast,
  displayLocationAndTime,
  displayOverview,
  displaySunriseSunset,
} from './displayManager';
import './style.css';
import { getWeatherData } from './weather';

window.onload = async () => {
  try {
    const weatherData = await getWeatherData('algiers');
    displayLocationAndTime(weatherData);
    displayCurrentWeather(weatherData);
    displaySunriseSunset(weatherData);
    displayOverview(weatherData);
    displayForecast(weatherData);
    console.log(weatherData.forecast.forecastday[1].day.condition.text);
  } catch (error) {
    console.log(error);
  }
};

// DOM selectors
const searchBar = document.querySelector('[data-search-bar]');

searchBar.addEventListener('change', async () => {
  try {
    const weatherData = await getWeatherData(searchBar.value);
    displayLocationAndTime(weatherData);
    displayCurrentWeather(weatherData);
    displaySunriseSunset(weatherData);
    displayOverview(weatherData);
    displayForecast(weatherData);
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
});
