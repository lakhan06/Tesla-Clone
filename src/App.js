import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import { useState } from 'react';

function App() {
  const [BurggerStatus,SetBurggerStatus]=useState(false);
  return (
    <div className="App">
    
    <Header BurggerStatus={BurggerStatus} SetBurggerStatus={SetBurggerStatus}/>  
    <Home BurggerStatus={BurggerStatus} SetBurggerStatus={SetBurggerStatus}/>
   </div>
  );
}

export default App;
