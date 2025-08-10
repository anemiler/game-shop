import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Main from './pages/Main';

// Значение по умолчанию — пустые массивы и заглушки функций
export const AppContext = createContext({
  library: [],
  setLibrary: () => {},
  bag: [],
  setBag: () => {}
});

function App() {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  return (
    <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
      <Main />
    </AppContext.Provider>
  );
}

export default App;
