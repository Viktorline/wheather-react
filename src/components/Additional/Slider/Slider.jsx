import React, { useState } from 'react';
import Card from './Card';
import Switcher from './Switcher';

const Slider = () => {
  const [isHourly, setIsHourly] = useState(false);

  return (
    <div className='forecast-switcher'>
      <Switcher isHourly={isHourly} setIsHourly={setIsHourly} />

      <div className='forecast-switcher__cards-container'>
        <button
          className='forecast-switcher__arrow-button cards-container__arrow-left'
          id='swipe-left-btn'
        ></button>

        <ul className={`forecast-week ${!isHourly ? 'choosen' : ''}`}>
          <Card title='Завтра' max={10} min={4} additionalClass='forecast-week__card--fog' />
          <Card title='Пн, 15 мар' max={10} min={4} additionalClass='forecast-week__card--rain' />
          <Card title='Вт, 16 мар' max={10} min={4} additionalClass='forecast-week__card--rain' />
          <Card title='Ср, 17 мар' max={10} min={4} additionalClass='forecast-week__card--storm' />
          <Card title='Чт, 18 мар' max={10} min={4} additionalClass='forecast-week__card--storm' />
          <Card title='Пт, 19 мар' max={10} min={4} additionalClass='forecast-week__card--storm' />
          <Card title='Сб, 20 мар' max={10} min={4} additionalClass='forecast-week__card--storm' />
        </ul>

        <ul className={`forecast-hour ${isHourly ? 'choosen' : ''}`}>
          <Card title='15:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='16:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='17:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='18:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='19:00' max={10} additionalClass='forecast-hour__card--storm' hourly={true} />
          <Card title='20:00' max={10} additionalClass='forecast-hour__card--storm' hourly={true} />
          <Card title='21:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='22:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='23:00' max={10} additionalClass='forecast-hour__card--storm' hourly={true} />
          <Card title='00:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='01:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
          <Card title='02:00' max={10} additionalClass='forecast-hour__card--fog' hourly={true} />
        </ul>

        <button
          className='forecast-switcher__arrow-button cards-container__arrow-right'
          id='swipe-right-btn'
        ></button>
      </div>
    </div>
  );
};

export default Slider;
