import React from 'react';
import styles from './EpisodeCard.module.css';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
  return (
    <Link to={`/episodes/${episode.id}`} style={{ textDecoration: 'none' }}>
  <div className={styles.card}>
    <h3 className={styles.title}>{episode.name}</h3>
    <p className={styles.airDate}>Air Date: {episode.air_date}</p>
    <p className={styles.episode}>Episode: {episode.episode}</p>
    <div className={styles.characterCount}>Characters: {episode.characters.length}</div>
  </div>
</Link>

  );
};

export default EpisodeCard;
