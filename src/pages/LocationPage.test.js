import React, { act } from 'react'; 
import { render, screen, waitFor } from '@testing-library/react';
import LocationPage from './LocationPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getLocationById } from '../services/rickAndMortyService';

jest.mock('../services/rickAndMortyService');

describe('LocationPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading spinner when loading', async () => {
        getLocationById.mockReturnValue(new Promise(() => {})); // Keeps it in loading state

        // Render the component with MemoryRouter
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/location/1']}>
                    <Routes>
                        <Route path="/location/:id" element={<LocationPage />} />
                    </Routes>
                </MemoryRouter>
            );
        });

        // Check if the loading spinner is in the document using the test ID
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    test('renders location details when location is fetched', async () => {
        // Mock the resolved value for the location data
        getLocationById.mockResolvedValue({
            id: 1,
            name: 'Citadel of Ricks',
            type: 'Space Station',
            dimension: 'Unknown Dimension',
            residents: []
        });

        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/location/1']}>
                    <Routes>
                        <Route path="/location/:id" element={<LocationPage />} />
                    </Routes>
                </MemoryRouter>
            );
        });

        // Wait for the location details to be fetched and rendered
        expect(await screen.findByText('Citadel of Ricks')).toBeInTheDocument();
        expect(screen.getByText('Type: Space Station')).toBeInTheDocument();
        expect(screen.getByText('Dimension: Unknown Dimension')).toBeInTheDocument();
    });
});
