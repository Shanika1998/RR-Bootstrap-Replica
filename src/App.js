import React from 'react';
import './App.css';
import TopBar from "./component/TopBar"
import BackgroundImg from './component/backgroundImage';
import StoreListings from './component/StoreListing';

const App = () => {
  return (
    <div>
      <TopBar/>
      <main>
        <BackgroundImg/>
        <StoreListings/>
      </main>
    </div>

  )  
}

export default App;
