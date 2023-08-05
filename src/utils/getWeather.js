const getWeather = async (lat, lon) => {
  const apiKey = '71566f72957a2e819fa530feb93cdc6c';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log('API погоды', data);

  if (response.ok) {
    return data;
  } else {
    throw new Error('Не удалось загрузить прогноз погоды');
  }
};

export default getWeather;
