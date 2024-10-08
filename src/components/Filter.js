import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ setFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className={styles.filterContainer}>
      <select
        name="status"
        onChange={handleFilterChange}
        className={styles.filterSelect}
        data-testid="status-filter" // Added data-testid
      >
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="species"
        onChange={handleFilterChange}
        className={styles.filterSelect}
        data-testid="species-filter" // Added data-testid
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Animal">Animal</option>
        <option value="Mythological">Mythological</option>
        <option value="Robot">Robot</option>
        <option value="Disease">Disease</option>
        <option value="Poison">Poison</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="gender"
        onChange={handleFilterChange}
        className={styles.filterSelect}
        data-testid="gender-filter" // Added data-testid
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filter;
