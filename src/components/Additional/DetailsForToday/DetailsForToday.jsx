import Detail from './Detail';

const DetailsForToday = () => (
  <div className='details-for-today'>
    <h3 className='details-for-today__title'>Подробно на сегодня</h3>
    <div className='details-for-today__details-container'>
      <Detail
        title='Скорость ветра'
        value={7}
        unit='м/с'
        additionalClass='detail-wind'
        windDirection='СЗ'
      />
      <Detail title='Влажность' value={84} unit='%' additionalClass='detail-humidity' />
      <Detail title='Видимость' value={6.2} unit='км' additionalClass='detail-visibility' />
      <Detail title='Давление' value={742} unit='мм рт. ст.' additionalClass='detail-pressure' />
    </div>
  </div>
);

export default DetailsForToday;
