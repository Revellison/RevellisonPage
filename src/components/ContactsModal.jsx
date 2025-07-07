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
          <div
            className="contact-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigator.clipboard.writeText('revellison@mail.ru');
            }}
            title="Скопировать email"
          >
            <i className="contact-icon">✉️</i>
            <div className="contact-info">
              <h3>Email - нажмите для копирования</h3>
              <p>revellison@mail.ru</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/revellison" className="social-link">GitHub</a>
          <a href="https://x.com/Revell1s0n" className="social-link">X</a>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;
