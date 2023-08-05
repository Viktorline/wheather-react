import { createContext, useState, useEffect } from 'react';
import getWeather from '../utils/getWeather';
import searchCity from '../utils/searchCity';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [historyOnLoad, setHistoryOnLoad] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState({});
  const [city, setCity] = useState(localStorage.getItem('city') || 'Москва');

  useEffect(() => {
    async function fetchData(city) {
      setIsLoading(true);

      const location = await searchCity(city);
      const dataWeather = await getWeather(location.lat, location.lon);
      setWeather(dataWeather);

      setIsLoading(false);
    }

    if (!localStorage.getItem('city')) {
      localStorage.setItem('city', city);
      fetchData('Москва');
    } else {
      const currentCity = localStorage.getItem('city');
      fetchData(currentCity);
    }
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        setWeather,
        isLoading,
        setIsLoading,
        historyOnLoad,
        setHistoryOnLoad,
        isLoadingHistory,
        setIsLoadingHistory,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
