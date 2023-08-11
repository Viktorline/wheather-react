import { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [historyOnLoad, setHistoryOnLoad] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState({});
  const [city, setCity] = useState(localStorage.getItem('city') || 'Москва');

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        forecast,
        setForecast,
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
