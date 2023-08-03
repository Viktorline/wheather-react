import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ active, closeSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://nominatim.openstreetmap.org/search.php?q=${searchQuery}&format=json&addressdetails=1&limit=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const newHistory = [searchQuery, ...searchHistory].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      closeSidebar();
      // TODO: Обновите состояние погоды для нового города
    } else {
      setSearchError('Упс! Город не найден, попробуйте другой');
    }
  };

  return (
    <aside className={`sidebar ${active ? 'sidebar-active' : ''}`}>
      <div className='sidebar__button-close'>
        <button id='sidebar__close-sidebar' onClick={closeSidebar}>
          ⨯
        </button>
      </div>
      <form id='sidebar__search-city' onSubmit={handleSubmit}>
        <label htmlFor='sidebar__input'>Найти город</label>
        <input
          type='text'
          id='sidebar__input'
          placeholder='Москва'
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type='submit' id='sidebar__find-city' disabled={!searchQuery}>
          Найти
        </button>
      </form>
      {searchError && <p>{searchError}</p>}
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index} onClick={() => setSearchQuery(item)}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
