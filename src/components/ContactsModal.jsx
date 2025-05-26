import React from 'react';
import './css/ContactsModal.css';

const ContactsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contacts-modal-overlay" onClick={onClose}>
      <div className="contacts-modal-content" onClick={e => e.stopPropagation()}>
        <button className="contacts-modal-close" onClick={onClose}>×</button>
        
        <h2 className="contacts-modal-title">Контакты</h2>
        
        <div className="contacts-container">
          <div className="contact-item">
            <i className="contact-icon">✉️</i>
            <div className="contact-info">
              <h3>Email</h3>
              <p>contact@revellison.com</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/revellison" className="social-link">GitHub</a>
          <a href="https://twitter.com/revellison" className="social-link">Twitter</a>
          <a href="https://t.me/revellison" className="social-link">Telegram</a>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;
