import React from 'react';
import ApiProvider from './ApiProvider';
import FlightListPage from './FlightListPage';

function App() {
  return (
    <ApiProvider>
      <h1>SpaceX App</h1>
      <FlightListPage />
    </ApiProvider>
  );
}

export default App;
