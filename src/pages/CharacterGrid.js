import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyService';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Spinner from '../components/Spinner'; 
import styles from './CharacterGrid.module.css';

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ status: '', species: '', gender: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  const fetchCharacters = async () => {
    setLoading(true); 
    const { results, error } = await getCharacters(page, { name: searchTerm, ...filters });

    if (error) {
      setError('No Data Found, Please try with different filters!');
      setCharacters([]);
    } else {
      setCharacters(results);
      setError(null);
    }
    setLoading(false); 
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, searchTerm, filters]);

  const loadMore = () => setPage(page + 1);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Filter setFilters={setFilters} />
      {error && <div className={styles.errorMessage}>{error}</div>}
      {loading ? ( 
        <Spinner />
      ) : (
        <div className={styles.gridContainer}>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
      <button className={styles.loadMoreButton} onClick={loadMore}>Load More</button>
    </div>
  );
};

export default CharacterGrid;
