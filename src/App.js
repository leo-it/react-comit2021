import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'

import Trailer from './components/Trailer' 

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home}/>
      
   <Route path="/trailer/:title" component={Trailer} />

    </Switch>
    </BrowserRouter>
  );
}

export default App;
