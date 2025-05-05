import React from 'react';
import { Link } from 'react-router-dom';
import TechCarousel from '../components/TechCarousel';
import '../pages/css/index.css';
import mockupImage from '../assets/mockup.png';

function Index() {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-title">Разработка <Link to="/shop" style={{textDecoration: 'none', color: 'black', backgroundColor: 'white', borderRadius: '10px', padding: '5px', paddingLeft: '10px', paddingRight: '10px', whiteSpace: 'nowrap'}}>IT-продуктов</Link></h1>
          <h2 className="subtitle">веб-сайты, приложения и цифровые решения под ключ.</h2>
          <div className="buttons-container">
            <Link to="/shop" className="primary-button">
              Выбрать продукт
            </Link>
            <div className="arrow-container">
              <svg style={{height: '36px', width: '36px'}} xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="image-section">
            <div className="image-container">
              <img src={mockupImage} alt="Изображение" className="main-image" />
            </div>
          </div>
        </div>
      </div>

  );
}

export default Index;
