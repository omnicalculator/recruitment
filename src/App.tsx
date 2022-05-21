import React from 'react';
import ApiProvider from './ApiProvider';
import FlightListPageGraphQL from './FlightListPageGraphQL';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FlightDetails from "./FlightDetails";

function App() {
  return (
    <ApiProvider>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<FlightListPageGraphQL />} />
                <Route path={'/:id'} element={<FlightDetails/>}/>
            </Routes>
        </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
