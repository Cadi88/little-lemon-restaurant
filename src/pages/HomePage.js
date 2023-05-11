import React from 'react';
import { Link } from 'react-router-dom';

import DishCard from '../components/DishCard';
import imgFood from '../assets/restauranfood.jpg';
import imgGreekSalad from '../assets/greek salad.jpg';
import imgBruchetta from '../assets/bruchetta.svg';
import imgLemonDessert from '../assets/lemon dessert.jpg';
import CustomersSays from './CustomersSays';

import './HomePage.css';

const DISHES = [
  {
    img: imgGreekSalad,
    title: 'Greek salad',
    price: '12,99',
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
  },
  {
    img: imgBruchetta,
    title: 'Bruchetta',
    price: '5,99',
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
  },
  {
    img: imgLemonDessert,
    title: 'Lemon dessert',
    price: '5,00',
    desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

const HomePage = () => {
  const dishes = DISHES.map((dish) => {
    return (
      <DishCard
        key={dish.title}
        img={dish.img}
        title={dish.title}
        price={dish.price}
        desc={dish.desc}
      />
    );
  });

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
          <button>
            <Link to="/reservations">Reserve a Table</Link>
          </button>
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
        <div className="content">{dishes}</div>
      </section>
      <CustomersSays />
    </>
  );
};

export default HomePage;
