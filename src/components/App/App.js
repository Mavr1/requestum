import React from 'react';

import Header from '../Header/Header';
import ResultsList from '../ResultsList/ResultsList';
import Search from '../Search/Search';
import styles from './App.module.scss';
import '../../styles/app.global.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.asideWrapper}>
          <Search />
        </aside>
        <main className={styles.mainWrapper}>
          <ResultsList />
        </main>
      </div>
    </div>
  );
}

export default App;
