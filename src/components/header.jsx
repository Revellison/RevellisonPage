import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/header.css';
import logoHeader from '../assets/logo_header.png';
import Checkbox from './burger';
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
          <Link to="/contacts" className="header-button-contacts">Контакты</Link>
          <Link to="/shop" className="header-button-buy">Заказать</Link>
        </div>
        
        <div className="mobile-menu">
          <Checkbox />
        </div>
      </div>
    </header>
  );
};

export default Header;
