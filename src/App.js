import React from 'react';
import logo from './logo.svg';
import Signup from './components/Signup';
import Comment from './components/CommentList';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Button } from 'antd';
import CommentList from './components/CommentList';

function App() {

  let comments =[
    {
      "id":1,
      "name": "Carl",
      "URL": "https://i.pinimg.com/originals/37/d7/84/37d78445625a6c74b37ff9df36144ce0.jpg",
      "alt": "Carl",
      "content": "it's coming together"
    }
  ];

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Signup/>
    <CommentList comments={comments}/>
    </div>
    )
}
export default App;
