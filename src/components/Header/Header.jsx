import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoWrapper}>
        <img
          src="./logo192.png"
          alt="site logo"
          width={60}
          className={styles.logo}
        />
        <div>
          <p className={[styles.name, styles.color].join(' ')}>requestum</p>
          <p className={[styles.title, styles.color].join(' ')}>
            web development company
          </p>
        </div>
      </div>
      <p className={[styles.description, styles.color].join(' ')}>
        Github users search app
      </p>
    </header>
  );
};

export default Header;
