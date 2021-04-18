import React from 'react';

const UserCard = ({ login, avatar_url, html_url }) => {
  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} alt="User avatar" width={100} />
      <a href={html_url}>Link</a>
    </div>
  );
};

export default UserCard;
