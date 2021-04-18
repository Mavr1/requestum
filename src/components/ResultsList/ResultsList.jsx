import React from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import qs from 'query-string';

import RepoCard from '../RepoCard/RepoCard';
import UserCard from '../UserCard/UserCard';
import { getRepos } from '../../redux/repos/reposOpertations';
import { getUsers } from '../../redux/users/usersOpertations';

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
    <>
      <section>
        <ul>
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
          defaultCurrent={1}
          defaultPageSize={5}
          onChange={handlePaginate('users')}
          showSizeChanger
        />
      </section>
      <section>
        <ul>
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
          defaultCurrent={1}
          defaultPageSize={5}
          onChange={handlePaginate('repos')}
        />
      </section>
    </>
  );
};

export default ResultsList;
