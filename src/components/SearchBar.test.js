import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar and responds to input', () => {
  const setSearchTerm = jest.fn();
  render(<SearchBar setSearchTerm={setSearchTerm} placeholder="Search..." />);

  const input = screen.getByPlaceholderText(/Search.../i);
  fireEvent.change(input, { target: { value: 'Rick' } });

  expect(setSearchTerm).toHaveBeenCalledWith('Rick');
});
