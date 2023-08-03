const Detail = ({ title, value, unit, additionalClass, windDirection }) => (
  <article className={`detail ${additionalClass}`}>
    <h5 className='detail__title'>{title}</h5>
    <p className='detail__info'>
      <span className='info__value'>{value} </span>
      <span className='info__unit'>{unit}</span>
    </p>
    {windDirection && (
      <div className='detail__wind-direction'>
        <div className='wind-direction__img'></div>
        <span className='wind-direction__direction'>{windDirection}</span>
      </div>
    )}
  </article>
);

export default Detail;
