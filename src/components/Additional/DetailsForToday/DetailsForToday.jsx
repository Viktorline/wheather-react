import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/WeatherContext';

import Detail from './Detail';

const DetailsForToday = () => {
  const { weather } = useContext(WeatherContext);

  const convertPressure = (pressureInHPa) => {
    return Math.floor(pressureInHPa * 0.750062);
  };

  if (!weather) {
    //рендер белых карточек если погода еще не загружена
    return (
      <div className='details-for-today'>
        <h3 className='details-for-today__title'>Подробно на сегодня</h3>
        <div className='details-for-today__details-container'>
          <Detail additionalClass='detail-wind' />
          <Detail additionalClass='detail-humidity' />
          <Detail additionalClass='detail-visibility' />
          <Detail additionalClass='detail-pressure' />
        </div>
      </div>
    );
  }

  return (
    //рендер карточек если погода есть и внутри рендер прозрачной анимации
    <div className='details-for-today'>
      <h3 className='details-for-today__title'>Подробно на сегодня</h3>
      <div className='details-for-today__details-container'>
        <Detail
          title='Скорость ветра'
          value={weather.wind.speed}
          unit='м/с'
          additionalClass='detail-wind'
          windDirection='СЗ'
        />
        <Detail
          title='Влажность'
          value={weather.main.humidity}
          unit='%'
          additionalClass='detail-humidity'
        />
        <Detail
          title='Видимость'
          value={weather.visibility / 1000}
          unit='км'
          additionalClass='detail-visibility'
        />
        <Detail
          title='Давление'
          value={convertPressure(weather.main.pressure)}
          unit='мм рт. ст.'
          additionalClass='detail-pressure'
        />
      </div>
    </div>
  );
};

export default DetailsForToday;
