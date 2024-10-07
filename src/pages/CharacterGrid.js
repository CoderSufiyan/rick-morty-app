import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyService';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import styles from './CharacterGrid.module.css';

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getCharacters(page, { name: searchTerm, ...filters }).then(data => {
      setCharacters(prev => [...prev, ...data.results]);
    });
  }, [page, searchTerm, filters]);

  const loadMore = () => setPage(page + 1);

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Filter setFilters={setFilters} />
      <div className={styles.gridContainer}>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <button className={styles.loadMoreButton} onClick={loadMore}>Load More</button>
    </div>
  );
};

export default CharacterGrid;
