import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const starsContainer = document.createElement('div');
starsContainer.className = 'stars';
document.body.appendChild(starsContainer);

const generateStars = (count) => {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const delay = Math.random() * 5;
    star.style.animationDelay = `${delay}s`;

    const duration = Math.random() * 3 + 3;
    star.style.animationDuration = `${duration}s`;

    starsContainer.appendChild(star);
  }
};

generateStars(100);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
