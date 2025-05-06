import React, { useState, useEffect } from 'react';
import '../components/css/burger.css';
import { Link } from 'react-router-dom';

const Checkbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const body = document.body;
    
    let mainContainer = document.querySelector('.main-container');
    
    if (!mainContainer) {
      const root = document.getElementById('root') || document.body;
      
      const menuContainer = document.createElement('div');
      menuContainer.className = 'menu-controls';
      
      mainContainer = document.createElement('div');
      mainContainer.className = 'main-container';
      
      const allChildren = Array.from(root.children);
  
      allChildren.forEach(child => {
        if (child.classList.contains('side-menu') || 
            child.classList.contains('overlay') || 
            child === document.querySelector('.hamburger')?.parentNode) {

        } else {
          mainContainer.appendChild(child.cloneNode(true));
          if (child.parentNode === root) {
            root.removeChild(child);
          }
        }
      });
  
      root.prepend(mainContainer);
    }
    
    if (isOpen) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
    
    return () => {
      body.classList.remove('menu-open');
    };
  }, [isOpen]);
  
  return (
    <>
      <label className="hamburger">
        <input type="checkbox" onChange={toggleMenu} checked={isOpen} />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
      
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <ul className="side-nav-list">
            <li><Link to="/" className="side-nav-link" onClick={toggleMenu}>Главная</Link></li>
            <li><Link to="/portfolio" className="side-nav-link" onClick={toggleMenu}>Портфолио</Link></li>
            <li><Link to="/shop" className="side-nav-link" onClick={toggleMenu}>Магазин</Link></li>
            <li><Link to="/contacts" className="side-nav-link" onClick={toggleMenu}>Контакты</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="overlay" onClick={toggleMenu} />
    </>
  );
}

export default Checkbox;
