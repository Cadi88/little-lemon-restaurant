import React from 'react';
import imgFood from '../assets/restauranfood.jpg';
import imgGreekSalad from '../assets/greek salad.jpg';

import classes from './HomePage.css';

const HomePage = () => {
  return (
    <>
      <section className="section1">
        <div className="legend">
          <span className="title">Little Lemon</span>
          <span className="subtitle">Chicago</span>
          <p className="desc">
            We are a family owned a <br />
            Mediterranean restaurant, <br />
            focused on traditional <br /> recipes served with a modern <br />{' '}
            twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="imgContainer">
          <img src={imgFood} className="imgFood" alt="Chef" />
        </div>
      </section>
      <section className="section2">
        <div className="header">
          <span>This week specials</span>
          <button>Online Menu</button>
        </div>
        <div className="content">
          <div className="dish-card">
            <img src={imgGreekSalad} alt="Greek salad" />
            <div className="card-header">
              <span className="dish-title">Greek salad</span>
              <span className="dish-price">$ 12.99</span>
            </div>
            <div className="card-desc">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </div>
            <div className="card-actions">
              <span>Order a delivery</span>
              <span className='icon'>icon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
