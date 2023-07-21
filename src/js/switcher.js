const forecastWeekButton = document.querySelector('.title-week');
const forecastHourButton = document.querySelector('.title-hour');
const forecastWeek = document.querySelector('.forecast-week');
const forecastHour = document.querySelector('.forecast-hour');

forecastWeekButton.addEventListener('click', () => {
  forecastWeekButton.classList.add('bolder');
  forecastHourButton.classList.remove('bolder');

  forecastWeek.classList.add('choosen');
  forecastHour.classList.remove('choosen');
});

forecastHourButton.addEventListener('click', () => {
  forecastWeekButton.classList.remove('bolder');
  forecastHourButton.classList.add('bolder');

  forecastWeek.classList.remove('choosen');
  forecastHour.classList.add('choosen');
});
