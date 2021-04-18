import React from 'react';
import styles from './RepoCard.module.scss';

const RepoCard = ({ full_name, description, html_url, language }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{full_name}</h3>
      <p className={styles.text}>{'Description: ' + description}</p>
      <p className={styles.text}>{'Language: ' + language}</p>
      <a
        className={styles.text}
        href={html_url}
        target="_blank"
        rel="noreferrer"
      >
        Link
      </a>
    </div>
  );
};

export default RepoCard;
