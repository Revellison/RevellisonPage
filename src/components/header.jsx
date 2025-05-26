import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactsModal from './ContactsModal';
import '../components/css/header.css';
import logoHeader from '../assets/logo_header.png';
import Checkbox from './burger';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
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
          <button 
            className="header-button-contacts"
            onClick={() => setIsContactsModalOpen(true)}
          >
            Контакты
          </button>
        </div>
        
        <div className="mobile-menu">
          <Checkbox />
        </div>
      </div>

      <ContactsModal 
        isOpen={isContactsModalOpen}
        onClose={() => setIsContactsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
