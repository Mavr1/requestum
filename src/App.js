import React from 'react';

import Header from './components/Header/Header';
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
        <section>
          <ul></ul>
        </section>
      </main>
    </div>
  );
}

export default App;
