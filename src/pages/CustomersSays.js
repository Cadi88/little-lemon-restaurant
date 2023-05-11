import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from '../components/TestimonialCard';
import './CustomersSays.css';

const CustomersSays = () => {
  const TESTIMONIALS = [
    {
      name: 'Micheal Caldwell',
      desc: "This is the best Mediterranean food that I've ever had!",
    },
    {
      name: 'Alan Chen',
      desc: 'My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.',
    },
    {
      name: 'Casey Lau',
      desc: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    },
    {
      name: 'John Rosenblum',
      desc: 'Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.',
    },
    {
      name: 'Jim Reynor',
      desc: 'The food here really refreshed me after a late night shift at the local supply depot.',
    },
    {
      name: 'Brian Dean',
      desc: 'I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.',
    },
    {
      name: 'Tyler Tohmine',
      desc: 'The food here was fire!! Everyone should try this place out at least once if they live in Chicago.',
    },
    {
      name: 'Jack Hu',
      desc: 'This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!',
    },
  ];

  const testimonialCards = TESTIMONIALS.map((testimonial) => {
    return <TestimonialCard name={testimonial.name} desc={testimonial.desc} />;
  });
  
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">{testimonialCards}</section>

      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
};

export default CustomersSays;
