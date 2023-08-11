const getCity = async (query, onError) => {
  const url = `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1&lang=ru`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка соединения с API');
    }
    const data = await response.json();

    if (data && data.length > 0) {
      const locationToCheck = [
        data[0]?.name,
        data[0]?.display_name.split(',')[0],
        data[0]?.address?.state,
      ];

      for (const location of locationToCheck) {
        if (location && location.toLowerCase().includes(query.toLowerCase())) {
          const lon = data[0].lon;
          const lat = data[0].lat;
          return { location, lon, lat };
        }
      }
    }

    throw new Error('Упс! Город не найден, попробуйте другой');
  } catch (error) {
    if (error.message === 'Ошибка соединения с API') {
      onError(
        'Не удалось соединиться с сервисом. Пожалуйста, проверьте ваше интернет-соединение, и перезагрузите страницу.'
      );
    } else if (error.message === 'Failed to fetch') {
      onError('Что то пошло не так :( Попробуйте перезагрузить страницу.');
    } else {
      throw error;
    }
  }
};

export default getCity;
