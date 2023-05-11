import React from 'react';
import Star from '../assets/star.png';
import './TestimonialCard.css'

const TestimonialCard = ({ name, desc }) => {
  return (
    <article className="testimonial-card">
      <img src={Star} alt="delivery Icon"></img>
      <h3>{name}</h3>
      <p>{desc}</p>
    </article>
  );
};

export default TestimonialCard;
