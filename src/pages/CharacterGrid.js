import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyService';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import styles from './CharacterGrid.module.css';
import Spinner from '../components/Spinner';

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ status: '', species: '', gender: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch characters based on current page, search term, and filters
  const fetchCharacters = async () => {
    setLoading(true); // Start loading

    const { results, error } = await getCharacters(page, { name: searchTerm, ...filters });

    if (error) {
      setError('No more data found!');
      if (page === 1) {
        setCharacters([]); // Reset characters if on the first page
      }
    } else {
      setCharacters(results);
      setError(null);
    }

    setLoading(false); // Stop loading
  };

  // Fetch characters when page, searchTerm, or filters change
  useEffect(() => {
    fetchCharacters();
  }, [page, searchTerm, filters]);

  // Reset page to 1 and clear character list when search term or filters change
  useEffect(() => {
    setPage(1); // Reset to first page
  }, [searchTerm, filters]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1); // Increment page number
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1); // Decrement page number
    }
  };

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} placeholder={"Search Characters..."} />
      <Filter setFilters={setFilters} />
      <div className={styles.gridContainer}>
        {characters.map((character) => (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
      {loading && <Spinner />}
      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterGrid;
