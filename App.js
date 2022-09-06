import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

import { Component } from 'react';




function App() {

const title = 'Welcome to the new blog';
const likes = 20;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        
      </div>
    </div>
  );
}



export default App;
