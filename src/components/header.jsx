import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/header.css';
import logoHeader from '../assets/logo_header.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logoHeader} alt="logo" className="logo" />
          <Link to="/" className="logo">Revellison</Link>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Главная</Link></li>
            <li><Link to="/portfolio" className="nav-link">Портфолио</Link></li>
            <li><Link to="/shop" className="nav-link">Магазин</Link></li>
          </ul>
        </nav>

        <div className="header-buttons">
          <button className="header-button-contacts">Контакты</button>
          <button onClick={() => window.location.href='/shop'} className="header-button-buy">Заказать</button>
        </div>
        
        <div className="mobile-menu">
          <button className="menu-button">
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
