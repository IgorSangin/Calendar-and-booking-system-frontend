
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import CommentForm from './components/CommentForm'
import './App.css';
//import 'antd/dist/antd.css';
import {BrowserRouter as  Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from 'antd';
import CommentList from './components/CommentList';




function App() {
  return (
    <Router>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Link to="/signup">
    <Button>Register</Button>
    </Link>
    <Link to="/comments">
    <Button>Comment Page</Button>
    </Link>
    </div>
    <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path="/comments" component={CommentForm}/>
    <Route exact path="/signup" component={Signup}/>
    
    </Switch>
    </Router>
    ) 
}
export default App;
