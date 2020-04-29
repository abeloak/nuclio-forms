import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import './App.css';
import Home from './Home';
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path="/usergroup/:groupid/user/:id">
              <User />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
