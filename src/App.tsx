import React from 'react';
import { ShowsInput } from './components/ShowsInput';

import './App.css';
import { ShowsList } from './components/ShowsList';

const App: React.FC = () => {
  return (
    <>
      <ShowsInput />
      <ShowsList />
    </>
  );
};

export default App;
