// src/components/SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ setSearchTerm, placeholder }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        onChange={handleChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
