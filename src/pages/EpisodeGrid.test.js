import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeGrid from './EpisodeGrid';

test('renders EpisodeGrid with a search bar', () => {
  render(<EpisodeGrid />);
  
  // Check if the search input is in the document
  const searchInput = screen.getByPlaceholderText(/Search Episodes../i);
  expect(searchInput).toBeInTheDocument();
});
