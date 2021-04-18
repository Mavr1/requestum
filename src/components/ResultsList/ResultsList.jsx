import React from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import qs from 'query-string';

import RepoCard from '../RepoCard/RepoCard';
import UserCard from '../UserCard/UserCard';
import { getRepos } from '../../redux/repos/reposOpertations';
import { getUsers } from '../../redux/users/usersOpertations';
import styles from './ResultsList.module.scss';
import { paginationProps } from '../../services/helpers';

const ResultsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const users = useSelector(({ users }) => users);
  const repos = useSelector(({ repos }) => repos);

  const { search } = qs.parse(location.search);

  const handlePaginate = (resource) => (page) => {
    resource === 'users' && dispatch(getUsers(search, page));
    resource === 'repos' && dispatch(getRepos(search, page));
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Users</h2>
        <ul className={styles.list}>
          {users?.items?.map(({ login, id, avatar_url, html_url }) => (
            <UserCard
              key={id}
              login={login}
              avatar_url={avatar_url}
              html_url={html_url}
            />
          ))}
        </ul>
        <Pagination
          total={users?.total_count}
          onChange={handlePaginate('users')}
          {...paginationProps}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Repositories</h2>
        <ul className={styles.list}>
          {repos?.items?.map(
            ({ full_name, id, description, html_url, language }) => (
              <RepoCard
                key={id}
                full_name={full_name}
                description={description}
                language={language}
                html_url={html_url}
              />
            )
          )}
        </ul>
        <Pagination
          total={repos?.total_count}
          onChange={handlePaginate('repos')}
          {...paginationProps}
        />
      </section>
    </div>
  );
};

export default ResultsList;
