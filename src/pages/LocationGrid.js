import React, { useState, useEffect } from 'react';
import { getLocations } from '../services/rickAndMortyService';
import LocationCard from '../components/LocationCard';
import SearchBar from '../components/SearchBar';
import styles from './LocationGrid.module.css';

const LocationGrid = () => {
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchLocations = async () => {
        const { results, error } = await getLocations(searchTerm);
    
        if (error) {
          setError(error); // Set the error message
          setLocations([]); // Reset locations
        } else {
          setLocations(results); // Set locations if no error
          setError(null); // Clear any previous error
        }
      };
    fetchLocations();
  }, [searchTerm]); 

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} placeholder={"Search Locations.."} />
      {error && <div className={styles.errorMessage}>{error}</div>} 
      <div className={styles.gridContainer}>
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default LocationGrid;
