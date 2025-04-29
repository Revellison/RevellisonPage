import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Наши услуги</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 my-2">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600">{product.price} ₽</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Заказать
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

export default Shop;
