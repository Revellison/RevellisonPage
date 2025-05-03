import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductСard';
import '../pages/css/portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Все');

  useEffect(() => {
    const dummyProjects = [
      {
        id: 1,
        title: 'Интернет-магазин',
        price: 'от 50000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Полнофункциональный интернет-магазин с корзиной, каталогом и личным кабинетом.',
        category: 'Веб-разработка'
      },
      {
        id: 2,
        title: 'Мобильное приложение',
        price: 'от 100000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Нативное мобильное приложение для iOS и Android с синхронизацией данных.',
        category: 'Мобильная разработка'
      },
      {
        id: 3,
        title: 'Корпоративный сайт',
        price: 'от 30000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Представительский сайт компании с адаптивным дизайном и панелью администратора.',
        category: 'Веб-разработка'
      },
      {
        id: 4,
        title: 'Дизайн логотипа',
        price: 'от 15000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Разработка уникального логотипа с учетом фирменного стиля и целевой аудитории.',
        category: 'Дизайн'
      },
      {
        id: 5,
        title: 'CRM-система',
        price: 'от 80000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Система управления взаимоотношениями с клиентами, адаптированная под ваш бизнес.',
        category: 'Веб-разработка'
      },
      {
        id: 6,
        title: 'UI/UX дизайн',
        price: 'от 25000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Проектирование пользовательских интерфейсов с фокусом на удобство использования.',
        category: 'Дизайн'
      }
    ];

    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects);
  }, []);

  const categories = ['Все', 'Веб-разработка', 'Мобильная разработка', 'Дизайн'];

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === 'Все') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Наше портфолио</h1>
      
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProductCard
            key={project.id}
            title={project.title}
            price={project.price}
            image={project.image}
            description={project.description}
            category={project.category}
          />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p className="no-projects-text">Проекты не найдены</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
