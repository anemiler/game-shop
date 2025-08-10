import React, { useState } from 'react';
import './categories.css';
import filterListData from '../data/filterListData'; 
import GameCard from '../components/GameCard';

export default function Categories({ games, reference }) {
  const [data, setData] = useState(games);
  const [filters, setFilters] = useState(Array.isArray(filterListData) ? filterListData : []);
  const [text, setText] = useState('');

  const handleFilterGames = (category) => {
    setFilters(filters.map(filter => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    }));

    if (category === 'All') {
      setData(games);
      return;
    }

    setData(games.filter(game => game.category === category));
  };

  const handleSearchGames = (e) => {
    const searchText = e.target.value.toLowerCase();
    setText(searchText);

    const filteredGames = games.filter(game =>
      game.title.toLowerCase().includes(searchText)
    );
    
    setData(filteredGames);  
  };

  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map(filter => (
                <li
                  key={filter._id}
                  className={filter.active ? 'active' : undefined}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search-heart"></i>
              <input
                type="text"
                name="search"
                value={text}
                placeholder="Search"
                onChange={handleSearchGames}
              />
            </div>
          </div>
          <div className="row">
            {data.map(game => (
              <GameCard key={game._id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
