import React from 'react';
import { Link } from 'react-router-dom';
import './css/inprogress.css';


const InProgress = () => {
  return (
    <div className="main-container">
      
      <h1 style={{ 
        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
        margin: 'clamp(1rem, 3vw, 2rem) 0',
        animation: 'fadeIn 1s ease-out',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        Страница в разработке
      </h1>
      
      <p style={{ 
        fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', 
        marginBottom: 'clamp(1rem, 3vw, 2rem)',
        maxWidth: '600px',
        width: '90%',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-out',
        padding: '0 1rem'
      }}>
        Мы усердно работаем над созданием этой страницы. Пожалуйста, загляните позже!
      </p>
      
      <div className="buttons-container" style={{ 
        animation: 'fadeIn 1s ease-out',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'clamp(5px, 2vw, 10px)'
      }}>
        <div className="arrow-container" style={{
          minWidth: 'clamp(32px, 5vw, 64px)'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <Link to="/" className="primary-button" style={{
          fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
          padding: 'clamp(8px, 2vw, 10px) clamp(10px, 3vw, 20px)'
        }}>
          Вернуться на главную
        </Link>
      </div>
      
    </div>
  );
};

export default InProgress;
