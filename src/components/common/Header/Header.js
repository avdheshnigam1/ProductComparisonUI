import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const navItems = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Products',
    link: '/'
  },
  {
    name: 'Services',
    link: '/'
  },
  {
    name: 'Categories',
    link: '/'
  },
  {
    name: 'More...',
    link: '/'
  },

]
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
        <span>A</span>
        <span>K</span>
        <span>N</span>
      </a>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.name} className={item.name === 'Home' ? 'active' : ''}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={() => setDarkMode(prev => !prev)} className="theme-toggle">
        <i>{darkMode ? <IoSunnyOutline /> : <FaRegMoon />}</i>
        <span>{darkMode ? 'Light' : 'Dark'}</span>
      </button>
    </header >
  );
}

export default Header;