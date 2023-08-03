const Card = ({ title, max, min, additionalClass, hourly = false }) => {
  const cardClass = hourly ? 'forecast-hour__card' : 'forecast-week__card';
  return (
    <li className={`${cardClass} ${additionalClass}`}>
      <div className='card__title'>{title}</div>
      <div className='card__info'>
        <span className='info__max'>{max}°C</span>
        {!hourly && <span className='info__min'>{min}°C</span>}
      </div>
    </li>
  );
};

export default Card;
