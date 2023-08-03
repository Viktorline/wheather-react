import React, { useState, useEffect } from 'react';

import ThemeContext from './context/ThemeContext';
import Additional from './components/Additional/Additional';
import Main from './components/Main/Main';

import './styles/App.css';
import './styles/themes/light-theme.css';

function App() {
  const initialTheme = localStorage.getItem('theme') === 'dark';
  const [darkTheme, setDarkTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    setDarkTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkTheme(savedTheme === 'dark');
  }, []);

  const themeClass = darkTheme ? 'dark-theme' : 'light-theme';

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      <main className={`content ${themeClass}`}>
        <Main />
        <Additional />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
