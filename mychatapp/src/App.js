import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import Welcome from './components/layouts/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        
        <Switch>
          <Route path="/" component ={Welcome}/>
          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
