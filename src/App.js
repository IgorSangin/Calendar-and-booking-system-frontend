import React from 'react';
import logo from './logo.svg';
import Signup from './components/Signup';
import Comment from './components/CommentList';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from 'antd';

function App() {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Signup/>
    <Comment/>
    </div>
    )
}
export default App;
