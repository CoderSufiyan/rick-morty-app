import React, { useState, useEffect } from 'react';
import { getEpisodes } from '../services/rickAndMortyService';
import EpisodeCard from '../components/EpisodeCard';
import SearchBar from '../components/SearchBar';
import styles from './EpisodeGrid.module.css';

const EpisodeGrid = () => {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null); // Error state

  const fetchEpisodes = async () => {
    const { results, error } = await getEpisodes(searchTerm);

    if (error) {
      setError(error); // Set the error message
      setEpisodes([]); // Reset episodes
    } else {
      setEpisodes(results); // Set episodes if no error
      setError(null); // Clear any previous error
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [searchTerm]); 

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      {error && <div className={styles.errorMessage}>{error}</div>} 
      <div className={styles.gridContainer}>
        {episodes.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeGrid;
