const forecastWeekButton = document.getElementById('forecast-switcher__title-week');
const forecastHourButton = document.getElementById('forecast-switcher__title-hour');
const forecastWeek = document.querySelector('.forecast-week');
const forecastHour = document.querySelector('.forecast-hour');

function toggleForecast(button1, button2, forecast1, forecast2) {
  button1.addEventListener('click', () => {
    button1.classList.toggle('bolder');
    button2.classList.toggle('bolder');

    forecast1.classList.toggle('choosen');
    forecast2.classList.toggle('choosen');
  });
}

toggleForecast(forecastWeekButton, forecastHourButton, forecastWeek, forecastHour);
toggleForecast(forecastHourButton, forecastWeekButton, forecastHour, forecastWeek);
