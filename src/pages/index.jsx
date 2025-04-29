import React from 'react';
import { Link } from 'react-router-dom';
import TechCarousel from '../components/TechCarousel';
function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TechCarousel />
      <h1 className="text-4xl font-bold mb-6">Добро пожаловать на Revellison</h1>
      <h2 className="text-2xl font-semibold mb-4">Создание современных сайтов и цифровых решений</h2>
      
      <div className="mt-8">
        <Link to="/shop" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Узнать больше
        </Link>
      </div>
    </div>
  );
}

export default Index;
