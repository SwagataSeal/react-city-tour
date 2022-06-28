import './App.scss';
import Navbar from './component/navbar/Navbar';
import React from 'react';
import TourList from './component/Tourlist';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
