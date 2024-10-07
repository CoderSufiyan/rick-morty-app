import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.css';

const CharacterCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.characterImage} />
      <h3 className={styles.characterName}>{character.name}</h3>
      <p className={styles.characterStatus}>Status: {character.status}</p>
      <Link to={`/character/${character.id}`} className={styles.viewProfileLink}>View Profile</Link>
    </div>
  );
};

export default CharacterCard;
