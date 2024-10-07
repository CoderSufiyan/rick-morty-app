import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocationById } from '../services/rickAndMortyService';
import Spinner from '../components/Spinner';
import styles from './LocationPage.module.css';

const LocationPage = () => {
  const { id } = useParams(); 
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await getLocationById(id);
      setLocation(data);
      setLoading(false);
    };

    fetchLocation();
  }, [id]); 

  if (loading) return <Spinner />;

  if (!location) return <div>Error fetching location data.</div>;

  return (
    <div className={styles.locationContainer}>
      <h1>{location.name}</h1>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>
      <p>Residents: {location.residents.length}</p>
      <h2>Residents:</h2>
      <ul>
        {location.residents.map((resident, index) => (
          <li key={index}>{resident}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPage;
