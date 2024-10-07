import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LocationCard.module.css';

const LocationCard = ({ location }) => {
  return (
    <div className={styles.card}>
      <Link to={`/locations/${location.id}`}>
        <h2>{location.name}</h2>
        <p>Dimension: {location.dimension}</p>
        <p>Type: {location.type}</p>
        <p>Residents: {location.residents.length}</p>
      </Link>
    </div>
  );
};

export default LocationCard;
