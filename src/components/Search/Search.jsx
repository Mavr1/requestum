import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRepos } from '../../redux/repos/reposOpertations';
import { getUsers } from '../../redux/users/usersOpertations';

const Search = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => setInputValue(target.value);

  const getDataDebounced = useCallback(
    debounce((inputValue) => {
      if (inputValue) {
        dispatch(getRepos(inputValue));
        dispatch(getUsers(inputValue));
      }
    }, 2000),
    []
  );

  useEffect(() => {
    getDataDebounced(inputValue);
  }, [inputValue, getDataDebounced]);

  return (
    <section>
      <div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Input your query"
        ></input>
      </div>
      <div>
        <h3>Search history</h3>
        <ul></ul>
      </div>
    </section>
  );
};

export default Search;
