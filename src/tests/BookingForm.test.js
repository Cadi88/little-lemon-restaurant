import { render, screen } from '@testing-library/react';
import BookingForm from '../forms/BookingForm';

test('should render the booking form header', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument;
});
