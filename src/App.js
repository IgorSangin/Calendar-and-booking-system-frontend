
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div classname="App">
          <Route exact path='/' component={Login} />
          <Route path='/Signup' component={Signup} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;