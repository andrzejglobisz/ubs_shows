import React from 'react';

import { ShowsInput } from './components/ShowsInput';
import { ShowsList } from './components/ShowsList';

import './App.scss';
import { ShowsTable } from './components/ShowsTable';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__column">
        <ShowsInput />
        <ShowsList />
      </div>
      <div className="app__column">
        <ShowsTable />
      </div>
    </div>
  );
};

export default App;
