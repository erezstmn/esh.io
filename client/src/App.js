import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import Header from'./components/Header';
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props);
    this.handleLoginUser = this.handleLoginUser.bind(this);
  }
  handleLoginUser(e){
    let userInfo = {
      user_name: document.getElementById('user_name').value,
      password: document.getElementById('password').value
    }
    e.preventDefault();    
    axios.post('/login', userInfo)
    .then((res) => {
      console.log(res);
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <BrowserRouter>        
          <Header handleLoginUser={this.handleLoginUser}/>
      </BrowserRouter>
    );
  }
}

