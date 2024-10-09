import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LocationCard.module.css';

const LocationCard = ({ location }) => {
  return (
    <div className={styles.card}>
      <Link to={`/locations/${location.id}`} className={styles.link}>
        <h2 className={styles.title}>{location.name}</h2>
        <p className={styles.dimension}>Dimension: {location.dimension}</p>
        <p className={styles.type}>Type: {location.type}</p>
        <p className={styles.residents}>Residents: {location.residents.length}</p>
      </Link>
    </div>
  );
};

export default LocationCard;
