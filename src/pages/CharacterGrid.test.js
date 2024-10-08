import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterGrid from './CharacterGrid';

describe('CharacterGrid', () => {
  // Test to check if CharacterGrid renders without crashing
  test('renders without crashing', () => {
    render(<CharacterGrid />);
    // Check if the search bar is present
    expect(screen.getByPlaceholderText('Search Characters...')).toBeInTheDocument();
  });

  // Test to check if pagination buttons are present
  test('renders pagination buttons', () => {
    render(<CharacterGrid />);
    
    // Check if the Previous and Next buttons are present
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  // Test to check the functionality of the search bar
  test('allows user to type in search bar', () => {
    render(<CharacterGrid />);
    
    const searchInput = screen.getByPlaceholderText('Search Characters...');
    fireEvent.change(searchInput, { target: { value: 'Rick' } });

    // Check if the input value is updated
    expect(searchInput.value).toBe('Rick');
  });

});
