import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.logoWrapper}>
        <img src="./public/logo192.png" alt="site logo" />
        <div>
          <p>requestum</p>
          <p>web development company</p>
        </div>
      </div>
      <p>Github users search app</p>
    </header>
  );
};

export default Header;
