import React from 'react';

import Header from './components/Header/Header';
import ResultsList from './components/ResultsList/ResultsList';
import Search from './components/Search/Search';
import './styles/app.global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <aside>
        <Search />
      </aside>
      <main>
        <ResultsList />
      </main>
    </div>
  );
}

export default App;
