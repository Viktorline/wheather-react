import React, { useContext, useEffect } from 'react';

import ThemeContext from './context/ThemeContext';
import ErrorContext from './context/ErrorContext';
import { WeatherContext } from './context/WeatherContext';

import Additional from './components/Additional/Additional';
import Main from './components/Main/Main';
import Error from './components/Error/Error';

import getCity from './utils/API/getCity';
import getWeather from './utils/API/getWeather';

import './styles/App.css';
import './styles/themes/light-theme.css';

function App() {
  const { darkTheme } = useContext(ThemeContext);
  const { error, setError } = useContext(ErrorContext);
  const { city, setIsLoading, setWeather, setForecast } = useContext(WeatherContext);

  const themeClass = darkTheme ? 'dark-theme' : 'light-theme';

  const handleError = (message) => {
    setError(message);
  };

  useEffect(() => {
    async function fetchData(city) {
      setIsLoading(true);
      try {
        const location = await getCity(city, handleError);
        const dataWeather = await getWeather(location.lat, location.lon);
        const forecast = dataWeather.list;
        setWeather(forecast[0]);
        setForecast(forecast);
      } catch (error) {
        handleError('Возникла проблема сервера, попробуйте перезагрузить страницу');
      } finally {
        setIsLoading(false);
      }
    }

    if (!localStorage.getItem('city')) {
      localStorage.setItem('city', city);
      fetchData('Москва');
    } else {
      const currentCity = localStorage.getItem('city');
      fetchData(currentCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`content ${themeClass}`}>
      {error && <Error error={error} />}
      <Main />
      <Additional />
    </main>
  );
}

export default App;
