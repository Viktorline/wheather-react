import React, { useState, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { WeatherContext } from '../../context/WeatherContext';

import Sidebar from '../Sidebar/Sidebar';

import './Main.css';

const Main = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const { city, isLoading, historyOnLoad } = useContext(WeatherContext);

  const themeButtonClass = darkTheme ? 'active' : '';

  return (
    <section className='main-info'>
      {(isLoading || historyOnLoad) && (
        <div className='loading-overlay-main'>
          <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className='main-info__button-block'>
        <button id='main-info__open-sidebar' onClick={() => setSidebarActive(true)}>
          Поиск города
        </button>
        <button
          id='main-info__switch-theme'
          className={themeButtonClass}
          onClick={() => toggleTheme()}
        ></button>
      </div>
      <div className='main-info__center-img'></div>
      <div className='main-info__big-info'>
        <p className='main-info__temperature'>
          <span className='temperature__degree'>1</span> °C
        </p>
        <h2 className='main-info__weather'>Снег</h2>
        <span className='main-info__feelslike'>Ощущается как -3 °C</span>
      </div>
      <div className='main-info__small-info'>
        <div className='main-info__date-inner'>
          <p className='main-info__small-date'>Сегодня</p>
          <p className='main-info__small-date'>Вс, 13 мар</p>
        </div>
        <div className='main-info__location'>
          <div className='main-info__location-svg'></div>
          <span className='main-info__location-city'>{city}</span>
        </div>
      </div>
      <Sidebar active={sidebarActive} closeSidebar={() => setSidebarActive(false)} />
    </section>
  );
};

export default Main;
