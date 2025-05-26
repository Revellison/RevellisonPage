import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Меню</h2>
          <button onClick={onClose} className="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" onClick={onClose}>Главная</Link>
          <Link to="/shop" onClick={onClose}>Магазин</Link>
          <Link to="/about" onClick={onClose}>О нас</Link>
          <Link to="/contact" onClick={onClose}>Контакты</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar; 