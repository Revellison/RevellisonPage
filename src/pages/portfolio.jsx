import React from 'react';
import { Link } from 'react-router-dom';
import './css/portfolio.css';

function Shop() {
  const products = [
    {
      id: 1,
      name: 'Веб-сайт "Базовый"',
      price: 30000,
      description: 'Простой одностраничный сайт с адаптивным дизайном'
    },
    {
      id: 2,
      name: 'Веб-сайт "Бизнес"',
      price: 60000,
      description: 'Многостраничный сайт с админ-панелью и формами обратной связи'
    },
    {
      id: 3,
      name: 'Инфографика',
      price: 5000,
      description: 'Создание информативной графики для вашего бизнеса'
    },
    {
      id: 4,
      name: 'Видеомонтаж',
      price: 10000,
      description: 'Профессиональный монтаж видео до 5 минут'
    }
  ];

  return (
    <div className="shop-container">
      <h1 className="shop-title">Наши услуги</h1>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price} ₽</p>
            <button className="order-button">
              Заказать
            </button>
          </div>
        ))}
      </div>
      
      <div className="back-link-container">
        <Link to="/" className="back-link">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

export default Shop;
