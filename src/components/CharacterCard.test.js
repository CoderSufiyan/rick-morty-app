import React, { act } from 'react'; 
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import CharacterCard from './CharacterCard'; 

describe('CharacterCard', () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    image: 'https://example.com/rick.png'
  };

  test('renders character details', () => {
    act(() => {
      render(
        <MemoryRouter>
          <CharacterCard character={character} />
        </MemoryRouter>
      );
    });

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
  });
});
