
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import CommentForm from './components/CommentForm'
import './App.css';
//import 'antd/dist/antd.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import MyCalendar from './components/calendar/MyCalendar';




function App() {
  return (
    <Router>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <h1 class="centered">Project 3 - Calendar and Booking system</h1>
    </div>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path="/comments" component={CommentForm}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/calendar" component={MyCalendar}/>
    </Switch>
    </Router>
    ) 
}
export default App;
