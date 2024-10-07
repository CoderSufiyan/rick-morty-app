import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharacterById } from '../services/rickAndMortyService';
import Spinner from '../components/Spinner'; 
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <Spinner />; 

  if (!character) return <div>Error fetching character data.</div>; 

  return (
    <div className={styles.profileContainer}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Back</button>
      <img src={character.image} alt={character.name} className={styles.profileImage} />
      <div className={styles.profileDetails}>
        <h1>{character.name}</h1>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
        <div className={styles.episodesList}>
          <h2>Episodes:</h2>
          <ul>
            {character.episode.map((episode, index) => (
              <li key={index}>{episode}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
