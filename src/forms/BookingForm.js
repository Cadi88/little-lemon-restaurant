import React, { useState } from 'react';

const BookingForm = ({}) => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingDate('');
    setBookingTime('');
    setGuests('');
    setOccasion('');
    console.log('submitted:', bookingDate, bookingTime, guests, occasion);
  };

  return (
    <form
      style={{
        display: 'grid',
        maxWidth: '200px',
        gap: '20px',
        margin: '0 auto',
      }}
      onSubmit={handleSubmit}
    >
      <h2>Book Now</h2>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={bookingTime}
        onChange={(e) => setBookingTime(e.target.value)}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        disabled={!bookingDate || !bookingTime || !guests || !occasion}
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;
