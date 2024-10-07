// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/rickAndMortyService';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(id).then(setCharacter);
  }, [id]);

  if (!character) return <div>Loading...</div>;
console.log('char' ,character)
  return (
    <div className={styles.profileContainer}>
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
