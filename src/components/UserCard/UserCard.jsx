import React from 'react';
import styles from './UserCard.module.scss';

const UserCard = ({ login, avatar_url, html_url }) => {
  return (
    <li className={styles.container}>
      <img
        src={avatar_url}
        alt="User avatar"
        className={styles.avatar}
        width={100}
      />
      <div>
        <h3 className={styles.login}>{login}</h3>
        <a href={html_url} target="_blank" rel="noreferrer">
          Link
        </a>
      </div>
    </li>
  );
};

export default UserCard;
