import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEpisodeById, getCharacterByUrl } from '../services/rickAndMortyService'; // Import the function to fetch character data
import Spinner from '../components/Spinner';
import styles from './EpisodePage.module.css';

const EpisodePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await getEpisodeById(id);
      setEpisode(data);

      const characterPromises = data.characters.map(url => getCharacterByUrl(url));
      const characterData = await Promise.all(characterPromises); 
      setCharacters(characterData);
      setLoading(false);
    };

    fetchEpisode();
  }, [id]);

  if (loading) return <Spinner />;

  if (!episode) return <div>Error fetching episode data.</div>;

  return (
    <div className={styles.episodeContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Back</button>
      <h1>{episode.name}</h1>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
      <h2>Characters:</h2>
      <div className={styles.charactersGrid}>
        {characters.map((character, index) => (
          <div key={index} className={styles.characterTile}>
            <img src={character.image} alt={character.name} className={styles.characterImage} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodePage;
