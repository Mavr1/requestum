import React from 'react';

const RepoCard = ({ full_name, description, html_url, language }) => {
  return (
    <div>
      <h3>{full_name}</h3>
      <p>{'Description: ' + description}</p>
      <p>{'Language: ' + language}</p>
      <a href={html_url}>Link</a>
    </div>
  );
};

export default RepoCard;
