import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext';
import { ErrorProvider } from './context/ErrorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <WeatherProvider>
    <ThemeProvider>
      <ErrorProvider>
        <App />
      </ErrorProvider>
    </ThemeProvider>
  </WeatherProvider>
);
