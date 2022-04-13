import React from 'react';
import ApiProvider from './ApiProvider';
import FlightListPageGraphQL from './FlightListPageGraphQL';
// import FlightListPage from "./FlightListPage";

function App() {
  return (
    <ApiProvider>
      <h1>SpaceX App</h1>
      {/*<FlightListPage />*/}
      <FlightListPageGraphQL />
    </ApiProvider>
  );
}

export default App;
