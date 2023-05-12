import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CallToAction from '../pages/CallToAction';
import BookingPage from '../pages/BookingPage';
import Chicago from '../pages/Chicago';
import Specials from '../pages/Specials';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order-online" />
        <Route path="/login" element={<CallToAction />} />
      </Routes>
    </main>
  );
};

export default Main;
