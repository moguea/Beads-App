// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Productos />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
