import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductСard';
import '../pages/css/portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategories, setActiveCategories] = useState(['Все']);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [activeSorts, setActiveSorts] = useState([]);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const dummyProjects = [
      {
        id: 1,
        title: 'Интернет-магазин',
        price: 'от 50000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Полнофункциональный интернет-магазин с корзиной, каталогом и личным кабинетом.',
        category: 'Веб-разработка',
        duration: '2 месяца',
        complexity: 'Средняя'
      },
      {
        id: 2,
        title: 'Мобильное приложение',
        price: 'от 100000',
        image: 'https://via.placeholder.com/400x300',
        description: 'Нативное мобильное приложение для iOS и Android с синхронизацией данных.',
        category: 'Мобильная разработка',
        duration: '3 месяца',
        complexity: 'Высокая'
      }
    ];

    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects);
  }, []);

  const categories = ['Все', 'Веб-разработка', 'Мобильная разработка', 'Дизайн'];
  
  const sortGroups = [
    {
      title: 'Цена',
      options: [
        { value: 'price-asc', label: 'Цена ↑' },
        { value: 'price-desc', label: 'Цена ↓' }
      ]
    },
    {
      title: 'Срок',
      options: [
        { value: 'duration-asc', label: 'Срок ↑' },
        { value: 'duration-desc', label: 'Срок ↓' }
      ]
    },
    {
      title: 'Сложность',
      options: [
        { value: 'complexity-asc', label: 'Сложность ↑' },
        { value: 'complexity-desc', label: 'Сложность ↓' }
      ]
    }
  ];

  const filterProjects = (category) => {
    if (category === 'Все') {
      setActiveCategories(['Все']);
    } else {
      setActiveCategories(prev => {
        if (prev.includes(category)) {
          const newCategories = prev.filter(cat => cat !== category);
          return newCategories.length === 0 ? ['Все'] : newCategories;
        }
        const newCategories = prev.filter(cat => cat !== 'Все');
        return [...newCategories, category];
      });
    }
  };

  useEffect(() => {
    if (activeCategories.includes('Все')) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        activeCategories.includes(project.category)
      ));
    }
  }, [activeCategories, projects]);

  const handleSort = (option) => {
    setActiveSorts(prev => {
      if (prev.includes(option)) {
        return prev.filter(o => o !== option);
      }
      const group = sortGroups.find(g => g.options.some(o => o.value === option));
      const otherOptions = prev.filter(o => !group.options.some(opt => opt.value === o));
      return [...otherOptions, option];
    });
  };

  useEffect(() => {
    if (activeSorts.length === 0) {
      setFilteredProjects(projects);
      return;
    }

    const sortedProjects = [...projects].sort((a, b) => {
      for (const sortOption of activeSorts) {
        let comparison = 0;
        switch (sortOption) {
          case 'price-asc':
            comparison = parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
            break;
          case 'price-desc':
            comparison = parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
            break;
          case 'duration-asc':
            comparison = a.duration.localeCompare(b.duration);
            break;
          case 'duration-desc':
            comparison = b.duration.localeCompare(a.duration);
            break;
          case 'complexity-asc':
            comparison = a.complexity.localeCompare(b.complexity);
            break;
          case 'complexity-desc':
            comparison = b.complexity.localeCompare(a.complexity);
            break;
        }
        if (comparison !== 0) return comparison;
      }
      return 0;
    });

    setFilteredProjects(sortedProjects);
  }, [activeSorts, projects]);

  const handleFilterClick = (e) => {
    e.stopPropagation();
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleOptionClick = (e, callback) => {
    e.stopPropagation();
    callback();
  };

  return (
    <div style={{marginTop: 'var(--header-height)'}} className="portfolio-container">
      <div 
        ref={filterRef}
        className="filters-container"
        onClick={handleFilterClick}
      >
        <div className="filter-button-container">
          <button 
            className="filter-button"
            title="Фильтры и сортировка"
          >
            <svg 
              className={`filter-icon ${isFilterMenuOpen ? 'close' : ''}`}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isFilterMenuOpen ? (
                <path 
                  d="M12 5v14M5 12h14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.58579C21 6.851 20.8946 7.10536 20.7071 7.29289L14 14V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V14L3.29289 7.29289C3.10536 7.10536 3 6.851 3 6.58579V4Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
          <span className="filter-text">
            {isFilterMenuOpen ? 'Закрыть' : (
              activeCategories.length === 1 && activeCategories[0] === 'Все' 
                ? 'Фильтр' 
                : `${activeCategories.length} выбрано`
            )}
          </span>
        </div>
        
        {isFilterMenuOpen && (
          <div className="filter-dropdown">
            <div className="filter-section">
              <h3 className="filter-title">Категории</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={(e) => handleOptionClick(e, () => filterProjects(category))}
                    className={`filter-option ${activeCategories.includes(category) ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-section">
              <h3 className="filter-title">Сортировка</h3>
              <div className="filter-options">
                {sortGroups.map(group => (
                  <div key={group.title} className="sort-group">
                    <h4 className="sort-group-title">{group.title}</h4>
                    <div className="sort-group-options">
                      {group.options.map(option => (
                        <button
                          key={option.value}
                          onClick={(e) => handleOptionClick(e, () => handleSort(option.value))}
                          className={`filter-option ${activeSorts.includes(option.value) ? 'active' : ''}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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
            duration={project.duration}
            complexity={project.complexity}
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
