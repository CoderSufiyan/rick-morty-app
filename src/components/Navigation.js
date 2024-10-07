import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; 

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
