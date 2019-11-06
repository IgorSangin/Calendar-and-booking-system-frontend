import React from 'react';
import logo from './logo.svg';
import Signup from './components/Signup';
import Comment from './components/CommentList';
import CommentForm from './components/CommentForm'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from 'antd';
import CommentList from './components/CommentList';

function App() {

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Signup/>
    <CommentForm></CommentForm>
    </div>
    )
}
export default App;
