import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearchTerm(input); // Update the search term
    setInput(''); // Clear the input after search
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search character..."
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
