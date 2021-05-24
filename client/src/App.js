import './App.css';
import React, { Component } from 'react';
import Routes from './routes';
import Navbar from './components/Navbar';

const App = () =>  {
  return (  

    <React.Fragment>
    <Navbar />   
    <Routes/>
    </React.Fragment>
    
  )
}

export default App;
