import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
     <Header company="Global Village" city="Hyderabad"/>
      <Dashboard/>
     <Footer email="All rights reserved by @Chai"/>
    </div>
  );
}

export default App;
