import React from 'react';
import './DishCard.css'

const DishCard = ({img, title, price, desc}) => {
  return (
    <div className="dish-card">
      <img src={img} alt="Greek salad" />
      <div className="card-header">
        <span className="dish-title">{title}</span>
        <span className="dish-price">$ {price}</span>
      </div>
      <div className="card-desc">
        {desc}
      </div>
      <div className="card-actions">
        <span>Order a delivery</span>
        <span className="icon">icon</span>
      </div>
    </div>
  );
};

export default DishCard;
