import React, { useState, useEffect } from 'react';
import './css/ProductCard.css';

const ProductCard = ({ title, price, image, description, category, duration, complexity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={handleOpenModal} style={{cursor: 'pointer'}} className="product-card">
        <img src={image} alt={title}  style={{loading: 'lazy'}} className="product-image" />
        <div className="product-content">
          <h3 className="product-title">{title}</h3>
          <span className="product-category">{category}</span>
          <p className="product-description">{description}</p>
          <div className="product-footer">
            <span className="product-price">{price} ₽</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{title}</h2>
                <button 
                  onClick={handleCloseModal}
                  className="close-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <img src={image} alt={title} style={{loading: 'lazy'}} className="modal-image" />
              
              <div className="modal-info">
                <span className="modal-category">{category}</span>
                <span className="modal-price">{price} ₽</span>
              </div>
              
              <div className="modal-description-container">
                <h3 className="description-title">Описание:</h3>
                <p className="modal-description">{description}</p>
              </div>
              
              <div className="modal-actions">
                <button className="cart-button">
                  В корзину
                </button>
                <button 
                  onClick={handleCloseModal}
                  className="cancel-button"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
