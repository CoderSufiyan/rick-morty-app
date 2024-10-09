import React, { useState, useEffect } from 'react';
import { getEpisodes } from '../services/rickAndMortyService';
import EpisodeCard from '../components/EpisodeCard';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import styles from './EpisodeGrid.module.css';

const EpisodeGrid = () => {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true); // Set loading to true before fetching
      const { results, error } = await getEpisodes(1, searchTerm); 

      if (error) {
        setError('No Episodes Found'); 
        setEpisodes([]); 
      } else {
        setEpisodes(results); 
        setError(null); 
      }
      setLoading(false); // Set loading to false after fetching
    };
    fetchEpisodes();
  }, [searchTerm]); 

  return (
    <div className={styles.container}>
      <SearchBar setSearchTerm={setSearchTerm} placeholder={'Search Episodes...'} />
      {error && <div className={styles.errorMessage}>{error}</div>}
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.gridContainer}>
          {episodes.map(episode => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EpisodeGrid;
