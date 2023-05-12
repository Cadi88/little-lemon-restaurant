import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const [finalTime, setFinalTime] = useState(
    availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setFName('');
    setLName('');
    setEmail('');
    setPhoneNumber('');
    setBookingDate('');
    setBookingTime('');
    setGuests('');
    setOccasion('');
    console.log('submitted:', bookingDate, bookingTime, guests, occasion);
  };

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form
      style={{
        display: 'grid',
        maxWidth: '200px',
        gap: '20px',
        margin: '0 auto',
      }}
      onSubmit={handleSubmit}
      aria-label="Booking Form"
    >
      <h2>Book Now</h2>
      <label htmlFor="fName">First Name</label>
      <input
        type="text"
        id="fName"
        placeholder="First Name"
        required
        minLength={2}
        maxLength={50}
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      ></input>
      <label htmlFor="lName">Last Name</label>
      <input
        type="text"
        id="lName"
        placeholder="Last Name"
        minLength={2}
        maxLength={50}
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        required
        minLength={4}
        maxLength={200}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="phone-number">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        placeholder="(xx)-xx-xxxx-xxxx"
        value={phoneNumber}
        required
        minLength={10}
        maxLength={25}
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></input>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
        aria-label="Booking Date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={bookingTime}
        onChange={(e) => setBookingTime(e.target.value)}
        aria-label="Booking Time"
      >
        {finalTime}
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
        aria-label="Number of Guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        disabled={!bookingDate || !bookingTime || !guests || !occasion}
        type="submit"
        value="Make Your reservation"
        aria-label="Submit Reservation"
      />
    </form>
  );
};

export default BookingForm;
