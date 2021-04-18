import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import qs from 'query-string';

import { getRepos } from '../../redux/repos/reposOpertations';
import { searchSlice } from '../../redux/search/searchSlice';
import { getUsers } from '../../redux/users/usersOpertations';
import { usersSlice } from '../../redux/users/usersSlice';
import { reposSlice } from '../../redux/repos/reposSlice';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchHistory = useSelector(({ search }) => search);
  const { search } = qs.parse(location.search);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const setDebouncedValue = useCallback(
    debounce((inputValue) => {
      if (inputValue) {
        history.push({
          pathname: location.pathname,
          search: `search=${inputValue}`,
        });
        return;
      }

      history.push({
        pathname: location.pathname,
      });
    }, 500),
    []
  );

  const getData = (search) => {
    if (search) {
      dispatch(getRepos(search));
      dispatch(getUsers(search));
      dispatch(searchSlice.actions.addSearchQuery(search));
      return;
    }

    dispatch(usersSlice.actions.clearUsers());
    dispatch(reposSlice.actions.clearRepos());
  };

  useEffect(() => {
    search && setInputValue(search);
  }, []);

  useEffect(() => {
    getData(search);
  }, [search]);

  useEffect(() => {
    setDebouncedValue(inputValue);
  }, [inputValue, setDebouncedValue]);

  return (
    <section className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input your query"
        ></input>
      </div>
      <div>
        <h3 className={[styles.heading, styles.text].join(' ')}>Search history</h3>
        <ul>
          {searchHistory.map(({ id, value }) => (
            <li key={id} className={styles.text}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Search;
