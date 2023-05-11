import React, { useReducer } from 'react';
import BookingForm from '../forms/BookingForm';
import { fetchAPI } from '../utils/bookingsAPI';

const BookingPage = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;
