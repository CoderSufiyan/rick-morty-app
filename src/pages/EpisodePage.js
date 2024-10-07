import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisodeById } from '../services/rickAndMortyService';
import Spinner from '../components/Spinner';
import styles from './EpisodePage.module.css';

const EpisodePage = () => {
  const { id } = useParams(); 
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await getEpisodeById(id);
      setEpisode(data);
      setLoading(false);
    };

    fetchEpisode();
  }, [id]); // Dependency array includes ID to re-fetch if it changes

  if (loading) return <Spinner />; 

  if (!episode) return <div>Error fetching episode data.</div>;

  return (
    <div className={styles.episodeContainer}>
      <h1>{episode.name}</h1>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
      <h2>Characters:</h2>
      <ul>
        {episode.characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodePage;
