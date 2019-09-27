import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <div className="">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Routes />
    </div>
  );
}

export default App;
