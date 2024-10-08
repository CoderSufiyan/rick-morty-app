import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import { getCharacterById } from '../services/rickAndMortyService';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('../services/rickAndMortyService');

describe('ProfilePage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading spinner when loading', () => {
        render(
            <MemoryRouter initialEntries={['/profile/1']}>
                <Routes>
                    <Route path="/profile/:id" element={<ProfilePage />} />
                </Routes>
            </MemoryRouter>
        );

        // Check for the loading spinner by its test ID
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    test('renders character details when character is fetched', async () => {
        getCharacterById.mockResolvedValue({
            id: 1,
            name: 'Rick Sanchez',
            species: 'Human',
            gender: 'Male',
            status: 'Alive',
            origin: { name: 'Earth' },
            location: { name: 'Earth' },
            episode: [],
            image: 'https://example.com/rick.png',
        });

        render(
            <MemoryRouter initialEntries={['/profile/1']}>
                <Routes>
                    <Route path="/profile/:id" element={<ProfilePage />} />
                </Routes>
            </MemoryRouter>
        );

        // Used waitFor to wait for the asynchronous state updates to complete
        await waitFor(() => {
            expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
            expect(screen.getByText('Species: Human')).toBeInTheDocument();
        });
    });

    test('renders error message when character is not found', async () => {
        getCharacterById.mockResolvedValue(null);

        render(
            <MemoryRouter initialEntries={['/profile/1']}>
                <Routes>
                    <Route path="/profile/:id" element={<ProfilePage />} />
                </Routes>
            </MemoryRouter>
        );

        // Used waitFor to ensure the error state is updated properly
        await waitFor(() => {
            expect(screen.getByText(/error fetching character data/i)).toBeInTheDocument();
        });
    });
});
