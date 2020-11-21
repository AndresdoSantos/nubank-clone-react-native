import React from 'react';
import {StatusBar} from 'react-native';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#8b10ae" barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
