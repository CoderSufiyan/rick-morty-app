import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter'; 

describe('Filter', () => {
  test('renders filter options and allows selection', () => {
    const setFilters = (filters) => {
      console.log(filters);
    };

    render(<Filter setFilters={setFilters} />);

    // Check if filter options are rendered by their data-testid
    const statusSelect = screen.getByTestId('status-filter'); // Get the status dropdown

    // Check initial value
    expect(statusSelect.value).toBe(''); // Check that initial value is 'All Status'

    // Simulate a change in the status filter dropdown
    fireEvent.change(statusSelect, { target: { value: 'Alive' } }); // Change the value to 'Alive'

    // Check if the value was updated
    expect(statusSelect.value).toBe('Alive'); // Check if the selected value is now 'Alive'
  });
});
