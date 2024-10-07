import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EpisodeCard.module.css';

const EpisodeCard = ({ episode }) => {
  return (
    <div className={styles.card}>
      <Link to={`/episodes/${episode.id}`}>
        <h2>{episode.name}</h2>
        <p>Air Date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
        <p>Characters: {episode.characters.length}</p>
      </Link>
    </div>
  );
};

export default EpisodeCard;
