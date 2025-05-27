import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactsModal from './ContactsModal';
import '../components/css/header.css';
import logoHeader from '../assets/logo_header.png';
import contactIcon from '../assets/contact.svg';
import Checkbox from './burger';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
          <img src={logoHeader} alt="logo" className="logo" />
          <span className="logo">Revellison</span>
        </Link>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
              >
                Портфолио
              </Link>
            </li>
            <li>
              <Link 
                to="/shop" 
                className={`nav-link ${isActive('/shop') ? 'active' : ''}`}
              >
                Магазин
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-buttons">
          <button 
            className="header-button-contacts"
            onClick={() => setIsContactsModalOpen(true)}
          >
            <img src={contactIcon} alt="contacts" className="contact-icon" />
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
