import React from 'react';
import logo from './logo.svg';
import Signup from './components/Signup';
import CommentForm from './components/CommentForm'
//import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as  Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from 'antd';

function App() {
  return (
    <Router>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Route exact path="/comments" component={CommentForm}/>
      <Route exact path="/signup" component={Signup}/>
    <Link to="/signup">
    <Button>Sign up</Button>
    </Link>
    <Link to="/comments">
    <Button>Comment Page</Button>
    </Link>
    </div>
    </Router>
    ) 
}
export default App;
