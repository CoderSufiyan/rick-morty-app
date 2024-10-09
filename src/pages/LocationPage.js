import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLocationById, getCharacterByUrl } from '../services/rickAndMortyService'; // New function to get character by URL
import Spinner from '../components/Spinner';
import styles from './LocationPage.module.css';

const LocationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [residents, setResidents] = useState([]); 

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await getLocationById(id);
      setLocation(data);

      const residentPromises = data.residents.map(url => getCharacterByUrl(url));
      const residentsData = await Promise.all(residentPromises); 
      setResidents(residentsData);

      setLoading(false);
    };

    fetchLocation();
  }, [id]);

  if (loading) return <Spinner />;

  if (!location) return <div>Error fetching location data.</div>;

  return (
    <div className={styles.locationContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Back</button>
      <h1>{location.name}</h1>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>
      <p>Residents: {residents.length}</p>
      <h2>Residents:</h2>
      <div className={styles.residentsGrid}>
        {residents.map((resident, index) => (
          <div key={index} className={styles.residentTile}>
            <img src={resident?.image} alt={resident?.name} className={styles.residentImage} />
            <p className={styles.residentName}>{resident?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
