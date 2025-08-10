import React, { useState, useEffect, useRef, useContext } from 'react';

import { AppContext } from '../App';
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';

export default function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const libraryRef = useRef(null);
  const bagRef = useRef(null);

  const sections = [
    { name: 'home', ref: homeRef },
    { name: 'categories', ref: categoriesRef },
    { name: 'library', ref: libraryRef },
    { name: 'bag', ref: bagRef },
  ];

  const handleToggleActive = () => {
    setActive(prev => !prev);
  };

  const handleSectionActive = (target) => {
    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.classList.remove('active');
      }
      if (section.ref.current && section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
    });
  };

  const scrollToLibrary = () => {
    libraryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/gamesData.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setGames(data);
    } catch (e) {
      console.error('Fetch error:', e.message);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? 'active' : ''}`}>
        <Header handleToggleActive={handleToggleActive} onLibraryClick={scrollToLibrary} library={library} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories reference={categoriesRef} games={games} />
              <MyLibrary games={games} reference={libraryRef} />
              <Bag reference={bagRef} games={bag} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
