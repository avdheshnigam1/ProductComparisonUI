import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <header className="header">
      <a href="/" className='logo'>
        <span>V</span>
        <span>/</span>
        <span>S</span>
      </a>
      <h1>Compare Products</h1>
      <button onClick={() => setDarkMode(prev => !prev)} className="theme-toggle">
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

export default Header;