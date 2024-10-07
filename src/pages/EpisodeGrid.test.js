import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeGrid from './EpisodeGrid';

test('renders EpisodeGrid with a search bar', () => {
  render(<EpisodeGrid />);
  const searchInput = screen.getByPlaceholderText(/Search Episodes../i);
  expect(searchInput).toBeInTheDocument();
});
