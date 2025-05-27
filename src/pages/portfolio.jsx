import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from '../components/PortfolioCard';
import portfolioData from '../data/portfolioData/data.json';
import './css/portfolio.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProjects(portfolioData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="portfolio-container">
        <div className="loading">Загрузка проектов...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-container">
        <div className="error">Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      
      <div className="projects-grid">
        {projects.map(project => (
          <PortfolioCard
            key={project.id}
            title={project.name}
            description={project.description}
            image={project.image}
          />
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

export default Portfolio;
